import type { ExtractPropTypes, PropType } from 'vue'
import type { RuleItem } from 'async-validator'

export const formItemProps = {
    prop: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
    labelWidth: {
        type: [String, Number] as PropType<string | number>,
        default: ''
    },
    required: {
        type: Boolean,
        default: undefined
    },
    rules: {
        type: [Object, Array] as PropType<RuleItem | RuleItem[]>
    },
    error: String,
    showMessage: {
        type: Boolean,
        default: true
    },
    size: {
        type: String as PropType<'large' | 'default' | 'small'>
    },
    for: String
} as const

export type FormItemProps = ExtractPropTypes<typeof formItemProps>
