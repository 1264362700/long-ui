import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../src/button.vue'

describe('Button', () => {
    it('should render correctly', () => {
        const wrapper = mount(Button, {
            slots: {
                default: 'Hello',
            },
        })
        expect(wrapper.text()).toContain('Hello')
        expect(wrapper.classes()).toContain('long-button')
    })

    it('should have correct type class', () => {
        const wrapper = mount(Button, {
            props: {
                type: 'primary',
            },
        })
        expect(wrapper.classes()).toContain('long-button--primary')
    })

    it('should have correct size class', () => {
        const wrapper = mount(Button, {
            props: {
                size: 'large',
            },
        })
        expect(wrapper.classes()).toContain('long-button--large')
    })

    it('should be disabled when disabled prop is true', () => {
        const wrapper = mount(Button, {
            props: {
                disabled: true,
            },
        })
        expect(wrapper.classes()).toContain('is-disabled')
        expect(wrapper.attributes('disabled')).toBeDefined()
    })

    it('should show loading state', () => {
        const wrapper = mount(Button, {
            props: {
                loading: true,
            },
        })
        expect(wrapper.classes()).toContain('is-loading')
        expect(wrapper.find('.long-button__loading').exists()).toBe(true)
    })

    it('should have round class when round prop is true', () => {
        const wrapper = mount(Button, {
            props: {
                round: true,
            },
        })
        expect(wrapper.classes()).toContain('is-round')
    })

    it('should have plain class when plain prop is true', () => {
        const wrapper = mount(Button, {
            props: {
                plain: true,
            },
        })
        expect(wrapper.classes()).toContain('is-plain')
    })

    it('should have circle class when circle prop is true', () => {
        const wrapper = mount(Button, {
            props: {
                circle: true,
            },
        })
        expect(wrapper.classes()).toContain('is-circle')
    })

    it('should emit click event', async () => {
        const wrapper = mount(Button)
        await wrapper.trigger('click')
        expect(wrapper.emitted('click')).toHaveLength(1)
    })

    it('should not emit click event when disabled', async () => {
        const wrapper = mount(Button, {
            props: {
                disabled: true,
            },
        })
        await wrapper.trigger('click')
        expect(wrapper.emitted('click')).toBeUndefined()
    })

    it('should not emit click event when loading', async () => {
        const wrapper = mount(Button, {
            props: {
                loading: true,
            },
        })
        await wrapper.trigger('click')
        expect(wrapper.emitted('click')).toBeUndefined()
    })

    it('should have correct native type', () => {
        const wrapper = mount(Button, {
            props: {
                nativeType: 'submit',
            },
        })
        expect(wrapper.attributes('type')).toBe('submit')
    })

    it('should be block when block prop is true', () => {
        const wrapper = mount(Button, {
            props: {
                block: true,
            },
        })
        expect(wrapper.classes()).toContain('is-block')
    })

    it('should have link class when link prop is true', () => {
        const wrapper = mount(Button, {
            props: {
                link: true,
            },
        })
        expect(wrapper.classes()).toContain('is-link')
    })

    it('should render as different tag', () => {
        const wrapper = mount(Button, {
            props: {
                tag: 'a',
            },
        })
        expect(wrapper.element.tagName).toBe('A')
    })

    it('should use custom loading icon', () => {
        const customIcon = 'custom-loading-icon'
        const wrapper = mount(Button, {
            props: {
                loading: true,
                loadingIcon: customIcon,
            },
        })
        expect(wrapper.find(`.${customIcon}`).exists()).toBe(true)
    })
})
