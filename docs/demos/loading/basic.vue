<template>
  <div class="demo-group">
    <h4>基础用法</h4>
    <div style="position: relative; height: 100px; border: 1px solid #f0f0f0; border-radius: 6px;">
       <long-loading :loading="loading" text="加载中..." />
       <div style="padding: 20px;">这里是内容区域，Loading 会覆盖在此。</div>
    </div>
    <long-button @click="loading = !loading" style="margin-top: 10px;">切换加载状态</long-button>

    <h4>自定义文案与颜色</h4>
    <div style="position: relative; height: 100px; border: 1px solid #f0f0f0; border-radius: 6px; margin-top: 20px;">
       <long-loading :loading="true" text="玩命上传中..." textColor="#ff4d4f" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const loading = ref(true)
</script>

<style scoped>
h4 { margin: 16px 0 8px; font-weight: 500; color: rgba(0,0,0,0.45); font-size: 14px; }
</style>
