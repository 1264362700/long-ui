# 按需引入

`long-ui` 支持基于 Tree Shaking 的自动按需引入，这可以显著减小您的 bundle 体积。

## 什么是按需引入？

手动导入每个组件可能会很繁琐。我们推荐使用插件来自动化这个过程。

### 1. 安装插件

目前推荐直接使用 `ES Modules` 的原生能力。

### 2. 手动按需引入

如果您不想使用插件，也可以手动引入：

```ts
import { LongButton, LongSelect } from '@long-ui/components'
import '@long-ui/styles/button.css'
import '@long-ui/styles/select.css'

app.use(LongButton)
app.use(LongSelect)
```

## 全量引入

如果您不介意体积，也可以全量引入：

```ts
import LongUI from '@long-ui/components'
import '@long-ui/styles/index.css'

app.use(LongUI)
```

> [!TIP]
> 我们的公共样式位于 `@long-ui/styles` 下，包含了所有组件的极致视觉定义。
