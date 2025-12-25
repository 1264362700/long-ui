# Message

Used to provide feedback in tasks.

## Basic Usage

Appears from the top and disappears automatically after 3 seconds.

<preview path="../../demos/message/basic.vue" title="Basic Usage"></preview>

## Types

Used to show 'success, warning, info, error' feedback.

<preview path="../../demos/message/types.vue" title="Types" description="Define types with the `type` attribute."></preview>

## API

### Message Method

The `LongMessage` function takes an options object:

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| message | message text | string / VNode | - |
| type | theme type | 'success' \| 'warning' \| 'info' \| 'error' | 'info' |
| duration | display duration (ms). Set to 0 to disable auto close | number | 3000 |
| showClose | whether to show a close button | boolean | false |
| center | whether to center the text | boolean | false |
| offset | vertical offset from the top of the screen | number | 20 |
| onClose | callback function when closed | function | - |

### Methods

| Name | Description |
| --- | --- |
| LongMessage.closeAll() | Closes all instances manually |
