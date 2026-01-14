import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    title: "Long UI",
    description: "构建极致流畅的企业级 Web 体验",

    // 多语言配置
    locales: {
        root: {
            label: '简体中文',
            lang: 'zh-CN',
            themeConfig: {
                nav: [
                    { text: '设计规范', link: '/design-system' },
                    { text: '指南', link: '/guide/installation' },
                    { text: '组件', link: '/components/button' },
                    { text: 'Hooks', link: '/hooks/use-table' }
                ],
                sidebar: {
                    '/guide/': [
                        {
                            text: '指南',
                            items: [
                                { text: '安装', link: '/guide/installation' },
                                { text: '快速开始', link: '/guide/quickstart' },
                                { text: '主题定制', link: '/guide/theme' },
                                { text: '按需引入', link: '/guide/import' },
                                { text: '升级日志', link: '/guide/changelog' },
                            ]
                        }
                    ],
                    '/hooks/': [
                        {
                            text: 'Hooks',
                            items: [
                                { text: 'useTable 表格钩子', link: '/hooks/use-table' },
                                { text: 'useForm 表单钩子', link: '/hooks/use-form' },
                                { text: 'useRequest 业务请求', link: '/hooks/use-request' },
                                { text: 'useClipboard 剪贴板', link: '/hooks/use-clipboard' },
                                { text: 'useStorage 持久化', link: '/hooks/use-storage' },
                                { text: 'useNamespace 命名空间', link: '/hooks/use-namespace' }
                            ]
                        }
                    ],
                    '/components/': [
                        {
                            text: '通用',
                            items: [
                                { text: 'Button 按钮', link: '/components/button' },
                                { text: 'Icon 图标', link: '/components/icon' },
                                { text: 'Space 间距', link: '/components/space' },
                                { text: 'Card 卡片', link: '/components/card' },
                                { text: 'Tag 标签', link: '/components/tag' }
                            ]
                        },
                        {
                            text: '表单',
                            items: [
                                { text: 'Input 输入框', link: '/components/input' },
                                { text: 'InputNumber 计数器', link: '/components/input-number' },
                                { text: 'Radio 单选框', link: '/components/radio' },
                                { text: 'Checkbox 多选框', link: '/components/checkbox' },
                                { text: 'Select 选择器', link: '/components/select' },
                                { text: 'Switch 开关', link: '/components/switch' },
                                { text: 'TimePicker 时间选择器', link: '/components/time-picker' },
                                { text: 'Form 表单', link: '/components/form' }
                            ]
                        },
                        {
                            text: '数据展示',
                            items: [
                                { text: 'Table 表格', link: '/components/table' },
                                { text: 'Avatar 头像', link: '/components/avatar' },
                                { text: 'Badge 徽标', link: '/components/badge' },
                                { text: 'Descriptions 描述列表', link: '/components/descriptions' },
                                { text: 'Empty 空状态', link: '/components/empty' },
                                { text: 'Loading 加载', link: '/components/loading' },
                                { text: 'Skeleton 骨架屏', link: '/components/skeleton' },
                                { text: 'Pagination 分页', link: '/components/pagination' },
                                { text: 'Breadcrumb 面包屑', link: '/components/breadcrumb' },
                                { text: 'Drawer 抽屉', link: '/components/drawer' },
                                { text: 'Steps 步骤条', link: '/components/steps' },
                                { text: 'Timeline 时间线', link: '/components/timeline' },
                                { text: 'Collapse 折叠面板', link: '/components/collapse' },
                                { text: 'Popconfirm 气泡确认框', link: '/components/popconfirm' }
                            ]
                        },
                        {
                            text: '场景级组件 (Composite)',
                            items: [
                                { text: 'ProFormTable 综合演示', link: '/components/pro-table' },
                            ]
                        },
                        {
                            text: '反馈',
                            items: [
                                { text: 'Dialog 对话框', link: '/components/dialog' },
                                { text: 'Message 消息提示', link: '/components/message' }
                            ]
                        }
                    ]
                }
            }
        },
        en: {
            label: 'English',
            lang: 'en-US',
            link: '/en/',
            themeConfig: {
                nav: [
                    { text: 'Guide', link: '/en/guide/installation' },
                    { text: 'Components', link: '/en/components/button' }
                ],
                sidebar: {
                    '/en/guide/': [
                        {
                            text: 'Guide',
                            items: [
                                { text: 'Installation', link: '/en/guide/installation' },
                                { text: 'Quick Start', link: '/en/guide/quickstart' },
                                { text: 'Theming', link: '/en/guide/theme' },
                            ]
                        }
                    ],
                    '/en/components/': [
                        {
                            text: 'Basic',
                            items: [
                                { text: 'Button', link: '/en/components/button' },
                                { text: 'Input', link: '/en/components/input' },
                                { text: 'Select', link: '/en/components/select' },
                                { text: 'Switch', link: '/en/components/switch' },
                                { text: 'Radio', link: '/en/components/radio' },
                                { text: 'Checkbox', link: '/en/components/checkbox' },
                                { text: 'Calendar', link: '/en/components/calendar' },
                                { text: 'InputNumber', link: '/en/components/input-number' },
                                { text: 'Dialog', link: '/en/components/dialog' },
                                { text: 'Message', link: '/en/components/message' },
                            ]
                        }
                    ]
                }
            }
        }
    },

    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/your-repo/long-ui' }
        ],
        search: {
            provider: 'local'
        }
    },

    vite: {
        resolve: {
            alias: [
                {
                    find: '@long-ui/components',
                    replacement: resolve(__dirname, '../../packages/components/src/index.ts')
                },
                {
                    find: '@long-ui/utils',
                    replacement: resolve(__dirname, '../../core/utils/src/index.ts')
                },
                {
                    find: '@long-ui/hooks',
                    replacement: resolve(__dirname, '../../core/hooks/src/index.ts')
                },
                {
                    find: '@long-ui/tokens',
                    replacement: resolve(__dirname, '../../core/tokens/src/index.ts')
                },
                {
                    find: '@long-ui/icons',
                    replacement: resolve(__dirname, '../../core/icons/src/index.ts')
                }
            ]
        },
        server: {
            fs: {
                allow: ['..']
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                    includePaths: [
                        resolve(__dirname, '../../core/styles/src')
                    ],
                    silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin']
                }
            }
        }
    }
})
