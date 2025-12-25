# TimePicker 时间选择器

用于选择或输入时间。

## 基础用法

通过 `v-model` 绑定时间字符串。

<preview path="../demos/time-picker/basic.vue" title="基础用法" description="最基础的时间选择用法。"></preview>

## 禁用状态

<preview path="../demos/time-picker/disabled.vue" title="禁用状态" description="设置 disabled 属性来禁用组件。"></preview>

## 不同尺寸

<preview path="../demos/time-picker/size.vue" title="不同尺寸" description="支持 large、default、small 三种尺寸。"></preview>

## API

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定值 | string | — | — |
| placeholder | 占位文本 | string | — | Select time |
| size | 尺寸 | string | large / default / small | default |
| disabled | 是否禁用 | boolean | — | false |
| clearable | 是否可清空 | boolean | — | true |
| format | 显示在输入框中的格式 | string | — | HH:mm:ss |
| value-format | 绑定值的格式 | string | — | HH:mm:ss |
| readonly | 是否只读 | boolean | — | false |
| editable | 文本框可输入 | boolean | — | true |

### Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 用户确认选定的值时触发 | value |
| update:modelValue | 绑定值改变时触发 | value |
