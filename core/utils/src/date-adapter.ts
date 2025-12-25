export interface DateAdapter<T> {
    /**
     * 获取当前时间
     */
    now(): T
    /**
     * 格式化时间
     */
    format(date: T, formatStr: string): string
    /**
     * 获取年份
     */
    getYear(date: T): number
    /**
     * 获取月份 (0-11)
     */
    getMonth(date: T): number
    /**
     * 获取日期
     */
    getDate(date: T): number
    /**
     * 获取星期几 (0-6, 0 is Sunday)
     */
    getDay(date: T): number
    /**
     * 设置年份
     */
    setYear(date: T, year: number): T
    /**
     * 设置月份
     */
    setMonth(date: T, month: number): T
    /**
     * 设置日期
     */
    setDate(date: T, day: number): T
    /**
     * 增加时间
     */
    add(date: T, amount: number, unit: 'year' | 'month' | 'day'): T
    /**
     * 减少时间
     */
    subtract(date: T, amount: number, unit: 'year' | 'month' | 'day'): T
    /**
     * 是否是同一天
     */
    isSameDay(date1: T, date2: T): boolean
    /**
     * 获取该月第一天
     */
    startOfMonth(date: T): T
    /**
     * 获取该月最后一天
     */
    endOfMonth(date: T): T
    /**
     * 获取该周第一天
     */
    startOfWeek(date: T): T
    /**
     * 解析时间
     */
    parse(date: string | number | Date | T): T
}
