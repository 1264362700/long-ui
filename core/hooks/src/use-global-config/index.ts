import { inject, ref, computed, unref } from 'vue'
import { configProviderContextKey } from '@long-ui/tokens'
import type { MaybeRef } from 'vue'
import type { ConfigProviderProps } from '@long-ui/tokens'

// 默认配置
const globalConfig = ref<ConfigProviderProps>({})

/**
 * 获取全局配置
 * @param key 配置键名
 * @param defaultValue 默认值
 */
export function useGlobalConfig<K extends keyof ConfigProviderProps>(
    key: K,
    defaultValue?: ConfigProviderProps[K]
) {
    const config = inject(configProviderContextKey, globalConfig)
    return computed(() => {
        return unref(config)?.[key] ?? defaultValue
    })
}

/**
 * 提供全局配置 (用于非组件环境)
 */
export function provideGlobalConfig(config: MaybeRef<ConfigProviderProps>) {
    globalConfig.value = unref(config)
}
