import { h } from 'vue'
import type { FunctionalComponent, SVGAttributes } from 'vue'

export type IconProps = SVGAttributes

/**
 * 创建图标组件的工厂函数
 */
export const createIcon = (
    name: string,
    paths: string[],
    viewBox = '0 0 1024 1024'
): FunctionalComponent<IconProps> => {
    const Icon: FunctionalComponent<IconProps> = (props) => {
        return h(
            'svg',
            {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox,
                fill: 'currentColor',
                width: '1em',
                height: '1em',
                ...props,
            },
            paths.map((d) => h('path', { d }))
        )
    }
    Icon.displayName = name
    return Icon
}

// Loading 图标
export const LoadingIcon = createIcon('LoadingIcon', [
    'M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z',
])

// Close 图标
export const CloseIcon = createIcon('CloseIcon', [
    'M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z',
])

// Check 图标
export const CheckIcon = createIcon('CheckIcon', [
    'M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z',
])

// Arrow Right 图标
export const ArrowRightIcon = createIcon('ArrowRightIcon', [
    'M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z',
])

// Arrow Left 图标
export const ArrowLeftIcon = createIcon('ArrowLeftIcon', [
    'M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 512l311.872-319.872a30.592 30.592 0 0 0 0-42.752 29.12 29.12 0 0 0-41.728 0z',
])

// Arrow Down 图标
export const ArrowDownIcon = createIcon('ArrowDownIcon', [
    'M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z',
])

// Arrow Up 图标
export const ArrowUpIcon = createIcon('ArrowUpIcon', [
    'M192.128 683.136 512 371.392l319.872 311.744a30.592 30.592 0 0 0 42.752 0 29.12 29.12 0 0 0 0-41.6L534.336 309.76a32 32 0 0 0-44.672 0L149.376 641.536a29.12 29.12 0 0 0 0 41.728 30.592 30.592 0 0 0 42.752 0z',
])

// Search 图标
export const SearchIcon = createIcon('SearchIcon', [
    'm795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z',
])

// Plus 图标
export const PlusIcon = createIcon('PlusIcon', [
    'M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z',
])

// Minus 图标
export const MinusIcon = createIcon('MinusIcon', [
    'M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z',
])

// InfoFilled 图标
export const InfoFilled = createIcon('InfoFilled', [
    'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 1 0-.128 116.864A58.432 58.432 0 0 0 512 256zm42.688 603.776V448H448v42.688h21.312v298.688H448V832h128v-42.688h-21.312z',
])

// SuccessFilled 图标
export const SuccessFilled = createIcon('SuccessFilled', [
    'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.616 725.312L788.8 456.192a32 32 0 1 0-45.248-45.248l-309.76 309.76-168.96-168.96a32 32 0 0 0-45.248 45.248l191.616 191.616a32 32 0 0 0 45.184 0z',
])

// WarningFilled 图标
export const WarningFilled = createIcon('WarningFilled', [
    'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 1 0-.128 116.864A58.432 58.432 0 0 0 512 256zm42.688 603.776V448H448v42.688h21.312v298.688H448V832h128v-42.688h-21.312z',
])

// CircleCloseFilled 图标
export const CircleCloseFilled = createIcon('CircleCloseFilled', [
    'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a32 32 0 1 0-45.248 45.248L466.752 512l-104.064 104.064a32 32 0 0 0 45.248 45.248L512 557.248l104.064 104.064a32 32 0 0 0 45.248-45.248L557.248 512l104.064-104.064a32 32 0 0 0-45.248-45.248L512 457.664z',
])
