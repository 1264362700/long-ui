import { isClient, on } from './dom'

type DocumentHandler = <T extends MouseEvent>(mouseup: T, mousedown: T) => void
type FlushList = Map<
    HTMLElement,
    {
        documentHandler: DocumentHandler
        bindingFn: (...args: unknown[]) => unknown
    }
>

const nodeList: FlushList = new Map()

let startClick: MouseEvent

if (isClient) {
    on(document, 'mousedown', (e: Event) => (startClick = e as MouseEvent))
    on(document, 'mouseup', (e: Event) => {
        for (const { documentHandler } of nodeList.values()) {
            documentHandler(e as MouseEvent, startClick)
        }
    })
}

function createDocumentHandler(
    el: HTMLElement,
    binding: any
): DocumentHandler {
    return function (mouseup, mousedown) {
        const popperRef = (binding.instance as any).popperRef
        const mouseUpTarget = mouseup.target as Node
        const mouseDownTarget = mousedown?.target as Node
        const isBound = !binding || !binding.instance
        const isTargetExists = !mouseUpTarget || !mouseDownTarget
        const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget)
        const isSelf = el === mouseUpTarget

        const isTargetExcluded =
            (nodeList.size > 0 &&
                Array.from(nodeList.values()).some(
                    ({ bindingFn }) => bindingFn === binding.value
                )) ||
            (popperRef &&
                (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget)))

        if (
            isBound ||
            isTargetExists ||
            isContainedByEl ||
            isSelf ||
            isTargetExcluded
        ) {
            return
        }

        binding.value(mouseup, mousedown)
    }
}

export const ClickOutside = {
    beforeMount(el: HTMLElement, binding: any) {
        nodeList.set(el, {
            documentHandler: createDocumentHandler(el, binding),
            bindingFn: binding.value,
        })
    },
    updated(el: HTMLElement, binding: any) {
        nodeList.set(el, {
            documentHandler: createDocumentHandler(el, binding),
            bindingFn: binding.value,
        })
    },
    unmounted(el: HTMLElement) {
        nodeList.delete(el)
    },
}
