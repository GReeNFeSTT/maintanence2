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
});