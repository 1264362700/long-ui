import type { ExtractPropTypes, PropType } from 'vue'

export const timePickerProps = {
    modelValue: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: 'Select time'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    size: {
        type: String as PropType<'large' | 'default' | 'small'>,
        default: 'default'
    },
    clearable: {
        type: Boolean,
        default: true
    },
    format: {
        type: String,
        default: 'HH:mm:ss'
    },
    valueFormat: {
        type: String,
        default: 'HH:mm:ss'
    },
    readonly: {
        type: Boolean,
        default: false
    },
    editable: {
        type: Boolean,
        default: true
    }
} as const

export type TimePickerProps = ExtractPropTypes<typeof timePickerProps>
