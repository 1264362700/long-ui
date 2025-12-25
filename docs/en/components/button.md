# Button

Commonly used button.

## Basic Usage

<preview path="../../demos/button/basic.vue" title="Basic Usage" description="Use type, plain, round and circle to define the button's style."></preview>

## API

### Attributes

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| type | types of button | 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' | - |
| plain | determine whether it's a plain button | boolean | false |
| round | determine whether it's a round button | boolean | false |
| circle | determine whether it's a circle button | boolean | false |
| loading | determine whether it's loading | boolean | false |
| disabled | disable the button | boolean | false |
| icon | icon component | string | - |
| size | size of button | 'large' \| 'default' \| 'small' | 'default' |

### Events

| Name | Description | Parameters |
| --- | --- | --- |
| click | trigger when button is clicked | (evt: MouseEvent) |
