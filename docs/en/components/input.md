# Input

Input data using mouse or keyboard.

## Basic Usage

<preview path="../../demos/input/basic.vue" title="Basic Usage"></preview>

## API

### Attributes

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| type | type of input | 'text' \| 'textarea' | 'text' |
| v-model | binding value | string \| number | - |
| maxlength | maximum input length | number | - |
| minlength | minimum input length | number | - |
| placeholder | input placeholder | string | - |
| clearable | whether to show clear button | boolean | false |
| disabled | whether input is disabled | boolean | false |
| size | input size | 'large' \| 'default' \| 'small' | 'default' |
| readonly | whether input is read-only | boolean | false |

### Events

| Name | Description | Parameters |
| --- | --- | --- |
| blur | trigger when Input blurs | (event: Event) |
| focus | trigger when Input focuses | (event: Event) |
| change | trigger when Input value changes | (value: string \| number) |
| input | trigger when Input value changes | (value: string \| number) |
| clear | trigger when clicking the clear button | - |
| keydown | trigger when clicking any key | (event: KeyboardEvent) |
