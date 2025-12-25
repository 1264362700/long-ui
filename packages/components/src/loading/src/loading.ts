import type { ExtractPropTypes, PropType } from 'vue'

export const loadingProps = {
    loading: {
        type: Boolean,
        default: true
    },
    text: String,
    size: {
        type: String as PropType<'large' | 'default' | 'small'>,
        default: 'default'
    },
    fullscreen: {
        type: Boolean,
        default: false
    },
    background: String,
    textColor: String
} as const

export type LoadingProps = ExtractPropTypes<typeof loadingProps>
