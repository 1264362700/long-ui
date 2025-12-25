<template>
  <long-table :data="tableData" style="width: 100%">
    <long-table-column label="Date" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </div>
      </template>
    </long-table-column>
    <long-table-column label="Name" width="180">
      <template #default="scope">
        <long-tag>{{ scope.row.name }}</long-tag>
      </template>
    </long-table-column>
    <long-table-column label="Operations">
      <template #default="scope">
        <long-button size="small" @click="handleEdit(scope.$index, scope.row)">
          Edit
        </long-button>
        <long-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >
          Delete
        </long-button>
      </template>
    </long-table-column>
  </long-table>
</template>

<script setup lang="ts">
const handleEdit = (index: number, row: any) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: any) => {
  console.log(index, row)
}

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
