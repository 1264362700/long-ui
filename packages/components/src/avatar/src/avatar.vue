<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useNamespace } from '@long-ui/hooks'
import { avatarProps } from './avatar'

defineOptions({
    name: 'LongAvatar',
})

const props = defineProps(avatarProps)
const emit = defineEmits(['error'])
const ns = useNamespace('avatar')

const hasLoadError = ref(false)

const avatarClass = computed(() => [
    ns.b(),
    ns.m(props.shape),
    { [ns.is('error')]: hasLoadError.value }
])

const sizeStyle = computed(() => {
    const { size } = props
    if (typeof size === 'number' || (typeof size === 'string' && !isNaN(Number(size)))) {
        const s = Number(size)
        return { width: `${s}px`, height: `${s}px`, lineHeight: `${s}px`, fontSize: `${s / 2}px` }
    }
    // Handle string sizes like 'large', 'small' or css units if needed, 
    // but for now let's assume raw numbers or default class handling for presorted sizes
    return {}
})

const fitStyle = computed(() => ({
    objectFit: props.fit,
}))

watch(() => props.src, () => {
    hasLoadError.value = false
})

const handleError = (e: Event) => {
    hasLoadError.value = true
    emit('error', e)
    if (props.error) {
        props.error(e)
    }
}
</script>

<template>
    <span :class="avatarClass" :style="sizeStyle">
        <img v-if="props.src && !hasLoadError" :src="props.src" :alt="props.alt" :style="fitStyle"
            @error="handleError" />
        <slot v-else />
    </span>
</template>
