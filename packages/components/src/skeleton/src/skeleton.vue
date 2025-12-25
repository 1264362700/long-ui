<template>
  <div v-if="loading" :class="[ns.b(), { 'is-animated': animated }]">
    <div v-for="i in rows" :key="i" :class="ns.e('row')" />
  </div>
  <slot v-else />
</template>

<script setup lang="ts">
import { useNamespace } from '@long-ui/hooks'
import { skeletonProps } from './skeleton'

defineOptions({
  name: 'LongSkeleton'
})

const props = defineProps(skeletonProps)
const ns = useNamespace('skeleton')
</script>
