import { withInstall } from '@long-ui/utils'
import Tabs from './src/tabs.vue'
import TabPane from './src/tab-pane.vue'

export const LongTabs = withInstall(Tabs)
export const LongTabPane = withInstall(TabPane)

export default LongTabs

export * from './src/tabs'
