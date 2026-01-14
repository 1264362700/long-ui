import type { ExtractPropTypes, PropType } from 'vue'

export const timelineProps = {} as const
export type TimelineProps = ExtractPropTypes<typeof timelineProps>

export const timelineItemProps = {
    timestamp: {
        type: String,
        default: '',
    },
    hideTimestamp: {
        type: Boolean,
        default: false,
    },
    center: {
        type: Boolean,
        default: false,
    },
    placement: {
        type: String,
        default: 'bottom',
        values: ['top', 'bottom'],
    },
    type: {
        type: String,
        values: ['primary', 'success', 'warning', 'danger', 'info'],
        default: '',
    },
    color: {
        type: String,
        default: '',
    },
    size: {
        type: String,
        values: ['normal', 'large'],
        default: 'normal',
    },
    icon: {
        type: [String, Object] as PropType<string | Object>,
        default: '',
    },
    hollow: {
        type: Boolean,
        default: false,
    },
} as const

export type TimelineItemProps = ExtractPropTypes<typeof timelineItemProps>
