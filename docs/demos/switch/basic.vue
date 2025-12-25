<template>
  <div class="demo-group">
    <h4>基础用法</h4>
    <long-switch v-model="value1" />
    
    <h4>带文字</h4>
    <long-switch v-model="value2" active-text="开启" inactive-text="关闭" />
    
    <h4>尺寸</h4>
    <div style="display: flex; align-items: center; gap: 16px;">
      <long-switch v-model="value3" size="large" />
      <long-switch v-model="value3" />
      <long-switch v-model="value3" size="small" />
    </div>

    <h4>禁用与加载</h4>
    <div style="display: flex; align-items: center; gap: 16px;">
      <long-switch v-model="value4" disabled />
      <long-switch v-model="value4" loading />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref(false)
const value2 = ref(true)
const value3 = ref(true)
const value4 = ref(true)
</script>

<style scoped>
.demo-group h4 {
  margin: 16px 0 8px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
.demo-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
</style>
