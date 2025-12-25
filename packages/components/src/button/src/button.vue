<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { useNamespace, useGlobalConfig } from '@long-ui/hooks'
import { buttonProps, buttonEmits } from './button'

defineOptions({
  name: 'LongButton',
})

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)
const slots = useSlots()

const ns = useNamespace('button')
const globalSize = useGlobalConfig('size')

// 计算尺寸
const buttonSize = computed(() => props.size || globalSize.value)

// 计算类名
const buttonClass = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.m(buttonSize.value),
  ns.is('disabled', props.disabled || props.loading),
  ns.is('loading', props.loading),
  ns.is('plain', props.plain),
  ns.is('round', props.round),
  ns.is('circle', props.circle),
  ns.is('block', props.block),
  ns.is('link', props.link),
])

// 按钮是否禁用
const buttonDisabled = computed(() => props.disabled || props.loading)

// 点击事件
const handleClick = (evt: MouseEvent) => {
  if (buttonDisabled.value) return
  emit('click', evt)
}
</script>

<template>
  <component
    :is="tag"
    :class="buttonClass"
    :disabled="buttonDisabled"
    :autofocus="autofocus"
    :type="tag === 'button' ? nativeType : undefined"
    @click="handleClick"
  >
    <!-- Loading 图标 -->
    <span v-if="loading" :class="ns.e('loading')">
      <slot v-if="slots.loading" name="loading" />
      <span v-else-if="loadingIcon" :class="[ns.e('loading-icon'), loadingIcon]"></span>
      <svg
        v-else
        :class="ns.e('loading-icon')"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
        />
      </svg>
    </span>

    <!-- 图标 -->
    <span v-if="icon && !loading" :class="[ns.e('icon'), icon]"></span>

    <!-- 内容 -->
    <span v-if="slots.default" :class="ns.e('content')">
      <slot />
    </span>
  </component>
</template>
