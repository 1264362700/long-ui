<template>
    <div
        ref="radioGroupRef"
        :class="ns.b()"
        role="radiogroup"
    >
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { provide, toRefs, reactive, nextTick } from 'vue'
import { useNamespace } from '@long-ui/hooks'
import { radioGroupProps, radioGroupEmits } from './radio'

defineOptions({
    name: 'LongRadioGroup',
})

const props = defineProps(radioGroupProps)
const emit = defineEmits(radioGroupEmits)

const ns = useNamespace('radio-group')

const changeEvent = (value: string | number | boolean) => {
    emit('update:modelValue', value)
    nextTick(() => {
        emit('change', value)
    })
}

provide('LongRadioGroup', reactive({
    ...toRefs(props),
    changeEvent,
}))
</script>
