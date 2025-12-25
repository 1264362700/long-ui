<template>
  <div class="demo-group">
    <h4>基础标签</h4>
    <div class="flex-gap">
      <long-tag>Tag 1</long-tag>
      <long-tag type="success">Success</long-tag>
      <long-tag type="warning">Warning</long-tag>
      <long-tag type="error">Error</long-tag>
      <long-tag type="info">Info</long-tag>
    </div>

    <h4>可关闭</h4>
    <div class="flex-gap">
      <long-tag closable @close="log('closed')">Closable</long-tag>
      <long-tag type="success" closable>Success</long-tag>
    </div>

    <h4>圆角标签</h4>
    <div class="flex-gap">
      <long-tag round>Round Tag</long-tag>
      <long-tag type="error" round>Round Error</long-tag>
    </div>

    <h4>尺寸</h4>
    <div class="flex-gap">
      <long-tag size="large">Large</long-tag>
      <long-tag>Default</long-tag>
      <long-tag size="small">Small</long-tag>
    </div>
  </div>
</template>

<script setup lang="ts">
const log = (msg: string) => console.log(msg)
</script>

<style scoped>
.demo-group h4 {
  margin: 16px 0 8px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
.flex-gap {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
