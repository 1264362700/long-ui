import type { ExtractPropTypes, PropType } from 'vue'

export const skeletonProps = {
    loading: {
        type: Boolean,
        default: true
    },
    animated: {
        type: Boolean,
        default: true
    },
    rows: {
        type: Number,
        default: 3
    }
} as const

export type SkeletonProps = ExtractPropTypes<typeof skeletonProps>
