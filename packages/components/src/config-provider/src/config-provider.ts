import type { ExtractPropTypes, PropType, InjectionKey, Ref } from 'vue'
import type { ComponentSize } from '@long-ui/utils'

export interface ConfigProviderProps {
    /**
     * 语言配置
     */
    locale?: Record<string, any>
    /**
     * 组件尺寸
     */
    size?: ComponentSize
    /**
     * 初始 z-index
     */
    zIndex?: number
    /**
     * 命名空间
     */
    namespace?: string
    /**
     * 按钮相关配置
     */
    button?: {
        autoInsertSpace?: boolean
    }
}

export const configProviderProps = {
    locale: {
        type: Object as PropType<ConfigProviderProps['locale']>,
    },
    size: {
        type: String as PropType<ConfigProviderProps['size']>,
    },
    zIndex: {
        type: Number,
    },
    namespace: {
        type: String,
        default: 'long',
    },
    button: {
        type: Object as PropType<ConfigProviderProps['button']>,
    },
} as const

export type ConfigProviderPropsType = ExtractPropTypes<typeof configProviderProps>

export const configProviderContextKey: InjectionKey<Ref<ConfigProviderProps>> = Symbol()
