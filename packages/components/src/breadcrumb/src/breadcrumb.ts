import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'

export const breadcrumbProps = {
    separator: {
        type: String,
        default: '/',
    },
    separatorIcon: {
        type: String,
        default: '',
    },
} as const

export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>

export const breadcrumbKey: InjectionKey<BreadcrumbProps> = Symbol('breadcrumbKey')
