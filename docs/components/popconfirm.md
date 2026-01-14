# Popconfirm 气泡确认框

点击元素，弹出气泡确认框。

## 基础用法

Popconfirm 的属性与 Popover 很类似，因此对于重复属性，请参考 Popover 的文档，在此文档中不做详尽解释。

<div class="demo-block">
  <long-popconfirm title="这是一段内容确定删除吗？">
    <long-button>删除</long-button>
  </long-popconfirm>
</div>

```vue
<template>
  <long-popconfirm title="这是一段内容确定删除吗？">
    <long-button>删除</long-button>
  </long-popconfirm>
</template>
```

## 自定义Icon

<div class="demo-block">
  <long-popconfirm
    confirm-button-text="好的"
    cancel-button-text="不用了"
    icon="long-icon-info-filled"
    icon-color="#626aef"
    title="这是一段内容确定删除吗？"
  >
    <long-button>删除</long-button>
  </long-popconfirm>
</div>

```vue
<template>
  <long-popconfirm
    confirm-button-text="好的"
    cancel-button-text="不用了"
    icon="long-icon-info-filled"
    icon-color="#626aef"
    title="这是一段内容确定删除吗？"
  >
    <long-button>删除</long-button>
  </long-popconfirm>
</template>
```

## API

### Popconfirm 属性

| 属性名 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| title | 标题 | string | - |
| confirm-button-text | 确认按钮文字 | string | - |
| cancel-button-text | 取消按钮文字 | string | - |
| confirm-button-type | 确认按钮类型 | string | primary |
| cancel-button-type | 取消按钮类型 | string | text |
| icon | Icon | string / Component | - |
| icon-color | Icon 颜色 | string | #f90 |
| hide-icon | 是否隐藏 Icon | boolean | false |

### Popconfirm 事件

| 事件名 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| confirm | 点击确认按钮时触发 | - |
| cancel | 点击取消按钮时触发 | - |

### Popconfirm 插槽

| 插槽名 | 说明 |
| :--- | :--- |
| - | 触发 Popconfirm 显示的 HTML 元素 |
| reference | 触发 Popconfirm 显示的 HTML 元素 |
