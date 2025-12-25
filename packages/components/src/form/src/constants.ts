import type { InjectionKey } from 'vue'
import type { RuleItem } from 'async-validator'

export interface FormProps {
    model: Record<string, any>
    rules?: Record<string, RuleItem[]>
    labelWidth?: string | number
    disabled?: boolean
    inline?: boolean
    size?: 'large' | 'default' | 'small'
    showMessage?: boolean
}

export interface FormContext extends FormProps {
    addField: (field: FormItemContext) => void
    removeField: (field: FormItemContext) => void
}

export interface FormItemContext {
    prop: string
    validate: (trigger: string) => Promise<any>
    resetField: () => void
    clearValidate: () => void
}

export const formContextKey: InjectionKey<FormContext> = Symbol('formContextKey')
export const formItemContextKey: InjectionKey<FormItemContext> = Symbol('formItemContextKey')
