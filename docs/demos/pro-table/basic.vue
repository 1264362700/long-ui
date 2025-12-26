<template>
  <div class="pro-table-demo">
    <!-- 1. 查询过滤区 -->
    <LongCard shadow="hover" style="margin-bottom: 16px">
      <template #header>查询条件</template>
      <div style="display: flex; gap: 16px; align-items: flex-end">
        <div style="flex: 1">
          <label style="font-size: 12px; color: #666; display: block; margin-bottom: 4px">用户姓名</label>
          <LongInput v-model="formModel.username" placeholder="请输入姓名" />
        </div>
        <div style="flex: 1">
          <label style="font-size: 12px; color: #666; display: block; margin-bottom: 4px">角色等级</label>
          <LongSelect v-model="formModel.role" placeholder="请选择角色">
             <LongOption label="管理员" value="admin" />
             <LongOption label="普通用户" value="user" />
             <LongOption label="系统监察" value="audit" />
          </LongSelect>
        </div>
        <LongSpace>
          <LongButton type="primary" :loading="isSubmitting" @click="handleSearch">查询</LongButton>
          <LongButton @click="handleReset">重置</LongButton>
        </LongSpace>
      </div>
    </LongCard>

    <!-- 2. 数据列表区 -->
    <LongCard shadow="hover">
      <template #header>
        <div style="display: flex; justify-content: space-between; align-items: center">
          <span>用户信息管理</span>
          <LongButton type="primary" dashed @click="handleAdd">新增用户</LongButton>
        </div>
      </template>

      <LongTable :data="data" stripe>
        <LongTableColumn label="ID" prop="id" width="80" />
        <LongTableColumn label="姓名" prop="name" />
        <LongTableColumn label="状态" width="120">
          <template #default="{ row }">
            <LongBadge is-dot :type="row.status === 'online' ? 'success' : 'info'" style="margin-right: 8px" />
            <span>{{ row.status === 'online' ? '在线' : '离线' }}</span>
          </template>
        </LongTableColumn>
        <LongTableColumn label="最后登录" prop="lastLogin" />
        <LongTableColumn label="操作" width="160">
          <template #default="{ row }">
            <LongSpace>
              <LongButton type="text" @click="handleDetail(row)">详情</LongButton>
              <LongButton type="text" danger>删除</LongButton>
            </LongSpace>
          </template>
        </LongTableColumn>
      </LongTable>

      <div style="margin-top: 16px; display: flex; justify-content: flex-end">
        <LongPagination
          v-model:current-page="pagination.currentPage"
          v-model:page-size="pagination.pageSize"
          :total="pagination.total"
        />
      </div>
    </LongCard>

    <!-- 3. 详情弹窗 -->
    <LongDialog v-model="detailModal.visible.value" title="用户详细信息" width="600px">
       <LongDescriptions :column="2" border>
          <LongDescriptionsItem label="姓名">{{ detailModal.data.name }}</LongDescriptionsItem>
          <LongDescriptionsItem label="用户ID" copyable :value="detailModal.data.id">
             {{ detailModal.data.id }}
          </LongDescriptionsItem>
          <LongDescriptionsItem label="最后登录时间" :span="2">
             {{ detailModal.data.lastLogin }}
          </LongDescriptionsItem>
          <LongDescriptionsItem label="备注" :span="2">
             该用户为系统核心开发成员，拥有最高权限级别。
          </LongDescriptionsItem>
       </LongDescriptions>
       <template #footer>
          <LongButton @click="detailModal.close">关闭</LongButton>
       </template>
    </LongDialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTable, useForm, useModal, useMessage } from '@long-ui/hooks'

const { message } = useMessage()

// 表单逻辑
const { formModel, isSubmitting, handleSubmit, resetFields } = useForm({
  initialValues: { username: '', role: '' }
})

// 详情弹窗逻辑
const detailModal = useModal()

// 表格数据模拟
const mockData = [
  { id: '1001', name: '张三', status: 'online', lastLogin: '2023-12-01 10:00:00' },
  { id: '1002', name: '李四', status: 'offline', lastLogin: '2023-11-28 15:30:22' },
  { id: '1003', name: '王五', status: 'online', lastLogin: '2023-12-02 09:15:00' },
]

// 表格查询逻辑
const { data, pagination, refresh } = useTable(
  async (params) => {
    // 模拟搜索延迟
    await new Promise(resolve => setTimeout(resolve, 800))
    return { data: mockData, total: 3 }
  }
)

const handleSearch = () => {
  handleSubmit(() => {
    message.success('查询成功')
    refresh()
  })
}

const handleReset = () => {
  resetFields()
  refresh()
}

const handleAdd = () => {
  message.info('新增功能正在路上...')
}

const handleDetail = (row: any) => {
  detailModal.open(row)
}
</script>

<style scoped>
.pro-table-demo {
  padding: 24px;
}
</style>
