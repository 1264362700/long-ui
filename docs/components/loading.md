# Loading 加载

用于页面或局部区域的数据加载反馈。

## 基础用法

<preview path="../demos/loading/basic.vue" title="基础用法" description="区域覆盖的加载状态。" />

## Loading API

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| loading | 是否显示加载中 | `boolean` | — | `true` |
| text | 显示在加载图标下方的提示文案 | `string` | — | — |
| fullscreen | 是否全屏遮罩 | `boolean` | — | `false` |
| background | 遮罩层背景色 | `string` | — | — |
| text-color | 提示文案颜色 | `string` | — | `#1677ff` |
| size | 尺寸 (SVG 大小) | `string` | `large / default / small` | `default` |
