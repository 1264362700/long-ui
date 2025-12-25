import { ref, computed, type InjectionKey } from 'vue'

export const TABLE_INJECTION_KEY: InjectionKey<ReturnType<typeof useTableStore>> = Symbol('LongTable')

export function useTableStore() {
    const columns = ref<any[]>([])
    const data = ref<any[]>([])

    const insertColumn = (column: any, index: number) => {
        columns.value.splice(index, 0, column)
    }

    const removeColumn = (column: any) => {
        const i = columns.value.indexOf(column)
        if (i !== -1) {
            columns.value.splice(i, 1)
        }
    }

    const setColumns = (cols: any[]) => {
        columns.value = cols
    }

    const setData = (d: any[]) => {
        data.value = d
    }

    return {
        columns,
        data,
        insertColumn,
        removeColumn,
        setColumns,
        setData
    }
}
