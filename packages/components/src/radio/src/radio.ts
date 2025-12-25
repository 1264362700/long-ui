import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize } from '@long-ui/utils'

export const radioProps = {
    modelValue: {
        type: [String, Number, Boolean] as PropType<string | number | boolean>,
        default: '',
    },
    label: {
        type: [String, Number, Boolean] as PropType<string | number | boolean>,
        default: '',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    border: {
        type: Boolean,
        default: false,
    },
    size: {
        type: String as PropType<ComponentSize>,
        default: 'default',
    },
    name: {
        type: String,
        default: '',
    },
} as const

export type RadioProps = ExtractPropTypes<typeof radioProps>

export const radioEmits = {
    'update:modelValue': (_: string | number | boolean) => true,
    change: (_: string | number | boolean) => true,
}

export type RadioEmits = typeof radioEmits

export const radioGroupProps = {
    modelValue: {
        type: [String, Number, Boolean] as PropType<string | number | boolean>,
        default: '',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    size: {
        type: String as PropType<ComponentSize>,
        default: 'default',
    },
    textColor: {
        type: String,
        default: '',
    },
    fill: {
        type: String,
        default: '',
    },
} as const

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>

export const radioGroupEmits = {
    'update:modelValue': (_: string | number | boolean) => true,
    change: (_: string | number | boolean) => true,
}

export type RadioGroupEmits = typeof radioGroupEmits
