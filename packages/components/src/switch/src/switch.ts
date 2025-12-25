import type { ExtractPropTypes, PropType } from 'vue'

export const switchProps = {
    modelValue: {
        type: [Boolean, String, Number] as PropType<boolean | string | number>,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    },
    activeValue: {
        type: [Boolean, String, Number] as PropType<boolean | string | number>,
        default: true
    },
    inactiveValue: {
        type: [Boolean, String, Number] as PropType<boolean | string | number>,
        default: false
    },
    activeText: String,
    inactiveText: String,
    activeColor: String,
    inactiveColor: String,
    size: {
        type: String as PropType<'large' | 'default' | 'small'>,
        default: 'default'
    }
} as const

export type SwitchProps = ExtractPropTypes<typeof switchProps>
export type SwitchEmits = {
    'update:modelValue': [value: boolean | string | number]
    'change': [value: boolean | string | number]
}
