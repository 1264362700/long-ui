# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

<preview path="../demos/switch/basic.vue" title="基础用法" description="绑定 v-model 到一个 Boolean 类型的变量。"></preview>

## 文字描述

<preview path="../demos/switch/text.vue" title="文字描述" description="使用 active-text 属性与 inactive-text 属性来设置开关的文字描述。"></preview>

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值 | boolean / string / number | false |
| disabled | 是否禁用 | boolean | false |
| loading | 是否显示加载中状态 | boolean | false |
| size | 尺寸 | 'large' \| 'default' \| 'small' | 'default' |
| width | 宽度 | string \| number | - |
| active-text | 开关打开时的文字描述 | string | - |
| inactive-text | 开关关闭时的文字描述 | string | - |
| active-value | 开关打开时的值 | boolean / string / number | true |
| inactive-value | 开关关闭时的值 | boolean / string / number | false |
| name | input 的 name 属性 | string | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 绑定值改变时触发 | (val: boolean \| string \| number) |
| change | 绑定值改变时触发 | (val: boolean \| string \| number) |
