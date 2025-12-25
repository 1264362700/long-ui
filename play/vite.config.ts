import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: [
            { find: '@long-ui/components', replacement: resolve(__dirname, '../packages/components/src') },
            { find: /^@long-ui\/styles\/(.*)/, replacement: resolve(__dirname, '../core/styles/$1') },
            { find: '@long-ui/styles', replacement: resolve(__dirname, '../core/styles/src') },
            { find: '@long-ui/utils', replacement: resolve(__dirname, '../core/utils/src') },
            { find: '@long-ui/hooks', replacement: resolve(__dirname, '../core/hooks/src') },
            { find: '@long-ui/icons', replacement: resolve(__dirname, '../core/icons/src') },
            { find: '@long-ui/tokens', replacement: resolve(__dirname, '../core/tokens/src') },
            { find: 'long-ui', replacement: resolve(__dirname, '../packages/long-ui/src') },
        ],
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
    },
    server: {
        port: 3000,
        open: true,
    },
})
