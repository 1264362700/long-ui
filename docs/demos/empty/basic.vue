<template>
  <div class="demo-group">
    <h4>默认状态</h4>
    <long-empty />

    <h4>带页脚操作</h4>
    <long-empty description="没有找到相关信息">
      <long-button type="primary">返回重试</long-button>
    </long-empty>
  </div>
</template>

<style scoped>
.demo-group h4 {
  margin: 24px 0 12px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
</style>
