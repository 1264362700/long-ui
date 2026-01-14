# Steps 步骤条

引导用户按照流程完成任务的分步导航条。

## 基础用法

简单的步骤条。

<div class="demo-block">
  <long-steps :active="active" finish-status="success">
    <long-step title="步骤 1"></long-step>
    <long-step title="步骤 2"></long-step>
    <long-step title="步骤 3"></long-step>
  </long-steps>

  <long-button style="margin-top: 12px" @click="next">下一步</long-button>
</div>

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const active = ref(0)

const next = () => {
  if (active.value++ > 2) active.value = 0
}
</script>

<template>
  <long-steps :active="active" finish-status="success">
    <long-step title="步骤 1"></long-step>
    <long-step title="步骤 2"></long-step>
    <long-step title="步骤 3"></long-step>
  </long-steps>

  <long-button style="margin-top: 12px" @click="next">下一步</long-button>
</template>
```

## 含状态步骤条

每一步骤显示出该步骤的状态。

<div class="demo-block">
  <long-steps :space="200" :active="1" finish-status="success">
    <long-step title="已完成" status="success"></long-step>
    <long-step title="进行中" status="process"></long-step>
    <long-step title="待进行" status="wait"></long-step>
    <long-step title="待进行" status="wait"></long-step>
  </long-steps>
</div>

```vue
<template>
  <long-steps :space="200" :active="1" finish-status="success">
    <long-step title="已完成" status="success"></long-step>
    <long-step title="进行中" status="process"></long-step>
    <long-step title="待进行" status="wait"></long-step>
    <long-step title="待进行" status="wait"></long-step>
  </long-steps>
</template>
```

## 有描述的步骤条

每个步骤都有其对应的步骤状态描述。

<div class="demo-block">
  <long-steps :active="1">
    <long-step title="Step 1" description="这是一段很长很长的描述性文字"></long-step>
    <long-step title="Step 2" description="这是一段很长很长的描述性文字"></long-step>
    <long-step title="Step 3" description="这是一段很长很长的描述性文字"></long-step>
  </long-steps>
</div>

```vue
<template>
  <long-steps :active="1">
    <long-step title="Step 1" description="这是一段很长很长的描述性文字"></long-step>
    <long-step title="Step 2" description="这是一段很长很长的描述性文字"></long-step>
    <long-step title="Step 3" description="这是一段很长很长的描述性文字"></long-step>
  </long-steps>
</template>
```

## 居中对齐

标题和描述都将居中。

<div class="demo-block">
  <long-steps :active="2" align-center>
    <long-step title="Step 1" description="这是一段很长很长的描述性文字"></long-step>
    <long-step title="Step 2" description="这是一段很长很长的描述性文字"></long-step>
    <long-step title="Step 3" description="这是一段很长很长的描述性文字"></long-step>
    <long-step title="Step 4" description="这是一段很长很长的描述性文字"></long-step>
  </long-steps>
</div>

## API

### Steps 属性

| 属性名 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| space | 每个 step 的间距，不填写将自适应间距。支持百分比。 | number / string | - |
| direction | 显示方向 | 'vertical' / 'horizontal' | 'horizontal' |
| active | 设置当前激活步骤 | number | 0 |
| process-status | 设置当前步骤的状态 | 'wait' / 'process' / 'finish' / 'error' / 'success' | 'process' |
| finish-status | 设置结束步骤的状态 | 'wait' / 'process' / 'finish' / 'error' / 'success' | 'finish' |
| align-center | 进行居中对齐 | boolean | false |
| simple | 是否应用简洁模式 | boolean | false |

### Step 属性

| 属性名 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| title | 标题 | string | - |
| description | 描述性文字 | string | - |
| icon | 图标 | string / Component | - |
| status | 设置当前步骤的状态，不设置则根据 steps 确定状态 | 'wait' / 'process' / 'finish' / 'error' / 'success' | - |

### Steps 插槽

| 插槽名 | 说明 |
| :--- | :--- |
| - | 步骤条的内容 |

### Step 插槽

| 插槽名 | 说明 |
| :--- | :--- |
| icon | 自定义图标 |
| title | 自定义标题 |
| description | 自定义描述性文字 |
