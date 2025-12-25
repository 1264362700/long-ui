<template>
  <div style="max-width: 500px; padding: 32px; background: var(--vp-c-bg-soft); border-radius: 20px; border: 1px solid var(--vp-c-divider-light); box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
    <h3 style="margin-top: 0; margin-bottom: 24px; font-weight: 600;">System Configuration</h3>
    <long-form :model="form" label-width="120px">
      <long-form-item label="Profile Name">
        <long-input v-model="form.name" placeholder="E.g. Production Cluster" />
      </long-form-item>
      <long-form-item label="Region Space">
        <long-select v-model="form.region" placeholder="Select global region" :options="regionOptions" />
      </long-form-item>
      <long-form-item label="Auto Scaler">
        <long-switch v-model="form.delivery" />
      </long-form-item>
      <long-form-item label="Description">
        <long-input type="textarea" v-model="form.desc" placeholder="Details about this environment..." />
      </long-form-item>
      <long-form-item>
        <long-button type="primary" @click="onSubmit">Deploy Changes</long-button>
        <long-button link>Revert to Default</long-button>
      </long-form-item>
    </long-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  region: '',
  delivery: true,
  desc: ''
})

const regionOptions = [
  { label: 'Americas (US-East)', value: 'us-east' },
  { label: 'Europe (Frankfurt)', value: 'eu-fr' },
  { label: 'Asia Pacific (Tokyo)', value: 'ap-jp' },
]

const onSubmit = () => {
  console.log('Deploying...', form)
}
</script>
