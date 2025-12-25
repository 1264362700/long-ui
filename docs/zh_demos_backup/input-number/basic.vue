<template>
  <div class="demo-row">
    <long-input-number v-model="num" :min="1" :max="10" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const num = ref(1)
</script>
