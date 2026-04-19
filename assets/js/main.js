import {
  renderAbout,
  renderContact,
  renderFaq,
  renderPricing,
  renderProcess,
  renderServices,
  renderTestimonials,
} from "./components.js";

[
  ["#services-root", renderServices],
  ["#about-root", renderAbout],
  ["#process-root", renderProcess],
  ["#pricing-root", renderPricing],
  ["#testimonials-root", renderTestimonials],
  ["#faq-root", renderFaq],
  ["#contact-root", renderContact],
].forEach(([selector, render]) => {
  const root = document.querySelector(selector);
  if (root) {
    root.innerHTML = render();
  }
});

document.querySelectorAll(".hero-copy, .hero-panel, .service-card, .content-card, .step-card, .pricing-card, .testimonial-card, .faq-item, .contact-shell, .contact-panel").forEach((element) => {
  element.classList.add("reveal");
});

document.querySelector("#year").textContent = String(new Date().getFullYear());

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14,
    rootMargin: "0px 0px -40px 0px",
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

const form = document.querySelector("#contact-form");
const status = document.querySelector("#form-status");

const fieldRules = {
  name: {
    validate: (value) => value.trim().length >= 2,
    message: "Please enter your name.",
  },
  email: {
    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
    message: "Please enter a valid email address.",
  },
  budget: {
    validate: (value) => value.trim().length >= 2,
    message: "Please share a budget range or amount.",
  },
  intendedUse: {
    validate: (value) => value.trim().length > 0,
    message: "Please select the intended use.",
  },
  timeline: {
    validate: (value) => value.trim().length > 0,
    message: "Please select your timeline.",
  },
  helpType: {
    validate: (value) => value.trim().length > 0,
    message: "Please select what you need help with.",
  },
  message: {
    validate: (value) => value.trim().length >= 12,
    message: "Please add a few details so the request is easier to review.",
  },
};

function setFieldError(name, message = "") {
  const errorNode = document.querySelector(`[data-error-for="${name}"]`);
  const field = form.elements[name];

  if (errorNode) {
    if (!errorNode.id) {
      errorNode.id = `${name}-error`;
    }
    errorNode.textContent = message;
  }

  if (field) {
    field.setAttribute("aria-invalid", message ? "true" : "false");
  }
}

function validateField(name) {
  const field = form.elements[name];
  const rule = fieldRules[name];

  if (!field || !rule) {
    return true;
  }

  const isValid = rule.validate(field.value);
  setFieldError(name, isValid ? "" : rule.message);
  return isValid;
}

if (form && status) {
  Object.keys(fieldRules).forEach((name) => {
    const field = form.elements[name];
    if (field) {
      field.addEventListener("blur", () => validateField(name));
      field.addEventListener("input", () => {
        if (field.getAttribute("aria-invalid") === "true") {
          validateField(name);
        }
      });
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isValid = Object.keys(fieldRules).every((name) => validateField(name));

    if (!isValid) {
      status.textContent = "Please fix the highlighted fields and try again.";
      status.className = "form-status error";
      return;
    }

    const formData = new FormData(form);
    const requestSummary = Object.fromEntries(formData.entries());
    console.info("Placeholder form submission:", requestSummary);

    form.reset();
    Object.keys(fieldRules).forEach((name) => setFieldError(name, ""));
    status.textContent = "Thanks! I’ll review your request and get back to you within 24–48 hours.";
    status.className = "form-status success";
  });
}
