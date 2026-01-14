# Timeline 时间线

可视化地呈现时间流信息。

## 基础用法

Timeline 可按时间顺序展示活动。

<div class="demo-block">
  <long-timeline>
    <long-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :timestamp="activity.timestamp"
    >
      {{ activity.content }}
    </long-timeline-item>
  </long-timeline>
</div>

```vue
<script lang="ts" setup>
const activities = [
  {
    content: '开始编写 Long UI',
    timestamp: '2023-04-12',
  },
  {
    content: '通过审核',
    timestamp: '2023-04-13',
  },
  {
    content: '发布 1.0 版本',
    timestamp: '2023-04-15',
  },
]
</script>

<template>
  <long-timeline>
    <long-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :timestamp="activity.timestamp"
    >
      {{ activity.content }}
    </long-timeline-item>
  </long-timeline>
</template>
```

## 自定义节点样式

<div class="demo-block">
  <long-timeline>
    <long-timeline-item
      v-for="(activity, index) in activities2"
      :key="index"
      :icon="activity.icon"
      :type="activity.type"
      :color="activity.color"
      :size="activity.size"
      :hollow="activity.hollow"
      :timestamp="activity.timestamp"
    >
      {{ activity.content }}
    </long-timeline-item>
  </long-timeline>
</div>

```vue
<script lang="ts" setup>
const activities2 = [
  {
    content: '支持使用图标',
    timestamp: '2018-04-12 20:46',
    size: 'large',
    type: 'primary',
  },
  {
    content: '支持自定义颜色',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87',
  },
  {
    content: '支持自定义尺寸',
    timestamp: '2018-04-03 20:46',
    size: 'large',
  },
  {
    content: '默认样式的节点',
    timestamp: '2018-04-03 20:46',
  },
]
</script>
```

## 左右/时间戳位置

<div class="demo-block">
  <long-timeline>
    <long-timeline-item timestamp="2018/4/12" placement="top">
      <long-card>
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/12 20:46</p>
      </long-card>
    </long-timeline-item>
    <long-timeline-item timestamp="2018/4/3" placement="top">
      <long-card>
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/3 20:46</p>
      </long-card>
    </long-timeline-item>
  </long-timeline>
</div>


## API

### Timeline 属性

无

### TimelineItem 属性

| 属性名 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| timestamp | 时间戳 | string | - |
| hide-timestamp | 是否隐藏时间戳 | boolean | false |
| placement | 时间戳位置 | 'top' / 'bottom' | 'bottom' |
| type | 节点类型 | 'primary' / 'success' / 'warning' / 'danger' / 'info' | - |
| color | 节点颜色 | string | - |
| size | 节点尺寸 | 'normal' / 'large' | 'normal' |
| icon | 节点图标 | string / Component | - |
| hollow | 是否空心点 | boolean | false |

### TimelineItem 插槽

| 插槽名 | 说明 |
| :--- | :--- |
| - | TimelineItem 的内容 |
| dot | 自定义节点 |
