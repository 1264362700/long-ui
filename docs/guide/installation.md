# 安装

## 使用包管理器

我们建议使用包管理器来安装 Long UI。

```bash
# pnpm
pnpm add @long-ui/components

# npm
npm install @long-ui/components

# yarn
yarn add @long-ui/components
```

## 浏览器直接引入

如果您想在没有构建工具的情况下使用 Long UI，可以通过 CDN 引入：

```html
<link rel="stylesheet" href="https://unpkg.com/@long-ui/theme-chalk/index.css">
<script src="https://unpkg.com/vue@3"></script>
<script src="https://unpkg.com/@long-ui/components"></script>
```

---

# 快速开始

## 完整引入

```typescript
import { createApp } from 'vue'
import LongUI from '@long-ui/components'
import '@long-ui/styles'
import App from './App.vue'

const app = createApp(App)

app.use(LongUI)
app.mount('#app')
```

## 基础使用

在您的组件中直接使用组件：

```vue
<template>
  <long-button type="primary">Hello Long UI</long-button>
</template>
```
