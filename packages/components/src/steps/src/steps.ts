import type { ExtractPropTypes, PropType } from 'vue'

export const stepsProps = {
    space: {
        type: [Number, String] as PropType<number | string>,
        default: '',
    },
    direction: {
        type: String,
        default: 'horizontal',
        values: ['horizontal', 'vertical'],
    },
    active: {
        type: Number,
        default: 0,
    },
    processStatus: {
        type: String,
        default: 'process',
        values: ['wait', 'process', 'finish', 'error', 'success'],
    },
    finishStatus: {
        type: String,
        default: 'finish',
        values: ['wait', 'process', 'finish', 'error', 'success'],
    },
    alignCenter: {
        type: Boolean,
        default: false,
    },
    simple: {
        type: Boolean,
        default: false,
    },
} as const

export type StepsProps = ExtractPropTypes<typeof stepsProps>

export const stepsEmits = {
    change: (newVal: number, oldVal: number) => typeof newVal === 'number' && typeof oldVal === 'number',
}
export type StepsEmits = typeof stepsEmits
