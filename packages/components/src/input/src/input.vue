<template>
  <div
    :class="[
      ns.b(),
      ns.m(size),
      ns.is('disabled', disabled),
      ns.is('textarea', type === 'textarea'),
      {
        [ns.m('group')]: $slots.prepend || $slots.append,
        [ns.m('group-append')]: $slots.append,
        [ns.m('group-prepend')]: $slots.prepend,
        [ns.m('prefix')]: $slots.prefix || prefixIcon,
        [ns.m('suffix')]: $slots.suffix || suffixIcon || clearable || showPassword,
      }
    ]"
  >
    <!-- Prepend -->
    <div v-if="$slots.prepend" :class="ns.be('group', 'prepend')">
      <slot name="prepend" />
    </div>

    <div :class="[ns.e('wrapper')]">
      <!-- Prefix Icon -->
      <span v-if="$slots.prefix || prefixIcon" :class="ns.e('prefix')">
        <slot name="prefix">
          <i v-if="prefixIcon" :class="[ns.e('icon'), prefixIcon]"></i>
        </slot>
      </span>

      <textarea
        v-if="type === 'textarea'"
        ref="textarea"
        class="long-textarea__inner"
        v-bind="$attrs"
        :disabled="disabled"
        :readonly="readonly"
        :value="modelValue"
        :placeholder="placeholder"
        :maxlength="maxlength"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <input
        v-else
        ref="input"
        :class="ns.e('inner')"
        v-bind="$attrs"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :disabled="disabled"
        :readonly="readonly"
        :value="modelValue"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :autocomplete="autocomplete"
        :name="name"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />

      <!-- Suffix Icon -->
      <span v-if="$slots.suffix || suffixIcon || showClear || showPassword || showWordLimit" :class="ns.e('suffix')">
        <span v-if="!showClear || !modelValue">
          <span v-if="showWordLimit && maxlength" :class="ns.e('count')">
            {{ textLength }}/{{ maxlength }}
          </span>
          <span
            v-if="showPassword && modelValue"
            :class="ns.e('password')"
            @click="handlePasswordVisible"
          >
            {{ passwordVisible ? '👁️' : '🔒' }}
          </span>
          <slot name="suffix">
            <i v-if="suffixIcon" :class="[ns.e('icon'), suffixIcon]"></i>
          </slot>
        </span>
        <span v-if="showClear && modelValue" :class="ns.e('clear')" @click="handleClear">
          ✕
        </span>
      </span>
    </div>

    <!-- Append -->
    <div v-if="$slots.append" :class="ns.be('group', 'append')">
      <slot name="append" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useNamespace } from '@long-ui/hooks'
import { inputProps, inputEmits } from './input'

defineOptions({
  name: 'LongInput',
  inheritAttrs: false,
})

const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)

const ns = useNamespace('input')
const input = ref<HTMLInputElement>()
const textarea = ref<HTMLTextAreaElement>()

const passwordVisible = ref(false)

const showClear = computed(() => {
  return props.clearable && !props.disabled && !props.readonly && !!props.modelValue
})

const textLength = computed(() => {
  return String(props.modelValue || '').length
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
  emit('input', target.value)
}

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('change', target.value)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}

const handleClear = () => {
  emit('update:modelValue', '')
  emit('input', '')
  emit('clear')
}

const handlePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value
}
</script>
