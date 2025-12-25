import { reactive, ref } from 'vue'

interface UseFormOptions<T> {
    initialValues: T
    rules?: any
}

export function useForm<T extends Record<string, any>>(options: UseFormOptions<T>) {
    const formModel = reactive({ ...options.initialValues })
    const formRef = ref<any>(null)

    const resetFields = () => {
        Object.keys(options.initialValues).forEach((key) => {
            (formModel as any)[key] = options.initialValues[key]
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

    return {
        formModel,
        formRef,
        resetFields,
        validate
    }
}

export type UseFormReturn = ReturnType<typeof useForm>
