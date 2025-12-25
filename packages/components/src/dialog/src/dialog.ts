import type { ExtractPropTypes, PropType } from 'vue'

export const dialogProps = {
    modelValue: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        default: '',
    },
    width: {
        type: [String, Number] as PropType<string | number>,
        default: '50%',
    },
    fullscreen: {
        type: Boolean,
        default: false,
    },
    top: {
        type: String,
        default: '15vh',
    },
    modal: {
        type: Boolean,
        default: true,
    },
    appendToBody: {
        type: Boolean,
        default: true,
    },
    lockScroll: {
        type: Boolean,
        default: true,
    },
    closeOnClickModal: {
        type: Boolean,
        default: true,
    },
    closeOnPressEscape: {
        type: Boolean,
        default: true,
    },
    showClose: {
        type: Boolean,
        default: true,
    },
    beforeClose: {
        type: Function as PropType<(...args: any[]) => any>,
    },
    center: {
        type: Boolean,
        default: false,
    },
    alignCenter: {
        type: Boolean,
        default: false,
    },
    draggable: {
        type: Boolean,
        default: false,
    },
} as const

export type DialogProps = ExtractPropTypes<typeof dialogProps>

export const dialogEmits = {
    'update:modelValue': (_: boolean) => true,
    close: () => true,
    open: () => true,
    opened: () => true,
    closed: () => true,
}

export type DialogEmits = typeof dialogEmits
