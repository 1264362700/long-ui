# Alert 警告

用于页面中展示重要的提示信息。

## 基础用法
页面中的非浮层式方案。

<div class="demo-block">
  <LongAlert title="成功提示的文案" type="success" style="margin-bottom: 12px" />
  <LongAlert title="消息提示的文案" type="info" style="margin-bottom: 12px" />
  <LongAlert title="警告提示的文案" type="warning" style="margin-bottom: 12px" />
  <LongAlert title="错误提示的文案" type="error" />
</div>

## 带有辅助文字介绍
可以通过默认插槽或 `description` 属性展示辅助性文字。

<div class="demo-block">
  <LongAlert
    title="带辅助性文字介绍"
    type="success"
    description="这是一句对成功提示的辅助性文字介绍。这是一句对成功提示的辅助性文字介绍。"
  />
</div>

## 可关闭
可以设置 `closable` 属性来控制是否显示关闭按钮。

<div class="demo-block">
  <LongAlert title="不可关闭的 alert" type="success" :closable="false" />
  <LongAlert title="自定义 close-text" type="info" close-text="知道了" />
</div>

## 带有图标

<div class="demo-block">
  <LongAlert title="成功提示的文案" type="success" show-icon />
  <LongAlert title="消息提示的文案" type="info" show-icon />
</div>

## Alert 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| title | 标题 | string | — | — |
| type | 类型 | string | success / info / warning / error | info |
| description | 辅助性文字 | string | — | — |
| closable | 是否可关闭 | boolean | — | true |
| show-icon | 是否显示图标 | boolean | — | false |
| close-text | 自定义关闭按钮文本 | string | — | — |
| center | 文字是否居中 | boolean | — | false |
| effect | 选择主题 | string | light / dark | light |

## Alert 事件
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 关闭 alert 时触发的事件 | (evt: MouseEvent) |
