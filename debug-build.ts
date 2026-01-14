import { build } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

const COMPONENTS_DIR = '/Users/chenlong/Desktop/long-ui/packages/components'
const CORE_DIR = '/Users/chenlong/Desktop/long-ui/core'

const components = [
    'button', 'calendar', 'config-provider', 'input', 'select', 'switch',
    'radio', 'checkbox', 'input-number', 'icon', 'dialog', 'message',
    'time-picker', 'form', 'table', 'table-column', 'tag', 'empty',
    'loading', 'pagination', 'space', 'card', 'skeleton', 'badge',
    'descriptions', 'alert', 'tabs', 'tooltip'
]

async function debugBuild() {
    for (const comp of components) {
        console.log(`🔍 Testing: ${comp}`)
        try {
            await build({
                plugins: [vue(), vueJsx()],
                resolve: {
                    alias: {
                        '@long-ui/utils': resolve(CORE_DIR, 'utils/src'),
                        '@long-ui/hooks': resolve(CORE_DIR, 'hooks/src'),
                        '@long-ui/icons': resolve(CORE_DIR, 'icons/src'),
                        '@long-ui/tokens': resolve(CORE_DIR, 'tokens/src'),
                        '@long-ui/components': resolve(COMPONENTS_DIR, 'src'),
                    },
                },
                build: {
                    lib: {
                        entry: resolve(COMPONENTS_DIR, `src/${comp}/index.ts`),
                        name: `Long${comp}`,
                        formats: ['es'],
                        fileName: 'index',
                    },
                    write: false,
                    rollupOptions: {
                        external: ['vue', '@long-ui/utils', '@long-ui/hooks', '@long-ui/icons', '@long-ui/tokens']
                    }
                },
                logLevel: 'error'
            })
            console.log(`✅ ${comp} PASSED`)
        } catch (e) {
            console.error(`❌ ${comp} FAILED: ${e.message}`)
            process.exit(1)
        }
    }
}

debugBuild()
