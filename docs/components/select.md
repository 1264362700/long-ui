# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

<preview path="../demos/select/basic.vue" title="基础用法" description="v-model 的值为当前被选中的 el-option 的 value 属性值。"></preview>

## 禁用状态

选择器不可用状态。

<preview path="../demos/select/disabled.vue" title="禁用状态" description="通过 disabled 属性禁用选择器。"></preview>

## 可清空单选

包含清空按钮，可将选择器清空为初始状态。

<preview path="../demos/select/clearable.vue" title="可清空单选" description="通过 clearable 属性启用清空按钮。"></preview>

## API

### Select Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 绑定值 | string / number / boolean | - |
| placeholder | 占位符 | string | 请选择 |
| disabled | 是否禁用 | boolean | false |
| clearable | 是否可以清空选项 | boolean | false |
| multiple | 是否多选 | boolean | false |
| filterable | 是否可搜索 | boolean | false |
| size | 输入框尺寸 | string | default |

### Option Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选项的值 | string / number / boolean | - |
| label | 选项的标签，若不设置则与 value 相同 | string / number | - |
| disabled | 是否禁用该选项 | boolean | false |
