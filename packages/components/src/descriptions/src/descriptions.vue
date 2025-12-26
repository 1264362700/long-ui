<template>
  <div :class="[ns.b(), ns.is('border', border)]">
    <div v-if="title || $slots.title" :class="ns.e('header')">
       <slot name="title">{{ title }}</slot>
    </div>
    <div :class="ns.e('body')" :style="{ gridTemplateColumns: `repeat(${column}, 1fr)` }">
       <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { useNamespace } from '@long-ui/hooks'
import { descriptionsProps } from './descriptions'

defineOptions({
  name: 'LongDescriptions'
})

const props = defineProps(descriptionsProps)
const ns = useNamespace('descriptions')

provide('longDescriptionsContext', props)
</script>
