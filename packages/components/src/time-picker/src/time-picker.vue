<template>
  <div v-click-outside="handleClose" :class="[ns.b(), ns.m(size), { [ns.m('disabled')]: disabled }]">
    <long-input
      :model-value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :size="size"
      readonly
      @click="togglePicker"
    >
      <template #suffix>
        <long-icon name="time" />
      </template>
    </long-input>

    <transition name="long-zoom-in-top">
      <div v-if="showPicker" :class="ns.e('dropdown')">
        <div :class="ns.e('panel')">
          <!-- Hours -->
          <div ref="hoursRef" :class="ns.e('column')" @scroll="handleScroll('hours')">
            <div
              v-for="h in 24"
              :key="h"
              :class="[ns.e('item'), { 'is-active': currentHours === h - 1 }]"
              @click="selectTime('hours', h - 1)"
            >
              {{ String(h - 1).padStart(2, '0') }}
            </div>
          </div>
          <!-- Minutes -->
          <div ref="minutesRef" :class="ns.e('column')" @scroll="handleScroll('minutes')">
            <div
              v-for="m in 60"
              :key="m"
              :class="[ns.e('item'), { 'is-active': currentMinutes === m - 1 }]"
              @click="selectTime('minutes', m - 1)"
            >
              {{ String(m - 1).padStart(2, '0') }}
            </div>
          </div>
          <!-- Seconds -->
          <div ref="secondsRef" :class="ns.e('column')" @scroll="handleScroll('seconds')">
            <div
              v-for="s in 60"
              :key="s"
              :class="[ns.e('item'), { 'is-active': currentSeconds === s - 1 }]"
              @click="selectTime('seconds', s - 1)"
            >
              {{ String(s - 1).padStart(2, '0') }}
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'
import { useNamespace } from '@long-ui/hooks'
import { ClickOutside as vClickOutside } from '@long-ui/utils'
import { timePickerProps } from './time-picker'

const props = defineProps(timePickerProps)
const emit = defineEmits(['update:modelValue', 'change'])

const ns = useNamespace('time-picker')
const showPicker = ref(false)

const currentHours = ref(0)
const currentMinutes = ref(0)
const currentSeconds = ref(0)

const hoursRef = ref<HTMLElement | null>(null)
const minutesRef = ref<HTMLElement | null>(null)
const secondsRef = ref<HTMLElement | null>(null)

const parseTime = (timeStr: string) => {
  if (!timeStr) return [0, 0, 0]
  const [h, m, s] = timeStr.split(':').map(Number)
  return [h || 0, m || 0, s || 0]
}

const formatTime = (h: number, m: number, s: number) => {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${pad(h)}:${pad(m)}:${pad(s)}`
}

const initTime = () => {
  const [h, m, s] = parseTime(props.modelValue)
  currentHours.value = h
  currentMinutes.value = m
  currentSeconds.value = s
}

const togglePicker = () => {
  if (props.disabled) return
  showPicker.value = !showPicker.value
  if (showPicker.value) {
    nextTick(() => {
      syncScroll()
    })
  }
}

const handleClose = () => {
  showPicker.value = false
}

const selectTime = (type: 'hours' | 'minutes' | 'seconds', val: number) => {
  if (type === 'hours') currentHours.value = val
  if (type === 'minutes') currentMinutes.value = val
  if (type === 'seconds') currentSeconds.value = val
  
  const newValue = formatTime(currentHours.value, currentMinutes.value, currentSeconds.value)
  emit('update:modelValue', newValue)
  emit('change', newValue)
  
  nextTick(() => syncScroll())
}

const syncScroll = () => {
  const scrollTo = (el: HTMLElement | null, index: number) => {
    if (!el) return
    const itemHeight = 32 // 14px font + padding
    el.scrollTop = index * itemHeight
  }
  scrollTo(hoursRef.value, currentHours.value)
  scrollTo(minutesRef.value, currentMinutes.value)
  scrollTo(secondsRef.value, currentSeconds.value)
}

const handleScroll = (_type: 'hours' | 'minutes' | 'seconds') => {
    // Basic throttle/debounce could be added for better perf
}

watch(() => props.modelValue, (_val) => {
  if (!showPicker.value) {
    initTime()
  }
})

onMounted(() => {
  initTime()
})
</script>
