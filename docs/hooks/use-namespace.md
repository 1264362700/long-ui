# useNamespace 命名空间

`useNamespace` 用于生成遵循 BEM (Block Element Modifier) 规范的 CSS 类名。

## 基础用法

```ts
import { useNamespace } from '@long-ui/hooks'

const ns = useNamespace('button')

ns.b() // 'long-button'
ns.e('icon') // 'long-button__icon'
ns.m('primary') // 'long-button--primary'
ns.is('disabled') // 'is-disabled'
```

## API 说明

| 方法名 | 说明 | 示例返回值 |
| --- | --- | --- |
| b | 生成 Block 类名 | `long-xxx` |
| e | 生成 Element 类名 | `long-xxx__element` |
| m | 生成 Modifier 类名 | `long-xxx--modifier` |
| is | 生成状态类名 | `is-xxx` (如果值为真) |
| cssVar | 生成组件局部 CSS 变量名 | `--long-xxx-name` |
| cssVarName | 生成全局 CSS 变量名 | `--long-name` |
