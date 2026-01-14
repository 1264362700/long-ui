<template>
    <div
        :class="[
            ns.b(),
            ns.is('active', isActive),
            ns.is('disabled', disabled),
        ]"
    >
        <div
            role="tab"
            :aria-expanded="isActive"
            :class="ns.e('header')"
            @click="handleHeaderClick"
        >
            <slot name="title">
                 <span :class="ns.e('title')">{{ title }}</span>
            </slot>
            <long-icon :class="ns.e('arrow')">
                >
            </long-icon>
        </div>
        <div v-show="isActive" role="tabpanel" :class="ns.e('wrap')">
            <div :class="ns.e('content')">
                <slot />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { collapseItemProps } from './collapse-item'
import { collapseContextKey } from './collapse'
import { useNamespace } from '@long-ui/hooks'
import { LongIcon } from '@long-ui/components'
// import { ArrowRight } from '@long-ui/icons' // Icon not available yet

defineOptions({
    name: 'LongCollapseItem',
})

const props = defineProps(collapseItemProps)
const ns = useNamespace('collapse-item')
const collapse = inject(collapseContextKey)

const isActive = computed(() => {
    return collapse?.activeNames.value.includes(props.name)
})

const handleHeaderClick = () => {
    if (props.disabled) return
    collapse?.handleItemClick(props.name)
}
</script>
