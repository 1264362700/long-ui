import { unref } from 'vue'
import type { MaybeRef } from 'vue'

/**
 * 默认命名空间
 */
export const defaultNamespace = 'long'

/**
 * BEM 规范命名空间管理
 *
 * @example
 * const ns = useNamespace('button')
 * ns.b() // 'long-button'
 * ns.e('icon') // 'long-button__icon'
 * ns.m('primary') // 'long-button--primary'
 * ns.be('icon', 'left') // 'long-button__icon--left'
 * ns.is('disabled') // 'is-disabled'
 * ns.cssVar('color') // '--long-button-color'
 */
export const useNamespace = (block: MaybeRef<string>, namespace = defaultNamespace) => {
    const ns = namespace

    /**
     * 生成 block 类名
     * @example ns.b() => 'long-button'
     */
    const b = () => {
        return `${ns}-${unref(block)}`
    }

    /**
     * 生成 element 类名
     * @example ns.e('icon') => 'long-button__icon'
     */
    const e = (element: string) => {
        return element ? `${b()}__${element}` : ''
    }

    /**
     * 生成 modifier 类名
     * @example ns.m('primary') => 'long-button--primary'
     */
    const m = (modifier: string) => {
        return modifier ? `${b()}--${modifier}` : ''
    }

    /**
     * 生成 block-element 类名
     * @example ns.be('icon', 'left') => 'long-button__icon'
     */
    const be = (element: string, modifier: string) => {
        return element && modifier ? `${b()}__${element}--${modifier}` : ''
    }

    /**
     * 生成 element-modifier 类名
     * @example ns.em('icon', 'primary') => 'long-button__icon--primary'
     */
    const em = (element: string, modifier: string) => {
        return element && modifier ? `${b()}__${element}--${modifier}` : ''
    }

    /**
     * 生成 block-modifier 类名
     * @example ns.bm('primary') => 'long-button--primary'
     */
    const bm = (modifier: string) => {
        return modifier ? `${b()}--${modifier}` : ''
    }

    /**
     * 生成 block-element-modifier 类名
     * @example ns.bem('icon', 'left', 'primary') => 'long-button__icon--left'
     */
    const bem = (element: string, modifier: string) => {
        return element && modifier ? `${b()}__${element}--${modifier}` : ''
    }

    /**
     * 生成 is-xxx 状态类名
     * @example ns.is('disabled') => 'is-disabled'
     * @example ns.is('active', true) => 'is-active'
     * @example ns.is('active', false) => ''
     */
    const is = (state: string, value = true): string => {
        return state && value ? `is-${state}` : ''
    }

    /**
     * 生成 CSS 变量名
     * @example ns.cssVar('color') => '--long-button-color'
     */
    const cssVar = (name: string) => {
        return `--${ns}-${unref(block)}-${name}`
    }

    /**
     * 生成 CSS 变量值对象
     * @example ns.cssVarBlock({ color: 'red' }) => { '--long-button-color': 'red' }
     */
    const cssVarBlock = (object: Record<string, string>) => {
        const styles: Record<string, string> = {}
        Object.entries(object).forEach(([key, value]) => {
            styles[cssVar(key)] = value
        })
        return styles
    }

    /**
     * 生成全局 CSS 变量名
     * @example ns.cssVarName('color-primary') => '--long-color-primary'
     */
    const cssVarName = (name: string) => {
        return `--${ns}-${name}`
    }

    return {
        namespace: ns,
        b,
        e,
        m,
        be,
        em,
        bm,
        bem,
        is,
        cssVar,
        cssVarBlock,
        cssVarName,
    }
}

export type UseNamespaceReturn = ReturnType<typeof useNamespace>
