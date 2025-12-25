# Radio

Select a single option from a list of options.

## Basic Usage

<preview path="../../demos/radio/basic.vue" title="Basic Usage" description="Basic usage of radio, can also be used in a group."></preview>

## API

### Radio Attributes

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | binding value | string / number / boolean | - |
| label | value of Radio | string / number / boolean | - |
| disabled | whether Radio is disabled | boolean | false |
| border | whether to show border | boolean | false |
| size | size of Radio | 'large' \| 'default' \| 'small' | 'default' |
| name | native name attribute | string | - |

### Radio Group Attributes

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | binding value | string / number / boolean | - |
| disabled | whether to disable all radios in the group | boolean | false |
| size | size of radio buttons or bordered radios | 'large' \| 'default' \| 'small' | 'default' |

### Events

| Name | Description | Parameters |
| --- | --- | --- |
| change | trigger when value changes | (val: string \| number \| boolean) |
