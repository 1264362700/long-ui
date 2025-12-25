<template>
    <long-button @click="visible = true">Open Dialog</long-button>
    <long-dialog v-model="visible" title="Tips" width="30%" :before-close="handleClose">
        <span>This is a message</span>
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

const handleClose = (done: () => void) => {
    // confirm('Are you sure to close this dialog?')
    //     .then(() => {
    //         done()
    //     })
    //     .catch(() => {
    //         // catch error
    //     })
    done()
}
</script>
