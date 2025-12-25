import { withInstallFunction } from '@long-ui/utils'
import { Message } from './src/method'

export const LongMessage = withInstallFunction(Message, '$message')
export default LongMessage

export * from './src/message'
