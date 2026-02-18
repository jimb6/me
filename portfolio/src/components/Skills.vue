<template>
  <section id="skills" class="section skills">
    <div class="container">
      <div class="skills-header">
        <span class="section-label">// Tech Stack</span>
        <h2 class="section-title">Skills & Technologies</h2>
        <p class="section-subtitle">
          A comprehensive toolkit refined over 8+ years of building enterprise-grade applications.
        </p>
      </div>

      <div class="skills-categories">
        <div v-for="category in categories" :key="category.title" class="skill-category">
          <div class="category-header">
            <div class="category-icon" v-html="category.icon"></div>
            <h3 class="category-title">{{ category.title }}</h3>
          </div>
          <div class="skill-tags">
            <span v-for="skill in category.skills" :key="skill.name" class="skill-tag" :class="skill.highlight ? 'highlighted' : ''">
              <span class="skill-dot" :style="{ background: skill.color || 'var(--accent-primary)' }"></span>
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    title: 'Backend & Languages',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    skills: [
      { name: 'C# / .NET', color: '#68217a', highlight: true },
      { name: 'Java', color: '#f89820' },
      { name: 'Go', color: '#00add8' },
      { name: 'PHP / Laravel', color: '#777bb3' },
      { name: 'Node.js', color: '#68a063', highlight: true },
      { name: 'TypeScript', color: '#3178c6', highlight: true },
      { name: 'Python', color: '#3776ab' },
    ]
  },
  {
    title: 'Frontend & UI',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/></svg>',
    skills: [
      { name: 'Vue.js', color: '#42b883', highlight: true },
      { name: 'Blazor', color: '#512bd4', highlight: true },
      { name: 'JavaScript', color: '#f7df1e' },
      { name: 'WPF / MVVM', color: '#68217a' },
      { name: 'Ionic (Web & Mobile)', color: '#3880ff' },
      { name: 'HTML5 / CSS3', color: '#e34c26' },
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>',
    skills: [
      { name: 'AWS Cloud Services', color: '#ff9900', highlight: true },
      { name: 'CI/CD Automation', color: '#00d4aa', highlight: true },
      { name: 'GitHub Actions', color: '#2088ff' },
      { name: 'Docker', color: '#2496ed' },
      { name: 'Infrastructure as Code', color: '#7b42bc' },
    ]
  },
  {
    title: 'Frameworks & Tools',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>',
    skills: [
      { name: 'DevExpress / XAF', color: '#ff7200', highlight: true },
      { name: 'DevExpress Reporting', color: '#ff7200' },
      { name: 'ABP Framework', color: '#4a86c8', highlight: true },
      { name: '.NET MAUI', color: '#512bd4' },
      { name: 'API Design & REST', color: '#00d4aa' },
    ]
  },
  {
    title: 'Databases',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    skills: [
      { name: 'SQL Server', color: '#cc2927', highlight: true },
      { name: 'MongoDB', color: '#47a248', highlight: true },
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'Database Design', color: '#00d4aa' },
    ]
  },
  {
    title: 'Mobile Development',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
    skills: [
      { name: 'Swift (iOS)', color: '#f05138' },
      { name: 'Kotlin (Android)', color: '#7f52ff' },
      { name: 'Ionic Framework', color: '#3880ff' },
      { name: '.NET MAUI', color: '#512bd4' },
    ]
  },
]
</script>

<style scoped>
.skills {
  position: relative;
}

.skills-header {
  text-align: center;
  margin-bottom: 64px;
}

.skills-header .section-subtitle {
  margin: 0 auto;
}

.skills-categories {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.skill-category {
  padding: 32px;
  background: rgba(26, 26, 46, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  transition: all var(--transition-normal);
}

.skill-category:hover {
  border-color: rgba(108, 99, 255, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.category-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(108, 99, 255, 0.1);
  border-radius: 10px;
  color: var(--accent-primary);
}

.category-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: rgba(10, 10, 15, 0.6);
  border: 1px solid rgba(108, 99, 255, 0.08);
  border-radius: 20px;
  font-size: 0.82rem;
  color: var(--text-secondary);
  font-weight: 500;
  transition: all var(--transition-fast);
}

.skill-tag:hover {
  border-color: var(--accent-primary);
  color: var(--text-primary);
  transform: scale(1.05);
}

.skill-tag.highlighted {
  border-color: rgba(108, 99, 255, 0.25);
  background: rgba(108, 99, 255, 0.06);
  color: var(--text-primary);
}

.skill-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

@media (max-width: 968px) {
  .skills-categories { grid-template-columns: repeat(2, 1fr); gap: 16px; }
}

@media (max-width: 600px) {
  .skills-categories { grid-template-columns: 1fr; gap: 14px; }
  .skills-header { margin-bottom: 36px; }
  .skill-category { padding: 20px; border-radius: 12px; }
  .skill-category:hover { transform: none; }
  .category-header { gap: 10px; margin-bottom: 14px; }
  .category-icon { width: 36px; height: 36px; border-radius: 8px; }
  .category-title { font-size: 0.95rem; }
  .skill-tags { gap: 6px; }
  .skill-tag {
    padding: 5px 10px;
    font-size: 0.78rem;
    gap: 5px;
  }
  .skill-tag:hover { transform: none; }
  .skill-dot { width: 5px; height: 5px; }
}
</style>
