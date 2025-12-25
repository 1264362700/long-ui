# Theming

All Long UI component styles are built based on CSS variables, making theme customization extremely simple.

## Basic Variables

You can override our defined variables at the root node (usually `html` or `:root`):

```css
:root {
  --long-color-primary: #18a058; /* Change brand color to green */
  --long-border-radius-base: 8px; /* Change global border radius */
}
```

## Dark Mode

Long UI natively supports dark mode. When the `.dark` class exists on the HTML tag, it automatically switches to the dark color scheme.

```html
<html class="dark">
  ...
</html>
```

You can also customize details for dark mode:

```css
.dark {
  --long-color-primary: #63e2b7;
}
```

## Variable Reference

The complete list of variables can be found in [index.scss](file:///Users/chenlong/Desktop/long-ui/core/styles/src/index.scss).
We provide the following categories:
- **Colors**: primary, success, warning, danger, info
- **Sizes**: default, large, small
- **Shadows**: index-normal, index-top, index-popper
