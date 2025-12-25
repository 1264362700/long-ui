<template>
    <label
        :class="[
            ns.b(),
            ns.is('disabled', isDisabled),
            ns.is('bordered', border),
            ns.is('checked', isChecked),
            ns.m(checkboxSize)
        ]"
    >
        <span
            :class="[
                ns.e('input'),
                ns.is('disabled', isDisabled),
                ns.is('checked', isChecked),
                ns.is('indeterminate', indeterminate)
            ]"
        >
            <input
                v-if="trueLabel || falseLabel"
                v-model="model"
                :class="ns.e('original')"
                type="checkbox"
                :name="name"
                :disabled="isDisabled"
                :true-value="trueLabel"
                :false-value="falseLabel"
                @change="handleChange"
            />
            <input
                v-else
                v-model="model"
                :class="ns.e('original')"
                type="checkbox"
                :name="name"
                :disabled="isDisabled"
                :value="label"
                @change="handleChange"
            />
            <span :class="ns.e('inner')"></span>
        </span>
        <span v-if="$slots.default || label" :class="ns.e('label')">
            <slot>{{ label }}</slot>
        </span>
    </label>
</template>

<script lang="ts" setup>
import { computed, inject, nextTick } from 'vue'
import { useNamespace } from '@long-ui/hooks'
import { checkboxProps, checkboxEmits } from './checkbox'

defineOptions({
    name: 'LongCheckbox',
})

const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)

const ns = useNamespace('checkbox')
const checkboxGroup = inject('LongCheckboxGroup', undefined) as any

const isGroup = computed(() => !!checkboxGroup)

const model = computed({
    get() {
        return isGroup.value ? checkboxGroup.modelValue.value : props.modelValue
    },
    set(val) {
        if (isGroup.value) {
            checkboxGroup.changeEvent(val)
        } else {
            emit('update:modelValue', val)
        }
    },
})

const isChecked = computed(() => {
    if (isGroup.value) {
        return model.value.includes(props.label)
    } else if (props.trueLabel || props.falseLabel) {
        return model.value === props.trueLabel
    } else {
        return !!model.value
    }
})

const checkboxSize = computed(() => {
    return isGroup.value ? checkboxGroup.size.value : props.size
})

const isDisabled = computed(() => {
    return isGroup.value ? checkboxGroup.disabled.value || props.disabled : props.disabled
})

const handleChange = (e: Event) => {
    nextTick(() => {
        emit('change', (e.target as HTMLInputElement).checked)
    })
}
</script>
