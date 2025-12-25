# Pagination 分页

当数据量过多，无法在同一页显示时，对数据进行分页展示。

## 基础用法

<preview path="../demos/pagination/basic.vue" title="基础用法" description="包含完整的分页组件。" />

## Pagination API

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| total | 总条目数 | `number` | — | `0` |
| page-size | 每页显示条目个数 | `number` | — | `10` |
| current-page | 当前页数，支持 v-model | `number` | — | `1` |
| background | 是否为分页按钮添加背景色 | `boolean` | — | `false` |
| small | 是否使用小型分页 | `boolean` | — | `false` |
| disabled | 是否禁用分页 | `boolean` | — | `false` |

### Events
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 页面或每页大小改变时触发 | `(page, size)` |
| update:current-page | 页码改变时触发 (v-model) | `page` |
