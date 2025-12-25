<template>
  <LongSpace direction="vertical" style="width: 100%">
    <LongInput v-model="input" placeholder="请输入内容" />
    <LongInput v-model="input2" placeholder="带前缀" prefix-icon="search" />
    <LongInput v-model="input3" placeholder="带后缀" suffix-icon="calendar" />
  </LongSpace>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const input = ref('')
const input2 = ref('')
const input3 = ref('')
</script>
