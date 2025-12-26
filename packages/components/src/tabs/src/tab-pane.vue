<template>
  <div
    v-show="active"
    :class="ns.b()"
    :id="`pane-${name}`"
    role="tabpanel"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted } from 'vue'
import { tabPaneProps, TABS_ROOT_CTX_KEY } from './tabs'
import { useNamespace } from '@long-ui/hooks'

defineOptions({
  name: 'LongTabPane'
})

const props = defineProps(tabPaneProps)
const ns = useNamespace('tab-pane')
const rootContext = inject(TABS_ROOT_CTX_KEY)

if (!rootContext) {
  throw new Error('LongTabPane must be used inside LongTabs')
}

const active = computed(() => rootContext.currentName.value === props.name)

onMounted(() => {
  rootContext.registerPane({
    props,
    active
  })
})

onUnmounted(() => {
  rootContext.unregisterPane(props.name)
})
</script>
