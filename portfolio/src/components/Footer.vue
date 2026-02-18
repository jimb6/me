<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="#home" class="footer-logo">
            <span class="logo-bracket">&lt;</span>
            <span class="logo-text">Jimwell Buot</span>
            <span class="logo-bracket">/&gt;</span>
          </a>
          <p class="footer-tagline">Full-Stack Developer & AWS Cloud Practitioner</p>
        </div>

        <div class="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#cloud">Cloud</a>
          <a href="#contact">Contact</a>
        </div>

        <div class="footer-socials">
          <a href="https://www.linkedin.com/in/jimwell-buot-a66b3ab6/" target="_blank" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://github.com/jimb6" target="_blank" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://www.upwork.com/freelancers/~01f366391ca31798ed" target="_blank" aria-label="Upwork">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/></svg>
          </a>
          <a href="https://www.facebook.com/joke.lang3306/" target="_blank" aria-label="Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <p class="footer-copyright">
          &copy; {{ new Date().getFullYear() }} Jimwell Buot. Built with
          <span class="heart">♥</span> using Vue.js
        </p>
        <p class="footer-note">
          Designed & developed by Jimwell Buot
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 60px 0 32px;
  background: var(--bg-primary);
  border-top: 1px solid var(--border-color);
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;
  margin-bottom: 32px;
}

.footer-logo {
  font-family: var(--font-mono);
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 2px;
}

.logo-bracket { color: var(--accent-primary); }

.logo-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-tagline {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 4px;
}

.footer-links {
  display: flex;
  gap: 24px;
}

.footer-links a {
  font-size: 0.9rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer-links a:hover { color: var(--accent-primary); }

.footer-socials {
  display: flex;
  gap: 16px;
}

.footer-socials a {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: var(--text-muted);
  background: rgba(26, 26, 46, 0.5);
  border: 1px solid var(--border-color);
  transition: all var(--transition-normal);
}

.footer-socials a:hover {
  color: var(--accent-primary);
  border-color: var(--accent-primary);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(108, 99, 255, 0.2);
}

.footer-divider {
  height: 1px;
  background: var(--border-color);
  margin-bottom: 24px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-copyright {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.heart {
  color: var(--accent-tertiary);
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.footer-note {
  font-size: 0.8rem;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .footer { padding: 40px 0 24px; }
  .footer-top {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 24px;
  }
  .footer-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px 20px;
  }
  .footer-links a { font-size: 0.82rem; }
  .footer-socials { gap: 12px; }
  .footer-socials a { width: 36px; height: 36px; border-radius: 8px; }
  .footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;
  }
  .footer-copyright { font-size: 0.78rem; }
  .footer-note { font-size: 0.72rem; }
  .footer-divider { margin-bottom: 20px; }
}
</style>
