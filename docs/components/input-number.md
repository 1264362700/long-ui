# InputNumber 计数器

仅允许输入标准的数字值，可定义范围。

## 基础用法

<preview path="../demos/input-number/basic.vue" title="基础用法"></preview>

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 绑定值 | number | 0 |
| min | 设置计数器允许的最小值 | number | -Infinity |
| max | 设置计数器允许的最大值 | number | Infinity |
| step | 步长 | number | 1 |
| step-strictly | 是否只能输入 step 的倍数 | boolean | false |
| precision | 数值精度 | number | - |
| disabled | 是否禁用计数器 | boolean | false |
| controls | 是否使用控制按钮 | boolean | true |
| controls-position | 控制按钮位置 | '' \| 'right' | '' |
| name | 原生 name 属性 | string | - |
| label | 输入框关联的文字说明 | string | - |
| placeholder | 输入框占位文本 | string | - |
| size | 计数器尺寸 | 'large' \| 'default' \| 'small' | 'default' |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 绑定值被改变时触发 | (currentValue: number, oldValue: number) |
| blur | 在组件失去焦点时触发 | (event: FocusEvent) |
| focus | 在组件获得焦点时触发 | (event: FocusEvent) |
| input | 在输入框内容改变时触发 | (value: number) |
