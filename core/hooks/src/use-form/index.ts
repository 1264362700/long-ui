import { reactive, ref } from 'vue'

interface UseFormOptions<T> {
    initialValues: T
    rules?: any
}

export function useForm<T extends Record<string, any>>(options: UseFormOptions<T>) {
    const formModel = reactive({ ...options.initialValues })
    const formRef = ref<any>(null)
    const isSubmitting = ref(false)

    const resetFields = () => {
        Object.keys(options.initialValues).forEach((key) => {
            ; (formModel as any)[key] = options.initialValues[key]
        })
        if (formRef.value) {
            formRef.value.clearValidate?.()
        }
    }

    const validate = async () => {
        if (!formRef.value) return true
        try {
            await formRef.value.validate()
            return true
        } catch (error) {
            return false
        }
    }

    /**
     * 自动化的提交包装器
     */
    const handleSubmit = async (onSubmit: (values: T) => void | Promise<void>) => {
        const isValid = await validate()
        if (!isValid) return

        isSubmitting.value = true
        try {
            await onSubmit({ ...formModel } as T)
        } finally {
            isSubmitting.value = false
        }
    }

    return {
        formModel,
        formRef,
        isSubmitting,
        resetFields,
        validate,
        handleSubmit
    }
}

export type UseFormReturn = ReturnType<typeof useForm>
