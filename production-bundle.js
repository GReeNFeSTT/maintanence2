/* CSS Reset */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

a {
  text-decoration: none;
  color: inherit;
}

ul, ol {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  font: inherit;
}

input, textarea, select {
  font: inherit;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px;
}

/* Focus styles */
*:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}:root {
  /* Colors */
  --color-primary: #007bff;
  --color-primary-hover: #0056b3;
  --color-secondary: #6c757d;
  --color-success: #28a745;
  --color-danger: #dc3545;
  --color-warning: #ffc107;
  --color-text: #333;
  --color-text-muted: #666;
  --color-bg: #fff;
  --color-bg-alt: #f8f9fa;
  --color-border: #ddd;

  /* Typography */
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;

  /* Layout */
  --container-width: 1200px;
  --header-height: 64px;
  --footer-height: 64px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 300ms ease;
  --transition-slow: 500ms ease;
}

/* Dark mode overrides (optional) */
@media (prefers-color-scheme: dark) {
  :root {
    --color-text: #e5e7eb;
    --color-text-muted: #9ca3af;
    --color-bg: #111827;
    --color-bg-alt: #1f2937;
    --color-border: #374151;
  }
}

/* Breakpoints */
:root {
  --breakpoint-mobile: 768px;
  --breakpoint-tablet: 1024px;
}/* ============================================
   CSS Architecture - Facility Maintenance
   Organization: ITCSS methodology
   ============================================ */

/* Form placeholder styling */
input::placeholder,
textarea::placeholder {
  color: #94a3b8 !important; /* Gray-400 */
  opacity: 1;
  font-style: italic;
}

/* Ensure placeholder text is more transparent and gray */
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: #94a3b8 !important;
}

input::-ms-input-placeholder,
textarea::-ms-input-placeholder {
  color: #94a3b8 !important;
}

/* ====================
   1. BASE STYLES
   ==================== */

:root {
  /* Colors */
  --color-slate-50: #f8fafc;
  --color-slate-200: #e2e8f0;
  --color-slate-300: #cbd5e1;
  --color-slate-500: #64748b;
  --color-slate-600: #475569;
  --color-slate-700: #334155;
  --color-slate-800: #1e293b;
  --color-slate-900: #0f172a;
  --color-white: #ffffff;
  
  /* Typography */
  --font-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --letter-spacing-tight: 0.18em;
  --letter-spacing-normal: 0.2em;
  --letter-spacing-wide: 0.25em;
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 0.75rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  /* Border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-full: 9999px;
  
  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-base: 200ms ease-in-out;
  --transition-slow: 300ms ease-in-out;
}

/* Performance optimization */
* {
  box-sizing: border-box;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body {
  margin: 0;
  padding: 0;
  font-family: var(--font-base);
  line-height: 1.6;
}

/* ====================
   2. LAYOUT COMPONENTS
   ==================== */

.container {
  max-width: 72rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 768px) {
  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

.section {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

@media (min-width: 768px) {
  .section {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
}

/* ====================
   3. COMPONENTS
   ==================== */

/* Language Switcher */
.lang-switcher {
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
  z-index: 50;
}

.lang-btn {
  width: 1.75rem;
  height: 1.25rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-slate-200);
  cursor: pointer;
  transition: all var(--transition-fast);
  background-size: cover;
  background-position: center;
}

.lang-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.lang-btn:active {
  transform: translateY(0);
}

/* Header */
.header {
  border-bottom: 1px solid var(--color-slate-200);
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 40;
}

.header-inner {
  max-width: 72rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

@media (min-width: 768px) {
  .header-inner {
    padding: 1rem 1.5rem;
  }
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.brand-logo {
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  border: 1px solid var(--color-slate-300);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: var(--color-slate-700);
  flex-shrink: 0;
}

.brand-tagline {
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
  color: var(--color-slate-500);
  margin: 0;
  line-height: 1.2;
}

.brand-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-slate-900);
  margin: 0;
  line-height: 1.2;
}

/* Navigation */
.nav {
  display: none;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.75rem;
  color: var(--color-slate-600);
}

@media (min-width: 768px) {
  .nav {
    display: flex;
  }
}

.nav-link {
  text-decoration: none;
  color: inherit;
  transition: color var(--transition-fast);
}

.nav-link:hover {
  color: var(--color-slate-900);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 1.5rem;
  border-radius: var(--radius-full);
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-normal);
  text-decoration: none;
  cursor: pointer;
  transition: all var(--transition-base);
  border: none;
  white-space: nowrap;
}

.btn-primary {
  background-color: var(--color-slate-900);
  color: var(--color-white);
}

.btn-primary:hover {
  background-color: var(--color-slate-800);
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.btn-secondary {
  background-color: transparent;
  border: 1px solid var(--color-slate-300);
  color: var(--color-slate-800);
}

.btn-secondary:hover {
  border-color: var(--color-slate-900);
  transform: translateY(-1px);
}

.btn-sm {
  padding: 0.5rem 1.25rem;
  font-size: 0.6875rem;
  letter-spacing: var(--letter-spacing-wide);
}

/* Typography */
.label {
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
  color: var(--color-slate-500);
  margin-bottom: 0.5rem;
  display: block;
}

.heading-xl {
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .heading-xl {
    font-size: 2.25rem;
  }
}

@media (min-width: 1024px) {
  .heading-xl {
    font-size: 3rem;
  }
}

.heading-lg {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

@media (min-width: 768px) {
  .heading-lg {
    font-size: 1.875rem;
  }
}

.text-base {
  font-size: 0.875rem;
  color: var(--color-slate-600);
}

@media (min-width: 768px) {
  .text-base {
    font-size: 1rem;
  }
}

.text-sm {
  font-size: 0.75rem;
  color: var(--color-slate-700);
}

.text-xs {
  font-size: 0.6875rem;
}

/* Cards */
.card {
  border: 1px solid var(--color-slate-200);
  border-radius: var(--radius-xl);
  padding: 1.25rem;
  background-color: var(--color-white);
  transition: all var(--transition-base);
}

@media (min-width: 768px) {
  .card {
    padding: 1.5rem;
  }
}

.card-hover {
  cursor: pointer;
}

.card-hover:hover {
  background-color: var(--color-slate-900);
  border-color: var(--color-slate-900);
  color: var(--color-white);
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.card-featured {
  border-color: var(--color-slate-900);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.card-tag {
  border-radius: var(--radius-full);
  padding: 0.25rem 0.5rem;
  font-size: 0.625rem;
  border: 1px solid var(--color-slate-200);
}

.card-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.card-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.25rem 0;
  font-size: 0.6875rem;
}

.card-list li {
  margin-bottom: 0.375rem;
}

/* Grid Systems */
.grid {
  display: grid;
  gap: 2rem;
}

.grid-2 {
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

.grid-3 {
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}

.grid-hero {
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: start;
}

@media (min-width: 768px) {
  .grid-hero {
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  }
}

/* Forms */
.form-group {
  margin-bottom: 0.75rem;
}

.form-label {
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-normal);
  color: var(--color-slate-500);
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-slate-300);
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: var(--color-slate-900);
  transition: all var(--transition-fast);
  font-family: inherit;
  background-color: var(--color-white);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--color-slate-400);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-slate-900);
  transform: translateY(-1px);
  box-shadow: 0 0 0 3px rgba(15, 23, 42, 0.1);
}

.form-input:hover,
.form-select:hover,
.form-textarea:hover {
  border-color: var(--color-slate-400);
}

.form-input.error,
.form-select.error,
.form-textarea.error {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.form-input.error:focus,
.form-select.error:focus,
.form-textarea.error:focus {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 5rem;
}

.form-error {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: none;
  font-weight: 500;
}

.form-status {
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  transform: translateY(10px);
}

.form-status.show {
  opacity: 1;
  transform: translateY(0);
}

.form-status--success {
  background-color: #dcfce7;
  color: #166534;
  border: 1px solid #bbf7d0;
  animation: fadeIn 0.3s ease-in;
}

.form-status--error {
  background-color: #fee2e2;
  color: #991b1b;
  border: 1px solid #fecaca;
  animation: shake 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

/* Enhanced button styles for form submission */
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.btn:disabled:hover {
  transform: none;
  background-color: inherit;
}

/* ====================
   4. SECTIONS
   ==================== */

/* Hero Section */
.hero {
  padding-top: 4rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid var(--color-slate-200);
  background-color: var(--color-white);
}

@media (min-width: 768px) {
  .hero {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
}

.hero-points {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.6875rem;
  color: var(--color-slate-600);
}

.hero-points span:not(:last-child)::after {
  content: "•";
  margin-left: 1rem;
  color: var(--color-slate-300);
  display: none;
}

@media (min-width: 768px) {
  .hero-points span:not(:last-child)::after {
    display: inline;
  }
}

/* Services Section */
.services {
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: var(--color-slate-50);
}

@media (min-width: 768px) {
  .services {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
}

/* Benefits Section */
.benefits {
  padding-top: 4rem;
  padding-bottom: 4rem;
  border-top: 1px solid var(--color-slate-200);
  border-bottom: 1px solid var(--color-slate-200);
  background-color: var(--color-white);
}

@media (min-width: 768px) {
  .benefits {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
}

.benefit-item {
  margin-bottom: 1.5rem;
}

.benefit-value {
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

/* Packages Section */
.packages {
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: var(--color-slate-50);
}

@media (min-width: 768px) {
  .packages {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 2.5rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
}

/* Contact Section */
.contact {
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: var(--color-white);
  border-top: 1px solid var(--color-slate-200);
}

@media (min-width: 768px) {
  .contact {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
}

.contact-points {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  font-size: 0.875rem;
  color: var(--color-slate-700);
}

.contact-points li {
  margin-bottom: 0.5rem;
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  font-size: 0.875rem;
}

/* Footer */
.footer {
  padding: 1.5rem 0;
  text-align: center;
  font-size: 0.6875rem;
  color: var(--color-slate-500);
  border-top: 1px solid var(--color-slate-200);
  background-color: var(--color-white);
}

.footer-inner {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

@media (min-width: 768px) {
  .footer-inner {
    flex-direction: row;
    padding: 0 1.5rem;
  }
}

/* ====================
   5. UTILITIES
   ==================== */

.bg-white { background-color: var(--color-white); }
.bg-slate-50 { background-color: var(--color-slate-50); }
.text-slate-500 { color: var(--color-slate-500); }
.text-slate-600 { color: var(--color-slate-600); }
.text-slate-700 { color: var(--color-slate-700); }
.text-slate-900 { color: var(--color-slate-900); }

.mb-1 { margin-bottom: 0.25rem; }
.mb-2 { margin-bottom: 0.5rem; }
.mb-3 { margin-bottom: 0.75rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.mb-10 { margin-bottom: 2.5rem; }

.mt-1 { margin-top: 0.25rem; }
.mt-2 { margin-top: 0.5rem; }
.mt-4 { margin-top: 1rem; }

.pt-4 { padding-top: 1rem; }
.pb-4 { padding-bottom: 1rem; }

.border-t { border-top: 1px solid var(--color-slate-200); }
.border-b { border-bottom: 1px solid var(--color-slate-200); }

.flex { display: flex; }
.flex-col { flex-direction: column; }
.flex-wrap { flex-wrap: wrap; }
.gap-3 { gap: 0.75rem; }
.gap-4 { gap: 1rem; }

.max-w-xl { max-width: 36rem; }
.max-w-2xl { max-width: 42rem; }

/* ====================
   6. PERFORMANCE & ACCESSIBILITY
   ==================== */

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Focus styles for accessibility */
a:focus,
button:focus,
input:focus,
select:focus,
textarea:focus {
  outline: 2px solid var(--color-slate-900);
  outline-offset: 2px;
}

/* Print styles */
@media print {
  .lang-switcher,
  .nav,
  .btn {
    display: none;
  }
}
import { CONFIG } from "./config.js";
import { applyTranslations, detectInitialLanguage } from "./i18n.js";

function updateMetaDescription(lang) {
  const page = document.body.dataset.page || "home";
  const metaConfig = CONFIG.meta[page];
  const meta =
    metaConfig && metaConfig[lang]
      ? metaConfig[lang]
      : metaConfig && metaConfig[CONFIG.defaultLang];

  if (!meta) {
    return;
  }

  const metaTag = document.querySelector('meta[name="description"]');
  if (metaTag) {
    metaTag.setAttribute("content", meta);
  }
}

export function setLanguage(lang) {
  if (!CONFIG.supportedLangs.includes(lang)) {
    lang = CONFIG.defaultLang;
  }

  window.localStorage.setItem("preferredLanguage", lang);
  applyTranslations(lang);
  updateMetaDescription(lang);
}

function initLanguage() {
  const lang = detectInitialLanguage();
  applyTranslations(lang);
  updateMetaDescription(lang);
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  window.setLanguage = setLanguage;
});import { CONFIG } from "./config.js";

function initGoogleAnalytics() {
  if (!CONFIG.analytics.googleAnalyticsId) {
    return;
  }

  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.analytics.googleAnalyticsId}`;
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${CONFIG.analytics.googleAnalyticsId}');
  `;
  document.head.appendChild(script2);
}

function initMetaPixel() {
  if (!CONFIG.analytics.metaPixelId) {
    return;
  }

  const script = document.createElement("script");
  script.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${CONFIG.analytics.metaPixelId}');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(script);

  const noscript = document.createElement("noscript");
  noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${CONFIG.analytics.metaPixelId}&ev=PageView&noscript=1"/>`;
  document.body.appendChild(noscript);
}

export function initAnalytics() {
  initGoogleAnalytics();
  initMetaPixel();
}import { CONFIG } from "./config.js";
import { detectInitialLanguage, translations } from "./i18n.js";

function getCurrentLang() {
  const stored = window.localStorage.getItem("preferredLanguage");
  if (stored && CONFIG.supportedLangs.includes(stored)) {
    return stored;
  }
  return detectInitialLanguage();
}

function getText(key) {
  const lang = getCurrentLang();
  const dict = translations[lang] || translations[CONFIG.defaultLang];
  return dict[key] || key;
}

function showStatus(container, type, message) {
  if (!container) return;
  container.textContent = message;
  container.classList.remove(
    "form-status--success",
    "form-status--error",
    "show"
  );
  if (type === "success") {
    container.classList.add("form-status--success");
  } else if (type === "error") {
    container.classList.add("form-status--error");
  }
  // Trigger animation
  setTimeout(() => {
    container.classList.add("show");
  }, 10);
}

function validateForm(form) {
  const nameInput = form.querySelector('input[name="name"]');
  const contactInput = form.querySelector('input[name="contact"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  let valid = true;

  // Clear previous error messages
  form.querySelectorAll(".form-error").forEach((el) => (el.textContent = ""));

  if (!nameInput || !contactInput || !messageInput) {
    return false;
  }

  // Validate name
  if (!nameInput.value.trim()) {
    nameInput.classList.add("border-red-500");
    valid = false;
  } else {
    nameInput.classList.remove("border-red-500");
  }

  // Validate contact (email or phone)
  const contactValue = contactInput.value.trim();
  if (!contactValue) {
    contactInput.classList.add("border-red-500");
    valid = false;
  } else {
    contactInput.classList.remove("border-red-500");
    
    // If it looks like an email, validate email format
    if (contactValue.includes("@")) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(contactValue)) {
        contactInput.classList.add("border-red-500");
        valid = false;
      }
    }
  }

  // Validate message
  if (!messageInput.value.trim()) {
    messageInput.classList.add("border-red-500");
    valid = false;
  } else {
    messageInput.classList.remove("border-red-500");
  }

  return valid;
}

function createSpinner() {
  const wrapper = document.createElement("span");
  wrapper.className = "flex items-center gap-2";

  const spinner = document.createElement("span");
  spinner.className = "animate-spin rounded-full h-4 w-4 border-b-2 border-white";
  spinner.style.borderTopColor = "transparent";

  const text = document.createElement("span");
  text.textContent = getText("contact_form_sending");

  wrapper.appendChild(spinner);
  wrapper.appendChild(text);
  return wrapper;
}

async function handleSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const statusEl = form.querySelector("[data-form-status]");
  const submitButton = form.querySelector("[type=submit]");

  if (!validateForm(form)) {
    showStatus(
      statusEl,
      "error",
      getText("contact_form_error")
    );
    return;
  }

  if (!submitButton) {
    return;
  }

  const originalLabel = submitButton.textContent;
  submitButton.disabled = true;

  const spinner = createSpinner();
  submitButton.textContent = "";
  submitButton.appendChild(spinner);

  try {
    const formData = new FormData(form);
    const response = await fetch(CONFIG.formEndpoint, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      showStatus(
        statusEl,
        "success",
        getText("contact_form_success")
      );
    } else {
      showStatus(
        statusEl,
        "error",
        getText("contact_form_error")
      );
    }
  } catch {
    showStatus(
      statusEl,
      "error",
      getText("contact_form_error")
    );
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalLabel;
  }
}

function initForm() {
  const form = document.querySelector(
    'form[data-form="contact"]'
  );
  if (!form) return;
  form.addEventListener("submit", handleSubmit);
}

document.addEventListener("DOMContentLoaded", initForm);import { CONFIG } from "./config.js";

export const translations = {
  ru: {
    // META / TITLE
    title: "Управление и обслуживание недвижимости",

    // BRAND & NAV
    brand_tagline: "Facility Maintenance",
    brand_name: "Premium Technical Services",
    nav_services: "Услуги",
    nav_benefits: "Преимущества",
    nav_packages: "Пакеты",
    nav_contact: "Контакты",
    nav_cta: "Оставить заявку",

    // HERO
    hero_label: "Property care & management",
    headline: "Управление и техническое\nобслуживание недвижимости",
    subheadline:
      "Берём на себя заботу о вашей недвижимости в Уругвае: квартиры, апартаменты, дома — для частных владельцев, инвесторов и агентств.",
    cta_primary: "Запросить предложение",
    cta_secondary: "Посмотреть пакеты услуг",
    hero_point_1: "Контроль состояния объекта без вашего присутствия",
    hero_point_2: "Работаем по договору и понятным регламентам",
    hero_point_3: "Опыт более 10 лет",

    // SERVICES
    services_label: "Основные направления",
    services_title: "Комплексное обслуживание инженерных систем",
    services_subtitle:
      "Мы выстраиваем системный подход к эксплуатации жилой недвижимости, чтобы вы могли сосредоточиться на инвестициях, а не на технических вопросах.",
    service_1_title: "Обслуживание инженерных сетей",
    service_1_desc:
      "Электрика, вентиляция, кондиционирование, водоснабжение, канализация — плановые осмотры, диагностика и оперативный ремонт для квартир и домов.",
    service_2_title: "Организация сервисных работ",
    service_2_desc:
      "Координация подрядчиков, контроль мелких ремонтных работ и сроков их выполнения для жилой недвижимости.",
    service_3_title: "Регулярные осмотры и отчётность",
    service_3_desc:
      "Плановые визиты на объект, фото‑ и видеоотчёты, контроль подрядчиков и состояния инженерных систем в квартирах и домах.",

    // BENEFITS
    benefits_label: "Почему выбирают нас",
    benefits_title: "Понятные условия и прогнозируемый результат",
    benefits_subtitle:
      "Мы строим долгосрочные отношения с заказчиками и отвечаем за качество работ своим именем.",
    benefit_1_label: "Опыт",
    benefit_1_value: "10+ лет",
    benefit_1_desc: "лет работы в сфере эксплуатации жилой недвижимости.",
    benefit_2_label: "Сроки",
    benefit_2_value: "< 60 мин",
    benefit_2_desc:
      "среднее время выезда аварийной бригады в часы работы.",
    benefit_3_label: "Прозрачность",
    benefit_3_value: "Отчётность",
    benefit_3_desc:
      "детальные отчёты по заявкам, фотофиксация состояния квартир и домов, план-график работ.",

    // PACKAGES
    packages_title: "Пакеты обслуживания",
    packages_subtitle:
      "Выберите готовый пакет под вашу квартиру, апартаменты или дом, либо запросите индивидуальное решение.",

    basic_label: "Старт",
    basic_tag: "для небольших помещений",
    basic_title: "Basic",
    basic_desc:
      "Базовое обслуживание и техническая поддержка для квартир, апартаментов и небольших домов.",
    basic_point_1: "Плановые обходы 1–2 раза в месяц",
    basic_point_2: "Реакция на заявки в рабочие часы",
    basic_point_3: "Базовая отчётность по выполненным работам",
    basic_point_4:
      "Базовый контроль состояния инженерных систем в квартире/доме (электрика, вентиляция, вода)",

    standard_label: "Баланс",
    standard_tag: "для спокойствия и безопасности",
    standard_title: "Standard",
    standard_desc:
      "Полное сопровождение инженерных систем в квартирах и домах, оперативная реакция и приоритизация заявок.",
    standard_point_1: "Регулярные обходы по индивидуальному графику",
    standard_point_2:
      "Сокращённое время реакции на аварийные заявки",
    standard_point_3:
      "Расширенная отчётность и рекомендации по модернизации",
    standard_point_4:
      "Планирование и контроль сезонных работ (кондиционирование, отопление и др.) для квартир и домов",

    premium_label: "Максимум",
    premium_tag: "для критичных объектов",
    premium_title: "Premium",
    premium_desc:
      "Приоритетное обслуживание квартир и домов, индивидуальный менеджер и максимальная скорость реакции.",
    premium_point_1: "Выделенная команда инженеров",
    premium_point_2: "Минимальное время реакции 24/7",
    premium_point_3: "Индивидуальные регламенты под объект",
    premium_point_4:
      "Персональный менеджер и регулярные стратегические сессии по объекту",

    price_request: "Стоимость по запросу",

    // CONTACT
    contact_label: "Свяжитесь с нами",
    contact_title: "Обсудим обслуживание ваших помещений",
    contact_subtitle:
      "Оставьте краткую информацию об объекте, и мы предложим варианты сотрудничества в удобном для вас формате.",
    contact_point_1: "Работаем по всей территории Уругвая",
    contact_point_2:
      "Поддерживаем русскоязычных, испаноязычных и англоязычных клиентов",
    contact_point_3:
      "Возможны разовые выезды и долгосрочные контракты на обслуживание квартир и домов",
    contact_email: "Написать на email",
    contact_whatsapp: "Написать в WhatsApp",
    contact_telegram: "Написать в Telegram",
    contact_form_title: "Краткая заявка",
    contact_form_name_label: "Имя и компания",
    contact_form_email_label: "Email или телефон",
    contact_form_object_label: "Тип объекта",
    contact_form_object_option_1: "Квартира / апартаменты",
    contact_form_object_option_2: "Дом / вилла",
    contact_form_object_option_3: "Несколько объектов",
    contact_form_object_option_4: "Другое",
    contact_form_name_placeholder: "Ваше имя / компания",
    contact_form_email_placeholder: "+598 ... / email",
    contact_form_message_placeholder:
      "Например: требуется регулярное обслуживание инженерных систем и оперативная реакция на заявки.",
    contact_form_message_label: "Кратко о задаче",
    contact_form_button: "Отправить запрос",
    contact_form_sending: "Отправляем…",
    contact_form_success:
      "Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.",
    contact_form_error:
      "Произошла ошибка при отправке. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.",
    contact_form_hint:
      "Нажимая кнопку, вы соглашаетесь на обработку переданных контактных данных для связи с вами по вопросу обслуживания вашей недвижимости.",

    // FOOTER
    footer_rights: "Все права защищены.",
    footer_note:
      "Техническое обслуживание и эксплуатация жилой недвижимости. Доступна поддержка на русском, испанском и английском языках.",

    // PACKAGE PAGES
    back_home: "На главную",
    package_label_basic: "Пакет Basic",
    package_label_standard: "Пакет Standard",
    package_label_premium: "Пакет Premium",
    whats_included: "Что входит",
    suitable_for: "Для каких объектов",
    cta_contact: "Оставить заявку",
    basic_suitable_1: "— Квартиры и апартаменты",
    basic_suitable_2: "— Небольшие дома и виллы",
    basic_suitable_3: "— Арендные объекты для инвесторов",
    basic_price_note:
      "Итоговая цена зависит от площади квартиры/дома, набора инженерных систем и количества объектов.",
    standard_suitable_1: "— Квартиры и апартаменты",
    standard_suitable_2: "— Дома и виллы",
    standard_suitable_3: "— Несколько объектов для инвесторов",
    standard_suitable_4: "— Коммерческие помещения (офисы, магазины)",
    standard_price_note:
      "Рассчитывается исходя из площади квартиры/дома, количества систем, графика работ и уровня требуемого SLA.",
    premium_suitable_1: "— Квартиры и апартаменты",
    premium_suitable_2: "— Дома и виллы",
    premium_suitable_3: "— Несколько объектов для инвесторов",
    premium_suitable_4: "— Коммерческие помещения (офисы, магазины)",
    premium_price_note:
      "Подбирается индивидуально с учётом SLA, критичности систем и количества квартир/домов.",
  },
  es: {
    title: "Gestión y mantenimiento de inmuebles",

    brand_tagline: "Facility Maintenance",
    brand_name: "Premium Technical Services",
    nav_services: "Servicios",
    nav_benefits: "Ventajas",
    nav_packages: "Paquetes",
    nav_contact: "Contacto",
    nav_cta: "Enviar consulta",

    hero_label: "Property care & management",
    headline: "Gestión y mantenimiento\nde propiedades",
    subheadline:
      "Nos encargamos del estado de sus inmuebles en Uruguay: apartamentos, casas y locales — para propietarios privados, inversores y agencias.",
    cta_primary: "Solicitar propuesta",
    cta_secondary: "Ver paquetes de servicio",
    hero_point_1:
      "Control del estado del inmueble sin su presencia",
    hero_point_2: "Trabajo según contrato y reglas claras",
    hero_point_3: "Más de 10 años de experiencia",

    services_label: "Áreas principales",
    services_title: "Gestión y mantenimiento de inmuebles",
    services_subtitle:
      "Organizamos el cuidado de sus propiedades para que pueda vivir en otro país, invertir o trabajar con tranquilidad.",
    service_1_title: "Mantenimiento de instalaciones",
    service_1_desc:
      "Electricidad, ventilación, aire acondicionado, agua y saneamiento: inspecciones, diagnóstico y reparaciones.",
    service_2_title: "Coordinación de servicios",
    service_2_desc:
      "Coordinación de contratistas, pequeños trabajos de reparación y control de plazos.",
    service_3_title: "Inspecciones regulares y reportes",
    service_3_desc:
      "Visitas planificadas al sitio, reportes con fotos y vídeo, control de contratistas e instalaciones técnicas.",

    benefits_label: "Por qué nos eligen",
    benefits_title:
      "Condiciones claras y resultados previsibles",
    benefits_subtitle:
      "Construimos relaciones a largo plazo y respondemos por la calidad de nuestro trabajo.",
    benefit_1_label: "Experiencia",
    benefit_1_value: "10+ años",
    benefit_1_desc:
      "años en operación y mantenimiento de inmuebles.",
    benefit_2_label: "Tiempos",
    benefit_2_value: "< 60 min",
    benefit_2_desc:
      "tiempo promedio de respuesta a solicitudes en horario laboral.",
    benefit_3_label: "Transparencia",
    benefit_3_value: "Reportes",
    benefit_3_desc:
      "reportes detallados, fotos y plan de trabajo.",

    packages_title: "Paquetes de mantenimiento",
    packages_subtitle:
      "Elija un paquete listo para su apartamento, casa o local, o pida una solución a medida.",

    basic_label: "Inicio",
    basic_tag: "para oficinas pequeñas",
    basic_title: "Básico",
    basic_desc:
      "Soporte básico y mantenimiento para espacios pequeños y coworkings.",
    basic_point_1:
      "Rondas planificadas 1–2 veces al mes",
    basic_point_2: "Respuesta en horario laboral",
    basic_point_3:
      "Reporte básico de trabajos realizados",
    basic_point_4:
      "Control básico del estado de los sistemas técnicos (electricidad, ventilación, agua)",

    standard_label: "Equilibrio",
    standard_tag: "para centros de oficinas",
    standard_title: "Estándar",
    standard_desc:
      "Soporte completo de sistemas técnicos y priorización de solicitudes.",
    standard_point_1:
      "Rondas regulares según calendario individual",
    standard_point_2:
      "Tiempo de respuesta reducido para emergencias",
    standard_point_3:
      "Reportes amplios con alto nivel de detalle",
    standard_point_4:
      "Planificación y control de trabajos estacionales (aire acondicionado, calefacción, etc.)",

    premium_label: "Máximo",
    premium_tag: "para sitios críticos",
    premium_title: "Premium",
    premium_desc:
      "Soporte prioritario, gestor dedicado y máxima velocidad de reacción.",
    premium_point_1: "Equipo de técnicos dedicado",
    premium_point_2: "Tiempo mínimo de respuesta 24/7",
    premium_point_3:
      "Reglamentos individuales por sitio",
    premium_point_4:
      "Gestor personal y sesiones estratégicas regulares sobre el sitio",

    price_request: "Precio a consultar",

    contact_label: "Contacto",
    contact_title:
      "Hablemos de la gestión de sus inmuebles",
    contact_subtitle:
      "Envíe una breve información sobre la propiedad y las tareas, y le propondremos opciones de colaboración.",
    contact_point_1: "Trabajamos en todo Uruguay",
    contact_point_2:
      "Atendemos en ruso, español e inglés",
    contact_point_3:
      "Trabajos puntuales y contratos de largo plazo",
    contact_email: "Escribir por email",
    contact_whatsapp: "Escribir por WhatsApp",
    contact_telegram: "Escribir en Telegram",
    contact_form_title: "Solicitud breve",
    contact_form_name_label: "Nombre y empresa",
    contact_form_email_label: "Email o teléfono",
    contact_form_object_label: "Tipo de sitio",
    contact_form_object_option_1: "Oficina / centro de negocios",
    contact_form_object_option_2: "Tienda / local comercial",
    contact_form_object_option_3: "Depósito",
    contact_form_object_option_4: "Otro",
    contact_form_name_placeholder: "Su nombre / empresa",
    contact_form_email_placeholder: "+598 ... / email",
    contact_form_message_placeholder:
      "Por ejemplo: necesitamos mantenimiento regular de sistemas técnicos y respuesta rápida a solicitudes.",
    contact_form_message_label: "Breve descripción",
    contact_form_button: "Enviar solicitud",
    contact_form_sending: "Enviando…",
    contact_form_success:
      "¡Gracias! Su solicitud ha sido enviada. Nos pondremos en contacto con usted en breve.",
    contact_form_error:
      "Se produjo un error al enviar. Intente más tarde o contáctenos directamente.",
    contact_form_hint:
      "Al enviar el formulario acepta el uso de sus datos de contacto para comunicarnos con usted.",

    footer_rights: "Todos los derechos reservados.",
    footer_note:
      "Gestión y mantenimiento técnico de inmuebles residenciales y comerciales. Soporte disponible en ruso, español e inglés.",

    back_home: "Volver al inicio",
    package_label_basic: "Paquete Básico",
    package_label_standard: "Paquete Estándar",
    package_label_premium: "Paquete Premium",
    whats_included: "Qué incluye",
    suitable_for: "Para qué sitios",
    cta_contact: "Enviar solicitud",
    basic_suitable_1:
      "— Oficinas pequeñas y gabinetes",
    basic_suitable_2: "— Coworkings y estudios",
    basic_suitable_3: "— Tiendas de barrio",
    basic_price_note:
      "El precio final depende del área, los sistemas técnicos y la cantidad de sitios.",
    standard_suitable_1:
      "— Centros de oficinas de tamaño medio",
    standard_suitable_2:
      "— Varios sitios de una misma empresa",
    standard_suitable_3:
      "— Locales comerciales y salones",
    standard_suitable_4:
      "— —",
    standard_price_note:
      "Se calcula según el área, cantidad de sistemas, calendario de trabajos y nivel de SLA requerido.",
    premium_suitable_1:
      "— Sitios con infraestructura crítica",
    premium_suitable_2:
      "— Grandes centros de negocios y complejos comerciales",
    premium_suitable_3:
      "— Sitios médicos y tecnológicos",
    premium_suitable_4: "— —",
    premium_price_note:
      "Se selecciona individualmente según SLA, criticidad de sistemas y cantidad de sitios.",
  },
  en: {
    title: "Property management & maintenance",

    brand_tagline: "Facility Maintenance",
    brand_name: "Premium Technical Services",
    nav_services: "Services",
    nav_benefits: "Benefits",
    nav_packages: "Packages",
    nav_contact: "Contact",
    nav_cta: "Request a quote",

    hero_label: "Property care & management",
    headline: "Property management\nand technical maintenance",
    subheadline:
      "We look after your properties in Uruguay – apartments, homes and commercial units – for private owners, investors and agencies.",
    cta_primary: "Request proposal",
    cta_secondary: "View service packages",
    hero_point_1:
      "Condition monitoring without you being on site",
    hero_point_2:
      "Clear contracts and documented procedures",
    hero_point_3: "10+ years of experience",

    services_label: "Core services",
    services_title: "Property management & maintenance",
    services_subtitle:
      "We set up a structured approach to caring for your assets so you can live abroad, invest or run your business with peace of mind.",
    service_1_title: "Engineering systems maintenance",
    service_1_desc:
      "Electrical, HVAC, water supply and sewerage – inspections, diagnostics and repairs.",
    service_2_title: "Service coordination",
    service_2_desc:
      "Coordinating contractors, minor repair work and keeping timelines on track.",
    service_3_title: "Regular inspections & reporting",
    service_3_desc:
      "Scheduled visits, photo/video reports and coordination of contractors and building systems.",

    benefits_label: "Why clients choose us",
    benefits_title: "Clear conditions and predictable results",
    benefits_subtitle:
      "We aim for long‑term partnerships and stand behind our work.",
    benefit_1_label: "Experience",
    benefit_1_value: "10+ years",
    benefit_1_desc:
      "years in property operation and maintenance.",
    benefit_2_label: "Response",
    benefit_2_value: "< 60 min",
    benefit_2_desc:
      "average response time to requests during business hours.",
    benefit_3_label: "Transparency",
    benefit_3_value: "Reporting",
    benefit_3_desc:
      "detailed ticket reports, photos and work schedules.",

    packages_title: "Service packages",
    packages_subtitle:
      "Choose a ready package for your apartment, house or commercial unit, or request a custom solution.",

    basic_label: "Starter",
    basic_tag: "for small offices",
    basic_title: "Basic",
    basic_desc:
      "Essential support and maintenance for small spaces and coworkings.",
    basic_point_1:
      "Scheduled walkthroughs 1–2 times per month",
    basic_point_2: "Response during business hours",
    basic_point_3:
      "Basic reporting for completed work",
    basic_point_4:
      "Basic monitoring of engineering systems (electrical, HVAC, water)",

    standard_label: "Balanced",
    standard_tag: "for office centers",
    standard_title: "Standard",
    standard_desc:
      "Full support of technical systems and ticket prioritization.",
    standard_point_1:
      "Regular walkthroughs with a custom schedule",
    standard_point_2:
      "Reduced response time for emergencies",
    standard_point_3:
      "Extended reporting and modernization advice",
    standard_point_4:
      "Planning and control of seasonal works (air conditioning, heating, etc.)",

    premium_label: "Maximum",
    premium_tag: "for critical sites",
    premium_title: "Premium",
    premium_desc:
      "Priority support, dedicated manager and fastest response time.",
    premium_point_1: "Dedicated team of engineers",
    premium_point_2: "Minimal 24/7 response time",
    premium_point_3:
      "Custom regulations per site",
    premium_point_4:
      "Personal manager and regular strategic sessions on the site",

    price_request: "Price on request",

    contact_label: "Contact us",
    contact_title:
      "Let's discuss managing your property",
    contact_subtitle:
      "Share a short description of the property and your needs and we'll suggest collaboration options.",
    contact_point_1: "We operate across Uruguay",
    contact_point_2:
      "Support available in Russian, Spanish and English",
    contact_point_3:
      "Single call‑outs and long‑term contracts",
    contact_email: "Send email",
    contact_whatsapp: "Message on WhatsApp",
    contact_telegram: "Message on Telegram",
    contact_form_title: "Quick request",
    contact_form_name_label: "Name & company",
    contact_form_email_label: "Email or phone",
    contact_form_object_label: "Type of site",
    contact_form_object_option_1: "Office / business center",
    contact_form_object_option_2: "Shop / retail space",
    contact_form_object_option_3: "Warehouse",
    contact_form_object_option_4: "Other",
    contact_form_name_placeholder: "Your name / company",
    contact_form_email_placeholder: "+598 ... / email",
    contact_form_message_placeholder:
      "For example: we need regular maintenance of technical systems and quick response to requests.",
    contact_form_message_label: "Short description",
    contact_form_button: "Send request",
    contact_form_sending: "Sending…",
    contact_form_success:
      "Thank you! Your request has been sent. We will contact you shortly.",
    contact_form_error:
      "An error occurred while sending. Please try again later or contact us directly.",
    contact_form_hint:
      "By submitting you agree that we may use your contact details to get in touch about cooperation.",

    footer_rights: "All rights reserved.",
    footer_note:
      "Management and technical maintenance of residential and commercial properties. Support available in Russian, Spanish and English.",

    back_home: "Back to home",
    package_label_basic: "Basic Package",
    package_label_standard: "Standard Package",
    package_label_premium: "Premium Package",
    whats_included: "What's included",
    suitable_for: "Suitable for",
    cta_contact: "Contact us",
    basic_suitable_1:
      "— Small offices and workspaces",
    basic_suitable_2:
      "— Coworking spaces and studios",
    basic_suitable_3: "— Neighborhood shops",
    basic_price_note:
      "Final price depends on area, technical systems and number of sites.",
    standard_suitable_1:
      "— Mid‑sized office centers",
    standard_suitable_2:
      "— Multiple sites of one company",
    standard_suitable_3:
      "— Retail spaces and showrooms",
    standard_suitable_4: "— —",
    standard_price_note:
      "Calculated based on area, number of systems, work schedule and required SLA level.",
    premium_suitable_1:
      "— Sites with critical infrastructure",
    premium_suitable_2:
      "— Large business centers and shopping complexes",
    premium_suitable_3:
      "— Medical and technology sites",
    premium_suitable_4: "— —",
    premium_price_note:
      "Selected individually based on SLA, system criticality and number of sites.",
  },
};

export function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) {
    return;
  }

  document
    .querySelectorAll("[data-i18n]")
    .forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (dict[key]) {
        element.textContent = dict[key];
      }
    });

  document
    .querySelectorAll("[data-i18n-placeholder]")
    .forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      if (dict[key]) {
        element.placeholder = dict[key];
      }
    });

  const titleEl = document.querySelector("title[data-i18n]");
  if (titleEl) {
    const key = titleEl.getAttribute("data-i18n");
    if (dict[key]) {
      titleEl.textContent = dict[key];
    }
  }

  const htmlEl = document.documentElement;
  if (htmlEl) {
    htmlEl.lang = lang;
  }
}

export function detectInitialLanguage() {
  const stored = window.localStorage.getItem("preferredLanguage");
  if (stored && CONFIG.supportedLangs.includes(stored)) {
    return stored;
  }

  const navLang = navigator.language || navigator.userLanguage;
  if (navLang) {
    const short = navLang.slice(0, 2).toLowerCase();
    if (CONFIG.supportedLangs.includes(short)) {
      return short;
    }
  }

  return CONFIG.defaultLang;
}