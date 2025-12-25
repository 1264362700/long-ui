# Switch

Switching between two opposing states.

## Basic Usage

<preview path="../../demos/switch/basic.vue" title="Basic Usage"></preview>

## API

### Attributes

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | binding value | boolean / string / number | false |
| disabled | whether switch is disabled | boolean | false |
| loading | whether switch is loading | boolean | false |
| size | size of switch | 'large' \| 'default' \| 'small' | 'default' |
| active-text | text displayed when in on state | string | - |
| inactive-text | text displayed when in off state | string | - |
| active-value | switch value when in on state | boolean / string / number | true |
| inactive-value | switch value when in off state | boolean / string / number | false |

### Events

| Name | Description | Parameters |
| --- | --- | --- |
| change | trigger when switch value changes | (val: boolean \| string \| number) |
