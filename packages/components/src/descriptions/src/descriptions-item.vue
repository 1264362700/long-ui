<template>
  <div :class="ns.b()" :style="{ gridColumn: `span ${span}` }">
    <div :class="ns.e('label')" :style="ctx?.labelStyle">
      {{ label }}
    </div>
    <div :class="ns.e('content')" :style="ctx?.contentStyle">
      <slot />
      <span v-if="copyable" :class="ns.e('copy')" @click="handleCopy">
        <i class="long-icon-copy" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { useNamespace, useClipboard } from '@long-ui/hooks'
import { descriptionsItemProps } from './descriptions-item'

defineOptions({
  name: 'LongDescriptionsItem'
})

const props = defineProps(descriptionsItemProps)
const ns = useNamespace('descriptions-item')
const ctx = inject<any>('longDescriptionsContext', null)
const { copy } = useClipboard()

const handleCopy = () => {
  if (props.value) {
    copy(props.value)
  }
}
</script>
