import { createApp } from 'vue'
import LongUI from 'long-ui'
import '@long-ui/styles/src/index.scss'
import App from './App.vue'

const app = createApp(App)

app.use(LongUI)
app.mount('#app')
