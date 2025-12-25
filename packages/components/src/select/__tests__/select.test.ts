import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Select from '../src/select.vue'

const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3', disabled: true },
]

describe('Select', () => {
    it('should select single value', async () => {
        const wrapper = mount(Select, {
            props: {
                modelValue: '',
                options,
            },
        })
        await wrapper.trigger('click')
        const items = wrapper.findAll('.long-select__item')
        await items[0].trigger('click')
        expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['1'])
    })

    it('should support multiple selection', async () => {
        const wrapper = mount(Select, {
            props: {
                modelValue: [],
                options,
                multiple: true,
            },
        })
        await wrapper.trigger('click')
        const items = wrapper.findAll('.long-select__item')

        await items[0].trigger('click')
        expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['1']])

        // Mocking the modelValue update for the next selection
        await wrapper.setProps({ modelValue: ['1'] })
        await items[1].trigger('click')
        expect(wrapper.emitted('update:modelValue')?.[1]).toEqual([['1', '2']])
    })

    it('should remove tag in multiple mode', async () => {
        const wrapper = mount(Select, {
            props: {
                modelValue: ['1', '2'],
                options,
                multiple: true,
            },
        })
        const closeBtn = wrapper.find('.long-select__tag-close')
        await closeBtn.trigger('click')
        expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['2']])
    })

    it('should filter options', async () => {
        const wrapper = mount(Select, {
            props: {
                options,
                filterable: true,
            },
        })
        const input = wrapper.find('input')
        await input.setValue('Option 1')
        const items = wrapper.findAll('.long-select__item')
        expect(items).toHaveLength(1)
        expect(items[0].text()).toBe('Option 1')
    })
})
