import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
        alias: {
            '@long-ui/components': resolve(__dirname, 'packages/components/src'),
            '@long-ui/utils': resolve(__dirname, 'core/utils/src'),
            '@long-ui/hooks': resolve(__dirname, 'core/hooks/src'),
            '@long-ui/styles': resolve(__dirname, 'core/styles/src'),
            '@long-ui/icons': resolve(__dirname, 'core/icons/src'),
            '@long-ui/tokens': resolve(__dirname, 'core/tokens/src'),
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        include: ['packages/**/__tests__/**/*.test.ts', 'core/**/__tests__/**/*.test.ts'],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            include: ['packages/**/src/**/*.{ts,vue}', 'core/**/src/**/*.{ts,vue}'],
            exclude: ['**/node_modules/**', '**/dist/**'],
        },
    },
})
