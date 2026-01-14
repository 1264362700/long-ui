<template>
    <div :class="[ns.b(), ns.m(simple ? 'simple' : direction)]">
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { provide, watch, ref } from 'vue'
import { stepsProps, stepsEmits } from './steps'
import type { StepsProps } from './steps'
import { useNamespace } from '@long-ui/hooks'

defineOptions({
    name: 'LongSteps',
})

const props = defineProps(stepsProps)
const emit = defineEmits(stepsEmits)
const ns = useNamespace('steps')

const steps = ref<any[]>([])

watch(
    () => props.active,
    (newVal: number, oldVal: number) => {
        emit('change', newVal, oldVal)
    }
)

provide('LongSteps', { props, steps })
</script>
