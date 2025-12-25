<template>
  <div class="demo-row">
    <long-checkbox v-model="checked1" label="Option 1" />
    <long-checkbox v-model="checked2" label="Option 2" size="large" />
    <long-checkbox v-model="checked3" label="Option 3" size="small" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
</script>
