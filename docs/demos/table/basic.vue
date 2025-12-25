<template>
  <div style="padding: 16px; background: var(--vp-c-bg-soft); border-radius: 12px; border: 1px solid var(--vp-c-divider-light);">
    <long-table :data="tableData" border stripe>
      <long-table-column prop="name" label="User Name" width="140" />
      <long-table-column prop="role" label="Role" width="120" />
      <long-table-column prop="status" label="Status" width="100">
        <template #default="{ row }">
          <span :style="{ 
            color: row.status === 'Active' ? '#67C23A' : '#F56C6C',
            fontSize: '12px',
            fontWeight: '600',
            background: row.status === 'Active' ? 'rgba(103, 194, 58, 0.12)' : 'rgba(245, 108, 108, 0.12)',
            padding: '2px 10px',
            borderRadius: '6px',
            display: 'inline-block'
          }">
            {{ row.status }}
          </span>
        </template>
      </long-table-column>
      <long-table-column prop="lastLogin" label="Last Login" />
      <long-table-column label="Actions" width="160">
        <template #default>
          <long-button type="primary" size="small" link>Settings</long-button>
          <long-button type="danger" size="small" link>Ban</long-button>
        </template>
      </long-table-column>
    </long-table>
  </div>
</template>

<script setup>
const tableData = [
  { name: 'Ethan Hunt', role: 'Administrator', status: 'Active', lastLogin: '2025-05-12 10:24' },
  { name: 'Sarah Connor', role: 'Developer', status: 'Active', lastLogin: '2025-05-11 15:45' },
  { name: 'John Wick', role: 'Support', status: 'Inactive', lastLogin: '2025-04-30 08:12' },
  { name: 'Ellen Ripley', role: 'Engineer', status: 'Active', lastLogin: '2025-05-12 11:05' }
]
</script>
