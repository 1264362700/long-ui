# Breadcrumb 面包屑

显示当前页面的路径，快速返回之前的任意页面。

## 基础用法

<div class="demo-block">
  <long-breadcrumb separator="/">
    <long-breadcrumb-item :to="{ path: '/' }">首页</long-breadcrumb-item>
    <long-breadcrumb-item><a href="/">活动管理</a></long-breadcrumb-item>
    <long-breadcrumb-item>活动列表</long-breadcrumb-item>
    <long-breadcrumb-item>活动详情</long-breadcrumb-item>
  </long-breadcrumb>
</div>

```vue
<template>
  <long-breadcrumb separator="/">
    <long-breadcrumb-item :to="{ path: '/' }">首页</long-breadcrumb-item>
    <long-breadcrumb-item><a href="/">活动管理</a></long-breadcrumb-item>
    <long-breadcrumb-item>活动列表</long-breadcrumb-item>
    <long-breadcrumb-item>活动详情</long-breadcrumb-item>
  </long-breadcrumb>
</template>
```

## 图标分隔符

通过 `separator-icon` 设置分隔符图标。

<div class="demo-block">
  <long-breadcrumb separator-icon="long-icon-arrow-right">
    <long-breadcrumb-item :to="{ path: '/' }">首页</long-breadcrumb-item>
    <long-breadcrumb-item>活动管理</long-breadcrumb-item>
    <long-breadcrumb-item>活动列表</long-breadcrumb-item>
  </long-breadcrumb>
</div>

```vue
<template>
  <long-breadcrumb separator-icon="long-icon-arrow-right">
    <long-breadcrumb-item :to="{ path: '/' }">首页</long-breadcrumb-item>
    <long-breadcrumb-item>活动管理</long-breadcrumb-item>
    <long-breadcrumb-item>活动列表</long-breadcrumb-item>
  </long-breadcrumb>
</template>
```

## API

### Breadcrumb 属性

| 属性名 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| separator | 分隔符 | string | '/' |
| separator-icon | 图标分隔符的 class | string | - |

### BreadcrumbItem 属性

| 属性名 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| to | 路由跳转对象，同 vue-router 的 to | string / object | - |
| replace | 是否在使用 to 进行路由跳转时替换当前历史记录 | boolean | false |
