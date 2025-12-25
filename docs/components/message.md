# Message 消息提示

常用于主动操作后的反馈提示。

## 基础用法

从顶部出现，3 秒后自动消失。

<preview path="../demos/message/basic.vue" title="基础用法"></preview>

## 不同状态

用来显示「成功、警告、消息、错误」类的反馈。

<preview path="../demos/message/types.vue" title="不同状态" description="通过 `type` 属性定义状态。"></preview>

## API

### Message 方法

`LongMessage` 函数接收一个对象作为参数：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| message | 消息文字 | string / VNode | - |
| type | 主题类型 | 'success' \| 'warning' \| 'info' \| 'error' | 'info' |
| duration | 显示时间，单位为毫秒。设为 0 则不会自动关闭 | number | 3000 |
| showClose | 是否显示关闭按钮 | boolean | false |
| center | 文字是否居中 | boolean | false |
| offset | 相对于屏幕顶部的偏移量 | number | 20 |
| onClose | 关闭时的回调函数 | function | - |

### 方法

| 方法名 | 说明 |
| --- | --- |
| LongMessage.closeAll() | 手动关闭所有实例 |
