<template>
    <div
        ref="selectRef"
        v-click-outside="handleClickOutside"
        :class="[
            ns.b(),
            ns.m(size),
            ns.is('disabled', disabled),
            ns.is('active', visible),
            ns.is('multiple', multiple)
        ]"
        @click="toggleMenu"
    >
        <div :class="ns.e('wrapper')">
            <div v-if="multiple" :class="ns.e('tags')">
                <span
                    v-for="val in (modelValue as any[])"
                    :key="val"
                    :class="ns.e('tag')"
                >
                    <span :class="ns.e('tag-text')">{{ getLabelByValue(val) }}</span>
                    <span
                        :class="ns.e('tag-close')"
                        @click.stop="handleRemoveTag(val)"
                    >
                        ✕
                    </span>
                </span>
                <input
                    v-if="filterable"
                    ref="inputRef"
                    :class="[ns.e('input'), ns.is('multiple', multiple)]"
                    :value="filterQuery"
                    :placeholder="modelValue && (modelValue as any[]).length > 0 ? '' : placeholder"
                    :disabled="disabled"
                    @input="handleFilterInput"
                />
            </div>
            <input
                v-else
                :readonly="!filterable"
                :class="ns.e('input')"
                :value="filterable && visible ? filterQuery : selectedLabel"
                :placeholder="placeholder"
                :disabled="disabled"
                @input="handleFilterInput"
            />
            <span :class="ns.e('suffix')">
                <span
                    v-if="showClear"
                    :class="ns.e('clear')"
                    @click.stop="handleClear"
                >
                    ✕
                </span>
                <span v-else :class="[ns.e('arrow'), ns.is('reverse', visible)]">
                    ▼
                </span>
            </span>
        </div>

        <transition name="long-zoom-in-top">
            <div v-show="visible" :class="ns.e('dropdown')">
                <ul :class="ns.e('list')">
                    <li
                        v-for="item in filteredOptions"
                        :key="item.value"
                        :class="[
                            ns.e('item'),
                            ns.is('selected', isSelected(item.value)),
                            ns.is('disabled', item.disabled)
                        ]"
                        @click.stop="handleSelect(item)"
                    >
                        {{ item.label }}
                        <span v-if="multiple && isSelected(item.value)" :class="ns.e('check')">
                            ✓
                        </span>
                    </li>
                    <li v-if="filteredOptions.length === 0" :class="ns.e('empty')">
                        暂无数据
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, nextTick } from 'vue'
import { useNamespace } from '@long-ui/hooks'
import { ClickOutside } from '@long-ui/utils'
import { selectProps, selectEmits, type SelectOption } from './select'

defineOptions({
    name: 'LongSelect',
    directives: {
        ClickOutside,
    },
})

const props = defineProps(selectProps)
const emit = defineEmits(selectEmits)

const ns = useNamespace('select')
const visible = ref(false)
const filterQuery = ref('')
const inputRef = ref<HTMLInputElement | null>(null)

const selectedLabel = computed(() => {
    if (props.multiple) return ''
    const option = (props.options as SelectOption[]).find(opt => opt.value === props.modelValue)
    return option ? option.label : ''
})

const getLabelByValue = (val: string | number | boolean) => {
    const option = (props.options as SelectOption[]).find(opt => opt.value === val)
    return option ? option.label : val
}

const isSelected = (val: string | number | boolean) => {
    if (props.multiple) {
        return Array.isArray(props.modelValue) && props.modelValue.includes(val as any)
    }
    return props.modelValue === val
}

const filteredOptions = computed(() => {
    if (!props.filterable || !filterQuery.value) return props.options as SelectOption[]
    return (props.options as SelectOption[]).filter(opt => opt.label.includes(filterQuery.value))
})

const showClear = computed(() => {
    const hasValue = props.multiple
        ? Array.isArray(props.modelValue) && props.modelValue.length > 0
        : !!props.modelValue
    return props.clearable && !props.disabled && hasValue
})

const toggleMenu = () => {
    if (props.disabled) return
    visible.value = !visible.value
    if (visible.value && props.filterable) {
        filterQuery.value = ''
        if (props.multiple) {
            nextTick(() => inputRef.value?.focus())
        }
    }
}

const handleClickOutside = () => {
    visible.value = false
}

const handleSelect = (item: SelectOption) => {
    if (item.disabled) return
    if (props.multiple) {
        const modelValue = Array.isArray(props.modelValue) ? [...props.modelValue] : []
        const index = modelValue.indexOf(item.value as any)
        if (index > -1) {
            modelValue.splice(index, 1)
        } else {
            modelValue.push(item.value as any)
        }
        emit('update:modelValue', modelValue)
        emit('change', modelValue)
        filterQuery.value = ''
        inputRef.value?.focus()
    } else {
        emit('update:modelValue', item.value)
        emit('change', item.value)
        visible.value = false
    }
}

const handleRemoveTag = (val: string | number | boolean) => {
    if (props.disabled) return
    const option = (props.options as SelectOption[]).find(opt => opt.value === val)
    if (option?.disabled) return

    const modelValue = Array.isArray(props.modelValue) ? [...props.modelValue] : []
    const index = modelValue.indexOf(val as any)
    if (index > -1) {
        modelValue.splice(index, 1)
        emit('update:modelValue', modelValue)
        emit('change', modelValue)
    }
}

const handleClear = () => {
    const emptyValue = props.multiple ? [] : ''
    emit('update:modelValue', emptyValue)
    emit('change', emptyValue)
    emit('clear')
}

const handleFilterInput = (e: Event) => {
    if (!props.filterable) return
    filterQuery.value = (e.target as HTMLInputElement).value
    visible.value = true
}
</script>

<style lang="scss" scoped>
/* Tags and Multiple Select Styles */
.long-select {
    &__tags {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
        padding: 3px 0;
        width: 100%;
    }

    &__tag {
        display: inline-flex;
        align-items: center;
        background: var(--vp-c-brand-soft);
        color: var(--vp-c-brand);
        padding: 2px 8px;
        border-radius: 4px;
        font-size: 12px;
        border: 1px solid rgba(64, 158, 255, 0.2);

        &-text {
            max-width: 100px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        &-close {
            margin-left: 4px;
            cursor: pointer;
            font-size: 10px;
            opacity: 0.6;
            transition: opacity 0.2s;

            &:hover {
                opacity: 1;
            }
        }
    }

    &__input.is-multiple {
        flex: 1;
        min-width: 20px;
        height: 24px;
        background: transparent;
        border: none;
        outline: none;
        padding: 0;
    }

    &__check {
        float: right;
        color: var(--vp-c-brand);
        font-weight: bold;
    }
}
</style>
