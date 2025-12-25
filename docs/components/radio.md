# Radio 单选框

在一个备选项列表中选中单个选项。

## 基础用法

<preview path="../demos/radio/basic.vue" title="基础用法" description="单选框的基本用法，也可以通过 RadioGroup 管理一组 Radio。"></preview>

## API

### Radio Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 绑定值 | string / number / boolean | - |
| label | Radio 的 value | string / number / boolean | - |
| disabled | 是否禁用 | boolean | false |
| border | 是否显示边框 | boolean | false |
| size | 尺寸 | 'large' \| 'default' \| 'small' | 'default' |
| name | 原生 name 属性 | string | - |

### Radio Group Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 绑定值 | string / number / boolean | - |
| disabled | 是否禁用组内所有 Radio | boolean | false |
| size | 尺寸 | 'large' \| 'default' \| 'small' | 'default' |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 绑定值改变时触发 | (val: string \| number \| boolean) |
