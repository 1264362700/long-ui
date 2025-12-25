<template>
  <div class="long-table" :class="[ns.b(), { [ns.is('stripe')]: stripe, [ns.is('border')]: border, [ns.is('fit')]: fit }]">
    <div class="hidden-columns">
      <slot />
    </div>
    <div v-if="showHeader" :class="ns.e('header-wrapper')">
      <table :class="ns.e('header')" cellspacing="0" cellpadding="0" border="0">
        <colgroup>
          <col v-for="col in columns" :key="col.id" :width="col.width || ''" />
        </colgroup>
        <thead>
          <tr>
            <th v-for="col in columns" :key="col.id" :class="ns.e('cell')">
              <div class="cell">{{ col.label }}</div>
            </th>
          </tr>
        </thead>
      </table>
    </div>
    <div :class="ns.e('body-wrapper')" :style="{ height: height ? (typeof height === 'number' ? height + 'px' : height) : '' }">
      <table :class="ns.e('body')" cellspacing="0" cellpadding="0" border="0">
         <colgroup>
          <col v-for="col in columns" :key="col.id" :width="col.width || ''" />
        </colgroup>
        <tbody>
          <tr v-for="(row, rowIndex) in data" :key="row[rowKey] || rowIndex" :class="ns.e('row')">
            <td v-for="col in columns" :key="col.id" :class="ns.e('cell')">
              <div class="cell">
                <renderer v-if="col.slots?.default" :render="col.slots.default" :data="{ row, $index: rowIndex }" />
                <template v-else>{{ getCellValue(row, col) }}</template>
              </div>
            </td>
          </tr>
          <tr v-if="data.length === 0" :class="ns.e('empty-block')">
             <td :colspan="columns.length" :class="ns.e('empty-text')">
               {{ emptyText }}
             </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, watch } from 'vue'
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
const { columns, data } = store

provide(TABLE_INJECTION_KEY, store)

watch(() => props.data, (d) => {
    store.setData(d || [])
}, { immediate: true })

const getCellValue = (row: any, col: any) => {
    return row[col.prop]
}
</script>
