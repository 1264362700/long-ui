import type { ExtractPropTypes, PropType, VNode } from 'vue'

export const messageTypes = ['success', 'info', 'warning', 'error'] as const
export type MessageType = typeof messageTypes[number]

export const messageProps = {
    message: {
        type: [String, Object, Function] as PropType<string | VNode | (() => VNode)>,
    },
    type: {
        type: String as PropType<MessageType>,
        default: 'info',
    },
    duration: {
        type: Number,
        default: 3000,
    },
    showClose: {
        type: Boolean,
        default: false,
    },
    center: {
        type: Boolean,
        default: false,
    },
    offset: {
        type: Number,
        default: 20,
    },
    id: {
        type: String,
        default: '',
    },
    onClose: {
        type: Function as PropType<() => void>,
    },
} as const

export type MessageProps = ExtractPropTypes<typeof messageProps>

export const messageEmits = {
    destroy: () => true,
}
export type MessageEmits = typeof messageEmits
