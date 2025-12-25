<template>
  <div
    :class="[
      ns.b(),
      ns.m(size || ''),
      ns.is('error', validateState === 'error'),
      ns.is('success', validateState === 'success'),
      ns.is('required', isRequired || required)
    ]"
  >
    <label
      v-if="label || $slots.label"
      :for="labelFor"
      :class="ns.e('label')"
      :style="labelStyle"
    >
      <slot name="label">{{ label }}</slot>
    </label>
    <div :class="ns.e('content')">
      <slot />
      <transition name="long-zoom-in-top">
        <div v-if="shouldShowMessage && validateMessage" :class="ns.e('error')">
          {{ validateMessage }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, inject, onMounted, onBeforeUnmount, provide, toRefs, reactive } from 'vue'
import Schema from 'async-validator'
import { useNamespace } from '@long-ui/hooks'
import { formItemProps } from './form-item'
import { formContextKey, formItemContextKey, type FormItemContext } from '../../form/src/constants'

const props = defineProps(formItemProps)

defineOptions({
  name: 'LongFormItem'
})

const ns = useNamespace('form-item')

const formContext = inject(formContextKey, undefined)
const validateState = ref('')
const validateMessage = ref('')
const isValidating = ref(false)

const getProp = (obj: any, path: string) => {
    return {
        get value() {
            return path.split('.').reduce((o, k) => (o || {})[k], obj)
        }
    }
}

const computedLabelWidth = computed(() => {
  return props.labelWidth || formContext?.labelWidth || ''
})

const labelStyle = computed(() => {
  const width = computedLabelWidth.value
  if (width) {
    return { width: typeof width === 'number' ? `${width}px` : width }
  }
  return {}
})

const labelFor = computed(() => props.for || props.prop)

const _rules = computed(() => {
  const rules = props.rules ? props.rules : (props.prop ? formContext?.rules?.[props.prop] : [])
  return [].concat(rules as any || [])
})

const isRequired = computed(() => {
  return _rules.value.some((rule: any) => rule.required)
})

const shouldShowMessage = computed(() => {
  return props.showMessage && (formContext?.showMessage ?? true)
})

let initialValue: any = undefined

const getModelValue = () => {
  const model = formContext?.model
  if (!model || !props.prop) return
  return getProp(model, props.prop).value
}

const validate = async (trigger: string) => {
  const rules = _rules.value.filter((rule: any) => {
    if (!rule.trigger || !trigger) return true
    if (Array.isArray(rule.trigger)) return rule.trigger.includes(trigger)
    return rule.trigger === trigger
  })

  if (rules.length === 0) return true

  const modelName = props.prop
  const val = getModelValue()
  const validator = new Schema({
    [modelName]: rules
  })

  isValidating.value = true
  
  return validator.validate({ [modelName]: val }, { firstFields: true })
    .then(() => {
      validateState.value = 'success'
      validateMessage.value = ''
      return true
    })
    .catch(({ errors }) => {
      validateState.value = 'error'
      validateMessage.value = errors[0].message
      return Promise.reject(errors)
    })
    .finally(() => {
      isValidating.value = false
    })
}

const resetField = () => {
  validateState.value = ''
  validateMessage.value = ''
  const model = formContext?.model
  const value = getModelValue()
  // TODO: Reset to initialValue (Need deep clone or getProp setter support)
  // For simplified implementation, we clear validation only or basic reset if possible
  if (model && props.prop && initialValue !== undefined) {
    // Basic reset implementation
    // Ideally use setProp utility
    const path = props.prop.split('.')
    let current = model
    for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]]
    }
    current[path[path.length - 1]] = initialValue
  }
}

const clearValidate = () => {
  validateState.value = ''
  validateMessage.value = ''
}

const context: FormItemContext = reactive({
  ...toRefs(props),
  validate,
  resetField,
  clearValidate
})

provide(formItemContextKey, context)

onMounted(() => {
  if (props.prop) {
    formContext?.addField(context)
    initialValue = getModelValue() // Need deep clone
    try {
        initialValue = JSON.parse(JSON.stringify(initialValue ?? null)) // Simple clone
    } catch {
        initialValue = getModelValue()
    }
  }
})

onBeforeUnmount(() => {
  formContext?.removeField(context)
})

defineExpose({
  validate,
  resetField,
  clearValidate,
  validateState,
  validateMessage
})
</script>
