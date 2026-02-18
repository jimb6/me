<template>
  <section id="contact" class="section contact">
    <div class="container">
      <div class="contact-wrapper">
        <div class="contact-content">
          <span class="section-label">// Let's Connect</span>
          <h2 class="section-title">Get In Touch</h2>
          <p class="contact-description">
            I'm always open to discussing new opportunities, interesting projects, 
            or collaboration ideas. Whether you need a full-stack developer, a cloud 
            architect, or a technical consultant — let's build something amazing together.
          </p>

          <a href="mailto:jimwellbuot@gmail.com" class="contact-email">
            <div class="email-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <span>Say hello →</span>
          </a>
        </div>

        <div class="social-grid">
          <a v-for="social in socials" :key="social.name" 
             :href="social.url" target="_blank" 
             class="social-card" :class="social.class">
            <div class="social-icon" v-html="social.icon"></div>
            <div class="social-info">
              <h4>{{ social.name }}</h4>
              <p>{{ social.handle }}</p>
            </div>
            <svg class="social-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const socials = [
  {
    name: 'LinkedIn',
    handle: 'Jimwell Buot',
    url: 'https://www.linkedin.com/in/jimwell-buot-a66b3ab6/',
    class: 'linkedin',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  },
  {
    name: 'GitHub',
    handle: '@jimb6',
    url: 'https://github.com/jimb6',
    class: 'github',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
  },
  {
    name: 'Upwork',
    handle: 'Freelance Profile',
    url: 'https://www.upwork.com/freelancers/~01f366391ca31798ed',
    class: 'upwork',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/></svg>',
  },
  {
    name: 'Facebook',
    handle: 'Jimwell Buot',
    url: 'https://www.facebook.com/joke.lang3306/',
    class: 'facebook',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  },
]
</script>

<style scoped>
.contact {
  background: var(--bg-secondary);
  position: relative;
}

.contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent-tertiary), transparent);
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.contact-description {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.9;
  margin-bottom: 36px;
}

.contact-email {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 20px 32px;
  background: rgba(26, 26, 46, 0.6);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  text-decoration: none;
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 600;
  transition: all var(--transition-normal);
}

.contact-email:hover {
  border-color: var(--accent-primary);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(108, 99, 255, 0.2);
}

.email-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-primary);
  border-radius: 12px;
  color: white;
}

.social-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.social-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 24px;
  background: rgba(26, 26, 46, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  text-decoration: none;
  color: var(--text-primary);
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.social-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.social-card:hover {
  transform: translateY(-4px);
  border-color: transparent;
}

.social-card:hover::before { opacity: 1; }

/* Platform Colors */
.social-card.linkedin:hover { border-color: #0A66C2; box-shadow: 0 8px 30px rgba(10, 102, 194, 0.2); }
.social-card.linkedin:hover::before { background: linear-gradient(135deg, rgba(10, 102, 194, 0.08), transparent); }
.social-card.linkedin .social-icon { color: #0A66C2; }

.social-card.github:hover { border-color: #8b5cf6; box-shadow: 0 8px 30px rgba(139, 92, 246, 0.2); }
.social-card.github:hover::before { background: linear-gradient(135deg, rgba(139, 92, 246, 0.08), transparent); }
.social-card.github .social-icon { color: #8b5cf6; }

.social-card.upwork:hover { border-color: #14a800; box-shadow: 0 8px 30px rgba(20, 168, 0, 0.2); }
.social-card.upwork:hover::before { background: linear-gradient(135deg, rgba(20, 168, 0, 0.08), transparent); }
.social-card.upwork .social-icon { color: #14a800; }

.social-card.facebook:hover { border-color: #1877F2; box-shadow: 0 8px 30px rgba(24, 119, 242, 0.2); }
.social-card.facebook:hover::before { background: linear-gradient(135deg, rgba(24, 119, 242, 0.08), transparent); }
.social-card.facebook .social-icon { color: #1877F2; }

.social-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
}

.social-info {
  flex: 1;
  position: relative;
  z-index: 1;
}

.social-info h4 {
  font-size: 0.95rem;
  font-weight: 700;
}

.social-info p {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 2px;
}

.social-arrow {
  position: relative;
  z-index: 1;
  color: var(--text-muted);
  transition: all var(--transition-normal);
}

.social-card:hover .social-arrow {
  color: var(--text-primary);
  transform: translate(4px, -4px);
}

@media (max-width: 968px) {
  .contact-wrapper { grid-template-columns: 1fr; gap: 40px; }
}

@media (max-width: 640px) {
  .contact-description { font-size: 0.95rem; margin-bottom: 28px; }
  .contact-email {
    padding: 16px 24px;
    gap: 12px;
    font-size: 1rem;
    border-radius: 12px;
    width: 100%;
    justify-content: center;
  }
  .email-icon { width: 40px; height: 40px; border-radius: 10px; }
  .social-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
  .social-card {
    padding: 18px 16px;
    border-radius: 12px;
    gap: 10px;
  }
  .social-card:hover { transform: none; }
  .social-icon svg { width: 22px; height: 22px; }
  .social-info h4 { font-size: 0.85rem; }
  .social-info p { font-size: 0.72rem; }
  .social-arrow { width: 16px; height: 16px; }
}

@media (max-width: 380px) {
  .social-grid { grid-template-columns: 1fr; gap: 10px; }
}
</style>
