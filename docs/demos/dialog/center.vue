<template>
  <div class="demo-row">
    <long-button type="primary" @click="visible = true">Center Dialog</long-button>
    <long-dialog v-model="visible" title="Centered Dialog" center align-center>
      <span>This is a centered dialog, looks more premium.</span>
      <template #footer>
        <div style="text-align: center">
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
