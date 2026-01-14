# Drawer 抽屉

屏幕边缘滑出的浮层面板。

## 基础用法

呼出一个临时的侧边栏，可以从四个方向呼出。

<div class="demo-block">
  <long-button type="primary" style="margin-right: 16px" @click="drawer = true">
    点我打开
  </long-button>
  <long-drawer v-model="drawer" title="我是标题" :with-header="false">
    <span>我来啦!</span>
  </long-drawer>
</div>

```vue
<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)
</script>

<template>
  <long-button type="primary" style="margin-right: 16px" @click="drawer = true">
    点我打开
  </long-button>
  <long-drawer v-model="drawer" title="我是标题" :with-header="false">
    <span>我来啦!</span>
  </long-drawer>
</template>
```

## 不添加 Title

<div class="demo-block">
  <long-button type="primary" style="margin-right: 16px" @click="drawer2 = true">
    无标题
  </long-button>
  <long-drawer v-model="drawer2" :with-header="false">
    <span>我没有标题!</span>
  </long-drawer>
</div>

```vue
<script setup lang="ts">
import { ref } from 'vue'

const drawer2 = ref(false)
</script>

<template>
  <long-button type="primary" style="margin-right: 16px" @click="drawer2 = true">
    无标题
  </long-button>
  <long-drawer v-model="drawer2" :with-header="false">
    <span>我没有标题!</span>
  </long-drawer>
</template>
```

## 自定义内容

和 Dialog 组件一样，Drawer 同样提供了 `header` 和 `footer` 的具名插槽。

<div class="demo-block">
  <long-button type="primary" style="margin-right: 16px" @click="drawer3 = true">
    打开抽屉
  </long-button>
  <long-drawer v-model="drawer3">
    <template #header>
      <h4>自定义标题</h4>
    </template>
    <template #default>
      <div>
        <long-radio v-model="radio" label="Option 1">备选项1</long-radio>
        <long-radio v-model="radio" label="Option 2">备选项2</long-radio>
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <long-button @click="drawer3 = false">取消</long-button>
        <long-button type="primary" @click="drawer3 = false">确认</long-button>
      </div>
    </template>
  </long-drawer>
</div>

```vue
<script setup lang="ts">
import { ref } from 'vue'

const drawer3 = ref(false)
const radio = ref('Option 1')
</script>

<template>
  <long-button type="primary" style="margin-right: 16px" @click="drawer3 = true">
    打开抽屉
  </long-button>
  <long-drawer v-model="drawer3">
    <template #header>
      <h4>自定义标题</h4>
    </template>
    <template #default>
      <div>
        <long-radio v-model="radio" label="Option 1">备选项1</long-radio>
        <long-radio v-model="radio" label="Option 2">备选项2</long-radio>
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <long-button @click="drawer3 = false">取消</long-button>
        <long-button type="primary" @click="drawer3 = false">确认</long-button>
      </div>
    </template>
  </long-drawer>
</template>
```

## API

### Drawer 属性

| 属性名 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| model-value / v-model | 是否显示 Drawer | boolean | false |
| title | Drawer 的标题，也可通过具名 slot 传入 | string | - |
| direction | Drawer 打开的方向 | 'rtl' / 'ltr' / 'ttb' / 'btt' | 'rtl' |
| size | Drawer 窗体的大小, 当使用 `number` 类型时, 以像素为单位, 当使用 `string` 类型时, 请传入 'x%', 否则便会以像素为单位 | number / string | '30%' |
| with-header | 是否显示 Drawer 标题栏 | boolean | true |
| modal | 是否需要遮罩层 | boolean | true |
| close-on-click-modal | 是否可以通过点击 modal 关闭 Drawer | boolean | true |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Drawer | boolean | true |
| show-close | 是否显示关闭按钮 | boolean | true |
| before-close | 关闭前的回调，会暂停 Drawer 的关闭 | function(done) | - |
| destroy-on-close | 控制是否在关闭 Drawer 之后将子元素全部销毁 | boolean | false |

### Drawer 插槽

| 插槽名 | 说明 |
| :--- | :--- |
| - | Drawer 的内容 |
| header | Drawer 标题区的内容 |
| footer | Drawer 按钮操作区的内容 |

### Drawer 事件

| 事件名 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| open | Drawer 打开的回调 | - |
| opened | Drawer 打开动画结束时的回调 | - |
| close | Drawer 关闭的回调 | - |
| closed | Drawer 关闭动画结束时的回调 | - |
