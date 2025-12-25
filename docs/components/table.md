# Table 表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

## 基础表格

<preview path="../demos/table/basic.vue" title="基础表格" description="基础的表格用法。" />

## 带斑马纹表格

使用 `stripe` 属性可以创建带斑马纹的表格。

<preview path="../demos/table/stripe.vue" title="带斑马纹表格" description="stripe 属性可以创建带斑马纹的表格。" />

## 自定义列模板

自定义列的显示内容，可组合其他组件使用。

<preview path="../demos/table/custom.vue" title="自定义列模板" description="通过 Scoped Slot 可以获取到 row, column, $index 和 store 的数据。" />

## Table API

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| data | 显示的数据 | `array` | — |
| height | Table 的高度，默认为自动高度 | `string | number` | — |
| border | 是否带有纵向边框 | `boolean` | `false` |
| stripe | 是否为斑马纹 table | `boolean` | `false` |
| row-key | 行数据的 Key，用来优化 Table 的渲染 | `string` | 'id' |
| empty-text | 空数据时显示的文本内容 | `string` | '暂无数据' |
| show-header | 是否显示表头 | `boolean` | `true` |
| fit | 列的宽度是否自撑开 | `boolean` | `true` |

## Table Column API

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| label | 显示的标题 | `string` | — |
| prop | 对应列内容的字段名，也可以使用 property 属性 | `string` | — |
| width | 对应列的宽度 | `string` | — |
