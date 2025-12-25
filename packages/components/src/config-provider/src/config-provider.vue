<script setup lang="ts">
import { provide, computed } from 'vue'
import { configProviderProps } from './config-provider'
import { configProviderContextKey } from '@long-ui/tokens'

defineOptions({
  name: 'LongConfigProvider',
})

const props = defineProps(configProviderProps)

const config = computed(() => props)

provide(configProviderContextKey, config)
</script>

<template>
  <slot />
</template>
