# 主题定制

`long-ui` 的 2.0 版本采用了全新的 **Apex Level** 设计体系，所有组件样式均由 CSS 变量（Design Tokens）驱动。这意味着您可以极其简单地实现批量更换主题。

## 全局主题色

要更改全站的主题色，只需在全局 CSS 中覆盖 `:root` 下的变量：

```css
:root {
  /* 品牌色 */
  --long-color-primary: #722ed1; /* 改为紫色 */
  
  /* 自动计算微调色 (可选) */
  --long-color-primary-light-9: #f9f0ff;
}
```

## 阴影与质感定制

我们的 **Apex Style** 使用了三重复合投影。如果您想要更扁平的风格：

```css
:root {
  --long-box-shadow-level-1: none;
  --long-box-shadow-level-2: 0 2px 8px rgba(0, 0, 0, 0.05);
  --long-box-shadow-level-3: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

## 按组件定制

每个组件都使用了特定命名的变量。例如，定制按钮的圆角：

```css
:root {
  --long-border-radius-base: 2px; /* 全局改为小圆角 */
}

/* 或者只针对按钮 */
.long-button {
  border-radius: 99px;
}
```

## 变量列表

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| `--long-color-primary` | 主题色 | `#409eff` |
| `--long-border-radius-base` | 基础圆角 | `4px` |
| `--long-box-shadow-level-2` | 标准投影 | `0 4px 12px rgba(0, 0, 0, 0.08)` |
| `--long-font-size-base` | 基础字号 | `14px` |

> [!IMPORTANT]
> 覆盖变量时，请确保在引入 `long-ui` 样式文件**之后**加载您的自定义样式。
