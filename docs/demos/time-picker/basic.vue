<template>
  <long-time-picker v-model="time" placeholder="请选择时间" />
</template>

<script setup>
import { ref } from 'vue'

const time = ref('12:00:00')
</script>
