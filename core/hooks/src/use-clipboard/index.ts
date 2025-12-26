import { ref } from 'vue'
import { useMessage } from '../use-message'

/**
 * 一个简单实用的剪贴板 hook
 */
export function useClipboard() {
    const isSupported = ref(!!navigator.clipboard)
    const message = useMessage()

    const copy = async (text: string) => {
        if (!isSupported.value) {
            message?.error('当前浏览器不支持剪贴板操作')
            return false
        }

        try {
            await navigator.clipboard.writeText(text)
            message?.success('已成功复制到剪贴板')
            return true
        } catch (err) {
            message?.error('复制失败')
            return false
        }
    }

    return {
        copy,
        isSupported
    }
}
