import type { ExtractPropTypes, PropType } from 'vue'

export const alertTypes = ['success', 'info', 'warning', 'error'] as const
export type AlertType = typeof alertTypes[number]

export const alertProps = {
    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    type: {
        type: String as PropType<AlertType>,
        values: alertTypes,
        default: 'info'
    },
    closable: {
        type: Boolean,
        default: true
    },
    closeText: {
        type: String,
        default: ''
    },
    showIcon: {
        type: Boolean,
        default: false
    },
    center: {
        type: Boolean,
        default: false
    },
    effect: {
        type: String as PropType<'light' | 'dark'>,
        values: ['light', 'dark'],
        default: 'light'
    }
}

export type AlertProps = ExtractPropTypes<typeof alertProps>

export const alertEmits = {
    close: (evt: MouseEvent) => evt instanceof MouseEvent
}
export type AlertEmits = typeof alertEmits
