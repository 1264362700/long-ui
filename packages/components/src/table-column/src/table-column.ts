import type { ExtractPropTypes, PropType, InjectionKey } from 'vue'

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

export const COLUMN_INJECTION_KEY: InjectionKey<any> = Symbol('LongTableColumn')

export type TableColumnProps = ExtractPropTypes<typeof tableColumnProps>
