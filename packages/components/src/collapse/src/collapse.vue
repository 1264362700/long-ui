<template>
    <div :class="ns.b()">
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { provide, ref, watch } from 'vue'
import { collapseProps, collapseEmits, collapseContextKey } from './collapse'
import type { CollapseActiveName, CollapseModelValue } from './collapse'
import { useNamespace } from '@long-ui/hooks'

defineOptions({
    name: 'LongCollapse',
})

const props = defineProps(collapseProps)
const emit = defineEmits(collapseEmits)
const ns = useNamespace('collapse')

const activeNames = ref<CollapseActiveName[]>([].concat(props.modelValue as any))

const setActiveNames = (activeNames_: CollapseActiveName[]) => {
    activeNames.value = activeNames_
    const value = props.accordion ? activeNames_[0] : activeNames_
    emit('update:modelValue', value)
    emit('change', value)
}

const handleItemClick = (name: CollapseActiveName) => {
    if (props.accordion) {
        setActiveNames([activeNames.value[0] === name ? '' : name])
    } else {
        const _activeNames = [...activeNames.value]
        const index = _activeNames.indexOf(name)

        if (index > -1) {
            _activeNames.splice(index, 1)
        } else {
            _activeNames.push(name)
        }
        setActiveNames(_activeNames)
    }
}

watch(
    () => props.modelValue,
    () => {
        activeNames.value = [].concat(props.modelValue as any)
    },
    { deep: true }
)

provide(collapseContextKey, {
    activeNames,
    handleItemClick,
})
</script>
