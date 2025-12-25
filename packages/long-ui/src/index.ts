import installer from './make-installer'

// 导出安装器
export default installer

// 导出所有组件
export * from '@long-ui/components'

// 导出所有 hooks
export * from '@long-ui/hooks'

// 导出所有工具函数
export * from '@long-ui/utils'

// 导出所有图标 (排除冲突的 IconProps)
export {
    createIcon,
    LoadingIcon,
    CloseIcon,
    CheckIcon,
    ArrowRightIcon,
    ArrowLeftIcon,
    ArrowDownIcon,
    ArrowUpIcon,
    SearchIcon,
    PlusIcon,
    MinusIcon,
    InfoFilled,
    SuccessFilled,
    WarningFilled,
    CircleCloseFilled
} from '@long-ui/icons'

export type { IconProps as SVGIconProps } from '@long-ui/icons'
