import { LongButton } from './button'
import { LongCalendar } from './calendar'
import { LongConfigProvider } from './config-provider'
import { LongInput } from './input'
import { LongSelect } from './select'
import { LongSwitch } from './switch'
import { LongRadio, LongRadioGroup } from './radio'
import { LongCheckbox, LongCheckboxGroup } from './checkbox'
import { LongInputNumber } from './input-number'
import { LongIcon } from './icon'
import { LongDialog } from './dialog'
import { LongMessage } from './message'
import { LongTimePicker } from './time-picker'
import { LongForm } from './form'
import { LongFormItem } from './form-item'
import { LongTable } from './table'
import { LongTableColumn } from './table-column'
import { LongTag } from './tag'
import { LongEmpty } from './empty'
import { LongLoading } from './loading'
import { LongPagination } from './pagination'
import { LongSpace } from './space'
import { LongCard } from './card/index'
import { LongSkeleton } from './skeleton/index'
import { LongBadge } from './badge/index'
import { LongDescriptions, LongDescriptionsItem } from './descriptions/index'
import { LongAlert } from './alert/index'
import { LongTabs, LongTabPane } from './tabs/index'
import { LongTooltip } from './tooltip/index'
import { LongDrawer } from './drawer'
import { LongAvatar } from './avatar'
import { LongBreadcrumb } from './breadcrumb'
import type { App } from 'vue'

const components = [
    LongButton,
    LongCalendar,
    LongConfigProvider,
    LongInput,
    LongSelect,
    LongSwitch,
    LongRadio,
    LongRadioGroup,
    LongCheckbox,
    LongCheckboxGroup,
    LongInputNumber,
    LongIcon,
    LongDialog,
    LongMessage,
    LongTimePicker,
    LongForm,
    LongFormItem,
    LongTable,
    LongTag,
    LongEmpty,
    LongLoading,
    LongPagination,
    LongSpace,
    LongCard,
    LongSkeleton,
    LongBadge,
    LongDescriptions,
    LongDescriptionsItem,
    LongAlert,
    LongTabs,
    LongTabPane,
    LongTooltip,
    LongAvatar,
    LongBreadcrumb,
    LongDrawer
]

export default {
    install(app: App) {
        components.forEach((component) => {
            app.use(component)
        })
    }
}

export * from './button'
export * from './calendar'
export * from './config-provider'
export * from './input'
export * from './drawer'
export * from './avatar'
export * from './breadcrumb'
export * from './select'
export * from './switch'
export * from './radio'
export * from './checkbox'
export * from './input-number'
export * from './icon'
export * from './dialog'
export * from './message'
export * from './time-picker'
export * from './form'
export * from './form-item'
export * from './table'
export * from './table-column'
export * from './tag'
export * from './empty'
export * from './loading'
export * from './pagination'
export * from './space'
export * from './card/index'
export * from './skeleton/index'
export * from './badge/index'
export * from './descriptions/index'
export * from './alert/index'
