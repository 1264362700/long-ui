<template>
  <div style="display: flex; gap: 10px; align-items: center;">
    <long-time-picker v-model="time" size="large" />
    <long-time-picker v-model="time" />
    <long-time-picker v-model="time" size="small" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const time = ref('12:00:00')
</script>
