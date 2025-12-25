import type { ExtractPropTypes, PropType, CSSProperties } from 'vue'

export const cardProps = {
    title: String,
    shadow: {
        type: Boolean,
        default: true
    },
    bodyStyle: {
        type: Object as PropType<CSSProperties>,
        default: () => ({})
    }
} as const

export type CardProps = ExtractPropTypes<typeof cardProps>
