import { ref, onMounted, type Ref } from 'vue'

export interface UseRequestOptions<T, P extends any[]> {
    manual?: boolean
    defaultParams?: P
    onSuccess?: (data: T, params: P) => void
    onError?: (e: Error, params: P) => void
}

export interface UseRequestReturn<T, P extends any[]> {
    data: Ref<T | null>
    loading: Ref<boolean>
    error: Ref<Error | null>
    params: Ref<P>
    run: (...args: P) => Promise<T>
}

export function useRequest<T, P extends any[]>(
    service: (...args: P) => Promise<T>,
    options: UseRequestOptions<T, P> = {}
): UseRequestReturn<T, P> {
    const {
        manual = false,
        defaultParams = [] as unknown as P,
        onSuccess,
        onError
    } = options

    const data = ref<T | null>(null)
    const loading = ref(false)
    const error = ref<Error | null>(null)
    const params = ref<P>(defaultParams)

    const run = async (...args: P) => {
        loading.value = true
        error.value = null
        params.value = args

        try {
            const res = await service(...args)
            data.value = res
            onSuccess?.(res, args)
            return res
        } catch (e: any) {
            error.value = e
            onError?.(e, args)
            throw e
        } finally {
            loading.value = false
        }
    }

    onMounted(() => {
        if (!manual) {
            run(...(defaultParams as P))
        }
    })

    return {
        data,
        loading,
        error,
        params,
        run
    }
}

export type UseRequestReturnT<T, P extends any[]> = UseRequestReturn<T, P>
