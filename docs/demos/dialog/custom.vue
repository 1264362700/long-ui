<template>
    <long-button @click="visible = true">Open Dialog</long-button>
    <long-dialog v-model="visible" title="Shipping address">
        <long-input v-model="input" placeholder="Please input" />
        <template #footer>
            <span class="dialog-footer">
                <long-button @click="visible = false">Cancel</long-button>
                <long-button type="primary" @click="visible = false">Confirm</long-button>
            </span>
        </template>
    </long-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
const input = ref('')
</script>
