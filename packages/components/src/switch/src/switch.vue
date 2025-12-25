<template>
  <div
    :class="[
      ns.b(),
      ns.m(size),
      ns.is('checked', checked),
      ns.is('disabled', disabled || loading)
    ]"
    @click="toggle"
  >
    <span :class="ns.e('inner')">
      <span v-if="checked" :class="ns.e('inner-checked')">
        <slot name="active-text">{{ activeText }}</slot>
      </span>
      <span v-else :class="ns.e('inner-unchecked')">
        <slot name="inactive-text">{{ inactiveText }}</slot>
      </span>
    </span>
    <div :class="ns.e('handle')">
      <div v-if="loading" :class="ns.e('loading-icon')"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '@long-ui/hooks'
import { switchProps } from './switch'

defineOptions({
  name: 'LongSwitch'
})

const props = defineProps(switchProps)
const emit = defineEmits(['update:modelValue', 'change'])

const ns = useNamespace('switch')

const checked = computed(() => props.modelValue === props.activeValue)

const toggle = () => {
  if (props.disabled || props.loading) return
  
  const newValue = checked.value ? props.inactiveValue : props.activeValue
  emit('update:modelValue', newValue)
  emit('change', newValue)
}
</script>
