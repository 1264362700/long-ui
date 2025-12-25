<template>
  <long-button @click="centerDialogVisible = true">Click to open the Dialog</long-button>

  <long-dialog v-model="centerDialogVisible" title="Warning" width="30%" center>
    <span>
      It should be noted that the content will not be aligned in center by
      default
    </span>
    <template #footer>
      <span class="dialog-footer">
        <long-button @click="centerDialogVisible = false">Cancel</long-button>
        <long-button type="primary" @click="centerDialogVisible = false">
          Confirm
        </long-button>
      </span>
    </template>
  </long-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const centerDialogVisible = ref(false)
</script>

<style scoped>
.dialog-footer {
  display: flex;
  justify-content: center;
  gap: 12px;
}
</style>
