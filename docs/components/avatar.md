# Avatar 头像

用图标、图片或者字符展示用户或事物信息。

## 基础用法

通过 `shape` 和 `size` 设置头像的形状和大小。

<div class="demo-block">
  <long-space :size="20">
      <long-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      <long-avatar shape="square" :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
  </long-space>
</div>

```vue
<template>
  <long-space :size="20">
      <long-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      <long-avatar shape="square" :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
  </long-space>
</template>
```

## 展示回退

当图片加载失败时，可以通过 `error` 事件处理。

<div class="demo-block">
  <long-avatar src="empty" @error="errorHandler">
      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
  </long-avatar>
</div>

```vue
<script setup lang="ts">
const errorHandler = () => true
</script>

<template>
  <long-avatar src="empty" @error="errorHandler">
      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
  </long-avatar>
</template>
```

## 适应容器

通过 `fit` 属性设置图片如何适应容器，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)。

<div class="demo-block">
    <long-space>
        <long-avatar shape="square" :size="100" fit="fill" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
        <long-avatar shape="square" :size="100" fit="contain" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
        <long-avatar shape="square" :size="100" fit="cover" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
    </long-space>
</div>

## API

### Avatar 属性

| 属性名 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| size | 头像大小，可以是 number 或 string | number / string | 40 |
| shape | 头像形状 | 'circle' / 'square' | 'circle' |
| src | 图片源地址 | string | '' |
| alt | 原生 alt 属性 | string | - |
| fit | 设置图片如何适应容器 | 'fill' / 'contain' / 'cover' / 'none' / 'scale-down' | 'cover' |

### Avatar 事件

| 事件名 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| error | 图片加载失败时触发 | (e: Event) |
