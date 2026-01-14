<template>
    <ul :class="[ns.b()]">
        <slot />
    </ul>
</template>

<script lang="ts" setup>
import { useNamespace } from '@long-ui/hooks'

defineOptions({
    name: 'LongTimeline',
})

const ns = useNamespace('timeline')
</script>
