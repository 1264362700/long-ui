# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

<preview path="../demos/switch/basic.vue" title="基础用法" description="绑定 v-model 到一个 Boolean 类型的变量。" />

## Switch API

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| model-value / v-model | 绑定值 | `boolean / string / number` | — | `false` |
| disabled | 是否禁用 | `boolean` | — | `false` |
| loading | 是否显示加载中 | `boolean` | — | `false` |
| active-text | 开启时的文字描述 | `string` | — | — |
| inactive-text | 关闭时的文字描述 | `string` | — | — |
| active-value | 开启时的值 | `boolean / string / number` | — | `true` |
| inactive-value | 关闭时的值 | `boolean / string / number` | — | `false` |
| size | 开关尺寸 | `string` | `large / default / small` | `default` |

### Events
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 状态发生变化时的回调函数 | `newValue` |
