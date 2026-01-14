import type { ExtractPropTypes, PropType, InjectionKey, Ref } from 'vue'

export type CollapseActiveName = string | number
export type CollapseModelValue = CollapseActiveName | CollapseActiveName[]

export const collapseProps = {
    modelValue: {
        type: [Array, String, Number] as PropType<CollapseModelValue>,
        default: () => [],
    },
    accordion: {
        type: Boolean,
        default: false,
    },
} as const

export type CollapseProps = ExtractPropTypes<typeof collapseProps>

export const collapseEmits = {
    'update:modelValue': (value: CollapseModelValue) => true,
    change: (value: CollapseModelValue) => true,
}

export type CollapseEmits = typeof collapseEmits

export interface CollapseContext {
    activeNames: Ref<CollapseActiveName[]>
    handleItemClick: (name: CollapseActiveName) => void
}

export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey')
