<script setup lang="ts">
import { inject, toRefs, ref, getCurrentInstance } from 'vue'
import { breadcrumbKey } from './breadcrumb'
import { breadcrumbItemProps } from './breadcrumb-item'
import { useNamespace } from '@long-ui/hooks'
import { useRouter } from 'vue-router'

defineOptions({
    name: 'LongBreadcrumbItem',
})

const props = defineProps(breadcrumbItemProps)
const ns = useNamespace('breadcrumb')
const router = useRouter() // Might be undefined if router not installed

const parent = inject(breadcrumbKey, undefined)

const link = ref<HTMLElement>()

const onClick = () => {
    if (!props.to || !router) return
    props.replace ? router.push(props.to) : router.push(props.to)
}

</script>

<template>
    <span :class="ns.e('item')">
        <span ref="link" :class="[ns.e('inner'), props.to ? ns.is('link') : '']" role="link" @click="onClick">
            <slot />
        </span>
        <span v-if="parent?.separatorIcon" :class="ns.e('separator')">
            <i :class="parent.separatorIcon"></i>
        </span>
        <span v-else :class="ns.e('separator')" role="presentation">
            {{ parent?.separator }}
        </span>
    </span>
</template>
