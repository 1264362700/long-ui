<template>
    <teleport to="body">
        <transition name="drawer-fade" @after-enter="afterEnter" @after-leave="afterLeave">
            <div v-show="visible" :class="ns.e('wrapper')" @click.self="handleCloseModal">
                <div :class="ns.e('overlay')" v-if="modal"></div>
                <div ref="drawerRef" :class="[ns.b(), ns.m(direction)]" :style="style" role="dialog" aria-modal="true"
                    :aria-label="title || 'drawer'" @click.stop>
                    <header v-if="withHeader" :class="ns.e('header')">
                        <slot name="header">
                            <span :class="ns.e('title')">{{ title }}</span>
                        </slot>
                        <button v-if="showClose" type="button" :class="ns.e('close-btn')" aria-label="Close"
                            @click="handleClose">
                            <long-icon class="close-icon">
                                <CloseIcon />
                            </long-icon>
                        </button>
                    </header>
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
import { drawerProps, drawerEmits } from './drawer'
import { addUnit } from '@long-ui/utils'

defineOptions({
    name: 'LongDrawer',
})

const props = defineProps(drawerProps)
const emit = defineEmits(drawerEmits)

const ns = useNamespace('drawer')
const visible = ref(false)
const drawerRef = ref<HTMLElement>()

useLockscreen(visible)

const style = computed(() => {
    const style: Record<string, string> = {}
    const isHorizontal = props.direction === 'rtl' || props.direction === 'ltr'
    if (isHorizontal) {
        style.width = addUnit(props.size)
    } else {
        style.height = addUnit(props.size)
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
