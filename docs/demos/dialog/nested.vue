<template>
  <long-button @click="outerVisible = true">Click to open the Outer Dialog</long-button>

  <long-dialog v-model="outerVisible" title="Outer Dialog">
    <div style="text-align: center">
      <long-button @click="innerVisible = true">Click to open the Inner Dialog</long-button>
    </div>
    
    <long-dialog
      v-model="innerVisible"
      width="30%"
      title="Inner Dialog"
      append-to-body
    >
      <span>This is the inner Dialog</span>
    </long-dialog>
    <template #footer>
      <div class="dialog-footer">
        <long-button @click="outerVisible = false">Cancel</long-button>
        <long-button type="primary" @click="outerVisible = false">Confirm</long-button>
      </div>
    </template>
  </long-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const outerVisible = ref(false)
const innerVisible = ref(false)
</script>

<style scoped>
.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
</style>
