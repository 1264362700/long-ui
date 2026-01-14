<template>
  <div>
    <long-table :data="tableData">
      <long-table-column prop="date" label="Date" width="180" />
      <long-table-column prop="name" label="Name" width="180" />
      <long-table-column label="Operations">
        <template #default="scope">
          <long-button size="small" @click="handleEdit(scope.row)">Edit</long-button>
          <long-button size="small" type="danger" @click="handleDelete(scope.row)">Delete</long-button>
        </template>
      </long-table-column>
    </long-table>
  </div>
</template>

<script setup lang="ts">
const tableData = [
  { date: '2016-05-03', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
  { date: '2016-05-02', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
]
const handleEdit = (row: any) => console.log('edit', row)
const handleDelete = (row: any) => console.log('delete', row)
</script>
