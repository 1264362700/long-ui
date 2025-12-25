<template>
  <div class="demo-spacing">
    <long-button :plain="true" @click="open1">Success</long-button>
    <long-button :plain="true" @click="open2">Warning</long-button>
    <long-button :plain="true" @click="open3">Message</long-button>
    <long-button :plain="true" @click="open4">Error</long-button>
  </div>
</template>

<script lang="ts" setup>
import { LongMessage } from '@long-ui/components'

const open1 = () => {
  LongMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open2 = () => {
  LongMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open3 = () => {
  LongMessage('This is a message.')
}
const open4 = () => {
  LongMessage({
    message: 'Oops, this is a error message.',
    type: 'error',
  })
}
</script>

<style scoped>
.demo-spacing {
  display: flex;
  gap: 12px;
}
</style>
