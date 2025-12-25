<template>
  <long-select v-model="value" placeholder="Select">
    <long-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </long-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
const options = [
  { value: 'Option1', label: 'Option 1' },
  { value: 'Option2', label: 'Option 2' },
  { value: 'Option3', label: 'Option 3' },
  { value: 'Option4', label: 'Option 4' },
  { value: 'Option5', label: 'Option 5' },
]
</script>
