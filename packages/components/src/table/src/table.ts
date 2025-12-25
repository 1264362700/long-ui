import type { ExtractPropTypes, PropType } from 'vue'

export const tableProps = {
    data: {
        type: Array as PropType<any[]>,
        default: () => []
    },
    stripe: Boolean,
    border: Boolean,
    height: {
        type: [String, Number] as PropType<string | number>
    },
    rowKey: {
        type: String,
        default: 'id'
    },
    emptyText: {
        type: String,
        default: '暂无数据'
    },
    showHeader: {
        type: Boolean,
        default: true
    },
    fit: {
        type: Boolean,
        default: true
    }
} as const

export type TableProps = ExtractPropTypes<typeof tableProps>
