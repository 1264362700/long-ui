<template>
  <long-calendar v-model="value" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref(new Date())
</script>
