<template>
    <teleport to="body" :disabled="!appendToBody">
        <transition name="dialog-fade" @after-enter="afterEnter" @after-leave="afterLeave">
            <div
                v-show="visible"
                class="long-dialog__wrapper"
                @click.self="handleCloseModal"
            >
                <div
                    ref="dialogRef"
                    :class="[ns.b(), ns.is('fullscreen', fullscreen), ns.is('center', center)]"
                    :style="style"
                    role="dialog"
                    aria-modal="true"
                    :aria-label="title || 'dialog'"
                    @click.stop
                >
                    <div :class="ns.e('header')">
                        <slot name="header">
                            <span :class="ns.e('title')">
                                {{ title }}
                            </span>
                        </slot>
                        <button
                            v-if="showClose"
                            type="button"
                            :class="ns.e('headerbtn')"
                            aria-label="Close"
                            @click="handleClose"
                        >
                            <long-icon :class="ns.e('close')">
                                <CloseIcon />
                            </long-icon>
                        </button>
                    </div>
                    <div :class="ns.e('body')">
                        <slot />
                    </div>
                    <div v-if="$slots.footer" :class="ns.e('footer')">
                        <slot name="footer" />
                    </div>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script lang="ts" setup>
import { computed, ref, watch, onMounted } from 'vue'
import { useNamespace, useLockscreen } from '@long-ui/hooks'
import { LongIcon } from '@long-ui/components'
import { CloseIcon } from '@long-ui/icons'
import { dialogEmits, dialogProps } from './dialog'
import { addUnit } from '@long-ui/utils'

defineOptions({
    name: 'LongDialog',
})

const props = defineProps(dialogProps)
const emit = defineEmits(dialogEmits)

const ns = useNamespace('dialog')
const visible = ref(false)
const dialogRef = ref<HTMLElement>()

useLockscreen(visible)

const style = computed(() => {
    const style: Record<string, string> = {}
    if (!props.fullscreen) {
        style.marginTop = props.top
        if (props.width) {
            style.width = addUnit(props.width)
        }
    }
    return style
})

watch(
    () => props.modelValue,
    (val) => {
        if (val) {
            visible.value = true
            emit('open')
        } else {
            visible.value = false
            emit('close')
        }
    }
)

const afterEnter = () => {
    emit('opened')
}

const afterLeave = () => {
    emit('closed')
}

const handleClose = () => {
    if (props.beforeClose) {
        props.beforeClose(hide)
    } else {
        hide()
    }
}

const hide = () => {
    emit('update:modelValue', false)
}

const handleCloseModal = () => {
    if (props.closeOnClickModal) {
        handleClose()
    }
}

onMounted(() => {
    if (props.modelValue) {
        visible.value = true
        emit('open')
    }
    
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && props.modelValue && props.closeOnPressEscape) {
            handleClose()
        }
    })
})
</script>
