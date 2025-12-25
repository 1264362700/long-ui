import type { App, Plugin } from 'vue'

// 导入所有组件
import { LongButton } from '@long-ui/components'

// 组件列表
const components: Plugin[] = [LongButton]

/**
 * 创建安装器
 */
const makeInstaller = (components: Plugin[] = []) => {
    const install = (app: App) => {
        components.forEach((c) => {
            app.use(c)
        })
    }
    return { install }
}

export default makeInstaller(components)
