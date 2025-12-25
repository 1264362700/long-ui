# Form 表单

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。

## 基础用法

包含各种表单项，比如输入框、选择器、开关、单选框、多选框等。

<preview path="../demos/form/basic.vue" title="基础表单" description="基础的表单用法。" />

## 表单校验

Form 组件提供了表单验证的功能，只需要通过 `rules` 属性传入约定的验证规则，并将 Form-Item 的 `prop` 属性设置为需校验的字段名即可。

<preview path="../demos/form/validation.vue" title="表单校验" description="支持 async-validator 的所有规则。" />

## Form API

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| model | 表单数据对象 | `object` | — |
| rules | 表单验证规则 | `object` | — |
| inline | 行内表单模式 | `boolean` | `false` |
| label-width | 标签的宽度 | `string | number` | — |
| size | 用于控制该表单内组件的尺寸 | `'large' | 'default' | 'small'` | — |
| disabled | 是否禁用该表单内的所有组件 | `boolean` | `false` |

## Form Events

| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| validate | 任一表单项被校验后触发 | `(prop: string, isValid: boolean, message: string) => void` |

## Form Methods

| 方法名 | 说明 | 参数 |
| :--- | :--- | :--- |
| validate | 对整个表单进行校验的方法 | `(callback?: (isValid: boolean, invalidFields?: object) => void) => Promise<boolean>` |
| validateField | 对部分表单字段进行校验的方法 | `(props: string | string[], callback: (isValid: boolean, invalidFields?: object) => void) => void` |
| resetFields | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 | `(props?: string | string[]) => void` |
| clearValidate | 移除表单项的校验结果 | `(props?: string | string[]) => void` |

## Form Item API

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| prop | model 的键名。它可以是一个路径数组(例如 ['a', 'b', 0])。在定义了 validate、resetFields 的方法时，该属性是必填的 | `string | string[]` | — |
| label | 标签文本 | `string` | — |
| label-width | 表单域标签的的宽度，例如 '50px'。支持 auto。 | `string | number` | — |
| required | 是否必填，如不设置，则会根据校验规则自动生成 | `boolean` | `false` |
| rules | 表单验证规则 | `object | array` | — |
| error | 表单域验证错误信息, 设置该值会使表单验证状态变为 error，并显示该错误信息 | `string` | — |
| size | 用于控制该表单域下组件的尺寸 | `'large' | 'default' | 'small'` | — |
