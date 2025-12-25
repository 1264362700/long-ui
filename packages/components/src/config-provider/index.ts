import { withInstall } from '@long-ui/utils'
import ConfigProvider from './src/config-provider.vue'

export const LongConfigProvider = withInstall(ConfigProvider)

export default LongConfigProvider

export * from './src/config-provider'
