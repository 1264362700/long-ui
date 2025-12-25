<template>
  <div class="preview-container" :class="{ 'is-expanded': expanded }">
    <!-- Header: Clean & Integrated -->
    <div class="preview-header">
      <div class="preview-badge">DEMO</div>
      <div class="preview-divider"></div>
      <div class="preview-title">{{ title || 'Component Showcase' }}</div>
    </div>

    <!-- Viewport: Gravity Field Design -->
    <div class="preview-viewport">
      <div class="viewport-mesh"></div>
      <div class="component-wrapper">
        <component :is="demoComponent" v-if="demoComponent" />
        <div v-else class="loading-state">
          <div class="gravity-loader"></div>
          <span>Aligning Orbit...</span>
        </div>
      </div>
    </div>

    <!-- Info Block: Sleek Minimalism -->
    <div class="preview-info" v-if="description">
      <div class="info-content">
        <div class="info-tag">DESCRIPTION</div>
        <div class="info-text" v-html="description"></div>
      </div>
    </div>

    <!-- Toolbar: Precision Interaction -->
    <div class="preview-toolbar">
      <div class="left-tools">
        <button class="tool-btn action-expand" :class="{ 'active': expanded }" @click="toggleExpanded">
          <svg v-if="!expanded" viewBox="0 0 24 24" class="icon"><path fill="currentColor" d="M12 16.5l-6-6h12l-6 6z"/></svg>
          <svg v-else viewBox="0 0 24 24" class="icon"><path fill="currentColor" d="M12 7.5l6 6H6l6-6z"/></svg>
          <span class="btn-text">{{ expanded ? 'Hide Code' : 'Source Code' }}</span>
        </button>
      </div>

      <div class="right-tools">
        <button class="icon-tool-btn" @click="copyCode" :title="copyStatus">
          <svg viewBox="0 0 24 24" class="icon"><path fill="currentColor" d="M16 1H4C2.9 1 2 1.9 2 3v14h2V3h12V1zm3 4H8C6.9 5 6 5.9 6 7v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
        </button>
      </div>
    </div>

    <!-- Code Display: Deep Space Theme -->
    <transition name="code-slide">
      <div class="preview-code-viewer" v-show="expanded">
        <div class="code-inner">
          <div class="code-header">
            <span class="dot-deco"></span>
            <span class="lang-label">vue</span>
          </div>
          <pre class="code-content"><code>{{ sourceCode }}</code></pre>
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
.preview-container {
  margin: 3.5rem 0;
  border-radius: 24px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
  position: relative;
}

.preview-container:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
  border-color: var(--vp-c-brand-light);
}

/* Header Refinement */
.preview-header {
  height: 56px;
  background: var(--vp-c-bg-soft);
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-bottom: 1px solid var(--vp-c-divider-light);
}

.preview-badge {
  font-size: 10px;
  font-weight: 800;
  color: var(--vp-c-brand);
  background: var(--vp-c-brand-soft);
  padding: 2px 8px;
  border-radius: 6px;
  letter-spacing: 0.05em;
}

.preview-divider {
  width: 1px;
  height: 14px;
  background: var(--vp-c-divider-light);
  margin: 0 16px;
}

.preview-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

/* Viewport Engineering */
.preview-viewport {
  padding: 60px 40px;
  position: relative;
  min-height: 140px;
  background: var(--vp-c-bg);
  display: flex;
  justify-content: center;
}

.viewport-mesh {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(var(--vp-c-divider-light) 1px, transparent 1px),
    linear-gradient(90deg, var(--vp-c-divider-light) 1px, transparent 1px);
  background-size: 32px 32px;
  opacity: 0.15;
  pointer-events: none;
}

.component-wrapper {
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

/* Info Styling */
.preview-info {
  padding: 16px 24px;
  background: var(--vp-c-bg-mute);
  border-top: 1px solid var(--vp-c-divider-light);
  border-bottom: 1px solid var(--vp-c-divider-light);
}

.info-tag {
  font-size: 9px;
  font-weight: 900;
  color: var(--vp-c-text-3);
  margin-bottom: 6px;
  letter-spacing: 0.08em;
}

.info-text {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

/* Toolbar Optimization */
.preview-toolbar {
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background: var(--vp-c-bg-soft);
}

.tool-btn {
  height: 34px;
  padding: 0 16px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
  border: 1px solid transparent;
}

.tool-btn:hover {
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-brand);
  border-color: var(--vp-c-brand-soft);
}

.tool-btn.active {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
  box-shadow: 0 4px 12px rgba(64, 158, 255, 0.15);
}

.icon-tool-btn {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: var(--vp-c-text-3);
  transition: all 0.2s;
  background: transparent;
}

.icon-tool-btn:hover {
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1);
}

.icon {
  width: 18px;
  height: 18px;
}

/* Code Viewer Aesthetic */
.preview-code-viewer {
  background: #0d1117;
  padding: 20px;
}

.code-inner {
  border-radius: 16px;
  background: #161b22;
  border: 1px solid #30363d;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.code-header {
  height: 40px;
  background: #0d1117;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-bottom: 1px solid #30363d;
}

.dot-deco {
  width: 8px;
  height: 8px;
  background: #30363d;
  border-radius: 50%;
  box-shadow: 12px 0 0 #30363d, 24px 0 0 #30363d;
}

.lang-label {
  font-size: 10px;
  font-weight: 800;
  color: #8b949e;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.code-content {
  margin: 0 !important;
  padding: 24px;
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
  line-height: 1.7;
  color: #d1d5db;
  overflow-x: auto;
}

/* Transitions */
.code-slide-enter-active, .code-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.33, 1, 0.68, 1);
  max-height: 1200px;
}
.code-slide-enter-from, .code-slide-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-20px);
}

.gravity-loader {
  width: 48px;
  height: 2px;
  background: var(--vp-c-divider-light);
  position: relative;
}

.gravity-loader::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 100%;
  background: var(--vp-c-brand);
  box-shadow: 0 0 10px var(--vp-c-brand);
  animation: orbit 2s infinite ease-in-out;
}

@keyframes orbit {
  0% { left: 0%; transform: scaleX(0.5); }
  50% { left: 60%; transform: scaleX(1.5); }
  100% { left: 0%; transform: scaleX(0.5); }
}
</style>
