import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// 项目根目录
export const ROOT = resolve(__dirname, '..')

// 核心模块目录
export const CORE_DIR = resolve(ROOT, 'core')

// 包目录
export const PACKAGES_DIR = resolve(ROOT, 'packages')

// 输出目录
export const DIST_DIR = resolve(ROOT, 'dist')

// 各模块目录
export const UTILS_DIR = resolve(CORE_DIR, 'utils')
export const HOOKS_DIR = resolve(CORE_DIR, 'hooks')
export const STYLES_DIR = resolve(CORE_DIR, 'styles')
export const ICONS_DIR = resolve(CORE_DIR, 'icons')
export const COMPONENTS_DIR = resolve(PACKAGES_DIR, 'components')
export const LONGUI_DIR = resolve(PACKAGES_DIR, 'long-ui')
