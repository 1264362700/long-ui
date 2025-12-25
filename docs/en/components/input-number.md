# InputNumber

Input numerical values with a customizable range.

## Basic Usage

<preview path="../../demos/input-number/basic.vue" title="Basic Usage"></preview>

## API

### Attributes

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | binding value | number | 0 |
| min | minimum permitted value | number | -Infinity |
| max | maximum permitted value | number | Infinity |
| step | incremental step | number | 1 |
| step-strictly | whether input value can be only a multiple of step | boolean | false |
| precision | precision of input value | number | - |
| disabled | whether the component is disabled | boolean | false |
| controls | whether to enable control buttons | boolean | true |
| controls-position | position of control buttons | '' \| 'right' | '' |
| name | native name attribute | string | - |
| label | label text | string | - |
| placeholder | input placeholder | string | - |
| size | size of InputNumber | 'large' \| 'default' \| 'small' | 'default' |

### Events

| Name | Description | Parameters |
| --- | --- | --- |
| change | trigger when value changes | (currentValue: number, oldValue: number) |
| blur | trigger when InputNumber blurs | (event: FocusEvent) |
| focus | trigger when InputNumber focuses | (event: FocusEvent) |
| input | trigger when value changes | (value: number) |
