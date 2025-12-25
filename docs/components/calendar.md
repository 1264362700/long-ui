# Calendar 日历

显示日期。

## 基础用法

<preview path="../demos/calendar/basic.vue" title="基础用法" description="设置 model-value 以指定当前显示的日期。"></preview>

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值 | Date / string / number | - |
| range | 时间范围，包括两个日期 | [Date, Date] | - |
| disabled-date | 设置禁用日期 | (date: Date) => boolean | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 选中日期改变时触发 | (val: Date) |
