<template>
  <long-form :model="form" label-width="120px">
    <long-form-item label="Activity name">
      <long-input v-model="form.name" />
    </long-form-item>
    <long-form-item label="Activity zone">
      <long-select v-model="form.region" placeholder="please select your zone">
        <long-option label="Zone one" value="shanghai" />
        <long-option label="Zone two" value="beijing" />
      </long-select>
    </long-form-item>
  </long-form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
</script>
