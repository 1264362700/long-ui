<template>
  <LongSpace direction="vertical" style="width: 100%" :size="32">
    <div>
      <h4 style="margin-bottom: 16px;">基础用法</h4>
      <LongSkeleton />
    </div>

    <div>
      <h4 style="margin-bottom: 16px;">自定义行数</h4>
      <LongSkeleton :rows="5" />
    </div>

    <div>
      <h4 style="margin-bottom: 16px;">切换显示</h4>
      <LongSpace direction="vertical">
        <LongButton @click="loading = !loading">
          {{ loading ? '停止加载' : '开始加载' }}
        </LongButton>
        <LongSkeleton :loading="loading">
          <div style="padding: 20px; background: #e6f4ff; border-radius: 8px;">
             🎉 内容已加载完成！
          </div>
        </LongSkeleton>
      </LongSpace>
    </div>
  </LongSpace>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const loading = ref(true)
</script>
