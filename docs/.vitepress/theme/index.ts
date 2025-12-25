import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import LongUI from '@long-ui/components'
import Preview from './components/Preview.vue'
import LongLogo from './components/LongLogo.vue'
import '../../../core/styles/src/index.scss'
import './custom.scss'

export default {
    ...DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            'nav-bar-title-before': () => h(LongLogo),
            'home-hero-image': () => h(LongLogo, { isHero: true })
        })
    },
    enhanceApp({ app }: { app: any }) {
        app.use(LongUI)
        app.component('Preview', Preview)
        app.component('preview', Preview)
    }
}
