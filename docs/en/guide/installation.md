# Installation

## Using Package Manager

We recommend using a package manager to install Long UI.

```bash
# pnpm
pnpm add @long-ui/components

# npm
npm install @long-ui/components

# yarn
yarn add @long-ui/components
```

## Browser Direct Import

If you want to use Long UI without build tools, you can include it via CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/@long-ui/theme-chalk/index.css">
<script src="https://unpkg.com/vue@3"></script>
<script src="https://unpkg.com/@long-ui/components"></script>
```

---

# Quick Start

## Full Import

```typescript
import { createApp } from 'vue'
import LongUI from '@long-ui/components'
import '@long-ui/styles'
import App from './App.vue'

const app = createApp(App)

app.use(LongUI)
app.mount('#app')
```

## Basic Usage

Using component in your template directly:

```vue
<template>
  <long-button type="primary">Hello Long UI</long-button>
</template>
```
