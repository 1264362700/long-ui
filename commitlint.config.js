export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat',     // 新功能
                'fix',      // 修复 bug
                'docs',     // 文档更新
                'style',    // 代码格式（不影响代码运行的变动）
                'refactor', // 重构（既不是新增功能，也不是修改 bug 的代码变动）
                'perf',     // 性能优化
                'test',     // 测试相关
                'build',    // 构建过程或辅助工具的变动
                'ci',       // CI 配置修改
                'chore',    // 其他修改
                'revert',   // 回退
                'types',    // 类型定义文件更改
            ],
        ],
        'subject-case': [0],
        'subject-full-stop': [0],
    },
}
