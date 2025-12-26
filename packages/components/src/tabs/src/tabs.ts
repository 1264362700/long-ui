import type { ExtractPropTypes, PropType, InjectionKey, Ref } from 'vue'

export type TabsPosition = 'top' | 'right' | 'bottom' | 'left'
export type TabsType = '' | 'card' | 'border-card'

export const tabsProps = {
    modelValue: {
        type: [String, Number] as PropType<string | number>,
        default: ''
    },
    type: {
        type: String as PropType<TabsType>,
        default: ''
    },
    tabPosition: {
        type: String as PropType<TabsPosition>,
        default: 'top'
    },
    onTabClick: {
        type: Function as PropType<(pane: any, ev: Event) => void>
    }
}

export const tabPaneProps = {
    label: {
        type: String,
        default: ''
    },
    name: {
        type: [String, Number] as PropType<string | number>,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    }
}

export interface TabsRootContext {
    props: ExtractPropTypes<typeof tabsProps>
    currentName: Ref<string | number>
    registerPane: (pane: any) => void
    unregisterPane: (name: string | number) => void
    handleTabClick: (pane: any, ev: Event) => void
}

export const TABS_ROOT_CTX_KEY: InjectionKey<TabsRootContext> = Symbol('tabsRootContextKey')

export type TabsProps = ExtractPropTypes<typeof tabsProps>
export type TabPaneProps = ExtractPropTypes<typeof tabPaneProps>
