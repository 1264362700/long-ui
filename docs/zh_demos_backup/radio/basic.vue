<template>
  <div class="demo-row">
    <long-radio v-model="radio1" label="1">Option 1</long-radio>
    <long-radio v-model="radio1" label="2">Option 2</long-radio>
  </div>
  <div class="demo-row" style="margin-top: 20px">
    <long-radio-group v-model="radio2">
      <long-radio label="A">Option A</long-radio>
      <long-radio label="B">Option B</long-radio>
      <long-radio label="C">Option C</long-radio>
    </long-radio-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const radio1 = ref('1')
const radio2 = ref('A')
</script>
