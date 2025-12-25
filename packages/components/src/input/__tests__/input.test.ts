import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from '../src/input.vue'

describe('Input', () => {
    it('should render correctly', () => {
        const wrapper = mount(Input, {
            props: {
                modelValue: 'test',
            },
        })
        expect(wrapper.find('input').element.value).toBe('test')
    })

    it('should support show-password toggle', async () => {
        const wrapper = mount(Input, {
            props: {
                modelValue: 'password',
                type: 'password',
                showPassword: true,
            },
        })
        const input = wrapper.find('input')
        expect(input.attributes('type')).toBe('password')

        const eyeIcon = wrapper.find('.long-input__password')
        expect(eyeIcon.exists()).toBe(true)

        await eyeIcon.trigger('click')
        expect(input.attributes('type')).toBe('text')
    })

    it('should respect maxlength', () => {
        const wrapper = mount(Input, {
            props: {
                maxlength: 10,
                showWordLimit: true,
            },
        })
        expect(wrapper.find('input').attributes('maxlength')).toBe('10')
        expect(wrapper.find('.long-input__count').exists()).toBe(true)
    })

    it('should render icons', () => {
        const wrapper = mount(Input, {
            props: {
                prefixIcon: 'prefix-icon-class',
                suffixIcon: 'suffix-icon-class',
            },
        })
        expect(wrapper.find('.prefix-icon-class').exists()).toBe(true)
        expect(wrapper.find('.suffix-icon-class').exists()).toBe(true)
    })
})
