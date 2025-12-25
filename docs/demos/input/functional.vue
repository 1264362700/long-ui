<template>
  <div class="demo-spacing">
    <long-input v-model="input1" placeholder="Clearable input" clearable />
    <long-input
      v-model="input2"
      type="password"
      placeholder="Password input"
      show-password
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const input1 = ref('')
const input2 = ref('')
</script>

<style scoped>
.demo-spacing {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
