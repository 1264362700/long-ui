import type { ExtractPropTypes, PropType } from 'vue'

export const paginationProps = {
    total: {
        type: Number,
        default: 0
    },
    pageSize: {
        type: Number,
        default: 10
    },
    currentPage: {
        type: Number,
        default: 1
    },
    pageSizes: {
        type: Array as PropType<number[]>,
        default: () => [10, 20, 50, 100]
    },
    layout: {
        type: String,
        default: 'prev, pager, next, total'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    background: {
        type: Boolean,
        default: false
    },
    small: {
        type: Boolean,
        default: false
    }
} as const

export type PaginationProps = ExtractPropTypes<typeof paginationProps>
export type PaginationEmits = {
    'update:currentPage': [page: number]
    'update:pageSize': [size: number]
    'change': [page: number, size: number]
}
