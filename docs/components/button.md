# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 属性来定义按钮的样式。

<preview path="../demos/button/basic.vue" title="基础用法" description="使用 type 属性改变按钮类型。"></preview>

## 禁用状态

按钮不可用状态。

<preview path="../demos/button/disabled.vue" title="禁用状态" description="可以使用 disabled 属性来定义按钮是否可用，它接受一个 Boolean 值。"></preview>

## 图标按钮

带图标的按钮可增强辨识度（直接使用或使用 icon 属性）。

<preview path="../demos/button/icon.vue" title="图标按钮" description="设置 icon 属性即可，也可以在按钮内部嵌套图标。"></preview>

## 加载状态

点击按钮后进行数据加载操作，在按钮上显示加载状态。

<preview path="../demos/button/loading.vue" title="加载状态" description="设置 loading 属性为 true 即可。"></preview>

## 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

<preview path="../demos/button/size.vue" title="不同尺寸" description="额外尺寸：large、small。可通过 size 属性设置。"></preview>

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型 | 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'text' \| 'default' | 'default' |
| size | 尺寸 | 'large' \| 'default' \| 'small' | 'default' |
| plain | 是否朴素按钮 | boolean | false |
| round | 是否圆角按钮 | boolean | false |
| circle | 是否圆形按钮 | boolean | false |
| loading | 是否加载中状态 | boolean | false |
| loading-icon | 自定义加载图标 | string | - |
| disabled | 是否禁用状态 | boolean | false |
| icon | 图标类名 | string | - |
| autofocus | 原生 autofocus 属性 | boolean | false |
| native-type | 原生 type 属性 | 'button' \| 'submit' \| 'reset' | 'button' |
| block | 是否为块级元素 | boolean | false |
| link | 是否为链接按钮 | boolean | false |
| tag | 自定义渲染标签 | string | 'button' |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击按钮时触发 | (evt: MouseEvent) |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义默认内容 |
| loading | 自定义加载状态内容 |
