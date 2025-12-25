import { resolve } from 'path'
import { mkdir, writeFile, copyFile, readdir } from 'fs/promises'
import { existsSync } from 'fs'
import * as sass from 'sass'
import { STYLES_DIR } from './paths'

async function buildStyles() {
    console.log('🔧 Building @long-ui/styles...')

    const distDir = resolve(STYLES_DIR, 'dist')

    // 确保输出目录存在
    if (!existsSync(distDir)) {
        await mkdir(distDir, { recursive: true })
    }

    // 编译主 SCSS 文件
    const result = sass.compile(resolve(STYLES_DIR, 'src/index.scss'), {
        style: 'compressed',
        sourceMap: true,
    })

    // 写入编译后的 CSS
    await writeFile(resolve(distDir, 'index.css'), result.css)
    console.log('  ✓ Compiled index.css')

    // 编译未压缩版本
    const expandedResult = sass.compile(resolve(STYLES_DIR, 'src/index.scss'), {
        style: 'expanded',
        sourceMap: true,
    })
    await writeFile(resolve(distDir, 'index.expanded.css'), expandedResult.css)
    console.log('  ✓ Compiled index.expanded.css')

    // 复制 SCSS 源文件到 dist（用于主题定制）
    const srcDir = resolve(STYLES_DIR, 'src')
    const distSrcDir = resolve(distDir, 'scss')

    if (!existsSync(distSrcDir)) {
        await mkdir(distSrcDir, { recursive: true })
    }

    await copyScssFiles(srcDir, distSrcDir)
    console.log('  ✓ Copied SCSS source files')

    console.log('✅ @long-ui/styles build complete!')
}

async function copyScssFiles(src: string, dest: string) {
    const entries = await readdir(src, { withFileTypes: true })

    for (const entry of entries) {
        const srcPath = resolve(src, entry.name)
        const destPath = resolve(dest, entry.name)

        if (entry.isDirectory()) {
            if (!existsSync(destPath)) {
                await mkdir(destPath, { recursive: true })
            }
            await copyScssFiles(srcPath, destPath)
        } else if (entry.name.endsWith('.scss')) {
            await copyFile(srcPath, destPath)
        }
    }
}

buildStyles().catch(console.error)
