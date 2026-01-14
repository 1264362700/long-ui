import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize } from '@long-ui/utils'

export type AvatarShape = 'circle' | 'square'
export type AvatarFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

export const avatarProps = {
    size: {
        type: [Number, String] as PropType<number | string | ComponentSize>,
        default: 'default',
    },
    shape: {
        type: String as PropType<AvatarShape>,
        default: 'circle',
    },
    src: {
        type: String,
        default: '',
    },
    alt: {
        type: String,
        default: '',
    },
    fit: {
        type: String as PropType<AvatarFit>,
        default: 'cover',
    },
    error: {
        type: Function as PropType<(e: Event) => boolean | void>,
        default: undefined,
    }
} as const

export type AvatarProps = ExtractPropTypes<typeof avatarProps>
