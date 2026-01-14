# useClipboard 剪贴板

一个简单实用的剪贴板 hook。

## 基础用法

```vue
<script setup lang="ts">
import { useClipboard } from '@long-ui/hooks'

const { copy, isSupported } = useClipboard()

const handleCopy = async () => {
  await copy('Hello Long UI')
}
</script>

<template>
  <long-button @click="handleCopy">复制</long-button>
</template>
```

## API

### 返回值

| 属性名 | 说明 | 类型 |
| :--- | :--- | :--- |
| copy | 复制文本到剪贴板，返回 promise，resolve 为是否复制成功 | `(text: string) => Promise<boolean>` |
| isSupported | 当前环境是否支持剪贴板 API | `Ref<boolean>` |
