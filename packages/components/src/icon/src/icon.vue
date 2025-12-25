<template>
    <i :class="ns.b()" :style="style" v-bind="$attrs">
        <slot />
    </i>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@long-ui/hooks'
import { iconProps } from './icon'
import { isUndefined, addUnit } from '@long-ui/utils'

defineOptions({
    name: 'LongIcon',
})

const props = defineProps(iconProps)
const ns = useNamespace('icon')

const style = computed(() => {
    if (!props.size && !props.color) return {}

    return {
        fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
        '--color': props.color,
    }
})
</script>
