import type { ExtractPropTypes, PropType } from 'vue'

export const badgeProps = {
    value: [String, Number],
    max: {
        type: Number,
        default: 99
    },
    isDot: {
        type: Boolean,
        default: false
    },
    hidden: {
        type: Boolean,
        default: false
    },
    type: {
        type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'info'>,
        default: 'danger'
    }
} as const

export type BadgeProps = ExtractPropTypes<typeof badgeProps>
