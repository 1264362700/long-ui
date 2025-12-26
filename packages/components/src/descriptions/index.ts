import { withInstall } from '@long-ui/utils'
import Descriptions from './src/descriptions.vue'
import DescriptionsItem from './src/descriptions-item.vue'

export const LongDescriptions = withInstall(Descriptions)
export const LongDescriptionsItem = withInstall(DescriptionsItem)

export default LongDescriptions

export * from './src/descriptions'
export * from './src/descriptions-item'
