<template>
  <div class="demo-row">
    <long-button @click="visible = true">Open Dialog</long-button>
    <long-dialog v-model="visible" title="Basic Dialog">
      <span>This is a basic dialog</span>
      <template #footer>
        <div style="text-align: right">
          <long-button @click="visible = false">Cancel</long-button>
          <long-button type="primary" @click="visible = false">Confirm</long-button>
        </div>
      </template>
    </long-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)
</script>
