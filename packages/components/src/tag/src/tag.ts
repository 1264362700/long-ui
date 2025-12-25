import type { ExtractPropTypes, PropType } from 'vue'

export const tagProps = {
    type: {
        type: String as PropType<'success' | 'info' | 'warning' | 'error' | 'primary'>,
        default: 'primary'
    },
    closable: {
        type: Boolean,
        default: false
    },
    color: String,
    borderColor: String,
    textColor: String,
    round: {
        type: Boolean,
        default: false
    },
    size: {
        type: String as PropType<'large' | 'default' | 'small'>,
        default: 'default'
    }
} as const

export type TagProps = ExtractPropTypes<typeof tagProps>
export type TagEmits = {
    close: [evt: MouseEvent]
    click: [evt: MouseEvent]
}
