<template>
  <div class="demo-spacing">
    <long-button :plain="true" @click="open">Show message</long-button>
    <long-button :plain="true" @click="openVn">VNode</long-button>
  </div>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { LongMessage } from '@long-ui/components'

const open = () => {
  LongMessage('This is a message.')
}

const openVn = () => {
  LongMessage({
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
</script>

<style scoped>
.demo-spacing {
  display: flex;
  gap: 12px;
}
</style>
