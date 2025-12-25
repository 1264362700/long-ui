import { withInstall } from '@long-ui/utils'
import Radio from './src/radio.vue'
import RadioGroup from './src/radio-group.vue'

export const LongRadio = withInstall(Radio)
export const LongRadioGroup = withInstall(RadioGroup)

export default LongRadio

export * from './src/radio'
