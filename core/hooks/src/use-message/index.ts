import { getCurrentInstance } from 'vue'

/**
 * 使用全局消息提示的 hook
 */
export function useMessage() {
    const instance = getCurrentInstance()
    const message = instance?.appContext.config.globalProperties.$message

    return message
}
