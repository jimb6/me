<template>
  <section id="about" class="section about">
    <div class="container">
      <div class="about-grid">
        <div class="about-content">
          <span class="section-label">// About Me</span>
          <h2 class="section-title">Crafting Digital Experiences<br>with Purpose</h2>
          
          <div class="about-text">
            <p>
              I'm a passionate software engineer with over <strong>8 years of experience</strong> 
              building applications across a wide spectrum of platforms and environments — from agile 
              startups to large-scale enterprise systems. My work spans diverse technology stacks, 
              and I've consistently pushed myself to deliver <strong>clean, well-documented code</strong> 
              that stands the test of time.
            </p>
            <p>
              Rooted in the <strong>SOLID principles</strong> of software development, I approach every 
              project with an architect's mindset — focusing on scalability, maintainability, and 
              performance. Whether it's building a complex financial platform, a healthcare EHR system, 
              or a modern cloud-native application, I bring the same level of dedication and precision.
            </p>
            <p>
              Currently, I'm deepening my expertise in <strong>AWS Cloud Architecture</strong>, combining 
              my full-stack skills with cloud-native patterns to build resilient, scalable solutions that 
              meet enterprise demands.
            </p>
          </div>

          <div class="about-highlights">
            <div class="highlight">
              <div class="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <div>
                <h4>Full-Stack Mastery</h4>
                <p>End-to-end development from database design to pixel-perfect UIs</p>
              </div>
            </div>
            <div class="highlight">
              <div class="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>
              </div>
              <div>
                <h4>Cloud Practitioner</h4>
                <p>Building scalable cloud-native solutions on AWS infrastructure</p>
              </div>
            </div>
            <div class="highlight">
              <div class="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <div>
                <h4>Clean Code Advocate</h4>
                <p>Committed to SOLID principles and best practices</p>
              </div>
            </div>
          </div>
        </div>

        <div class="about-visual">
          <div class="about-card-stack">
            <div class="about-card card-1">
              <h4>Mission</h4>
              <p>Deliver excellence through thoughtful engineering and continuous improvement</p>
            </div>
            <div class="about-card card-2">
              <h4>Approach</h4>
              <p>Combine best practices with modern tools to build faster, smarter, and cleaner</p>
            </div>
            <div class="about-card card-3">
              <h4>Vision</h4>
              <p>Architect cloud-native solutions that scale globally and perform flawlessly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--bg-secondary);
  position: relative;
}

.about::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 80px;
  align-items: start;
}

.about-text p {
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.9;
  margin-bottom: 20px;
}

.about-text strong {
  color: var(--accent-secondary);
  font-weight: 600;
}

.about-highlights {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 36px;
}

.highlight {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  background: rgba(26, 26, 46, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: all var(--transition-normal);
}

.highlight:hover {
  border-color: var(--accent-primary);
  transform: translateX(8px);
  background: rgba(26, 26, 46, 0.8);
}

.highlight-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(108, 99, 255, 0.1);
  border-radius: 12px;
  color: var(--accent-primary);
}

.highlight h4 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.highlight p {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.5;
}

/* Visual Cards */
.about-card-stack {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  top: 120px;
}

.about-card {
  padding: 28px;
  background: rgba(26, 26, 46, 0.6);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  transition: all var(--transition-normal);
  backdrop-filter: blur(10px);
}

.about-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-primary);
  box-shadow: 0 12px 40px rgba(108, 99, 255, 0.15);
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.about-card h4 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.about-card p {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.card-1 { border-left: 3px solid var(--accent-primary); }
.card-2 { border-left: 3px solid var(--accent-secondary); }
.card-3 { border-left: 3px solid var(--accent-tertiary); }

@media (max-width: 968px) {
  .about-grid { grid-template-columns: 1fr; gap: 40px; }
  .about-card-stack { position: static; }
}

@media (max-width: 640px) {
  .about-grid { gap: 32px; }
  .about-text p { font-size: 0.95rem; line-height: 1.8; margin-bottom: 16px; }
  .highlight {
    padding: 16px;
    gap: 12px;
  }
  .highlight:hover { transform: translateX(4px); }
  .highlight-icon {
    width: 40px;
    height: 40px;
    min-width: 40px;
    border-radius: 10px;
  }
  .highlight h4 { font-size: 0.92rem; }
  .highlight p { font-size: 0.82rem; }
  .about-highlights { gap: 12px; margin-top: 24px; }
  .about-card { padding: 20px; }
  .about-card h4 { font-size: 1rem; }
  .about-card p { font-size: 0.85rem; }
  .about-card-stack { gap: 12px; }
}
</style>
