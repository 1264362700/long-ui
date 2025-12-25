import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize } from '@long-ui/utils'

export type InputType = 'text' | 'textarea' | 'password' | 'number'

export const inputProps = {
    modelValue: {
        type: [String, Number] as PropType<string | number>,
        default: '',
    },
    type: {
        type: String as PropType<InputType>,
        default: 'text',
    },
    size: {
        type: String as PropType<ComponentSize>,
        default: 'default',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    placeholder: {
        type: String,
        default: '',
    },
    readonly: {
        type: Boolean,
        default: false,
    },
    clearable: {
        type: Boolean,
        default: false,
    },
    prefixIcon: {
        type: String,
        default: '',
    },
    suffixIcon: {
        type: String,
        default: '',
    },
    showPassword: {
        type: Boolean,
        default: false,
    },
    maxlength: {
        type: [String, Number] as PropType<string | number>,
    },
    showWordLimit: {
        type: Boolean,
        default: false,
    },
    autocomplete: {
        type: String,
        default: 'off',
    },
    name: String,
} as const

export type InputProps = ExtractPropTypes<typeof inputProps>

export const inputEmits = {
    'update:modelValue': (_value: string | number) => true,
    input: (_value: string | number) => true,
    validator: (_: any) => true,
    change: (_value: string | number) => true,
    focus: (evt: FocusEvent) => evt instanceof FocusEvent,
    blur: (evt: FocusEvent) => evt instanceof FocusEvent,
    clear: () => true,
}

export type InputEmits = typeof inputEmits
