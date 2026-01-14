<template>
  <div :class="ns.b()">
    <long-input
      v-model="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      readonly
    />
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@long-ui/hooks'
import { timePickerProps } from './time-picker'

const _props = defineProps(timePickerProps)
const ns = useNamespace('time-picker')

defineOptions({
  name: 'LongTimePicker'
})
</script>
