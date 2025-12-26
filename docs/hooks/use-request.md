# useRequest

企业级数据请求 Hooks 封装，支持 Loading 状态管理、手动触发及回调通知。

## 基础用法

最简单的异步请求管理。

```vue
<script setup>
import { useRequest } from '@long-ui/hooks'

const { data, loading, run } = useRequest(async () => {
  const res = await fetch('/api/user')
  return res.json()
})
</script>

<template>
  <div v-loading="loading">
    {{ data }}
  </div>
</template>
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| manual | 是否手动执行 | boolean | false |
| onSuccess | 成功回调 | (data: T, params: P) => void | — |
| onError | 失败回调 | (e: Error, params: P) => void | — |
