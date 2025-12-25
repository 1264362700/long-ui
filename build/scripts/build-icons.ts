import { build } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { ICONS_DIR } from './paths'

async function buildIcons() {
    console.log('🔧 Building @long-ui/icons...')

    await build({
        plugins: [vue(), vueJsx()],
        build: {
            lib: {
                entry: resolve(ICONS_DIR, 'src/index.ts'),
                name: 'LongUIIcons',
                formats: ['es', 'cjs'],
                fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
            },
            outDir: resolve(ICONS_DIR, 'dist'),
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

    console.log('✅ @long-ui/icons build complete!')
}

buildIcons().catch(console.error)
