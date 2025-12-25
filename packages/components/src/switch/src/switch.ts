import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize } from '@long-ui/utils'

export const switchProps = {
    modelValue: {
        type: [Boolean, String, Number] as PropType<boolean | string | number>,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    },
    size: {
        type: String as PropType<ComponentSize>,
        default: 'default',
    },
    width: {
        type: [String, Number] as PropType<string | number>,
        default: '',
    },
    activeIcon: {
        type: String,
        default: '',
    },
    inactiveIcon: {
        type: String,
        default: '',
    },
    activeText: {
        type: String,
        default: '',
    },
    inactiveText: {
        type: String,
        default: '',
    },
    activeValue: {
        type: [Boolean, String, Number] as PropType<boolean | string | number>,
        default: true,
    },
    inactiveValue: {
        type: [Boolean, String, Number] as PropType<boolean | string | number>,
        default: false,
    },
    name: {
        type: String,
        default: '',
    },
    id: {
        type: String,
        default: '',
    },
} as const

export type SwitchProps = ExtractPropTypes<typeof switchProps>

export const switchEmits = {
    'update:modelValue': (_: boolean | string | number) => true,
    change: (_: boolean | string | number) => true,
}

export type SwitchEmits = typeof switchEmits
