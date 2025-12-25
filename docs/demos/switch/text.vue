<template>
  <div class="demo-row">
    <long-switch
      v-model="value1"
      active-text="Pay by month"
      inactive-text="Pay by year"
    />
    <long-switch
      v-model="value2"
      style="margin-left: 20px"
      inline-prompt
      active-text="ON"
      inactive-text="OFF"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref(true)
const value2 = ref(true)
</script>
