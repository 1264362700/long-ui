<template>
  <div>
    <long-pro-table :columns="columns" :request="fetchData" />
  </div>
</template>

<script setup lang="ts">
const columns = [{ title: 'ID', dataIndex: 'id' }]
const fetchData = async () => ({ data: [{ id: 1 }], total: 1 })
</script>
