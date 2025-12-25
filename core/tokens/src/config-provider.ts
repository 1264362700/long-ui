import type { InjectionKey, Ref } from 'vue'
import type { ComponentSize } from '@long-ui/utils'

export interface ConfigProviderProps {
    locale?: Record<string, any>
    size?: ComponentSize
    zIndex?: number
    namespace?: string
    button?: {
        autoInsertSpace?: boolean
    }
}

export const configProviderContextKey: InjectionKey<Ref<ConfigProviderProps>> = Symbol('configProviderContextKey')
