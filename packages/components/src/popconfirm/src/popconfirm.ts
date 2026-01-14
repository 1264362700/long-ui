import type { ExtractPropTypes, PropType, Component } from 'vue'

export const popconfirmProps = {
    title: {
        type: String,
        default: '',
    },
    confirmButtonText: {
        type: String,
        default: 'Confirm',
    },
    cancelButtonText: {
        type: String,
        default: 'Cancel',
    },
    confirmButtonType: {
        type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'>,
        default: 'primary',
    },
    cancelButtonType: {
        type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'>,
        default: 'text',
    },
    icon: {
        type: [String, Object] as PropType<string | Component>,
        default: '',
    },
    iconColor: {
        type: String,
        default: '#f90',
    },
    hideIcon: {
        type: Boolean,
        default: false,
    },
} as const

export type PopconfirmProps = ExtractPropTypes<typeof popconfirmProps>

export const popconfirmEmits = {
    confirm: () => true,
    cancel: () => true,
}

export type PopconfirmEmits = typeof popconfirmEmits
