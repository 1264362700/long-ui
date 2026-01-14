<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import { inject, onMounted, onBeforeUnmount, useSlots, shallowRef, provide } from 'vue'
import { tableColumnProps, COLUMN_INJECTION_KEY } from './table-column'
import { TABLE_INJECTION_KEY } from '../../table/src/store'

defineOptions({
  name: 'LongTableColumn'
})

const props = defineProps(tableColumnProps)
const slots = useSlots()
const store = inject(TABLE_INJECTION_KEY)
const parentColumn = inject(COLUMN_INJECTION_KEY, null)

const columnId = `long-table-column-${Math.random().toString(36).slice(2)}`
const columnConfig = shallowRef<any>({
  id: columnId,
  prop: props.prop,
  label: props.label,
  width: props.width,
  slots,
  children: []
})

provide(COLUMN_INJECTION_KEY, columnConfig.value)

onMounted(() => {
  if (!store) return

  const targetParent = parentColumn || null
  const currentIndex = targetParent ? targetParent.children.length : store.columns.value.length
  store.insertColumn(columnConfig.value, currentIndex, targetParent)
})

onBeforeUnmount(() => {
  store?.removeColumn(columnConfig.value, parentColumn)
})
</script>
