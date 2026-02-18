<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import CloudSection from './components/CloudSection.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import ParticleBackground from './components/ParticleBackground.vue'
</script>

<template>
  <div class="app">
    <ParticleBackground />
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Experience />
    <CloudSection />
    <Contact />
    <Footer />
  </div>
</template>

<style>
.app {
  position: relative;
  min-height: 100vh;
}
</style>
