import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize } from '@long-ui/utils'

export const inputNumberProps = {
    modelValue: {
        type: Number,
        default: 0,
    },
    min: {
        type: Number,
        default: -Infinity,
    },
    max: {
        type: Number,
        default: Infinity,
    },
    step: {
        type: Number,
        default: 1,
    },
    stepStrictly: {
        type: Boolean,
        default: false,
    },
    precision: {
        type: Number,
        validator: (val: number) => val >= 0 && val === parseInt(`${val}`, 10),
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    controls: {
        type: Boolean,
        default: true,
    },
    controlsPosition: {
        type: String as PropType<'' | 'right'>,
        default: '',
    },
    name: String,
    label: String,
    placeholder: String,
    size: {
        type: String as PropType<ComponentSize>,
        default: 'default',
    },
} as const

export type InputNumberProps = ExtractPropTypes<typeof inputNumberProps>

export const inputNumberEmits = {
    'update:modelValue': (_: number) => true,
    change: (_: number, __: number) => true,
    input: (_: number) => true,
    blur: (_: FocusEvent) => true,
    focus: (_: FocusEvent) => true,
}

export type InputNumberEmits = typeof inputNumberEmits
