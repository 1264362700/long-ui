# Empty 空状态

空状态时的占位提示。

## 基础用法

<preview path="../demos/empty/basic.vue" title="基础用法" description="默认展示状态。" />

## Empty API

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| image | 图片地址 | `string` | — | — |
| image-size | 图片大小（宽度） | `number / string` | — | — |
| description | 文本描述 | `string` | — | `暂无数据` |

### Slots
| 插槽名 | 说明 |
| --- | --- |
| default | 自定义底部内容 |
| image | 自定义图片 |
| description | 自定义描述文字 |
