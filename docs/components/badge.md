# Badge 徽标

出现在按钮、图标旁的数字或红点。

## 基础用法
展示新消息数量。

<div class="demo-block">
  <LongBadge :value="12">
    <LongButton>评论</LongButton>
  </LongBadge>
  <LongBadge :value="3" type="primary">
    <LongButton>回复</LongButton>
  </LongBadge>
  <LongBadge :value="1" type="success">
    <LongButton>点赞</LongButton>
  </LongBadge>
</div>

## 最大值
可以使用 `max` 属性限制最大值。

<div class="demo-block">
  <LongBadge :value="200" :max="99">
    <LongButton>消息</LongButton>
  </LongBadge>
</div>

## 小红点
没有具体数字，仅展示一个红点。

<div class="demo-block">
  <LongBadge is-dot>
    <LongButton icon="long-icon-share" />
  </LongBadge>
</div>

## Badge 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 显示文本 | string / number | — | — |
| max | 最大值，超过最大值会显示 '{max}+' | number | — | 99 |
| is-dot | 是否显示小红点 | boolean | — | false |
| hidden | 是否隐藏 Badge | boolean | — | false |
| type | 类型 | string | primary / success / warning / danger / info | danger |
