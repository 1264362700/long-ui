<template>
  <LongSpace>
    <LongTimePicker v-model:modelValue="time1" placeholder="默认尺寸" />
    <LongTimePicker v-model:modelValue="time2" size="small" placeholder="小型尺寸" />
  </LongSpace>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const time1 = ref('12:00:00')
const time2 = ref('09:30:00')
</script>
