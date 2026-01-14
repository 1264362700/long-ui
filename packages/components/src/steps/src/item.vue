<template>
    <div
        :style="style"
        :class="[
            ns.b(),
            ns.is(currentStatus),
            ns.is('center', parent?.props.alignCenter),
            ns.is('simple', isSimple),
        ]"
    >
        <!-- Head -->
        <div :class="ns.e('head')">
            <div :class="ns.e('line')">
                <i :class="ns.e('line-inner')" :style="lineStyle" />
            </div>
            <div :class="[ns.e('icon'), ns.is('text', !icon && !isSimple)]">
                <slot name="icon">
                     <long-icon v-if="icon || currentStatus === 'success' || currentStatus === 'error'" :class="ns.e('icon-inner')">
                         <component :is="icon || (currentStatus === 'error' ? errorIcon : successIcon)" />
                     </long-icon>
                    <div v-else :class="ns.e('icon-inner')">{{ index + 1 }}</div>
                </slot>
            </div>
        </div>
        <!-- Main -->
        <div :class="ns.e('main')">
            <div :class="ns.e('title')">
                <slot name="title">{{ title }}</slot>
            </div>
            <div v-if="isSimple ? false : true" :class="ns.e('description')">
                <slot name="description">{{ description }}</slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, inject, ref, onMounted, onBeforeUnmount, reactive, watch } from 'vue'
import { stepProps } from './item'
import { useNamespace } from '@long-ui/hooks'
import { LongIcon } from '@long-ui/components'

defineOptions({
    name: 'LongStep',
})

const props = defineProps(stepProps)
const ns = useNamespace('step')
const parent = inject('LongSteps') as any
const index = ref(-1)

const errorIcon = 'long-icon-close' // Placeholder or use correct icon component import if available
const successIcon = 'long-icon-check'


const currentStatus = computed(() => {
    if (props.status) {
        return props.status
    }
    const activeIndex = parent?.props.active || 0
    if (index.value === activeIndex) {
        return parent?.props.processStatus || 'process'
    } else if (index.value < activeIndex) {
        return parent?.props.finishStatus || 'finish'
    } else {
        return 'wait'
    }
})

const isSimple = computed(() => parent?.props.simple)

const style = computed(() => {
    const style: Record<string, string> = {}
    const parentProps = parent?.props
    const stepsLength = parent?.steps.value.length
    
    // Only apply basis logic if not last step and not simple/vertical scenario adjustments
    if (parentProps?.direction === 'horizontal' && parentProps?.alignCenter === false && !isSimple.value) {
         style.flexBasis = parentProps.space 
            ? (typeof parentProps.space === 'number' ? `${parentProps.space}px` : parentProps.space)
            : `${100 / (stepsLength - (parentProps.alignCenter ? 0 : 1))}%`
    }
    if (index.value === stepsLength - 1) {
        style.flexBasis = 'auto'
        style.maxWidth = `${100 / stepsLength}%`
    }
    return style
})

const lineStyle = computed(() => {
  const style: Record<string, string> = {}
  const parentProps = parent?.props
  
  if (parentProps?.direction === 'vertical') {
      style.transitionDelay = `${150 * index.value}ms`
  }

  // Calculate progress 
  const activeIndex = parent?.props.active || 0
  if (index.value < activeIndex) {
       style.width = '100%' 
  }
  return style
})

onMounted(() => {
    parent.steps.value.push({}) // Just push a placeholder for counting
    index.value = parent.steps.value.length - 1
})

onBeforeUnmount(() => {
    const i = parent.steps.value.indexOf(index)
    if (i > -1) parent.steps.value.splice(i, 1)
})
</script>
