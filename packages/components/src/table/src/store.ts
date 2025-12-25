import { ref, computed, type InjectionKey } from 'vue'

export const TABLE_INJECTION_KEY: InjectionKey<ReturnType<typeof useTableStore>> = Symbol('LongTable')

export function useTableStore() {
    const columns = ref<any[]>([]) // Hierarchy
    const data = ref<any[]>([])

    // Flat leaf columns for rendering <tbody>
    const leafColumns = computed(() => {
        const result: any[] = []
        const traverse = (cols: any[]) => {
            cols.forEach(col => {
                if (col.children && col.children.length > 0) {
                    traverse(col.children)
                } else {
                    result.push(col)
                }
            })
        }
        traverse(columns.value)
        return result
    })

    const insertColumn = (column: any, index: number, parent?: any) => {
        if (parent) {
            if (!parent.children) parent.children = []
            parent.children.push(column)
        } else {
            columns.value.splice(index, 0, column)
        }
    }

    const removeColumn = (column: any, parent?: any) => {
        const targetList = parent ? parent.children : columns.value
        if (!targetList) return
        const i = targetList.indexOf(column)
        if (i !== -1) {
            targetList.splice(i, 1)
        }
    }

    const setData = (d: any[]) => {
        data.value = d
    }

    return {
        columns,
        leafColumns,
        data,
        insertColumn,
        removeColumn,
        setData
    }
}
