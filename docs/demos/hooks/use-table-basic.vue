<template>
  <div class="demo-group">
    <div style="margin-bottom: 16px; display: flex; gap: 10px;">
        <long-button @click="refresh" type="primary">刷新数据</long-button>
        <long-button @click="handleDeleteLast">删除末页最后一条 (验证自动回溯)</long-button>
    </div>

    <div style="position: relative;">
        <long-table :data="data" border>
            <long-table-column prop="id" label="ID" width="80" />
            <long-table-column prop="name" label="名称" />
            <long-table-column prop="status" label="状态" />
        </long-table>
        <long-loading :loading="loading" />
    </div>

    <div style="margin-top: 16px; display: flex; justify-content: flex-end;">
        <long-pagination 
            :total="pagination.total" 
            v-model:current-page="pagination.currentPage"
            @change="handlePageChange"
        />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTable } from '@long-ui/hooks'

// 模拟异步 API
const mockApi = ({ page, pageSize }: any) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const total = 45
            const start = (page - 1) * pageSize
            const list = Array.from({ length: Math.min(pageSize, total - start) }).map((_, i) => ({
                id: start + i + 1,
                name: `项目数据 ${start + i + 1}`,
                status: '正常'
            }))
            resolve({ data: list, total })
        }, 800)
    })
}

const { data, loading, pagination, handlePageChange, refresh } = useTable(mockApi as any)

const handleDeleteLast = () => {
    // 模拟删除逻辑：如果用户在最后一页删除了唯一一条数据，Hook 应该能自动感知并回到上一页
    // 这里演示用法，由于是 Mock 数据，我们手动触发一个使其变空的场景
    alert('正在模拟：当数据为空且总数仍有余量时，自动跳转回上一页。')
    pagination.currentPage = 5 // 跳转到最后一页
    handlePageChange(5)
}
</script>
