import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize, ComponentStatus } from '@long-ui/utils'

/**
 * Button 类型
 */
export type ButtonType = ComponentStatus | 'primary' | 'danger' | 'default' | 'text'

/**
 * Button 原生类型
 */
export type ButtonNativeType = 'button' | 'submit' | 'reset'

/**
 * Button Props 定义
 */
export const buttonProps = {
    /**
     * 按钮类型
     */
    type: {
        type: String as PropType<ButtonType>,
        default: 'default',
    },
    /**
     * 按钮尺寸
     */
    size: {
        type: String as PropType<ComponentSize>,
        default: 'default',
    },
    /**
     * 是否禁用
     */
    disabled: {
        type: Boolean,
        default: false,
    },
    /**
     * 是否加载中
     */
    loading: {
        type: Boolean,
        default: false,
    },
    /**
     * 是否朴素按钮
     */
    plain: {
        type: Boolean,
        default: false,
    },
    /**
     * 是否圆角按钮
     */
    round: {
        type: Boolean,
        default: false,
    },
    /**
     * 是否圆形按钮
     */
    circle: {
        type: Boolean,
        default: false,
    },
    /**
     * 图标类名
     */
    icon: {
        type: String,
        default: '',
    },
    /**
     * 原生 type 属性
     */
    nativeType: {
        type: String as PropType<ButtonNativeType>,
        default: 'button',
    },
    /**
     * 自动聚焦
     */
    autofocus: {
        type: Boolean,
        default: false,
    },
    /**
     * 是否为块级元素
     */
    block: {
        type: Boolean,
        default: false,
    },
    /**
     * 自定义加载图标
     */
    loadingIcon: {
        type: String,
        default: '',
    },
    /**
     * 是否为链接按钮
     */
    link: {
        type: Boolean,
        default: false,
    },
    /**
     * 自定义渲染标签
     */
    tag: {
        type: String as PropType<keyof HTMLElementTagNameMap>,
        default: 'button',
    },
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

/**
 * Button Emits 定义
 */
export const buttonEmits = {
    click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type ButtonEmits = typeof buttonEmits
