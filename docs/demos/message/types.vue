<template>
  <div class="demo-row" style="gap: 12px">
    <long-button type="success" plain @click="open('success')">Success</long-button>
    <long-button type="warning" plain @click="open('warning')">Warning</long-button>
    <long-button type="info" plain @click="open('info')">Info</long-button>
    <long-button type="danger" plain @click="open('error')">Error</long-button>
  </div>
</template>

<script setup lang="ts">
import { LongMessage } from '@long-ui/components'

const open = (type: any) => {
  LongMessage({
    message: `This is a ${type} message.`,
    type: type,
    showClose: true
  })
}
</script>
