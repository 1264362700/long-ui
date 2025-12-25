import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Table from '../src/table.vue'

describe('Table', () => {
    const data = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
    ]

    it('should render data correctly', () => {
        const wrapper = mount(Table, {
            props: {
                data,
            },
        })
        expect(wrapper.findAll('.long-table__row')).toHaveLength(2)
    })

    it('should show empty text when no data', () => {
        const wrapper = mount(Table, {
            props: {
                data: [],
                emptyText: 'No Records',
            },
        })
        expect(wrapper.find('.long-table__empty-text').text()).toBe('No Records')
    })

    it('should hide header when show-header is false', () => {
        const wrapper = mount(Table, {
            props: {
                data,
                showHeader: false,
            },
        })
        expect(wrapper.find('.long-table__header-wrapper').exists()).toBe(false)
    })
})
