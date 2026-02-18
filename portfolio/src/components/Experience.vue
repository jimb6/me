<template>
  <section id="experience" class="section experience">
    <div class="container">
      <div class="experience-header">
        <span class="section-label">// Career Path</span>
        <h2 class="section-title">Professional Experience</h2>
        <p class="section-subtitle">
          A journey through mission-critical systems across finance, healthcare, and enterprise software.
        </p>
      </div>

      <div class="timeline">
        <div v-for="(job, index) in jobs" :key="index" class="timeline-item" :class="{ 'active': job.current }">
          <div class="timeline-marker">
            <div class="marker-dot" :class="{ pulse: job.current }"></div>
            <div class="marker-line" v-if="index < jobs.length - 1"></div>
          </div>

          <div class="timeline-card">
            <div class="card-header">
              <div class="card-meta">
                <span class="card-period">{{ job.period }}</span>
                <span v-if="job.current" class="current-badge">Current</span>
              </div>
              <h3 class="card-title">{{ job.title }}</h3>
              <h4 class="card-company">
                <span class="company-icon" v-html="job.icon"></span>
                {{ job.company }}
                <span class="card-location">· {{ job.location }}</span>
              </h4>
            </div>

            <p class="card-description">{{ job.description }}</p>

            <ul class="card-highlights">
              <li v-for="(point, i) in job.highlights" :key="i">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                {{ point }}
              </li>
            </ul>

            <div class="card-tech">
              <span v-for="tech in job.tech" :key="tech" class="tech-pill">{{ tech }}</span>
            </div>
          </div>
        </div>

        <!-- Education / Organization -->
        <div class="timeline-item">
          <div class="timeline-marker">
            <div class="marker-dot education"></div>
          </div>
          <div class="timeline-card education-card">
            <div class="card-header">
              <span class="card-period">College Years</span>
              <h3 class="card-title">Codebyters Organization — Member</h3>
              <h4 class="card-company">
                <span class="company-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
                Student Organization
              </h4>
            </div>
            <p class="card-description">
              Active member of the Codebyters Organization during college — a student-led community 
              dedicated to teaching and mentoring aspiring software engineers. Facilitated workshops, 
              coding bootcamps, and peer programming sessions, helping fellow students develop strong 
              foundations in programming, algorithms, and software engineering best practices.
            </p>
          </div>
        </div>

        <!-- Education -->
        <div class="timeline-item">
          <div class="timeline-marker">
            <div class="marker-dot education"></div>
          </div>
          <div class="timeline-card education-card">
            <div class="card-header">
              <span class="card-period">2016 — 2020</span>
              <h3 class="card-title">Bachelor of Science in Information Technology</h3>
              <h4 class="card-company">
                <span class="company-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5"/></svg></span>
                Davao Oriental State University
                <span class="card-location">· Davao Oriental, Philippines</span>
              </h4>
            </div>
            <p class="card-description">
              Graduated with a Bachelor of Science in Information Technology in 2020.
              Developed a strong academic foundation in software development, database management, 
              networking, and systems analysis — laying the groundwork for a professional career 
              in full-stack software engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const jobs = [
  {
    title: 'Software Engineer',
    company: 'ChartHelper LLC',
    location: 'Arizona & Texas, USA (Remote)',
    period: 'Dec 2025 — Present',
    current: true,
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    description: 'Building and enhancing Electronic Health Records (EHR) systems that power clinical workflows for healthcare providers across Arizona and Texas. Working on HIPAA-compliant platforms that streamline care delivery, improve patient outcomes, and enable efficient provider-patient communication.',
    highlights: [
      'Developed and maintained EHR modules for patient charting, scheduling, and clinical documentation',
      'Implemented secure, HIPAA-compliant data handling and role-based access controls',
      'Enhanced care service workflows, reducing administrative overhead for clinical staff',
      'Integrated third-party healthcare APIs and HL7/FHIR standards for interoperability',
      'Collaborated with healthcare professionals to translate clinical needs into technical solutions',
    ],
    tech: ['C#', '.NET', 'Blazor', 'SQL Server', 'Azure', 'REST APIs', 'DevExpress'],
  },
  {
    title: 'Software Engineer',
    company: 'CMV Group',
    location: 'Australia (Remote)',
    period: '2023 — 2024',
    current: false,
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
    description: 'Worked at CMV Group — a leading Australian conglomerate with operations spanning commercial vehicles, industrial equipment, and power solutions. Developed and maintained internal business platforms supporting the group\'s diverse portfolio of brands and services, ensuring reliable performance for their nationwide operations across Australia and New Zealand.',
    highlights: [
      'Built and maintained enterprise platforms supporting CMV Group\'s multi-brand operations',
      'Developed internal dashboards and reporting tools for business performance analytics',
      'Implemented robust data processing workflows with full audit trails and compliance logging',
      'Optimized database queries and reporting modules for large-scale operational datasets',
    ],
    tech: ['C#', '.NET', 'WPF', 'DevExpress', 'SQL Server', 'MVVM'],
  },
  {
    title: 'Software Engineer',
    company: 'Provident Marketing & Mobile Enterprises Inc.',
    location: 'Philippines',
    period: '2020 — 2025',
    current: false,
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    description: 'Developed financial and operational platforms for the gaming and lottery industry in the Philippines. Contributed to the Small Town Lottery (STL) system — a PCSO-regulated (Philippine Charity Sweepstakes Office) lottery program serving communities nationwide, processing thousands of daily transactions with real-time draw management.',
    highlights: [
      'Developed the Small Town Lottery (STL) platform under PCSO regulation, serving thousands of daily users',
      'Built real-time draw management, ticket validation, and prize computation engines',
      'Implemented secure payment processing and financial reconciliation for lottery operations',
      'Designed scalable architecture to handle high-concurrency during peak lottery hours',
    ],
    tech: ['C#', 'Java', 'PHP', 'Laravel', 'SQL', 'REST APIs', 'Mobile'],
  },
  {
    title: 'Member Software Engineer',
    company: 'Exprezo IT Solutions',
    location: 'Philippines',
    period: '2017 — Present',
    current: false,
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    description: 'Developed a wide range of enterprise applications across different business verticals as part of a collaborative engineering team. Gained foundational experience building scalable, maintainable solutions for diverse industries, working with multiple technology stacks and frameworks.',
    highlights: [
      'Delivered enterprise applications for various industry clients with diverse requirements',
      'Gained hands-on experience with multiple tech stacks including C#, Java, and web technologies',
      'Practiced agile development methodologies and collaborative code review processes',
      'Built RESTful APIs and integrated third-party services for complex business workflows',
    ],
    tech: ['C#', 'Java', 'JavaScript', 'PHP', 'SQL', 'REST APIs', 'ABP Framework'],
  },
]
</script>

<style scoped>
.experience {
  background: var(--bg-secondary);
  position: relative;
}

.experience::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent-secondary), transparent);
}

.experience-header {
  text-align: center;
  margin-bottom: 64px;
}

.experience-header .section-subtitle {
  margin: 0 auto;
}

.timeline {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
}

.timeline-item {
  display: flex;
  gap: 32px;
  margin-bottom: 16px;
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 24px;
}

.marker-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--accent-primary);
  border: 3px solid var(--bg-secondary);
  box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.3);
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  margin-top: 28px;
}

.marker-dot.pulse {
  animation: pulse-glow 2s infinite;
  background: var(--accent-secondary);
  box-shadow: 0 0 0 3px rgba(0, 212, 170, 0.3);
}

.marker-dot.education {
  background: var(--accent-tertiary);
  box-shadow: 0 0 0 3px rgba(255, 107, 157, 0.3);
}

.marker-line {
  width: 2px;
  flex-grow: 1;
  background: linear-gradient(180deg, var(--accent-primary), rgba(108, 99, 255, 0.1));
  margin: 4px 0;
}

.timeline-card {
  flex: 1;
  padding: 32px;
  background: rgba(26, 26, 46, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  transition: all var(--transition-normal);
  margin-bottom: 16px;
}

.timeline-card:hover {
  border-color: rgba(108, 99, 255, 0.3);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.2);
  transform: translateX(4px);
}

.timeline-item.active .timeline-card {
  border-color: rgba(0, 212, 170, 0.3);
  background: rgba(0, 212, 170, 0.03);
}

.card-header {
  margin-bottom: 16px;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.card-period {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--accent-primary);
  font-weight: 500;
}

.current-badge {
  font-size: 0.7rem;
  padding: 2px 10px;
  background: rgba(0, 212, 170, 0.15);
  color: var(--accent-secondary);
  border-radius: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.card-company {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.company-icon {
  color: var(--accent-primary);
  display: flex;
  align-items: center;
}

.card-location {
  color: var(--text-muted);
  font-weight: 400;
  font-size: 0.9rem;
}

.card-description {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.8;
  margin-bottom: 16px;
}

.card-highlights {
  list-style: none;
  margin-bottom: 20px;
}

.card-highlights li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 6px 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.card-highlights li svg {
  flex-shrink: 0;
  margin-top: 3px;
}

.card-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-pill {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  padding: 4px 12px;
  background: rgba(108, 99, 255, 0.08);
  border: 1px solid rgba(108, 99, 255, 0.15);
  color: var(--accent-primary);
  border-radius: 20px;
  font-weight: 500;
}

.education-card {
  border-color: rgba(255, 107, 157, 0.2);
  background: rgba(255, 107, 157, 0.03);
}

@media (max-width: 768px) {
  .experience-header { margin-bottom: 40px; }
  .timeline-item { gap: 16px; }
  .timeline-card { padding: 24px; margin-bottom: 8px; }
  .timeline-card:hover { transform: none; }
  .card-title { font-size: 1.15rem; }
  .card-company { flex-wrap: wrap; font-size: 0.9rem; }
  .card-location { font-size: 0.82rem; }
}

@media (max-width: 480px) {
  .timeline-marker { width: 16px; }
  .marker-dot { width: 12px; height: 12px; margin-top: 24px; }
  .timeline-item { gap: 12px; }
  .timeline-card {
    padding: 18px;
    border-radius: 12px;
  }
  .card-title { font-size: 1.05rem; }
  .card-description { font-size: 0.88rem; line-height: 1.7; }
  .card-highlights li {
    font-size: 0.83rem;
    line-height: 1.5;
    gap: 8px;
    padding: 4px 0;
  }
  .card-highlights li svg { width: 14px; height: 14px; }
  .card-tech { gap: 5px; }
  .tech-pill { font-size: 0.68rem; padding: 3px 10px; }
  .card-period { font-size: 0.75rem; }
  .current-badge { font-size: 0.62rem; padding: 2px 8px; }
  .card-meta { gap: 8px; margin-bottom: 6px; }
}
</style>
