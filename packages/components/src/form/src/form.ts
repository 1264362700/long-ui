import type { ExtractPropTypes, PropType } from 'vue'
import type { FormProps } from './constants'

export const formProps = {
    model: {
        type: Object as PropType<FormProps['model']>,
        default: () => ({})
    },
    rules: {
        type: Object as PropType<FormProps['rules']>,
        default: () => ({})
    },
    labelWidth: {
        type: [String, Number] as PropType<string | number>,
        default: ''
    },
    inline: Boolean,
    disabled: Boolean,
    size: {
        type: String as PropType<'large' | 'default' | 'small'>,
        default: 'default'
    },
    showMessage: {
        type: Boolean,
        default: true
    }
} as const

export type FormPropsType = ExtractPropTypes<typeof formProps>
