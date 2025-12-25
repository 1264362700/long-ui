<template>
  <long-input v-model="input" disabled placeholder="Disabled input" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const input = ref('')
</script>
