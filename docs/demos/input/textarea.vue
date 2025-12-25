<template>
  <div class="demo-spacing">
    <long-input
      v-model="textarea"
      type="textarea"
      :rows="4"
      placeholder="Please input"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const textarea = ref('')
</script>

<style scoped>
.demo-spacing {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
