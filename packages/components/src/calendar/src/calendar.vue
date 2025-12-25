<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useNamespace } from '@long-ui/hooks'
import { DayjsAdapter } from '@long-ui/utils'
import { calendarProps } from './calendar'
import type { Dayjs } from 'dayjs'

defineOptions({
  name: 'LongCalendar',
})

const props = defineProps(calendarProps)
const emit = defineEmits(['update:modelValue'])

const ns = useNamespace('calendar')
const adapter = new DayjsAdapter()

const currentDate = ref<Dayjs>(adapter.now())

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      currentDate.value = adapter.parse(val)
    }
  },
  { immediate: true }
)

const days = computed(() => {
  const start = adapter.startOfWeek(adapter.startOfMonth(currentDate.value))
  const daysArr = []
  for (let i = 0; i < 42; i++) {
    daysArr.push(adapter.add(start, i, 'day'))
  }
  return daysArr
})

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const handleDateClick = (date: Dayjs) => {
  currentDate.value = date
  emit('update:modelValue', date.toDate())
}

const isCurrentMonth = (date: Dayjs) => {
  return adapter.getMonth(date) === adapter.getMonth(currentDate.value)
}

const isToday = (date: Dayjs) => {
  return adapter.isSameDay(date, adapter.now())
}

const isSelected = (date: Dayjs) => {
  return adapter.isSameDay(date, currentDate.value)
}

const prevMonth = () => {
  currentDate.value = adapter.subtract(currentDate.value, 1, 'month')
}

const nextMonth = () => {
  currentDate.value = adapter.add(currentDate.value, 1, 'month')
}
</script>

<template>
  <div :class="ns.b()">
    <div :class="ns.e('header')">
      <div :class="ns.e('title')">
        {{ adapter.format(currentDate, 'YYYY年 MM月') }}
      </div>
      <div :class="ns.e('button-group')">
        <button @click="prevMonth">上个月</button>
        <button @click="nextMonth">下个月</button>
      </div>
    </div>
    <div :class="ns.e('body')">
      <div :class="ns.e('week-days')">
        <div v-for="day in weekDays" :key="day" :class="ns.e('week-day')">
          {{ day }}
        </div>
      </div>
      <div :class="ns.e('days')">
        <div
          v-for="(date, index) in days"
          :key="index"
          :class="[
            ns.e('day'),
            ns.is('current-month', isCurrentMonth(date)),
            ns.is('today', isToday(date)),
            ns.is('selected', isSelected(date)),
          ]"
          @click="handleDateClick(date)"
        >
          <div :class="ns.e('date')">
            {{ adapter.getDate(date) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
