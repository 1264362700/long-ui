<template>
  <div>
    <long-button @click="outerVisible = true">Open Outer Dialog</long-button>
    <long-dialog v-model="outerVisible" title="Outer Dialog">
      <long-dialog v-model="innerVisible" title="Inner Dialog" append-to-body>
        <span>This is inner message</span>
      </long-dialog>
      <template #footer>
<div  class="dialog-footer">
        <long-button @click="outerVisible = false">Cancel</long-button>
        <long-button type="primary" @click="innerVisible = true">Open Inner</long-button>
      </div>
</template>
    </long-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const outerVisible = ref(false)
const innerVisible = ref(false)
</script>
