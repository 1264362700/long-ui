<template>
  <div class="demo-spacing">
    <long-button :plain="true" @click="open">Show closable message</long-button>
  </div>
</template>

<script lang="ts" setup>
import { LongMessage } from '@long-ui/components'

const open = () => {
  LongMessage({
    showClose: true,
    message: 'This is a message that can be closed manually.',
    type: 'success',
  })
}
</script>

<style scoped>
.demo-spacing {
  display: flex;
  gap: 12px;
}
</style>
