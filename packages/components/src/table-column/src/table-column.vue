<template>
  <div v-if="false"></div>
</template>

<script setup lang="ts">
import { inject, onMounted, onBeforeUnmount, useSlots, shallowRef } from 'vue'
import { tableColumnProps } from './table-column'
import { TABLE_INJECTION_KEY } from '../../table/src/store'

const props = defineProps(tableColumnProps)
const slots = useSlots()

const store = inject(TABLE_INJECTION_KEY)

const columnId = `long-table-column-${Math.random().toString(36).slice(2)}`
const columnConfig = shallowRef<any>({})

onMounted(() => {
  if (!store) return

  columnConfig.value = {
    id: columnId,
    prop: props.prop,
    label: props.label,
    width: props.width,
    slots
  }
  
  // Basic appending. For precise order we might need ref collection on Table wrapper.
  const currentIndex = store.columns.value.length
  store.insertColumn(columnConfig.value, currentIndex)
})

onBeforeUnmount(() => {
  store?.removeColumn(columnConfig.value)
})
</script>
