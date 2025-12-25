<template>
  <LongSpace direction="vertical" style="width: 100%">
    <LongTable :data="tableData" border>
    <long-table-column prop="id" label="ID" width="80" />
    <long-table-column label="员工信息">
      <long-table-column label="基础资料">
        <long-table-column prop="name" label="姓名" width="120" />
        <long-table-column prop="age" label="年龄" width="80" />
      </long-table-column>
      <long-table-column label="岗位信息">
        <long-table-column prop="role" label="职能" width="150" />
        <long-table-column prop="city" label="城市" width="120" />
      </long-table-column>
    </long-table-column>
    <long-table-column prop="status" label="状态" width="100" />
  </long-table>
</template>

<script setup lang="ts">
const tableData = [
  { id: 1, name: '陈小龙', age: 28, role: '首席架构师', city: '杭州', status: '在职' },
  { id: 2, name: '李梅', age: 24, role: 'UI 设计师', city: '上海', status: '离职' },
  { id: 3, name: '张伟', age: 32, role: '产品经理', city: '北京', status: '在职' },
  { id: 4, name: '王五', age: 26, role: '后端开发', city: '深圳', status: '在职' },
]
</script>
