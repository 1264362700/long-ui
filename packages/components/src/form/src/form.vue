<template>
  <form :class="[ns.b(), ns.m(props.size), { [ns.m('inline')]: props.inline }]">
    <slot />
  </form>
</template>

<script setup lang="ts">
import { provide, reactive, toRefs } from 'vue'
import { useNamespace } from '@long-ui/hooks'
import { formProps } from './form'
import { formContextKey, type FormContext, type FormItemContext, type FormProps } from './constants'

const props = defineProps(formProps)

defineOptions({
  name: 'LongForm'
})

const ns = useNamespace('form')

const fields: FormItemContext[] = []

const addField = (field: FormItemContext) => {
  fields.push(field)
}

const removeField = (field: FormItemContext) => {
  if (field.prop) {
    fields.splice(fields.indexOf(field), 1)
  }
}

const resetFields = (props: string[] = []) => {
  const filterFields = props.length
    ? fields.filter((field) => props.includes(field.prop))
    : fields
  filterFields.forEach((field) => field.resetField())
}

const clearValidate = (props: string[] = []) => {
  const filterFields = props.length
    ? fields.filter((field) => props.includes(field.prop))
    : fields
  filterFields.forEach((field) => field.clearValidate())
}

const validate = async (callback?: (valid: boolean, fields?: any) => void) => {
  let validationErrors: any = {}
  let promise
  if (!callback) {
    promise = new Promise((resolve, reject) => {
      callback = (valid: boolean, fields?: any) => {
        if (valid) {
          resolve(true)
        } else {
          reject(fields)
        }
      }
    })
  }

  if (fields.length === 0) {
    callback?.(true)
    return promise
  }

  let valid = true
  let count = 0
  
  for (const field of fields) {
    try {
      await field.validate('')
    } catch (errors: any) {
      valid = false
      validationErrors = { ...validationErrors, ...errors }
    }
    count++
    if (count === fields.length) {
      callback?.(valid, valid ? undefined : validationErrors)
    }
  }

  return promise
}

provide(formContextKey, reactive({
  ...toRefs(props),
  addField,
  removeField
}) as FormContext)

defineExpose({
  validate,
  resetFields,
  clearValidate
})
</script>
