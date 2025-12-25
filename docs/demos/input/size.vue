<template>
  <div class="demo-input-size">
    <long-input v-model="input1" class="w-50 m-2" size="large" placeholder="Large Input" />
    <long-input v-model="input2" class="w-50 m-2" placeholder="Default Input" />
    <long-input v-model="input3" class="w-50 m-2" size="small" placeholder="Small Input" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
</script>

<style scoped>
.demo-input-size {
  display: flex;
  align-items: center;
}
.demo-input-size .long-input {
  margin-right: 16px;
}
</style>
