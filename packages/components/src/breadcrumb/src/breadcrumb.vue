<script setup lang="ts">
import { provide, toRefs } from 'vue'
import { breadcrumbProps, breadcrumbKey } from './breadcrumb'
import { useNamespace } from '@long-ui/hooks'

defineOptions({
    name: 'LongBreadcrumb',
})

const props = defineProps(breadcrumbProps)
const ns = useNamespace('breadcrumb')

provide(breadcrumbKey, props)
</script>

<template>
    <div :class="ns.b()" aria-label="Breadcrumb" role="navigation">
        <slot />
    </div>
</template>
