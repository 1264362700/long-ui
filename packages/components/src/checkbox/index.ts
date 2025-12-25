import { withInstall } from '@long-ui/utils'
import Checkbox from './src/checkbox.vue'
import CheckboxGroup from './src/checkbox-group.vue'

export const LongCheckbox = withInstall(Checkbox)
export const LongCheckboxGroup = withInstall(CheckboxGroup)

export default LongCheckbox

export * from './src/checkbox'
