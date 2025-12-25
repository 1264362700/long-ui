import type { ExtractPropTypes, PropType } from 'vue'
import type { Dayjs } from 'dayjs'

export const calendarProps = {
    modelValue: {
        type: Object as PropType<Date | Dayjs | string | number>,
    },
    range: {
        type: Array as unknown as PropType<[Date, Date]>,
    },
    disabledDate: {
        type: Function as PropType<(date: Date) => boolean>,
    }
} as const

export type CalendarProps = ExtractPropTypes<typeof calendarProps>
export type CalendarEmits = {
    'update:modelValue': [value: Date]
}
