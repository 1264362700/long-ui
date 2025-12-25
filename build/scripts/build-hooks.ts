import { build } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { HOOKS_DIR, UTILS_DIR, CORE_DIR } from './paths'

async function buildHooks() {
    console.log('🔧 Building @long-ui/hooks...')

    await build({
        plugins: [vue(), vueJsx()],
        resolve: {
            alias: {
                '@long-ui/utils': resolve(UTILS_DIR, 'src'),
                '@long-ui/tokens': resolve(CORE_DIR, 'tokens/src'),
            },
        },
        build: {
            lib: {
                entry: resolve(HOOKS_DIR, 'src/index.ts'),
                name: 'LongUIHooks',
                formats: ['es', 'cjs'],
                fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
            },
            outDir: resolve(HOOKS_DIR, 'dist'),
            emptyOutDir: true,
            rollupOptions: {
                external: ['vue', '@long-ui/utils', '@long-ui/tokens'],
                output: {
                    globals: {
                        vue: 'Vue',
                        '@long-ui/utils': 'LongUIUtils',
                        '@long-ui/tokens': 'LongUITokens',
                    },
                },
            },
        },
    })

    console.log('✅ @long-ui/hooks build complete!')
}

buildHooks().catch(console.error)
