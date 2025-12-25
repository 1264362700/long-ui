import { ref } from 'vue'

/**
 * 一个用于切换布尔值的 hook
 * @param defaultValue 初始值
 * @returns [state, toggle, actions]
 */
export function useToggle(defaultValue = false) {
    const state = ref(defaultValue)

    const toggle = () => (state.value = !state.value)

    const set = (value: boolean) => (state.value = value)
    const setLeft = () => (state.value = false)
    const setRight = () => (state.value = true)

    return [state, toggle, { set, setLeft, setRight }] as const
}
