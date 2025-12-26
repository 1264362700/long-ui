# Descriptions 描述列表

成组展示多个只读字段。

## 基础用法

<div class="demo-block">
  <LongDescriptions title="用户信息" :column="3">
    <LongDescriptionsItem label="用户名">kooriookami</LongDescriptionsItem>
    <LongDescriptionsItem label="手机号">18100000000</LongDescriptionsItem>
    <LongDescriptionsItem label="居住地">苏州市</LongDescriptionsItem>
    <LongDescriptionsItem label="备注">学校</LongDescriptionsItem>
    <LongDescriptionsItem label="联系地址">江苏省苏州市吴中区越溪街道吴中大道 1188 号</LongDescriptionsItem>
  </LongDescriptions>
</div>

## 带边框与复制功能
开启 `border` 属性可以展示边框，`copyable` 属性支持点击一键复制。

<div class="demo-block">
  <LongDescriptions title="垂直展示" direction="vertical" border :column="4">
    <LongDescriptionsItem label="用户名">kooriookami</LongDescriptionsItem>
    <LongDescriptionsItem label="手机号" copyable value="18100000000">18100000000</LongDescriptionsItem>
    <LongDescriptionsItem label="居住地">苏州市</LongDescriptionsItem>
    <LongDescriptionsItem label="备注">
      <LongTag>工作</LongTag>
    </LongDescriptionsItem>
    <LongDescriptionsItem label="联系地址" :span="2">江苏省苏州市吴中区越溪街道吴中大道 1188 号</LongDescriptionsItem>
  </LongDescriptions>
</div>

## Descriptions 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| title | 标题 | string | — | — |
| border | 是否带有边框 | boolean | — | false |
| column | 列表的列数 | number | — | 3 |
| direction | 排列方向 | string | horizontal / vertical | horizontal |

## Descriptions Item 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| label | 标签文本 | string | — | — |
| span | 占位列数 | number | — | 1 |
| copyable | 是否支持复制 | boolean | — | false |
| value | 复制的具体内容 (需开启 copyable) | string | — | — |
