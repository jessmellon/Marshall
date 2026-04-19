import { siteContent } from "./content.js";

function renderSectionHeader(label, title, intro) {
  return `
    <div class="section-header">
      <p class="section-label">${label}</p>
      <h2>${title}</h2>
      ${intro ? `<p class="section-intro">${intro}</p>` : ""}
    </div>
  `;
}

export function renderServices() {
  return `
    <section class="content-section" id="services">
      <div class="container">
        ${renderSectionHeader(
          "Services",
          "Support that helps you choose wisely before you buy.",
          "Whether you need a full plan or just a second opinion, the focus is clear recommendations that fit your goals."
        )}
        <div class="services-grid">
          ${siteContent.services
            .map(
              (service) => `
                <article class="service-card">
                  <div class="card-icon" aria-hidden="true">${service.icon}</div>
                  <h3>${service.title}</h3>
                  <p>${service.description}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function renderAbout() {
  return `
    <section class="content-section" id="about">
      <div class="container">
        ${renderSectionHeader(
          "About",
          "Personalized advice built around what you actually need.",
          siteContent.about.intro
        )}
        <div class="content-layout">
          <article class="content-card">
            <p>${siteContent.about.points[0]}</p>
            <p>${siteContent.about.points[1]}</p>
            <p>${siteContent.about.points[2]}</p>
          </article>
          <aside class="content-card">
            <h3>${siteContent.about.supportCardTitle}</h3>
            <p>${siteContent.about.supportCardText}</p>
          </aside>
        </div>
      </div>
    </section>
  `;
}

export function renderProcess() {
  return `
    <section class="content-section" id="process">
      <div class="container">
        ${renderSectionHeader(
          "Process",
          "A simple path from uncertainty to a confident plan.",
          "The goal is to keep the process straightforward so you can focus on making the right decision."
        )}
        <div class="process-grid">
          ${siteContent.process
            .map(
              (step, index) => `
                <article class="step-card">
                  <div class="step-number" aria-hidden="true">${index + 1}</div>
                  <h3>${step.title}</h3>
                  <p>${step.description}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function renderPricing() {
  return `
    <section class="content-section" id="pricing">
      <div class="container">
        ${renderSectionHeader(
          "Pricing",
          "Starter options that make it easy to get the right level of help.",
          "These prices are placeholders and can be updated later as the business evolves."
        )}
        <div class="pricing-grid">
          ${siteContent.pricing
            .map(
              (plan) => `
                <article class="pricing-card ${plan.featured ? "featured" : ""}">
                  <h3>${plan.title}</h3>
                  <p class="price">${plan.price}</p>
                  <p>${plan.description}</p>
                  <ul class="price-list">
                    ${plan.features.map((feature) => `<li>${feature}</li>`).join("")}
                  </ul>
                </article>
              `
            )
            .join("")}
        </div>
        <p class="local-note">
          <strong>Note:</strong> Local hands-on help may be available by request depending on location and scheduling.
        </p>
      </div>
    </section>
  `;
}

export function renderFaq() {
  return `
    <section class="content-section" id="faq">
      <div class="container">
        ${renderSectionHeader(
          "FAQ",
          "Clear answers before you get started.",
          "A few common questions from first-time builders, families, and people comparing upgrade options."
        )}
        <div class="faq-grid">
          ${siteContent.faqs
            .map(
              (item) => `
                <article class="faq-item">
                  <h3>${item.question}</h3>
                  <p>${item.answer}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function renderContact() {
  return `
    <section class="content-section" id="contact">
      <div class="container">
        ${renderSectionHeader(
          "Contact",
          "Tell me what you want to build, upgrade, or figure out.",
          "Use the form below to share your goals. This demo form includes front-end validation and a placeholder success state."
        )}
        <div class="contact-shell">
          <div class="contact-grid">
            <form class="contact-form" id="contact-form" novalidate>
              <div class="field-group">
                <label for="name">Name</label>
                <input id="name" name="name" type="text" autocomplete="name" required />
                <p class="field-error" data-error-for="name" aria-live="polite"></p>
              </div>
              <div class="field-group">
                <label for="email">Email</label>
                <input id="email" name="email" type="email" autocomplete="email" required />
                <p class="field-error" data-error-for="email" aria-live="polite"></p>
              </div>
              <div class="field-group">
                <label for="budget">Budget</label>
                <input
                  id="budget"
                  name="budget"
                  type="text"
                  placeholder="Example: $800 to $1,200"
                  required
                />
                <p class="field-error" data-error-for="budget" aria-live="polite"></p>
              </div>
              <div class="field-group">
                <label for="intended-use">Intended use</label>
                <select id="intended-use" name="intendedUse" required>
                  <option value="">Select one</option>
                  <option>Gaming</option>
                  <option>School / Homework</option>
                  <option>Home / Family Use</option>
                  <option>Work / Productivity</option>
                  <option>Upgrade / Troubleshooting</option>
                </select>
                <p class="field-error" data-error-for="intendedUse" aria-live="polite"></p>
              </div>
              <div class="field-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Share what you need help with, any parts you already own, and your timeline."
                  required
                ></textarea>
                <p class="field-error" data-error-for="message" aria-live="polite"></p>
              </div>
              <p class="help-text">A real backend or email form service can be connected later.</p>
              <div class="contact-actions">
                <button class="button button-primary" type="submit">Send Request</button>
              </div>
              <p class="form-status" id="form-status" aria-live="polite"></p>
            </form>

            <div class="contact-side">
              <aside class="contact-panel">
                <h3>What to include</h3>
                <ul class="contact-list">
                  <li>Your budget range</li>
                  <li>What the computer will be used for</li>
                  <li>Whether you are starting from scratch or upgrading</li>
                </ul>
              </aside>
              <aside class="contact-panel">
                <h3>Future social links</h3>
                <ul class="social-placeholder">
                  <li>Instagram link placeholder</li>
                  <li>Facebook link placeholder</li>
                  <li>Discord or YouTube placeholder</li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
