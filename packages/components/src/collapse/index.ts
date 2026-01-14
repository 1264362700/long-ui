import { withInstall, withNoopInstall } from '@long-ui/utils'

import Collapse from './src/collapse.vue'
import CollapseItem from './src/collapse-item.vue'

export const LongCollapse = withInstall(Collapse, {
    CollapseItem,
})
export const LongCollapseItem = withNoopInstall(CollapseItem)

export default LongCollapse

export * from './src/collapse'
export * from './src/collapse-item'
