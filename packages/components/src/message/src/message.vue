<template>
    <transition name="long-message-fade" @before-leave="onClose" @after-leave="$emit('destroy')">
        <div
            v-show="visible"
            :id="id"
            :class="[
                ns.b(),
                ns.m(type),
                ns.is('center', center),
                ns.is('closable', showClose),
            ]"
            :style="{ top: offset + 'px' }"
            role="alert"
        >
            <long-icon v-if="iconComponent" :class="ns.e('icon')">
                <component :is="iconComponent" />
            </long-icon>
            <slot>
                <p v-if="!dangerouslyUseHTMLString" :class="ns.e('content')">
                    {{ message }}
                </p>
                <p v-else :class="ns.e('content')" v-html="message" />
            </slot>
            <long-icon v-if="showClose" :class="ns.e('closeBtn')" @click.stop="close">
                <CloseIcon />
            </long-icon>
        </div>
    </transition>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useNamespace } from '@long-ui/hooks'
import { LongIcon } from '@long-ui/components'
import {
    InfoFilled,
    SuccessFilled,
    WarningFilled,
    CircleCloseFilled,
    CloseIcon,
} from '@long-ui/icons'
import { messageProps, messageEmits } from './message'

defineOptions({
    name: 'LongMessage',
})

const props = defineProps(messageProps)
defineEmits(messageEmits)

const ns = useNamespace('message')
const visible = ref(false)
const height = ref(0)
// For now we don't support dangerouslyUseHTMLString in props, but keeping it in template logic for future
const dangerouslyUseHTMLString = ref(false)

const iconComponent = computed(() => {
    const type = props.type
    const typeMap: Record<string, any> = {
        info: InfoFilled,
        success: SuccessFilled,
        warning: WarningFilled,
        error: CircleCloseFilled,
    }
    return typeMap[type] || InfoFilled
})

const bottom = computed(() => height.value + props.offset)

const close = () => {
    visible.value = false
}

const startTimer = () => {
    if (props.duration > 0) {
        setTimeout(() => {
            close()
        }, props.duration)
    }
}

onMounted(() => {
    startTimer()
    visible.value = true
})

defineExpose({
    visible,
    bottom,
    close,
})
</script>
