import { ref, watch, type Ref } from 'vue'

export type StorageType = 'local' | 'session'

export function useStorage<T>(
    key: string,
    defaultValue: T,
    type: StorageType = 'local'
): Ref<T> {
    const storage = type === 'local' ? window.localStorage : window.sessionStorage

    const readValue = (): T => {
        const raw = storage.getItem(key)
        if (raw) {
            try {
                return JSON.parse(raw)
            } catch (e) {
                return raw as unknown as T
            }
        }
        return defaultValue
    }

    const data = ref<T>(readValue()) as Ref<T>

    watch(data, (newValue) => {
        if (newValue === null || newValue === undefined) {
            storage.removeItem(key)
        } else {
            storage.setItem(key, typeof newValue === 'string' ? newValue : JSON.stringify(newValue))
        }
    }, { deep: true })

    return data
}

export type UseStorageReturn = typeof useStorage
