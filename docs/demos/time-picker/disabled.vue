<template>
  <long-time-picker v-model="time" disabled placeholder="禁用状态" />
</template>

<script setup>
import { ref } from 'vue'

const time = ref('12:00:00')
</script>
