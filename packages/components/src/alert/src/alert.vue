<template>
  <transition name="long-alert-fade">
    <div
      v-if="visible"
      :class="[
        ns.b(),
        ns.m(type),
        ns.is('center', center),
        ns.is(effect)
      ]"
      role="alert"
    >
      <i
        v-if="showIcon && iconComponent"
        :class="[ns.e('icon'), iconComponent]"
      ></i>
      
      <div :class="ns.e('content')">
        <span v-if="title || $slots.title" :class="[ns.e('title'), ns.is('bold', !!description || !!$slots.default)]">
          <slot name="title">{{ title }}</slot>
        </span>
        
        <p v-if="$slots.default || description" :class="ns.e('description')">
          <slot>{{ description }}</slot>
        </p>

        <i
          v-if="closable"
          :class="[ns.e('close-btn'), closeText ? 'is-customed' : 'long-icon-close']"
          @click="close"
        >
          {{ closeText }}
        </i>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { alertProps, alertEmits } from './alert'
import { useNamespace } from '@long-ui/hooks'

defineOptions({
  name: 'LongAlert'
})

const props = defineProps(alertProps)
const emit = defineEmits(alertEmits)

const ns = useNamespace('alert')
const visible = ref(true)

const iconMap = {
  success: 'long-icon-circle-check',
  warning: 'long-icon-warning',
  error: 'long-icon-circle-close',
  info: 'long-icon-info'
}

const iconComponent = computed(() => iconMap[props.type] || '')

const close = (evt: MouseEvent) => {
  visible.value = false
  emit('close', evt)
}
</script>
