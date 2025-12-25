<template>
  <div class="antd-preview" :class="{ 'is-expanded': expanded }">
    <!-- Viewport: Clean & Professional -->
    <div class="preview-display">
      <div class="component-view">
        <component :is="demoComponent" v-if="demoComponent" />
        <div v-else class="antd-loading">
          <div class="dot-spinner"></div>
        </div>
      </div>
    </div>

    <!-- Info Block: Minimalist -->
    <div class="preview-description" v-if="description || title">
      <div class="desc-header" v-if="title">{{ title }}</div>
      <div class="desc-body" v-if="description" v-html="description"></div>
    </div>

    <!-- Toolbar: Bottom Integrated -->
    <div class="preview-actions">
      <div class="action-icons">
        <button class="action-btn" @click="copyCode" :title="copyStatus">
          <svg viewBox="0 0 24 24" class="icon" v-if="copyStatus !== 'Copied!'"><path fill="currentColor" d="M16 1H4C2.9 1 2 1.9 2 3v14h2V3h12V1zm3 4H8C6.9 5 6 5.9 6 7v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
          <svg viewBox="0 0 20 20" class="icon success" v-else><path fill="currentColor" d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
        </button>
        <button class="action-btn" @click="toggleExpanded" :class="{ 'active': expanded }" title="View Source">
          <svg viewBox="0 0 24 24" class="icon"><path fill="currentColor" d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
        </button>
      </div>
    </div>

    <!-- Source Code Section -->
    <transition name="code-reveal">
      <div class="preview-source" v-show="expanded">
        <div class="source-header">
          <span class="file-name">Source Code</span>
        </div>
        <div class="source-content">
          <pre><code>{{ sourceCode }}</code></pre>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const props = defineProps<{
  path: string
  title?: string
  description?: string
}>()

const expanded = ref(false)
const sourceCode = ref('')
const copyStatus = ref('Copy Code')

// Modules resolution
const modules = import.meta.glob('../../../demos/**/*.vue', { eager: true })
const sourceModules = import.meta.glob('../../../demos/**/*.vue', { as: 'raw', eager: true })

const demoComponent = computed(() => {
  const target = props.path.split('demos/').pop() || props.path
  for (const path in modules) {
    if (path.includes(target)) return (modules[path] as any).default
  }
  return null
})

const toggleExpanded = () => { expanded.value = !expanded.value }

const fetchSource = () => {
  const target = props.path.split('demos/').pop() || props.path
  for (const path in sourceModules) {
    const normalizedPath = path.replace('../../../demos/', '')
    if (normalizedPath === target || normalizedPath.includes(target)) {
      sourceCode.value = (sourceModules[path] as string).trim()
      return
    }
  }
  sourceCode.value = '/* Source connection failed */'
}

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(sourceCode.value)
    copyStatus.value = 'Copied!'
    setTimeout(() => copyStatus.value = 'Copy Code', 2000)
  } catch (err) {
    copyStatus.value = 'Failed'
  }
}

onMounted(fetchSource)
</script>

<style scoped>
.antd-preview {
  margin: 24px 0;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  background: #fff;
  transition: all 0.3s;
  overflow: hidden;
}

.antd-preview:hover {
  border-color: #d1d1d1;
}

.preview-display {
  padding: 42px 24px;
  border-bottom: 1px solid #f0f0f0;
  background: #fff;
  display: flex;
  justify-content: flex-start;
}

.component-view {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.preview-description {
  padding: 18px 24px;
  background: #fafafa;
  border-bottom: 1px dashed #f0f0f0;
}

.desc-header {
  position: relative;
  top: -28px;
  background: #fff;
  display: inline-block;
  padding: 0 8px;
  margin-left: -8px;
  font-size: 14px;
  font-weight: 500;
  color: #262626;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
}

.desc-body {
  font-size: 14px;
  color: #595959;
  line-height: 1.5715;
}

.preview-actions {
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.action-icons {
  display: flex;
  gap: 16px;
}

.action-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: none;
  background: transparent;
  color: #8c8c8c;
  cursor: pointer;
  transition: all 0.3s;
}

.action-btn:hover {
  background: #f5f5f5;
  color: #595959;
}

.action-btn.active {
  color: #1677ff;
  background: #e6f4ff;
}

.icon {
  width: 16px;
  height: 16px;
}

.icon.success {
  color: #52c41a;
}

.preview-source {
  background: #fafafa;
  border-top: 1px solid #f0f0f0;
}

.source-header {
  padding: 12px 24px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 12px;
  color: #8c8c8c;
  font-family: var(--vp-font-family-mono);
}

.source-content {
  padding: 0;
}

pre {
  margin: 0 !important;
  padding: 16px 24px;
  background: #fafafa !important;
  font-size: 13px;
  line-height: 2;
  color: #314659;
  overflow-x: auto;
}

.antd-loading {
  padding: 40px;
}

.dot-spinner {
  width: 24px;
  height: 24px;
  border: 2px solid #1677ff;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.code-reveal-enter-active, .code-reveal-leave-active {
  transition: all 0.3s ease-out;
  max-height: 2000px;
}
.code-reveal-enter-from, .code-reveal-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
