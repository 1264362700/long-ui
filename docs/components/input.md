# Input 输入框

通过鼠标或键盘输入字符。

## 基础用法

<preview path="../demos/input/basic.vue" title="基础用法" description="最基础的用法。"></preview>

## 禁用状态

<preview path="../demos/input/disabled.vue" title="禁用状态" description="通过 disabled 属性指定是否禁用输入框。"></preview>

## 一键清空

使用 `clearable` 属性即可得到一个可一键清空的输入框。

<preview path="../demos/input/clearable.vue" title="一键清空" description="通过 clearable 属性可显示清空按钮。"></preview>

## 密码显隐

使用 `show-password` 属性即可得到一个可切换显示/隐藏的密码框。

<preview path="../demos/input/password.vue" title="密码显隐" description="需同时设置 type='password'。"></preview>

## 尺寸适配

支持 `large`、`default`、`small` 三种尺寸，默认为 `default`。

<preview path="../demos/input/size.vue" title="尺寸" description="通过 size 属性控制输入框大小。"></preview>

## 文本域

用于输入多行文本。

<preview path="../demos/input/textarea.vue" title="文本域" description="将 type 属性设置为 textarea 即可。"></preview>

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值 | string \| number | - |
| type | 类型 | 'text' \| 'textarea' \| 'password' \| 'number' | 'text' |
| size | 输入框尺寸 | 'large' \| 'default' \| 'small' | 'default' |
| placeholder | 输入框占位文本 | string | - |
| disabled | 是否禁用 | boolean | false |
| readonly | 是否只读 | boolean | false |
| clearable | 是否可清空 | boolean | false |
| prefix-icon | 前缀图标 | string | - |
| suffix-icon | 后缀图标 | string | - |
| show-password | 是否显示切换密码图标 | boolean | false |
| maxlength | 最大输入长度 | string \| number | - |
| show-word-limit | 是否显示字数统计 | boolean | false |
| autocomplete | 原生 autocomplete 属性 | string | 'off' |
| name | 原生 name 属性 | string | - |
| rows | 输入框行数，仅 type 为 'textarea' 时有效 | number | 2 |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 在绑定值改变时触发 | (value: string \| number) |
| change | 仅在输入框失去焦点或用户按下回车时触发 | (value: string \| number) |
| input | 在输入框输入时触发 | (value: string \| number) |
| focus | 在输入框获得焦点时触发 | (evt: FocusEvent) |
| blur | 在输入框失去焦点时触发 | (evt: FocusEvent) |
| clear | 在点击由 clearable 属性生成的清空按钮时触发 | - |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| prefix | 输入框头部内容 |
| suffix | 输入框尾部内容 |
| prepend | 输入框前置内容 |
| append | 输入框后置内容 |
