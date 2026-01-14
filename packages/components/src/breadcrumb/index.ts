import { withInstall, withNoopInstall } from '@long-ui/utils'
import Breadcrumb from './src/breadcrumb.vue'
import BreadcrumbItem from './src/breadcrumb-item.vue'

export const LongBreadcrumb = withInstall(Breadcrumb, {
    BreadcrumbItem,
})
export const LongBreadcrumbItem = withNoopInstall(BreadcrumbItem)

export default LongBreadcrumb

export * from './src/breadcrumb'
export * from './src/breadcrumb-item'
