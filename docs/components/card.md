# Card 卡片

将信息聚合在卡片容器中展示。

## 基础用法

<preview path="../demos/card/basic.vue" title="基础用法" description="包含标题、内容和额外操作。" />

## API 说明

### Attributes
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 卡片标题 | `string` | — |
| shadow | 是否显示悬浮阴影 | `boolean` | `true` |
| body-style | 内容区域的自定义样式 | `CSSProperties` | `{}` |

### Slots
| 插槽名 | 说明 |
| --- | --- |
| default | 卡片内容 |
| header | 自定义页眉内容 |
| extra | 页眉右侧的额外内容 |
