<template>
  <div class="demo-row">
    <long-button type="primary" @click="open">Show Message</long-button>
  </div>
</template>

<script setup lang="ts">
import { LongMessage } from '@long-ui/components'

const open = () => {
  LongMessage('This is a message.')
}
</script>
