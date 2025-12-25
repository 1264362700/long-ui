import { createVNode, render, shallowReactive } from 'vue'
import MessageConstructor from './message.vue'
import type { MessageProps } from './message'

let seed = 1
const instances: any[] = shallowReactive([])

export const getLastOffset = (id: string): number => {
    const idx = instances.findIndex((instance) => instance.id === id)
    if (idx <= 0) return 0
    const prev = instances[idx - 1]
    return prev.vm.exposed!.bottom.value
}

export const Message = (options: Partial<MessageProps> | string) => {
    if (typeof options === 'string') {
        options = { message: options }
    }

    const id = `message_${seed++}`
    const container = document.createElement('div')

    const offset = options.offset || 20
    const verticalOffset = offset + getLastOffset(id)

    const props = {
        ...options,
        id,
        offset: verticalOffset,
        onClose: () => {
            close(id, options.onClose)
        },
        onDestroy: () => {
            render(null, container)
        },
    }

    const vnode = createVNode(MessageConstructor, props)
    render(vnode, container)
    document.body.appendChild(container.firstElementChild!)

    const vm = vnode.component!

    const instance = {
        id,
        vnode,
        vm,
        props: (vnode.component as any).props,
    }

    instances.push(instance)

    return instance
}

export const close = (id: string, userOnClose?: () => void) => {
    const idx = instances.findIndex((instance) => instance.id === id)
    if (idx === -1) return

    const instance = instances[idx]
    if (!instance) return

    userOnClose?.()

    instances.splice(idx, 1)

    // Adjust other instances vertical offset?
    // For simplicity, we are not adjusting others in this basic implementation
    // But in a real implementation we should adjust the offset of subsequent messages
}

export const closeAll = () => {
    for (let i = instances.length - 1; i >= 0; i--) {
        const instance = instances[i]
        instance.vm.exposed!.visible.value = false
    }
}

Message.closeAll = closeAll
