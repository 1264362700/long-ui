# Space 间距

设置组件之间的间距。

## 基础用法
相邻组件间留出间距。

<div class="demo-block">
  <LongSpace>
    <LongButton>按钮 1</LongButton>
    <LongButton>按钮 2</LongButton>
    <LongButton>按钮 3</LongButton>
  </LongSpace>
</div>

## 垂直布局

<div class="demo-block">
  <LongSpace direction="vertical">
    <LongButton>按钮 1</LongButton>
    <LongButton>按钮 2</LongButton>
  </LongSpace>
</div>

## Space 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| direction | 排列方向 | string | horizontal / vertical | horizontal |
| size | 间距大小 | number / string | small / middle / large | middle |
| wrap | 是否自动换行 | boolean | — | false |
| align | 对齐方式 | string | start / end / center / baseline | — |
