<template>
  <div>
    <long-button @click="visible = true">Align Center Dialog</long-button>
    <long-dialog v-model="visible" title="Align Center" align-center>
      <span>This message is vertically centered</span>
    </long-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)
</script>
