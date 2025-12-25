import type { ExtractPropTypes, PropType } from 'vue'

/**
 * 定义组件 Props 类型的工具函数
 */
export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>

/**
 * 构建 Props 定义
 */
export const buildProps = <Props extends Record<string, unknown>>(
    props: Props
): Record<keyof Props, unknown> => {
    return props as Record<keyof Props, unknown>
}

/**
 * 从 Props 定义中提取类型
 */
export type ExtractProps<T> = T extends { props: infer P } ? ExtractPropTypes<P> : never

/**
 * 可选的 String/Number 类型
 */
export const stringOrNumber = [String, Number] as PropType<string | number>

/**
 * 尺寸类型
 */
export type ComponentSize = 'large' | 'default' | 'small'

export const componentSizes = ['large', 'default', 'small'] as const

export const componentSizeProps = {
    type: String as PropType<ComponentSize>,
    default: 'default' as ComponentSize,
    validator: (val: string) => componentSizes.includes(val as ComponentSize),
}

/**
 * 组件状态类型
 */
export type ComponentStatus = 'primary' | 'success' | 'warning' | 'danger' | 'info'

export const componentStatuses = ['primary', 'success', 'warning', 'danger', 'info'] as const

/**
 * 禁用属性
 */
export const disabledProps = {
    type: Boolean,
    default: false,
}

/**
 * 加载属性
 */
export const loadingProps = {
    type: Boolean,
    default: false,
}
