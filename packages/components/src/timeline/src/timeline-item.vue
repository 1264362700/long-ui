<template>
    <li :class="[ns.b(), ns.is('center', center)]">
        <div :class="ns.e('tail')"></div>
        <div
            v-if="!$slots.dot"
            :class="[
                ns.e('node'),
                ns.em('node', size || 'normal'),
                ns.em('node', type || ''),
                ns.is('hollow', hollow),
            ]"
            :style="{
                backgroundColor: color,
            }"
        >
            <long-icon v-if="icon" :class="ns.e('icon')">
                <component :is="icon" />
            </long-icon>
        </div>
        <div v-if="$slots.dot" :class="ns.e('dot')">
            <slot name="dot" />
        </div>

        <div :class="ns.e('wrapper')">
            <div v-if="!hideTimestamp && placement === 'top'" :class="[ns.e('timestamp'), ns.is('top')]">
                {{ timestamp }}
            </div>

            <div :class="ns.e('content')">
                <slot />
            </div>

             <div v-if="!hideTimestamp && placement === 'bottom'" :class="[ns.e('timestamp'), ns.is('bottom')]">
                {{ timestamp }}
            </div>
        </div>
    </li>
</template>

<script lang="ts" setup>
import { useNamespace } from '@long-ui/hooks'
import { timelineItemProps } from './timeline'
import { LongIcon } from '@long-ui/components'

defineOptions({
    name: 'LongTimelineItem',
})

defineProps(timelineItemProps)
const ns = useNamespace('timeline-item')
</script>
