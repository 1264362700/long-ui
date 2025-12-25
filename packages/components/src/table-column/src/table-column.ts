import type { ExtractPropTypes, PropType } from 'vue'

export const tableColumnProps = {
    prop: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
    width: {
        type: [String, Number] as PropType<string | number>,
        default: ''
    }
} as const

export type TableColumnProps = ExtractPropTypes<typeof tableColumnProps>
