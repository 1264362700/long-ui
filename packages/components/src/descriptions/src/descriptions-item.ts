import type { ExtractPropTypes } from 'vue'

export const descriptionsItemProps = {
    label: {
        type: String,
        default: ''
    },
    span: {
        type: Number,
        default: 1
    },
    copyable: {
        type: Boolean,
        default: false
    },
    value: {
        type: String,
        default: ''
    }
} as const

export type DescriptionsItemProps = ExtractPropTypes<typeof descriptionsItemProps>
