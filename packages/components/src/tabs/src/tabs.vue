<template>
  <div :class="[ns.b(), ns.m(tabPosition), ns.m(type)]">
    <!-- Tab Nav -->
    <div :class="ns.e('header')">
      <div :class="ns.e('nav-wrap')">
        <div :class="ns.e('nav-scroll')">
          <div :class="ns.e('nav')" ref="navRef">
            <div
              v-for="pane in panes"
              :key="pane.props.name"
              :class="[
                ns.e('item'),
                ns.is('active', currentName === pane.props.name),
                ns.is('disabled', pane.props.disabled)
              ]"
              @click="handleTabClick(pane, $event)"
            >
              {{ pane.props.label }}
            </div>
            <!-- Active Bar (Only for default type) -->
            <div v-if="!type" :class="ns.e('active-bar')" :style="barStyle"></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Tab Content -->
    <div :class="ns.e('content')">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch, nextTick, onMounted } from 'vue'
import { tabsProps, TABS_ROOT_CTX_KEY } from './tabs'
import { useNamespace } from '@long-ui/hooks'

defineOptions({
  name: 'LongTabs'
})

const props = defineProps(tabsProps)
const emit = defineEmits(['update:modelValue', 'tab-click'])

const ns = useNamespace('tabs')
const navRef = ref<HTMLElement | null>(null)
const panes = ref<any[]>([])
const currentName = ref(props.modelValue)
const barStyle = ref({})

const registerPane = (pane: any) => {
  panes.value.push(pane)
}

const unregisterPane = (name: string | number) => {
  const index = panes.value.findIndex(p => p.props.name === name)
  if (index !== -1) panes.value.splice(index, 1)
}

const updateBar = () => {
  if (props.type || !navRef.value) return
  nextTick(() => {
    const activeEl = navRef.value?.querySelector('.is-active') as HTMLElement
    if (activeEl) {
      barStyle.value = {
        width: `${activeEl.offsetWidth}px`,
        transform: `translateX(${activeEl.offsetLeft}px)`
      }
    }
  })
}

const handleTabClick = (pane: any, ev: Event) => {
  if (pane.props.disabled) return
  currentName.value = pane.props.name
  emit('update:modelValue', pane.props.name)
  emit('tab-click', pane, ev)
}

watch(() => props.modelValue, (val) => {
  currentName.value = val
  updateBar()
})

watch(currentName, () => {
  updateBar()
})

onMounted(() => {
  updateBar()
})

provide(TABS_ROOT_CTX_KEY, {
  props,
  currentName,
  registerPane,
  unregisterPane,
  handleTabClick
})
</script>
