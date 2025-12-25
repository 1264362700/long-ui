import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TableColumnRenderer',
    props: {
        render: Function,
        data: Object
    },
    setup(props) {
        return () => props.render ? props.render(props.data) : null
    }
})
