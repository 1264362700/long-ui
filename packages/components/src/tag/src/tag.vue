<template>
  <span
    v-if="visible"
    :class="[
      ns.b(),
      ns.m(type),
      ns.m(size),
      ns.is('round', round)
    ]"
    :style="customStyles"
    @click="handleClick"
  >
    <span :class="ns.e('content')">
      <slot />
    </span>
    <span
      v-if="closable"
      :class="ns.e('close')"
      @click.stop="handleClose"
    >
      &times;
    </span>
  </span>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useNamespace } from '@long-ui/hooks'
import { tagProps } from './tag'

defineOptions({
  name: 'LongTag'
})

const props = defineProps(tagProps)
const emit = defineEmits(['close', 'click'])

const ns = useNamespace('tag')
const visible = ref(true)

const customStyles = computed(() => {
  return {
    backgroundColor: props.color,
    borderColor: props.borderColor,
    color: props.textColor
  }
})

const handleClose = (event: MouseEvent) => {
  visible.value = false
  emit('close', event)
}

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>
