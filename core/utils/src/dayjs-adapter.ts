import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
import type { DateAdapter } from './date-adapter'

export class DayjsAdapter implements DateAdapter<Dayjs> {
    now(): Dayjs {
        return dayjs()
    }

    format(date: Dayjs, formatStr: string): string {
        return date.format(formatStr)
    }

    getYear(date: Dayjs): number {
        return date.year()
    }

    getMonth(date: Dayjs): number {
        return date.month()
    }

    getDate(date: Dayjs): number {
        return date.date()
    }

    getDay(date: Dayjs): number {
        return date.day()
    }

    setYear(date: Dayjs, year: number): Dayjs {
        return date.year(year)
    }

    setMonth(date: Dayjs, month: number): Dayjs {
        return date.month(month)
    }

    setDate(date: Dayjs, day: number): Dayjs {
        return date.date(day)
    }

    add(date: Dayjs, amount: number, unit: 'year' | 'month' | 'day'): Dayjs {
        return date.add(amount, unit)
    }

    subtract(date: Dayjs, amount: number, unit: 'year' | 'month' | 'day'): Dayjs {
        return date.subtract(amount, unit)
    }

    isSameDay(date1: Dayjs, date2: Dayjs): boolean {
        return date1.isSame(date2, 'day')
    }

    startOfMonth(date: Dayjs): Dayjs {
        return date.startOf('month')
    }

    endOfMonth(date: Dayjs): Dayjs {
        return date.endOf('month')
    }

    startOfWeek(date: Dayjs): Dayjs {
        return date.startOf('week')
    }

    parse(date: string | number | Date | Dayjs): Dayjs {
        return dayjs(date)
    }
}
