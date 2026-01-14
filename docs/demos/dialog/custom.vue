<template>
  <div>
    <long-button @click="visible = true">Custom Content</long-button>
    <long-dialog v-model="visible" title="Shipping Address">
      <long-table :data="gridData">
        <long-table-column property="date" label="Date" width="150" />
        <long-table-column property="name" label="Name" width="200" />
        <long-table-column property="address" label="Address" />
      </long-table>
    </long-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)
const gridData = [
  { date: '2016-05-02', name: 'Jack', address: 'No. 189, Grove St, Los Angeles' }
]
</script>
