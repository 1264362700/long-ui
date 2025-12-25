<template>
  <long-input v-model="input" placeholder="Please input" clearable />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const input = ref('')
</script>
