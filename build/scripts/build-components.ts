import { build } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { COMPONENTS_DIR, UTILS_DIR, HOOKS_DIR, ICONS_DIR, CORE_DIR } from './paths'

async function buildComponents() {
    console.log('🔧 Building @long-ui/components...')

    await build({
        plugins: [vue(), vueJsx()],
        resolve: {
            alias: {
                '@long-ui/utils': resolve(UTILS_DIR, 'src'),
                '@long-ui/hooks': resolve(HOOKS_DIR, 'src'),
                '@long-ui/icons': resolve(ICONS_DIR, 'src'),
                '@long-ui/tokens': resolve(CORE_DIR, 'tokens/src'),
            },
        },
        build: {
            lib: {
                entry: resolve(COMPONENTS_DIR, 'src/index.ts'),
                name: 'LongUIComponents',
                formats: ['es', 'cjs'],
                fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
            },
            outDir: resolve(COMPONENTS_DIR, 'dist'),
            emptyOutDir: true,
            rollupOptions: {
                external: ['vue', '@long-ui/utils', '@long-ui/hooks', '@long-ui/icons', '@long-ui/tokens'],
                output: {
                    globals: {
                        vue: 'Vue',
                        '@long-ui/utils': 'LongUIUtils',
                        '@long-ui/hooks': 'LongUIHooks',
                        '@long-ui/icons': 'LongUIIcons',
                        '@long-ui/tokens': 'LongUITokens',
                    },
                },
            },
        },
    })

    console.log('✅ @long-ui/components build complete!')
}

buildComponents().catch(console.error)
