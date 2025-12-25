import { computed, ref } from 'vue'

/**
 * z-index 管理
 * 用于管理弹出层、模态框等组件的 z-index
 */

const zIndex = ref(0)

/**
 * 获取并递增 z-index
 * @param initialValue 初始值，默认 2000
 */
export const useZIndex = (initialValue = 2000) => {
    const initialZIndex = ref(initialValue)
    const currentZIndex = computed(() => initialZIndex.value + zIndex.value)

    const nextZIndex = () => {
        zIndex.value++
        return currentZIndex.value
    }

    return {
        initialZIndex,
        currentZIndex,
        nextZIndex,
    }
}

export type UseZIndexReturn = ReturnType<typeof useZIndex>
