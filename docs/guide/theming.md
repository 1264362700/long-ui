# 主题定制

Long UI 使用 CSS Variables 实现主题系统，您可以轻松定制主题。

## 覆盖 CSS 变量

在您的全局样式中覆盖 CSS 变量：

```css
:root {
  /* 主色调 */
  --long-color-primary: #6366f1;
  --long-color-primary-light-1: #818cf8;
  --long-color-primary-dark-1: #4f46e5;

  /* 圆角 */
  --long-border-radius-base: 8px;

  /* 字体 */
  --long-font-family: 'Inter', sans-serif;
}
```

## 使用 SCSS 变量

如果您使用 SCSS，可以导入变量文件：

```scss
// 覆盖默认变量
$namespace: 'my-app';

// 导入 Long UI 样式
@use 'long-ui/dist/scss/index.scss';
```

## 暗黑模式

Long UI 支持暗黑模式，添加 `dark` 类名即可：

```html
<html class="dark">
  <!-- ... -->
</html>
```

```css
html.dark {
  --long-color-bg: #1f2937;
  --long-color-text-primary: #f9fafb;
  --long-color-border: #374151;
}
```

## 变量列表

### 颜色变量

| 变量名 | 默认值 | 说明 |
|--------|--------|------|
| `--long-color-primary` | `#409eff` | 主色 |
| `--long-color-success` | `#67c23a` | 成功色 |
| `--long-color-warning` | `#e6a23c` | 警告色 |
| `--long-color-danger` | `#f56c6c` | 危险色 |
| `--long-color-info` | `#909399` | 信息色 |

### 尺寸变量

| 变量名 | 默认值 | 说明 |
|--------|--------|------|
| `--long-component-size-large` | `40px` | 大尺寸 |
| `--long-component-size-default` | `32px` | 默认尺寸 |
| `--long-component-size-small` | `24px` | 小尺寸 |
