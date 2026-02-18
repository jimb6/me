<template>
  <nav class="navbar" :class="{ scrolled: isScrolled, hidden: isHidden }">
    <div class="container nav-container">
      <a href="#home" class="nav-logo">
        <span class="logo-bracket">&lt;</span>
        <span class="logo-text">Jimwell</span>
        <span class="logo-bracket">/&gt;</span>
      </a>

      <ul class="nav-links" :class="{ active: mobileOpen }">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="nav-link" @click="mobileOpen = false">
            <span class="nav-link-num">{{ link.num }}</span>
            {{ link.label }}
          </a>
        </li>
        <li>
          <a href="https://www.upwork.com/freelancers/~01f366391ca31798ed" 
             target="_blank" class="nav-cta">
            Hire Me
          </a>
        </li>
      </ul>

      <div v-if="mobileOpen" class="mobile-overlay" @click="mobileOpen = false"></div>

      <button class="mobile-toggle" @click="mobileOpen = !mobileOpen" aria-label="Toggle menu">
        <span :class="{ open: mobileOpen }"></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isHidden = ref(false)
const mobileOpen = ref(false)
let lastScroll = 0

const links = [
  { href: '#home', label: 'Home', num: '01.' },
  { href: '#about', label: 'About', num: '02.' },
  { href: '#skills', label: 'Skills', num: '03.' },
  { href: '#experience', label: 'Experience', num: '04.' },
  { href: '#cloud', label: 'Cloud', num: '05.' },
  { href: '#contact', label: 'Contact', num: '06.' },
]

const handleScroll = () => {
  const current = window.scrollY
  isScrolled.value = current > 50
  isHidden.value = current > lastScroll && current > 300
  lastScroll = current
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar.scrolled {
  padding: 12px 0;
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
}

.navbar.hidden {
  transform: translateY(-100%);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-family: var(--font-mono);
  font-size: 1.3rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 2px;
}

.logo-bracket {
  color: var(--accent-primary);
}

.logo-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 8px;
}

.nav-link {
  display: inline-block;
  padding: 8px 16px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 8px;
  transition: all var(--transition-normal);
}

.nav-link:hover {
  color: var(--text-primary);
  background: rgba(108, 99, 255, 0.1);
}

.nav-link-num {
  font-family: var(--font-mono);
  color: var(--accent-primary);
  font-size: 0.75rem;
  margin-right: 4px;
}

.nav-cta {
  display: inline-block;
  padding: 10px 24px;
  background: var(--gradient-primary);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all var(--transition-normal);
  margin-left: 8px;
}

.nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(108, 99, 255, 0.3);
}

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  position: relative;
}

.mobile-toggle span,
.mobile-toggle span::before,
.mobile-toggle span::after {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all 0.3s;
  position: absolute;
}

.mobile-toggle span::before { content: ''; top: -7px; }
.mobile-toggle span::after { content: ''; top: 7px; }

.mobile-toggle span.open { background: transparent; }
.mobile-toggle span.open::before { transform: rotate(45deg); top: 0; }
.mobile-toggle span.open::after { transform: rotate(-45deg); top: 0; }

.mobile-overlay {
  display: none;
}

@media (max-width: 768px) {
  .mobile-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  .navbar { padding: 14px 0; }
  .navbar.scrolled { padding: 10px 0; }

  .mobile-toggle { display: flex; align-items: center; justify-content: center; z-index: 1001; }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 320px;
    height: 100vh;
    height: 100dvh;
    background: #11111a;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-left: 1px solid var(--border-color);
    padding: 0 24px;
    box-shadow: -10px 0 40px rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }

  .nav-links.active { right: 0; }

  .nav-link {
    font-size: 1.05rem;
    padding: 14px 20px;
    width: 100%;
    border-radius: 10px;
  }

  .nav-link:hover {
    background: rgba(108, 99, 255, 0.08);
  }

  .nav-cta {
    margin-left: 0;
    margin-top: 8px;
    text-align: center;
    padding: 14px 24px;
    width: 100%;
    display: block;
  }

  .nav-logo { font-size: 1.1rem; }
}
</style>
