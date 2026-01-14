<template>
    <long-tooltip
        ref="tooltipRef"
        trigger="click"
        effect="light"
        :popper-class="`${ns.b()}__popper`"
        v-bind="$attrs"
    >
        <template #content>
            <div :class="ns.b()">
                <div :class="ns.e('main')">
                    <long-icon v-if="!hideIcon && icon" :class="ns.e('icon')" :style="{ color: iconColor }">
                        <component :is="icon" />
                    </long-icon>
                    {{ title }}
                </div>
                <div :class="ns.e('action')">
                    <long-button size="small" :type="cancelButtonType" @click="cancel">
                        {{ cancelButtonText }}
                    </long-button>
                    <long-button size="small" :type="confirmButtonType" @click="confirm">
                        {{ confirmButtonText }}
                    </long-button>
                </div>
            </div>
        </template>
        <slot />
    </long-tooltip>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useNamespace } from '@long-ui/hooks'
import { popconfirmProps, popconfirmEmits } from './popconfirm'
import { LongTooltip, LongButton, LongIcon } from '@long-ui/components'

defineOptions({
    name: 'LongPopconfirm',
})

const props = defineProps(popconfirmProps)
const emit = defineEmits(popconfirmEmits)
const ns = useNamespace('popconfirm')
const tooltipRef = ref<InstanceType<typeof LongTooltip>>()

const confirm = () => {
    emit('confirm')
    tooltipRef.value?.hide()
}

const cancel = () => {
    emit('cancel')
    tooltipRef.value?.hide()
}
</script>
