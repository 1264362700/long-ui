<template>
  <div :class="ns.b()">
    <div :class="ns.e('image')" :style="imageStyle">
      <slot name="image">
        <svg v-if="!image" viewBox="0 0 184 152" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(24 31.67)">
              <ellipse fill="#F5F5F5" cx="67.797" cy="106.851" rx="67.797" ry="12.668" />
              <path d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z" fill="#AEB8C2" />
              <path d="M101.537 86.214L129 0 3.161 31.666 0 114.15h122.034v-27.936z" fill="#F5F5F7" />
              <path d="M61.017 114.15h61.017V86.214H61.017z" fill="#FFF" />
              <path d="M30.508 114.15h30.509V86.214H30.508z" fill="#FAFAFA" />
              <path d="M0 114.15h30.508V86.214H0z" fill="#F5F5F5" />
              <path d="M122.034 69.674H0v16.54h122.034V69.674z" fill="#D9D9D9" />
              <path d="M122.034 69.674a2.711 2.711 0 0 1 2.712 2.712V114.15a2.711 2.711 0 0 1-2.712 2.712H0a2.711 2.711 0 0 1-2.712-2.712V72.386a2.711 2.711 0 0 1 2.712-2.712h122.034z" fill="#FAFAFA" />
            </g>
          </g>
        </svg>
        <img v-else :src="image" ondragstart="return false">
      </slot>
    </div>
    <div :class="ns.e('description')">
      <slot name="description">
        <p>{{ description }}</p>
      </slot>
    </div>
    <div v-if="$slots.default" :class="ns.e('footer')">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '@long-ui/hooks'

defineOptions({
  name: 'LongEmpty'
})

const props = defineProps({
  description: {
    type: String,
    default: '暂无数据'
  },
  image: {
    type: String,
    default: ''
  },
  imageSize: {
    type: [Number, String]
  }
})

const ns = useNamespace('empty')

const imageStyle = computed(() => {
  return props.imageSize ? {
    width: typeof props.imageSize === 'number' ? props.imageSize + 'px' : props.imageSize
  } : {}
})
</script>
