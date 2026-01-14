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
import { cardProps } from './card'

defineOptions({
  name: 'LongCard'
})

const _props = defineProps(cardProps)
const ns = useNamespace('card')
</script>
