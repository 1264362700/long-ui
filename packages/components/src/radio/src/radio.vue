<template>
    <label
        :class="[
            ns.b(),
            ns.is('disabled', isDisabled),
            ns.is('checked', modelValue === label),
            ns.is('bordered', border),
            ns.m(radioSize)
        ]"
    >
        <span
:class="[
            ns.e('input'),
            ns.is('disabled', isDisabled),
            ns.is('checked', modelValue === label)
        ]">
            <input
                ref="radioRef"
                v-model="modelValue"
                :class="ns.e('original')"
                type="radio"
                :value="label"
                :name="name"
                :disabled="isDisabled"
                @change="handleChange"
            />
            <span :class="ns.e('inner')"></span>
        </span>
        <span :class="ns.e('label')" @keydown.stop>
            <slot>{{ label }}</slot>
        </span>
    </label>
</template>

<script lang="ts" setup>
import { computed, inject, nextTick } from 'vue'
import { useNamespace } from '@long-ui/hooks'
import { radioProps, radioEmits } from './radio'

defineOptions({
    name: 'LongRadio',
})

const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)

const ns = useNamespace('radio')
const radioGroup = inject('LongRadioGroup', undefined) as any

const isGroup = computed(() => !!radioGroup)

const modelValue = computed({
    get() {
        return isGroup.value ? radioGroup.modelValue.value : props.modelValue
    },
    set(val) {
        if (isGroup.value) {
            radioGroup.changeEvent(val)
        } else {
            emit('update:modelValue', val)
        }
    },
})

const radioSize = computed(() => {
    return isGroup.value ? radioGroup.size.value : props.size
})

const isDisabled = computed(() => {
    return isGroup.value ? radioGroup.disabled.value || props.disabled : props.disabled
})

const handleChange = () => {
    nextTick(() => {
        emit('change', modelValue.value)
    })
}
</script>
