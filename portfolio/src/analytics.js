const websiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID

// Loads Umami only when a website ID is configured, so local dev isn't tracked.
export function initAnalytics() {
  if (!websiteId) return
  const script = document.createElement('script')
  script.src = 'https://cloud.umami.is/script.js'
  script.dataset.websiteId = websiteId
  document.head.appendChild(script)
}

// No-op until the Umami script has loaded (or if an ad blocker stops it).
export function track(event, data) {
  window.umami?.track(event, data)
}
