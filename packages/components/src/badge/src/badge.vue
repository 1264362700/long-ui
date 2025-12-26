<template>
  <div :class="ns.b()">
    <slot />
    <transition :name="`${ns.namespace}-zoom-in-center`">
      <sup
        v-show="!hidden && (content || isDot)"
        :class="[
          ns.e('content'),
          ns.m(type),
          ns.is('fixed', !!$slots.default),
          ns.is('dot', isDot)
        ]"
        v-text="content"
      />
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { useNamespace } from '@long-ui/hooks'
import { badgeProps } from './badge'

defineOptions({
  name: 'LongBadge'
})

const props = defineProps({
  value: [String, Number],
  max: {
    type: Number,
    default: 99
  },
  isDot: {
    type: Boolean,
    default: false
  },
  hidden: {
    type: Boolean,
    default: false
  },
  type: {
    type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'info'>,
    default: 'danger'
  }
})

const ns = useNamespace('badge')

const content = computed(() => {
  if (props.isDot) return ''
  if (typeof props.value === 'number' && typeof props.max === 'number') {
    return (props.max as any) < (props.value as any) ? `${props.max}+` : props.value
  }
  return props.value
})
</script>
