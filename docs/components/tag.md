# Tag 标签

用于标记和选择。

## 基础用法

<preview path="../demos/tag/basic.vue" title="基础用法" description="由 type 属性指定标签类型。" />

## Tag API

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 类型 | `string` | `primary / success / info / warning / error` | `primary` |
| closable | 是否可关闭 | `boolean` | — | `false` |
| round | 是否为圆角 | `boolean` | — | `false` |
| size | 尺寸 | `string` | `large / default / small` | `default` |
| color | 背景颜色 | `string` | — | — |
| border-color | 边框颜色 | `string` | — | — |
| text-color | 文本颜色 | `string` | — | — |

### Events
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击 Tag 时触发的事件 | `(event: MouseEvent)` |
| close | 关闭 Tag 时触发的事件 | `(event: MouseEvent)` |
