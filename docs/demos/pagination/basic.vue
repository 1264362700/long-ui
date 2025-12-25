<template>
  <div class="demo-group">
    <h4>基础分页</h4>
    <long-pagination :total="50" v-model:current-page="page1" />
    
    <h4>更多页码 (折叠逻辑)</h4>
    <long-pagination :total="200" v-model:current-page="page2" />

    <h4>带背景</h4>
    <long-pagination background :total="50" v-model:current-page="page3" />

    <h4>小型分页</h4>
    <long-pagination small :total="50" v-model:current-page="page4" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const page1 = ref(1)
const page2 = ref(10)
const page3 = ref(1)
const page4 = ref(1)
</script>

<style scoped>
h4 { margin: 24px 0 12px; font-weight: 500; color: rgba(0,0,0,0.45); font-size: 14px; }
.demo-group { display: flex; flex-direction: column; gap: 8px; }
</style>
