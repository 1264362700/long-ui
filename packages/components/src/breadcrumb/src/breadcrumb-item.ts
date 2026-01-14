import type { ExtractPropTypes, PropType } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export const breadcrumbItemProps = {
    to: {
        type: [String, Object] as PropType<RouteLocationRaw>,
        default: '',
    },
    replace: {
        type: Boolean,
        default: false,
    },
} as const

export type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>
