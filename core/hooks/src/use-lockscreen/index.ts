import { onBeforeUnmount, onMounted, watch } from 'vue'
import type { Ref } from 'vue'
import { addClass, hasClass, isClient, removeClass } from '@long-ui/utils'

/**
 * 锁定页面滚动
 * 用于模态框、抽屉等组件
 */
export const useLockscreen = (trigger: Ref<boolean>) => {
    if (!isClient) return

    let scrollBarWidth = 0
    let withoutHiddenClass = false
    let bodyPaddingRight = ''
    let computedBodyPaddingRight = 0

    const cleanup = () => {
        if (isClient && withoutHiddenClass) {
            document.body.style.paddingRight = bodyPaddingRight
            removeClass(document.body, 'long-popup-parent--hidden')
        }
    }

    const lock = () => {
        if (!isClient) return

        withoutHiddenClass = !hasClass(document.body, 'long-popup-parent--hidden')

        if (withoutHiddenClass) {
            bodyPaddingRight = document.body.style.paddingRight
            computedBodyPaddingRight = parseInt(
                getComputedStyle(document.body).paddingRight,
                10
            )

            scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
            document.body.style.paddingRight = `${computedBodyPaddingRight + scrollBarWidth} px`
            addClass(document.body, 'long-popup-parent--hidden')
        }
    }

    const unlock = () => {
        cleanup()
    }

    watch(trigger, (val) => {
        if (val) {
            lock()
        } else {
            unlock()
        }
    })

    onMounted(() => {
        if (trigger.value) {
            lock()
        }
    })

    onBeforeUnmount(() => {
        cleanup()
    })
}
