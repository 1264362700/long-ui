<template>
  <transition name="long-loading-fade">
    <div
      v-if="loading"
      :class="[
        ns.b(),
        ns.is('fullscreen', fullscreen)
      ]"
      :style="{ backgroundColor: background }"
    >
      <div :class="ns.e('spinner')">
        <svg :class="ns.e('svg')" viewBox="25 25 50 50">
          <circle :class="ns.e('path')" cx="50" cy="50" r="20" fill="none" />
        </svg>
        <p v-if="text" :class="ns.e('text')" :style="{ color: textColor }">
          {{ text }}
        </p>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useNamespace } from '@long-ui/hooks'
import { loadingProps } from './loading'

defineOptions({
  name: 'LongLoading'
})

defineProps(loadingProps)
const ns = useNamespace('loading')
</script>
