import type { ExtractPropTypes, PropType } from 'vue'
import type { CollapseActiveName } from './collapse'

export const collapseItemProps = {
    title: {
        type: String,
        default: '',
    },
    name: {
        type: [String, Number] as PropType<CollapseActiveName>,
        default: '',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
} as const

export type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>
