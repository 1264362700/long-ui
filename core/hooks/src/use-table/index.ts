import { ref, reactive, onMounted } from 'vue'

interface UseTableOptions {
    immediate?: boolean
    initialPagination?: {
        currentPage?: number
        pageSize?: number
    }
}

export function useTable<T = any>(
    api: (params: any) => Promise<{ data: T[]; total: number }>,
    options: UseTableOptions = {}
) {
    const { immediate = true, initialPagination = {} } = options

    const data = ref<T[]>([])
    const loading = ref(false)

    const pagination = reactive({
        currentPage: initialPagination.currentPage || 1,
        pageSize: initialPagination.pageSize || 10,
        total: 0
    })

    const loadData = async (extraParams = {}) => {
        loading.value = true
        try {
            const params = {
                page: pagination.currentPage,
                pageSize: pagination.pageSize,
                ...extraParams
            }
            const res = await api(params)
            data.value = res.data
            pagination.total = res.total

            // Edge case: If current page > 1 and no data returned, 
            // but total > 0, we might need to go back (deleted last item)
            if (data.value.length === 0 && pagination.currentPage > 1 && pagination.total > 0) {
                pagination.currentPage -= 1
                loadData(extraParams)
            }
        } catch (error) {
            console.error('[useTable Error]:', error)
        } finally {
            loading.value = false
        }
    }

    const handlePageChange = (page: number) => {
        pagination.currentPage = page
        loadData()
    }

    const handleSizeChange = (size: number) => {
        pagination.pageSize = size
        pagination.currentPage = 1
        loadData()
    }

    const refresh = () => {
        loadData()
    }

    const search = (params: any) => {
        pagination.currentPage = 1
        loadData(params)
    }

    onMounted(() => {
        if (immediate) {
            loadData()
        }
    })

    return {
        data,
        loading,
        pagination,
        refresh,
        search,
        handlePageChange,
        handleSizeChange
    }
}

export type UseTableReturn = ReturnType<typeof useTable>
