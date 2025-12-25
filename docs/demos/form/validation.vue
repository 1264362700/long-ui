<template>
  <long-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
  >
    <long-form-item label="Activity name" prop="name">
      <long-input v-model="ruleForm.name" />
    </long-form-item>
    <long-form-item label="Activity zone" prop="region">
      <long-select v-model="ruleForm.region" placeholder="Activity zone">
        <long-option label="Zone one" value="shanghai" />
        <long-option label="Zone two" value="beijing" />
      </long-select>
    </long-form-item>
    <long-form-item>
      <long-button type="primary" @click="submitForm(ruleFormRef)">
        Create
      </long-button>
      <long-button @click="resetForm(ruleFormRef)">Reset</long-button>
    </long-form-item>
  </long-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const ruleFormRef = ref()
const ruleForm = reactive({
  name: 'Hello',
  region: '',
})

const rules = reactive({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
})

const submitForm = async (formEl: any) => {
  if (!formEl) return
  await formEl.validate((valid: boolean, fields: any) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: any) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
