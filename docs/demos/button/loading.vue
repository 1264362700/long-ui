<template>
  <div class="demo-spacing">
    <long-button type="primary" loading>Loading</long-button>
    <long-button type="primary" :loading="isLoading" @click="startLoading">
      {{ isLoading ? 'Loading...' : 'Click me' }}
    </long-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isLoading = ref(false)
const startLoading = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}
</script>

<style scoped>
.demo-spacing {
  display: flex;
  gap: 12px;
  align-items: center;
}
</style>
