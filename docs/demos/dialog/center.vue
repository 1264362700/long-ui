<template>
  <div>
    <long-button @click="visible = true">Center Dialog</long-button>
    <long-dialog v-model="visible" title="Warning" center>
      <span>This is centered message</span>
      <template #footer>
        <span class="dialog-footer">
          <long-button @click="visible = false">Cancel</long-button>
          <long-button type="primary" @click="visible = false">Confirm</long-button>
        </span>
      </template>
    </long-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)
</script>
