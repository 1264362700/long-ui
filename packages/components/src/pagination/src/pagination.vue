<template>
  <div :class="[ns.b(), ns.is('background', background), ns.is('small', small), ns.is('disabled', disabled)]">
    <!-- Total -->
    <span v-if="layout.includes('total')" :class="ns.e('total')">
        共 {{ total }} 条
    </span>

    <!-- Pager -->
    <div :class="ns.e('pager-wrapper')">
      <button
        :class="[ns.e('prev'), ns.is('disabled', currentPage <= 1)]"
        :disabled="currentPage <= 1 || disabled"
        @click="handlePageChange(currentPage - 1)"
      >
        &lt;
      </button>

      <ul :class="ns.e('pager')">
        <li
          v-for="page in pagers"
          :key="page"
          :class="[ns.e('item'), ns.is('active', page === currentPage)]"
          @click="handlePageChange(page)"
        >
          {{ page === -1 ? '...' : page }}
        </li>
      </ul>

      <button
        :class="[ns.e('next'), ns.is('disabled', currentPage >= pageCount)]"
        :disabled="currentPage >= pageCount || disabled"
        @click="handlePageChange(currentPage + 1)"
      >
        &gt;
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '@long-ui/hooks'
import { paginationProps } from './pagination'

defineOptions({
  name: 'LongPagination'
})

const props = defineProps(paginationProps)
const emit = defineEmits(['update:currentPage', 'update:pageSize', 'change'])

const ns = useNamespace('pagination')

const pageCount = computed(() => Math.ceil(props.total / props.pageSize) || 1)

const pagers = computed(() => {
  const count = pageCount.value
  const current = props.currentPage
  const showPrevMore = current > 4
  const showNextMore = current < count - 3

  const array: number[] = []

  if (count <= 7) {
    for (let i = 1; i <= count; i++) array.push(i)
  } else {
    array.push(1)
    if (showPrevMore) {
      array.push(-1) // ellipsis
      const start = Math.min(Math.max(current - 2, 2), count - 5)
      for (let i = start; i < start + 5; i++) {
          if (i > 1 && i < count) array.push(i)
      }
    } else {
      for (let i = 2; i <= 6; i++) array.push(i)
    }

    if (showNextMore) {
      array.push(-1)
    }
    array.push(count)
  }

  // Basic de-duplication and filter
  return [...new Set(array)].sort((a, b) => {
      if (a === -1) return 0 // special handle for ellipsis positioning in this simple logic
      return a - b
  }).map((val, idx, arr) => {
      // Re-fix ellipsis logic for simple impl
      if (showPrevMore && showNextMore) {
          if (idx === 1) return -1
          if (idx === arr.length - 2) return -1
      } else if (showPrevMore) {
           if (idx === 1) return -1
      } else if (showNextMore) {
           if (idx === arr.length - 2) return -1
      }
      return val
  })
})

const handlePageChange = (page: number) => {
  if (page < 1 || page > pageCount.value || page === -1 || props.disabled) return
  emit('update:currentPage', page)
  emit('change', page, props.pageSize)
}
</script>
