<template>
  <section id="home" class="hero">
    <div class="container hero-container">
      <div class="hero-content">
        <div class="hero-greeting">
          <span class="greeting-line"></span>
          <span class="greeting-text">Hello, I'm</span>
        </div>

        <h1 class="hero-name">
          Jimwell <span class="text-gradient">Buot</span>
        </h1>

        <div class="hero-role">
          <span class="role-prefix">&gt;&gt;</span>
          <span class="role-text" ref="typingRef">{{ displayedRole }}</span>
          <span class="cursor">|</span>
        </div>

        <p class="hero-description">
          A software engineer with <strong>8+ years</strong> of experience building 
          scalable applications across diverse technology stacks — from enterprise 
          financial platforms to healthcare systems. Currently mastering 
          <strong>AWS Cloud Architecture</strong> to deliver modern, resilient solutions.
        </p>

        <div class="hero-cta">
          <a href="#contact" class="btn btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Get In Touch
          </a>
          <a href="https://github.com/jimb6" target="_blank" class="btn btn-outline">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            View GitHub
          </a>
        </div>

        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">8+</span>
            <span class="stat-label">Years Experience</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-number">20+</span>
            <span class="stat-label">Technologies</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-number">4+</span>
            <span class="stat-label">Companies</span>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="code-window">
          <div class="window-header">
            <div class="window-dots">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <span class="window-title">jimwell.config.ts</span>
          </div>
          <div class="code-content">
            <pre><code><span class="kw">const</span> <span class="var">developer</span> = {
  <span class="prop">name</span>: <span class="str">"Jimwell Buot"</span>,
  <span class="prop">role</span>: <span class="str">"Full-Stack Engineer"</span>,
  <span class="prop">cloud</span>: <span class="str">"AWS Practitioner"</span>,
  <span class="prop">passion</span>: <span class="str">"Clean Code & SOLID"</span>,
  <span class="prop">status</span>: <span class="str">"Available for hire"</span>,
  <span class="prop">skills</span>: [
    <span class="str">"C#"</span>, <span class="str">"Java"</span>, <span class="str">"TypeScript"</span>,
    <span class="str">"Vue.js"</span>, <span class="str">"AWS"</span>, <span class="str">"Go"</span>,
    <span class="str">"Blazor"</span>, <span class="str">"Node.js"</span>,
  ],
};</code></pre>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-scroll">
      <a href="#about" class="scroll-indicator">
        <span class="scroll-text">Scroll down</span>
        <div class="scroll-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 13 12 18 17 13"/><polyline points="7 6 12 11 17 6"/></svg>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const roles = [
  'Full-Stack Software Developer',
  'AWS Cloud Practitioner',
  'Enterprise Application Architect',
  'Clean Code Advocate',
]
const displayedRole = ref('')
let roleIndex = 0
let charIndex = 0
let isDeleting = false
let timeout = null

const type = () => {
  const current = roles[roleIndex]
  if (!isDeleting) {
    displayedRole.value = current.substring(0, charIndex + 1)
    charIndex++
    if (charIndex === current.length) {
      timeout = setTimeout(() => { isDeleting = true; type() }, 2000)
      return
    }
    timeout = setTimeout(type, 80)
  } else {
    displayedRole.value = current.substring(0, charIndex - 1)
    charIndex--
    if (charIndex === 0) {
      isDeleting = false
      roleIndex = (roleIndex + 1) % roles.length
      timeout = setTimeout(type, 400)
      return
    }
    timeout = setTimeout(type, 40)
  }
}

onMounted(() => type())
onUnmounted(() => clearTimeout(timeout))
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 80px;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(108, 99, 255, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 212, 170, 0.06) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-content {
  animation: fadeInUp 1s ease 0.2s both;
}

.hero-greeting {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.greeting-line {
  width: 40px;
  height: 2px;
  background: var(--accent-primary);
}

.greeting-text {
  font-family: var(--font-mono);
  font-size: 1rem;
  color: var(--accent-primary);
  font-weight: 500;
}

.hero-name {
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 16px;
  color: var(--text-primary);
}

.hero-role {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
  font-family: var(--font-mono);
  font-size: 1.1rem;
}

.role-prefix {
  color: var(--accent-secondary);
  font-weight: 700;
}

.role-text {
  color: var(--accent-secondary);
  font-weight: 500;
}

.cursor {
  color: var(--accent-primary);
  animation: blink-caret 0.8s infinite;
}

.hero-description {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 36px;
  max-width: 520px;
}

.hero-description strong {
  color: var(--text-primary);
  font-weight: 600;
}

.hero-cta {
  display: flex;
  gap: 16px;
  margin-bottom: 48px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all var(--transition-normal);
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: var(--gradient-primary);
  color: white;
  box-shadow: 0 4px 20px rgba(108, 99, 255, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 40px rgba(108, 99, 255, 0.4);
}

.btn-outline {
  background: transparent;
  color: var(--text-primary);
  border: 1.5px solid var(--border-color);
}

.btn-outline:hover {
  border-color: var(--accent-primary);
  background: rgba(108, 99, 255, 0.05);
  transform: translateY(-3px);
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 32px;
}

.stat-number {
  display: block;
  font-size: 1.8rem;
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--border-color);
}

/* Code Window */
.hero-visual {
  animation: fadeInUp 1s ease 0.5s both;
}

.code-window {
  background: rgba(26, 26, 46, 0.8);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  animation: pulse-glow 4s infinite;
}

.window-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  background: rgba(10, 10, 15, 0.6);
  border-bottom: 1px solid var(--border-color);
}

.window-dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red { background: #ff5f57; }
.dot.yellow { background: #febc2e; }
.dot.green { background: #28c840; }

.window-title {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-muted);
}

.code-content {
  padding: 24px;
}

.code-content pre {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.code-content .kw { color: #c792ea; }
.code-content .var { color: #82aaff; }
.code-content .prop { color: #f07178; }
.code-content .str { color: #c3e88d; }

/* Scroll Indicator */
.hero-scroll {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--text-muted);
  transition: color var(--transition-normal);
}

.scroll-indicator:hover { color: var(--accent-primary); }

.scroll-text {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
}

.scroll-arrow {
  animation: float 2s ease-in-out infinite;
}

@media (max-width: 968px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  .hero { padding-top: 70px; min-height: auto; padding-bottom: 100px; }
  .hero-greeting { justify-content: center; }
  .hero-description { margin: 0 auto 36px; font-size: 1rem; }
  .hero-cta { justify-content: center; }
  .hero-stats { justify-content: center; }
  .hero-visual { order: -1; }
  .hero-name { font-size: clamp(2.4rem, 8vw, 3.5rem); }
  .hero-role { font-size: 0.95rem; justify-content: center; }
}

@media (max-width: 640px) {
  .hero { padding-top: 64px; padding-bottom: 80px; }
  .hero-container { gap: 32px; }
  .hero-name { font-size: 2.2rem; margin-bottom: 10px; }
  .hero-role { font-size: 0.85rem; gap: 6px; margin-bottom: 18px; }
  .hero-description { font-size: 0.92rem; line-height: 1.7; margin-bottom: 28px; }
  .code-content { padding: 16px; }
  .code-content pre { font-size: 0.72rem; line-height: 1.6; }
  .window-header { padding: 10px 14px; }
  .dot { width: 9px; height: 9px; }
  .hero-scroll { bottom: 20px; }
  .scroll-text { font-size: 0.65rem; }
}

@media (max-width: 480px) {
  .hero-cta { flex-direction: column; align-items: stretch; }
  .btn { justify-content: center; padding: 14px 20px; font-size: 0.9rem; }
  .hero-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    width: 100%;
    background: rgba(26, 26, 46, 0.5);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 20px 8px;
  }
  .stat { text-align: center; }
  .stat-number { font-size: 1.5rem; }
  .stat-label { font-size: 0.65rem; letter-spacing: 0.5px; }
  .stat-divider { display: none; }
  .hero-name { font-size: 2rem; }
}
</style>
