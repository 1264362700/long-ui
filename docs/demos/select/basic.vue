<template>
  <LongSpace>
    <LongSelect v-model="value" placeholder="请选择类型" style="width: 200px">
      <option value="1">选项 一</option>
      <option value="2">选项 二</option>
    </LongSelect>
    
    <LongSelect v-model="value" disabled placeholder="禁用状态" style="width: 200px">
    </LongSelect>
  </LongSpace>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>
