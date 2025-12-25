<template>
  <long-table :data="tableData" stripe style="width: 100%">
    <long-table-column prop="date" label="Date" width="180" />
    <long-table-column prop="name" label="Name" width="180" />
    <long-table-column prop="address" label="Address" />
  </long-table>
</template>

<script setup>
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
