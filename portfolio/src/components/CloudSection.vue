<template>
  <section id="cloud" class="section cloud-section">
    <div class="container">
      <div class="cloud-grid">
        <div class="cloud-content">
          <span class="section-label">// Cloud Journey</span>
          <h2 class="section-title">Mastering AWS Cloud</h2>
          <p class="cloud-description">
            I'm actively advancing my expertise in <strong>Amazon Web Services</strong>, 
            combining years of full-stack development experience with cloud-native architecture 
            patterns. My goal is to architect and deploy highly available, fault-tolerant, and 
            cost-optimized solutions that meet enterprise-scale demands.
          </p>

          <div class="cloud-focus">
            <h3 class="focus-title">Areas of Focus</h3>
            <div class="focus-grid">
              <div v-for="area in focusAreas" :key="area.title" class="focus-card">
                <div class="focus-icon" v-html="area.icon"></div>
                <h4>{{ area.title }}</h4>
                <p>{{ area.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="cloud-visual">
          <div class="aws-badge">
            <div class="badge-ring">
              <div class="badge-inner">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>
                <span class="badge-text">AWS</span>
                <span class="badge-sub">Cloud Practitioner</span>
              </div>
            </div>
          </div>

          <div class="aws-services">
            <div v-for="(service, i) in services" :key="service" 
                 class="service-chip"
                 :style="{ animationDelay: `${i * 0.1}s` }">
              {{ service }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const focusAreas = [
  {
    title: 'Compute & Serverless',
    description: 'EC2, Lambda, ECS, and Fargate for scalable computing solutions',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
  },
  {
    title: 'Storage & Databases',
    description: 'S3, RDS, DynamoDB, and ElastiCache for data persistence',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
  },
  {
    title: 'Networking & Security',
    description: 'VPC, IAM, CloudFront, and Route 53 for secure infrastructure',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  },
  {
    title: 'CI/CD & Monitoring',
    description: 'CodePipeline, CloudWatch, and CloudFormation for automation',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
  },
]

const services = [
  'EC2', 'Lambda', 'S3', 'RDS', 'DynamoDB', 'CloudFront',
  'API Gateway', 'IAM', 'VPC', 'Route 53', 'ECS', 'CloudWatch',
  'SQS', 'SNS', 'CodePipeline', 'CloudFormation',
]
</script>

<style scoped>
.cloud-section {
  position: relative;
  overflow: hidden;
}

.cloud-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #ff9900, transparent);
}

.cloud-section::after {
  content: '';
  position: absolute;
  top: 20%;
  right: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255, 153, 0, 0.05) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.cloud-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 80px;
  align-items: center;
}

.cloud-description {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.9;
  margin-bottom: 40px;
}

.cloud-description strong {
  color: #ff9900;
  font-weight: 600;
}

.focus-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.focus-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.focus-card {
  padding: 24px;
  background: rgba(26, 26, 46, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: all var(--transition-normal);
}

.focus-card:hover {
  border-color: rgba(255, 153, 0, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}

.focus-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 153, 0, 0.1);
  border-radius: 10px;
  color: #ff9900;
  margin-bottom: 12px;
}

.focus-card h4 {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.focus-card p {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.5;
}

/* AWS Badge */
.cloud-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.aws-badge {
  display: flex;
  justify-content: center;
}

.badge-ring {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #ff9900, #6c63ff, #00d4aa, #ff9900);
  padding: 4px;
  animation: spin 20s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.badge-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--bg-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  animation: spin 20s linear infinite reverse;
  color: #ff9900;
}

.badge-text {
  font-size: 1.8rem;
  font-weight: 900;
  letter-spacing: 4px;
  background: linear-gradient(135deg, #ff9900, #ffb84d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.badge-sub {
  font-size: 0.7rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
}

.aws-services {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  max-width: 400px;
}

.service-chip {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 6px 14px;
  background: rgba(255, 153, 0, 0.06);
  border: 1px solid rgba(255, 153, 0, 0.15);
  border-radius: 20px;
  color: #ff9900;
  font-weight: 500;
  transition: all var(--transition-fast);
  animation: fadeInUp 0.5s ease both;
}

.service-chip:hover {
  background: rgba(255, 153, 0, 0.12);
  border-color: rgba(255, 153, 0, 0.4);
  transform: scale(1.08);
}

@media (max-width: 968px) {
  .cloud-grid { grid-template-columns: 1fr; gap: 40px; }
  .cloud-visual { order: -1; }
}

@media (max-width: 640px) {
  .focus-grid { grid-template-columns: 1fr; gap: 12px; }
  .focus-card {
    padding: 18px;
    border-radius: 10px;
  }
  .focus-card:hover { transform: none; }
  .focus-icon { width: 36px; height: 36px; border-radius: 8px; margin-bottom: 10px; }
  .focus-card h4 { font-size: 0.88rem; }
  .focus-card p { font-size: 0.78rem; }
  .cloud-description { font-size: 0.95rem; margin-bottom: 28px; }
  .focus-title { font-size: 1.05rem; margin-bottom: 14px; }
  .badge-ring { width: 170px; height: 170px; }
  .badge-text { font-size: 1.4rem; letter-spacing: 3px; }
  .badge-sub { font-size: 0.6rem; }
  .badge-inner svg { width: 36px; height: 36px; }
  .aws-services { gap: 6px; }
  .service-chip { font-size: 0.7rem; padding: 5px 10px; }
}
</style>
