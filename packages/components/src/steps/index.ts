import { withInstall, withNoopInstall } from '@long-ui/utils'

import Steps from './src/steps.vue'
import Step from './src/item.vue'

export const LongSteps = withInstall(Steps, {
    Step,
})
export const LongStep = withNoopInstall(Step)

export default LongSteps

export * from './src/steps'
export * from './src/item'
