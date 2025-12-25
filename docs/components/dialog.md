# Dialog 对话框

在保留当前页面状态的情况下，告知用户出现异常情况。

## 基础用法

<preview path="../demos/dialog/basic.vue" title="基础用法" description="对话框的基本用法，通过 `v-model` 绑定开启状态。"></preview>

## 居中布局

<preview path="../demos/dialog/center.vue" title="居中布局" description="标题和底部操作栏均可居中。"></preview>

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 是否显示 Dialog | boolean | false |
| title | Dialog 的标题 | string | - |
| width | Dialog 的宽度 | string / number | 50% |
| fullscreen | 是否为全屏 Dialog | boolean | false |
| top | Dialog CSS 中的 margin-top 值 | string | 15vh |
| modal | 是否需要遮罩层 | boolean | true |
| append-to-body | Dialog 自身是否插入至 body 元素上 | boolean | false |
| lock-scroll | 是否在 Dialog 出现时将 body 滚动锁定 | boolean | true |
| close-on-click-modal | 是否可以通过点击 modal 关闭 Dialog | boolean | true |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog | boolean | true |
| show-close | 是否显示关闭按钮 | boolean | true |
| center | 是否对头部和底部采用居中布局 | boolean | false |
| align-center | 是否水平垂直对齐对话框 | boolean | false |
| draggable | 是否为对话框开启拖拽功能 | boolean | false |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| open | Dialog 打开的回调 | - |
| opened | Dialog 打开动画结束时的回调 | - |
| close | Dialog 关闭的回调 | - |
| closed | Dialog 关闭动画结束时的回调 | - |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| — | Dialog 的内容 |
| header | Dialog 标题区的内容 |
| footer | Dialog 按钮操作区的内容 |
