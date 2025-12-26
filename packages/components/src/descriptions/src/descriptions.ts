import type { ExtractPropTypes, PropType } from 'vue'

export const descriptionsProps = {
    title: String,
    column: {
        type: Number,
        default: 3
    },
    border: {
        type: Boolean,
        default: false
    },
    labelStyle: {
        type: Object as PropType<Record<string, any>>,
        default: () => ({})
    },
    contentStyle: {
        type: Object as PropType<Record<string, any>>,
        default: () => ({})
    },
    direction: {
        type: String as PropType<'horizontal' | 'vertical'>,
        default: 'horizontal'
    }
} as const

export type DescriptionsProps = ExtractPropTypes<typeof descriptionsProps>
