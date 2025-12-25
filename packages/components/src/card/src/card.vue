<template>
  <div :class="[ns.b(), ns.is('shadow', shadow)]">
    <div v-if="$slots.header || title" :class="ns.e('header')">
      <div :class="ns.e('title')">
        <slot name="header">{{ title }}</slot>
      </div>
      <div v-if="$slots.extra" :class="ns.e('extra')">
        <slot name="extra" />
      </div>
    </div>
    <div :class="ns.e('body')" :style="bodyStyle">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@long-ui/hooks'
import type { PropType, CSSProperties } from 'vue'

defineOptions({
  name: 'LongCard'
})

const props = defineProps({
  title: String,
  shadow: {
    type: Boolean,
    default: true
  },
  bodyStyle: {
    type: Object as PropType<CSSProperties>,
    default: () => ({})
  }
})

const ns = useNamespace('card')
</script>
