import { build } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { UTILS_DIR } from './paths'

async function buildUtils() {
    console.log('🔧 Building @long-ui/utils...')

    await build({
        plugins: [vue(), vueJsx()],
        build: {
            lib: {
                entry: resolve(UTILS_DIR, 'src/index.ts'),
                name: 'LongUIUtils',
                formats: ['es', 'cjs'],
                fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'} `,
            },
            outDir: resolve(UTILS_DIR, 'dist'),
            emptyOutDir: true,
            rollupOptions: {
                external: ['vue'],
                output: {
                    globals: {
                        vue: 'Vue',
                    },
                },
            },
        },
    })

    console.log('✅ @long-ui/utils build complete!')
}

buildUtils().catch(console.error)
