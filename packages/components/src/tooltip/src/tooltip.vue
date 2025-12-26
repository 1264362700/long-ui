<template>
  <div :class="ns.b()" @mouseenter="show" @mouseleave="hide">
    <slot name="reference"></slot>
    <transition name="long-tooltip-fade">
      <div v-if="visible" :class="ns.e('popper')" :style="popperStyle">
        <slot>{{ content }}</slot>
        <div :class="ns.e('arrow')"></div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNamespace } from '@long-ui/hooks'

defineOptions({
  name: 'LongTooltip'
})

const props = defineProps({
  content: { type: String, default: '' },
  placement: { type: String, default: 'top' }
})

const ns = useNamespace('tooltip')
const visible = ref(false)
const popperStyle = ref({})

const show = () => {
  visible.value = true
}

const hide = () => {
  visible.value = false
}
</script>
