import { execSync } from 'child_process'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

async function buildFull() {
    console.log('🚀 Starting full build...\n')

    const scripts = [
        'build-utils.ts',
        'build-hooks.ts',
        'build-icons.ts',
        'build-styles.ts',
        'build-components.ts',
    ]

    for (const script of scripts) {
        console.log(`\n--- Running ${script} ---\n`)
        execSync(`npx tsx ${resolve(__dirname, script)}`, {
            stdio: 'inherit',
            cwd: resolve(__dirname, '../..'),
        })
    }

    console.log('\n🎉 Full build complete!')
}

buildFull().catch(console.error)
