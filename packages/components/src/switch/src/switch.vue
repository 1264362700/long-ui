<template>
    <div
        :class="[
            ns.b(),
            ns.m(size),
            ns.is('disabled', disabled),
            ns.is('checked', checked)
        ]"
        @click="switchValue"
    >
        <input
            :id="id"
            ref="input"
            :class="ns.e('input')"
            type="checkbox"
            :name="name"
            :true-value="activeValue"
            :false-value="inactiveValue"
            :disabled="disabled"
            @change="handleChange"
            @keydown.enter="switchValue"
        />
        
        <span
            v-if="inactiveIcon || inactiveText"
            :class="[
                ns.e('label'),
                ns.e('label--left'),
                ns.is('active', !checked)
            ]"
        >
            <i v-if="inactiveIcon" :class="inactiveIcon"></i>
            <span v-if="!inactiveIcon && inactiveText">{{ inactiveText }}</span>
        </span>

        <span :class="ns.e('core')" :style="coreStyle">
            <div :class="ns.e('action')">
                <i v-if="loading" class="long-icon-loading"></i>
            </div>
        </span>

        <span
            v-if="activeIcon || activeText"
            :class="[
                ns.e('label'),
                ns.e('label--right'),
                ns.is('active', checked)
            ]"
        >
            <i v-if="activeIcon" :class="activeIcon"></i>
            <span v-if="!activeIcon && activeText">{{ activeText }}</span>
        </span>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, nextTick, watch } from 'vue'
import { useNamespace } from '@long-ui/hooks'
import { switchProps, switchEmits } from './switch'

defineOptions({
    name: 'LongSwitch',
})

const props = defineProps(switchProps)
const emit = defineEmits(switchEmits)

const ns = useNamespace('switch')
const input = ref<HTMLInputElement>()

const checked = computed(() => props.modelValue === props.activeValue)

const coreStyle = computed(() => {
    return {
        width: props.width ? `${props.width}px` : '',
    }
})

const handleChange = () => {
    const val = checked.value ? props.inactiveValue : props.activeValue
    emit('update:modelValue', val)
    emit('change', val)
    nextTick(() => {
        input.value!.checked = checked.value
    })
}

const switchValue = () => {
    if (props.disabled || props.loading) return
    handleChange()
}

watch(
    () => props.modelValue,
    () => {
        if (input.value) {
            input.value.checked = checked.value
        }
    }
)
</script>
