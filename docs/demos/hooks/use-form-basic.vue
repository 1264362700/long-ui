<template>
  <LongSpace direction="vertical" style="width: 100%" :size="20">
    <div style="padding: 16px; border: 1px solid #f0f0f0; border-radius: 8px;">
      <LongSpace direction="vertical" style="width: 100%">
        <div><strong>用户名:</strong></div>
        <LongInput v-model="formModel.username" placeholder="请输入用户名" />
        
        <div><strong>邮箱:</strong></div>
        <LongInput v-model="formModel.email" placeholder="请输入邮箱" />
        
        <LongSpace>
          <LongButton type="primary" @click="handleLogin">登录</LongButton>
          <LongButton @click="resetFields">重置</LongButton>
        </LongSpace>
      </LongSpace>
    </div>
    
    <div style="color: rgba(0,0,0,0.45); font-size: 13px;">
      实时数据: {{ formModel }}
    </div>
  </LongSpace>
</template>

<script setup lang="ts">
import { useForm } from '@long-ui/hooks'

const { formModel, resetFields } = useForm({
  initialValues: {
    username: 'long_user',
    email: 'long@example.com'
  }
})

const handleLogin = () => {
  alert(`提交数据: ${JSON.stringify(formModel)}`)
}
</script>
