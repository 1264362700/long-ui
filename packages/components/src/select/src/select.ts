import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize } from '@long-ui/utils'

export interface SelectOption {
    label: string
    value: string | number
    disabled?: boolean
}

export const selectProps = {
    modelValue: {
        type: [String, Number, Boolean, Array] as PropType<string | number | boolean | any[]>,
        default: '',
    },
    options: {
        type: Array as PropType<SelectOption[]>,
        default: () => [],
    },
    placeholder: {
        type: String,
        default: '请选择',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    clearable: {
        type: Boolean,
        default: false,
    },
    size: {
        type: String as PropType<ComponentSize>,
        default: 'default',
    },
    multiple: {
        type: Boolean,
        default: false,
    },
    filterable: {
        type: Boolean,
        default: false,
    },
} as const

export type SelectProps = ExtractPropTypes<typeof selectProps>

export const selectEmits = {
    'update:modelValue': (_value: any) => true,
    change: (_value: any) => true,
    clear: () => true,
    validator: (_: any) => true,
}

export type SelectEmits = typeof selectEmits
