<template>
  <div class="demo-spacing">
    <long-button :plain="true" @click="open">Centered text</long-button>
  </div>
</template>

<script lang="ts" setup>
import { LongMessage } from '@long-ui/components'

const open = () => {
  LongMessage({
    message: 'This is a centered message',
    center: true,
  })
}
</script>

<style scoped>
.demo-spacing {
  display: flex;
  gap: 12px;
}
</style>
