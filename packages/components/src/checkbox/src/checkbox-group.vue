<template>
    <div
        ref="checkboxGroupRef"
        :class="ns.b()"
        role="group"
    >
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { provide, toRefs, reactive, nextTick } from 'vue'
import { useNamespace } from '@long-ui/hooks'
import { checkboxGroupProps, checkboxGroupEmits } from './checkbox'

defineOptions({
    name: 'LongCheckboxGroup',
})

const props = defineProps(checkboxGroupProps)
const emit = defineEmits(checkboxGroupEmits)

const ns = useNamespace('checkbox-group')

const changeEvent = (value: any) => {
    emit('update:modelValue', value)
    nextTick(() => {
        emit('change', value)
    })
}

provide('LongCheckboxGroup', reactive({
    ...toRefs(props),
    changeEvent,
}))
</script>
