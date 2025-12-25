import { isNumber, isString } from './types'

/**
 * 判断是否在浏览器环境
 */
export const isClient = typeof window !== 'undefined'

/**
 * 判断是否在服务端环境
 */
export const isServer = !isClient

/**
 * 添加事件监听器
 */
export const on = (
    element: Element | HTMLElement | Window | Document,
    event: string,
    handler: EventListenerOrEventListenerObject,
    options: boolean | AddEventListenerOptions = false
): void => {
    if (element && event && handler) {
        element.addEventListener(event, handler, options)
    }
}

/**
 * 移除事件监听器
 */
export const off = (
    element: Element | HTMLElement | Window | Document,
    event: string,
    handler: EventListenerOrEventListenerObject,
    options: boolean | EventListenerOptions = false
): void => {
    if (element && event && handler) {
        element.removeEventListener(event, handler, options)
    }
}

/**
 * 获取元素的滚动容器
 */
export const getScrollContainer = (
    el: HTMLElement,
    isVertical?: boolean
): Window | HTMLElement | undefined => {
    if (isServer) return undefined

    let parent: HTMLElement | null = el

    while (parent) {
        if ([window, document, document.documentElement].includes(parent as any)) {
            return window
        }

        if (isScroll(parent, isVertical)) {
            return parent
        }

        parent = parent.parentNode as HTMLElement
    }

    return parent || undefined
}

/**
 * 判断元素是否可滚动
 */
export const isScroll = (el: HTMLElement, isVertical?: boolean): boolean => {
    if (isServer) return false

    const key = {
        undefined: 'overflow',
        true: 'overflow-y',
        false: 'overflow-x',
    }[String(isVertical)]!

    const overflow = getComputedStyle(el)[key as keyof CSSStyleDeclaration]
    return ['scroll', 'auto', 'overlay'].some((s) => (overflow as string).includes(s))
}

/**
 * 添加 class
 */
export const addClass = (el: HTMLElement, cls: string): void => {
    if (!el || !cls.trim()) return
    el.classList.add(...cls.split(' ').filter(Boolean))
}

/**
 * 移除 class
 */
export const removeClass = (el: HTMLElement, cls: string): void => {
    if (!el || !cls.trim()) return
    el.classList.remove(...cls.split(' ').filter(Boolean))
}

/**
 * 判断是否包含 class
 */
export const hasClass = (el: HTMLElement, cls: string): boolean => {
    if (!el || !cls) return false
    return el.classList.contains(cls)
}

/**
 * 获取元素样式
 */
export const getStyle = (element: HTMLElement, styleName: keyof CSSStyleDeclaration): string => {
    if (isServer || !element || !styleName) return ''

    const key = styleName as string
    if (key === 'float') {
        return element.style.cssFloat || ''
    }

    try {
        const style = element.style[styleName]
        if (style) return style as string
        const computed = document.defaultView?.getComputedStyle(element, '')
        return computed ? (computed[styleName] as string) : ''
    } catch {
        return element.style[styleName] as string
    }
}

/**
 * 设置元素样式
 */
export const setStyle = (
    element: HTMLElement,
    styleName: string | Record<string, string>,
    value?: string
): void => {
    if (!element || !styleName) return

    if (isString(styleName)) {
        element.style[styleName as any] = value ?? ''
    } else {
        Object.entries(styleName).forEach(([key, val]) => {
            element.style[key as any] = val
        })
    }
}

/**
 * 添加单位
 */
export const addUnit = (value: string | number, defaultUnit = 'px'): string => {
    if (!value) return ''
    if (isString(value)) {
        return value
    } else if (isNumber(value)) {
        return `${value}${defaultUnit}`
    }
    return ''
}
