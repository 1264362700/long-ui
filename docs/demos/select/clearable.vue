<template>
  <long-select v-model="value" clearable placeholder="Select">
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
]
</script>
