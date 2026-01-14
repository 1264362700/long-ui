import type { ExtractPropTypes, PropType } from 'vue'

export type DrawerDirection = 'rtl' | 'ltr' | 'ttb' | 'btt'

export const drawerProps = {
    modelValue: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        default: '',
    },
    direction: {
        type: String as PropType<DrawerDirection>,
        default: 'rtl',
    },
    size: {
        type: [String, Number] as PropType<string | number>,
        default: '30%',
    },
    withHeader: {
        type: Boolean,
        default: true,
    },
    modal: {
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
    destroyOnClose: {
        type: Boolean,
        default: false,
    },
    lockScroll: {
        type: Boolean,
        default: true,
    },
} as const

export type DrawerProps = ExtractPropTypes<typeof drawerProps>

export const drawerEmits = {
    'update:modelValue': (_: boolean) => true,
    close: () => true,
    open: () => true,
    opened: () => true,
    closed: () => true,
}

export type DrawerEmits = typeof drawerEmits
