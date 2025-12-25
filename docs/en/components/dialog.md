# Dialog

Informs users about a specific task or critical information while maintaining the current page state.

## Basic Usage

<preview path="../../demos/dialog/basic.vue" title="Basic Usage" description="Basic usage of Dialog, toggle visibility with `v-model`."></preview>

## Centered Layout

<preview path="../../demos/dialog/center.vue" title="Centered" description="Both the title and footer can be centered."></preview>

## API

### Attributes

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | visibility of Dialog | boolean | false |
| title | title of Dialog | string | - |
| width | width of Dialog | string / number | 50% |
| fullscreen | whether the Dialog is full screen | boolean | false |
| top | value for margin-top of Dialog CSS | string | 15vh |
| modal | whether a mask is displayed | boolean | true |
| append-to-body | whether Dialog itself is appended to body | boolean | false |
| lock-scroll | whether scroll of body is disabled while Dialog is displayed | boolean | true |
| close-on-click-modal | whether the Dialog can be closed by clicking the mask | boolean | true |
| close-on-press-escape | whether the Dialog can be closed by pressing ESC | boolean | true |
| show-close | whether a close button is displayed | boolean | true |
| center | whether to center the header and footer | boolean | false |
| align-center | whether to horizontally and vertically center the dialog | boolean | false |

### Events

| Name | Description | Parameters |
| --- | --- | --- |
| open | trigger when the Dialog opens | - |
| opened | trigger when the Dialog opening animation ends | - |
| close | trigger when the Dialog closes | - |
| closed | trigger when the Dialog closing animation ends | - |

### Slots

| Name | Description |
| --- | --- |
| — | content of Dialog |
| header | content of Dialog header |
| footer | content of Dialog footer |
