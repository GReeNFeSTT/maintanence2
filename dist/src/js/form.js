import { CONFIG } from "./config.js";
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

document.addEventListener("DOMContentLoaded", initForm);