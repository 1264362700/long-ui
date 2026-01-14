<template>
  <div class="long-table" :class="[ns.b(), { [ns.is('stripe')]: stripe, [ns.is('border')]: border, [ns.is('fit')]: fit }]">
    <div class="hidden-columns">
      <slot />
    </div>
    <div v-if="showHeader" :class="ns.e('header-wrapper')">
      <table :class="ns.e('header')" cellspacing="0" cellpadding="0" border="0">
        <colgroup>
          <col v-for="col in leafColumns" :key="col.id" :width="col.width || ''" />
        </colgroup>
        <thead>
          <tr v-for="(row, rowIndex) in headerRows" :key="rowIndex">
            <th 
              v-for="col in row" 
              :key="col.id" 
              :class="ns.e('cell')"
              :colspan="col.colspan"
              :rowspan="col.rowspan"
              :style="{ textAlign: col.align || 'left' }"
            >
              <div class="cell">{{ col.label }}</div>
            </th>
          </tr>
        </thead>
      </table>
    </div>
    <div :class="ns.e('body-wrapper')" :style="{ height: height ? (typeof height === 'number' ? height + 'px' : height) : '' }">
      <table :class="ns.e('body')" cellspacing="0" cellpadding="0" border="0">
         <colgroup>
          <col v-for="col in leafColumns" :key="col.id" :width="col.width || ''" />
        </colgroup>
        <tbody>
          <tr v-for="(row, rowIndex) in data" :key="row[rowKey] || rowIndex" :class="ns.e('row')">
            <td v-for="col in leafColumns" :key="col.id" :class="ns.e('cell')">
              <div class="cell">
                <renderer v-if="col.slots?.default" :render="col.slots.default" :data="{ row, $index: rowIndex }" />
                <span v-else>{{ getCellValue(row, col) }}</span>
              </div>
            </td>
          </tr>
          <tr v-if="data.length === 0" :class="ns.e('empty-block')">
             <td :colspan="leafColumns.length" :class="ns.e('empty-text')">
               {{ emptyText }}
             </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, watch, computed } from 'vue'
import { useNamespace } from '@long-ui/hooks'
import { useTableStore, TABLE_INJECTION_KEY } from './store'
import { tableProps } from './table'
import Renderer from './renderer'

const props = defineProps(tableProps)

defineOptions({
  name: 'LongTable'
})

const ns = useNamespace('table')
const store = useTableStore()
const { columns, leafColumns, data } = store

provide(TABLE_INJECTION_KEY, store)

watch(() => props.data, (d) => {
    store.setData(d || [])
}, { immediate: true })

const getCellValue = (row: any, col: any) => {
    return row[col.prop]
}

const headerRows = computed(() => {
    const rows: any[][] = []
    
    const maxDepth = (cols: any[]): number => {
        let max = 0
        cols.forEach(col => {
            if (col.children && col.children.length > 0) {
                max = Math.max(max, maxDepth(col.children))
            }
        })
        return max + 1
    }

    const totalDepth = maxDepth(columns.value)

    const traverse = (cols: any[], depth: number) => {
        if (!rows[depth]) rows[depth] = []
        cols.forEach(col => {
            const colspan = col.children && col.children.length > 0 
                ? getLeafCount(col.children) 
                : 1
            const rowspan = col.children && col.children.length > 0 
                ? 1 
                : totalDepth - depth
            
            rows[depth].push({
                ...col,
                colspan,
                rowspan
            })

            if (col.children && col.children.length > 0) {
                traverse(col.children, depth + 1)
            }
        })
    }

    const getLeafCount = (cols: any[]): number => {
        let count = 0
        cols.forEach(col => {
            if (col.children && col.children.length > 0) {
                count += getLeafCount(col.children)
            } else {
                count += 1
            }
        })
        return count
    }

    traverse(columns.value, 0)
    return rows
})
</script>
