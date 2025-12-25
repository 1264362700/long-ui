import type { ExtractPropTypes, PropType } from 'vue'

export const spaceProps = {
    direction: {
        type: String as PropType<'horizontal' | 'vertical'>,
        default: 'horizontal'
    },
    size: {
        type: [Number, String, Array] as PropType<number | string | [number, number]>,
        default: 8
    },
    wrap: {
        type: Boolean,
        default: false
    },
    align: {
        type: String as PropType<'start' | 'end' | 'center' | 'baseline'>,
    }
} as const

export type SpaceProps = ExtractPropTypes<typeof spaceProps>
