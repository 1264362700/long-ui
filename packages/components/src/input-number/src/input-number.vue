<template>
    <div
        :class="[
            ns.b(),
            ns.m(size),
            ns.is('disabled', disabled),
            ns.is('without-controls', !controls),
            ns.is('controls-right', controlsPosition === 'right'),
        ]"
        @dragstart.prevent
    >
        <span
            v-if="controls"
            role="button"
            :class="[ns.e('decrease'), ns.is('disabled', minDisabled)]"
            @keydown.enter="decrease"
            @click="decrease"
        >
            <long-icon>
                <MinusIcon />
            </long-icon>
        </span>
        <span
            v-if="controls"
            role="button"
            :class="[ns.e('increase'), ns.is('disabled', maxDisabled)]"
            @keydown.enter="increase"
            @click="increase"
        >
            <long-icon>
                <PlusIcon />
            </long-icon>
        </span>
        <div :class="ns.e('wrapper')">
            <input
                ref="input"
                type="number"
                :class="ns.e('input')"
                :name="name"
                :value="displayValue"
                :placeholder="placeholder"
                :disabled="disabled"
                :max="max"
                :min="min"
                :step="step"
                @input="handleInput"
                @change="handleInputChange"
                @blur="handleBlur"
                @focus="handleFocus"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useNamespace } from '@long-ui/hooks'
import { LongIcon } from '@long-ui/components'
import { MinusIcon, PlusIcon } from '@long-ui/icons'
import { inputNumberEmits, inputNumberProps } from './input-number'
import { isNumber } from '@long-ui/utils'

defineOptions({
    name: 'LongInputNumber',
})

const props = defineProps(inputNumberProps)
const emit = defineEmits(inputNumberEmits)

const ns = useNamespace('input-number')
const input = ref<HTMLInputElement>()

const minDisabled = computed(() => isNumber(props.modelValue) && props.modelValue <= props.min)
const maxDisabled = computed(() => isNumber(props.modelValue) && props.modelValue >= props.max)

const displayValue = computed(() => {
    if (props.modelValue === null || props.modelValue === undefined) return ''
    if (typeof props.modelValue === 'number') {
        if (props.precision !== undefined) {
            return props.modelValue.toFixed(props.precision)
        }
    }
    return props.modelValue
})

const getPrecision = (value: number) => {
    if (value === undefined) return 0
    const valueString = value.toString()
    const dotPosition = valueString.indexOf('.')
    let precision = 0
    if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1
    }
    return precision
}

const toPrecision = (num: number, precision?: number) => {
    if (precision === undefined) precision = getPrecision(num)
    return parseFloat(Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision) + '')
}

const ensurePrecision = (val: number, coefficient: 1 | -1 = 1) => {
    if (!isNumber(val)) return val
    // Solve the accuracy problem of JS decimal calculation by converting to integer
    return toPrecision(val + props.step * coefficient, props.precision)
}

const increase = () => {
    if (props.disabled || maxDisabled.value) return
    const value = props.modelValue || 0
    const newVal = ensurePrecision(value)
    setCurrentValue(newVal)
}

const decrease = () => {
    if (props.disabled || minDisabled.value) return
    const value = props.modelValue || 0
    const newVal = ensurePrecision(value, -1)
    setCurrentValue(newVal)
}

const verifyValue = (value: number | string | undefined | null) => {
    let newVal = Number(value)
    if (Number.isNaN(newVal)) return undefined
    if (props.precision !== undefined) {
        newVal = toPrecision(newVal, props.precision)
    }
    if (props.min !== undefined && newVal < props.min) {
        newVal = props.min
    }
    if (props.max !== undefined && newVal > props.max) {
        newVal = props.max
    }
    return newVal
}

const setCurrentValue = (value: number | string | undefined | null) => {
    const oldVal = props.modelValue
    const newVal = verifyValue(value)
    if (newVal === undefined) return
    if (oldVal === newVal) return
    emit('update:modelValue', newVal)
    emit('input', newVal)
    emit('change', newVal, oldVal!)
}

const handleInput = (event: Event) => {
    const value = (event.target as HTMLInputElement).value
    if (value === '') return
    const newVal = Number(value)
    if (!Number.isNaN(newVal)) {
        setCurrentValue(newVal)
    }
}

const handleInputChange = (event: Event) => {
    const value = (event.target as HTMLInputElement).value
    const newVal = value === '' ? undefined : Number(value)
    if ((isNumber(newVal) || value === '') && !Number.isNaN(newVal)) {
        setCurrentValue(newVal)
    }
}

const handleBlur = (event: FocusEvent) => {
    emit('blur', event)
}

const handleFocus = (event: FocusEvent) => {
    emit('focus', event)
}
</script>
