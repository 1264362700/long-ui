<template>
  <div :class="[ns.b(), ns.m(direction), ns.is('wrap', wrap)]" :style="style">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'
import { useNamespace } from '@long-ui/hooks'
import { spaceProps } from './space'

defineOptions({
  name: 'LongSpace'
})

const props = defineProps(spaceProps)
const ns = useNamespace('space')

const style = computed<CSSProperties>(() => {
  const { size, direction } = props
  let gap = ''
  
  if (Array.isArray(size)) {
    gap = `${size[1]}px ${size[0]}px`
  } else if (typeof size === 'number') {
    gap = `${size}px`
  } else {
    gap = size
  }

  return {
    display: 'inline-flex',
    flexDirection: direction === 'vertical' ? 'column' : 'row',
    flexWrap: props.wrap ? 'wrap' : 'nowrap',
    gap: gap,
    alignItems: props.align || (direction === 'horizontal' ? 'center' : 'stretch')
  }
})
</script>
