<template>
  <div 
    class="long-logo-viewport" 
    :class="{ 'is-hero': isHero }"
    @mousemove="handleMouseMove" 
    @mouseleave="resetLogo"
  >
    <div class="logo-3d-scene" :style="sceneStyle">
      <svg
        viewBox="0 0 200 60"
        xmlns="http://www.w3.org/2000/svg"
        class="long-logo-svg"
      >
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="orbit_grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="var(--vp-c-brand)" stop-opacity="0" />
            <stop offset="50%" stop-color="var(--vp-c-brand)" stop-opacity="1" />
            <stop offset="100%" stop-color="var(--vp-c-brand)" stop-opacity="0" />
          </linearGradient>
          <radialGradient id="core_grad">
            <stop offset="0%" stop-color="var(--vp-c-brand)" />
            <stop offset="100%" stop-color="#3a8ee6" />
          </radialGradient>
        </defs>

        <!-- 轨道 1 (外层) -->
        <ellipse 
          cx="30" cy="30" rx="25" ry="12" 
          fill="none" 
          stroke="url(#orbit_grad)" 
          stroke-width="1"
          stroke-dasharray="80 40"
          :style="orbitStyle(1.2)"
        />

        <!-- 轨道 2 (内层) -->
        <ellipse 
          cx="30" cy="30" rx="18" ry="8" 
          fill="none" 
          stroke="var(--vp-c-brand)" 
          stroke-width="0.5"
          stroke-opacity="0.3"
          :style="orbitStyle(0.8)"
        />

        <!-- 核心核心 -->
        <g :style="coreStyle">
          <circle cx="20" cy="30" r="10" fill="url(#core_grad)" filter="url(#glow)" />
          <!-- 字母 L -->
          <path
            d="M17 25V35H23"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
          />
        </g>

        <!-- 品牌文字 -->
        <text
          x="65"
          y="38"
          class="logo-text"
          fill="currentColor"
          :style="textStyle"
        >
          Long UI
        </text>
        
        <!-- 下划线流光 -->
        <path
          d="M65 48L160 48"
          stroke="url(#orbit_grad)"
          stroke-width="2"
          stroke-linecap="round"
          :style="shimmerStyle"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
  isHero: {
    type: Boolean,
    default: false
  }
})

const mouseX = ref(0)
const mouseY = ref(0)
const rotateX = ref(0)
const rotateY = ref(0)
const isHovering = ref(false)

const handleMouseMove = (e: MouseEvent) => {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5
  
  mouseX.value = x
  mouseY.value = y
  rotateY.value = x * 30
  rotateX.value = -y * 30
  isHovering.value = true
}

const resetLogo = () => {
  rotateX.value = 0
  rotateY.value = 0
  isHovering.value = false
}

const sceneStyle = computed(() => ({
  transform: `perspective(1000px) rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg)`,
  transition: isHovering.value ? 'none' : 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
}))

const orbitStyle = (speed: number) => computed(() => ({
  transform: `rotate(${speed * 360 * (isHovering.value ? mouseX.value : 0)}deg)`,
  transformOrigin: '30px 30px',
  transition: 'transform 0.1s linear'
})).value

const coreStyle = computed(() => ({
  transform: `translate(${mouseX.value * 10}px, ${mouseY.value * 5}px)`,
  transition: 'transform 0.2s ease-out'
}))

const textStyle = computed(() => ({
  fontFamily: "'Outfit', 'Inter', sans-serif",
  fontWeight: '900',
  fontSize: '28px',
  letterSpacing: '-1px',
  filter: isHovering.value ? 'drop-shadow(0 0 10px var(--vp-c-brand))' : 'none',
  transition: 'all 0.3s ease'
}))

const shimmerStyle = computed(() => ({
  strokeDasharray: '40 100',
  strokeDashoffset: isHovering.value ? -200 : 0,
  transition: isHovering.value ? 'stroke-dashoffset 2s linear infinite' : 'none',
  animation: 'shimmer 3s linear infinite'
}))
</script>

<style scoped>
.long-logo-viewport {
  display: inline-flex;
  align-items: center;
  height: var(--vp-nav-height);
  cursor: pointer;
  padding: 0 12px;
  user-select: none;
  overflow: visible;
}

.is-hero {
  height: 320px;
  width: 100%;
  justify-content: center;
  transform: scale(1.5);
}

.logo-3d-scene {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.long-logo-svg {
  height: 48px;
  width: auto;
  overflow: visible;
}

.is-hero .long-logo-svg {
  height: 120px;
}

@keyframes shimmer {
  0% { stroke-dashoffset: 140; }
  100% { stroke-dashoffset: -140; }
}

.logo-text {
  text-transform: uppercase;
}
</style>
