# useStorage

提供对浏览器存储（LocalStorage / SessionStorage）的响应式包装。

## 基础用法

最简单的持久化存储，支持自动 JSON 序列化。

```vue
<script setup>
import { useStorage } from '@long-ui/hooks'

// 刷新页面状态不丢失
const counter = useStorage('my-counter', 0)

const increment = () => counter.value++
</script>

<template>
  <LongButton @click="increment">Count is: {{ counter }}</LongButton>
</template>
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 存储键名 | string | — |
| defaultValue | 默认值 | T | — |
| type | 存储类型 | 'local' / 'session' | 'local' |
