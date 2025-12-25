import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize } from '@long-ui/utils'

export const checkboxProps = {
    modelValue: {
        type: [Boolean, String, Number] as PropType<boolean | string | number>,
        default: undefined,
    },
    label: {
        type: [String, Boolean, Number, Object] as PropType<string | boolean | number | object>,
    },
    trueLabel: {
        type: [String, Number] as PropType<string | number>,
        default: undefined,
    },
    falseLabel: {
        type: [String, Number] as PropType<string | number>,
        default: undefined,
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
        default: undefined,
    },
    checked: {
        type: Boolean,
        default: false,
    },
    indeterminate: {
        type: Boolean,
        default: false,
    },
} as const

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>

export const checkboxEmits = {
    'update:modelValue': (_: boolean | string | number) => true,
    change: (_: boolean | string | number) => true,
}

export type CheckboxEmits = typeof checkboxEmits

export const checkboxGroupProps = {
    modelValue: {
        type: Array as PropType<Array<string | number>>,
        validator: (_: any) => true,
    },
    disabled: {
        type: Boolean,
        validator: (_: any) => true,
    },
    trueLabel: {
        type: [String, Number, Boolean] as PropType<string | number | boolean>,
        default: undefined,
    },
    falseLabel: {
        type: [String, Number, Boolean] as PropType<string | number | boolean>,
        default: undefined,
    },
    size: {
        type: String as PropType<ComponentSize>,
        default: 'default',
    },
    fill: {
        type: String,
        default: undefined,
    },
    textColor: {
        type: String,
        default: undefined,
    },
} as const

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>

export const checkboxGroupEmits = {
    'update:modelValue': (_: Array<string | number>) => true,
    change: (_: Array<string | number>) => true,
}

export type CheckboxGroupEmits = typeof checkboxGroupEmits
