import { ref, reactive } from 'vue'

export interface UseModalOptions<T = any> {
    initialData?: T
    onConfirm?: (data: T) => void | Promise<void>
    onCancel?: () => void
}

/**
 * 一个用于统筹管理 Modal/Dialog 状态的高阶逻辑钩子
 */
export function useModal<T = any>(options: UseModalOptions<T> = {}) {
    const visible = ref(false)
    const loading = ref(false)
    const data = reactive<any>(options.initialData || {})

    const open = (newData?: Partial<T>) => {
        if (newData) {
            Object.assign(data, newData)
        }
        visible.value = true
    }

    const close = () => {
        visible.value = false
        loading.value = false
    }

    const confirm = async () => {
        if (options.onConfirm) {
            loading.value = true
            try {
                await options.onConfirm(data)
                close()
            } finally {
                loading.value = false
            }
        } else {
            close()
        }
    }

    return {
        visible,
        loading,
        data,
        open,
        close,
        confirm
    }
}

export type UseModalReturn = ReturnType<typeof useModal>
