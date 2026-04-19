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
          "Services designed to turn PC uncertainty into confident decisions.",
          "Whether you need a complete recommendation or a sharp second opinion, the focus stays on clear guidance, sensible value, and parts that make sense together."
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
          "A simple process, handled with much more care than a generic parts list.",
          "The workflow is intentionally straightforward so you can make a good decision quickly, without losing the benefit of personalized guidance."
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
          "Straightforward options for how much guidance you want.",
          "Starter pricing is designed to feel approachable while still signaling thoughtful, personalized service rather than one-size-fits-all advice."
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
                  <p class="price-note">${plan.note}</p>
                  <a class="button ${plan.featured ? "button-primary" : "button-secondary"} pricing-button" href="#contact">
                    ${plan.featured ? "Reserve a Call" : "Start Here"}
                  </a>
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

export function renderTestimonials() {
  return `
    <section class="content-section" id="testimonials">
      <div class="container">
        ${renderSectionHeader(
          "Testimonials",
          "Social proof space, ready for real client wins.",
          "These are placeholder testimonials for launch prep. Swap them with real feedback as soon as the first few projects are complete."
        )}
        <div class="faq-grid testimonials-grid">
          ${siteContent.testimonials
            .map(
              (item) => `
                <article class="testimonial-card">
                  <p class="testimonial-quote">“${item.quote}”</p>
                  <p class="testimonial-name">${item.name}</p>
                  <p class="testimonial-role">${item.role}</p>
                </article>
              `
            )
            .join("")}
        </div>
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
          "Clear answers before you spend a dollar.",
          "A few of the most common questions from first-time builders, families, and buyers trying to avoid expensive mistakes."
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
          "Tell me what you need, and I’ll help you choose the right next step.",
          "Use the form below to share your goals, budget, and what stage you are in. The form includes front-end validation and a placeholder success state for launch prep."
        )}
        <div class="contact-shell">
          <div class="contact-grid">
            <form class="contact-form" id="contact-form" novalidate>
              <div class="field-group">
                <label for="name">Name</label>
                <input id="name" name="name" type="text" autocomplete="name" aria-describedby="name-error" required />
                <p id="name-error" class="field-error" data-error-for="name" aria-live="polite"></p>
              </div>
              <div class="field-group">
                <label for="email">Email</label>
                <input id="email" name="email" type="email" autocomplete="email" aria-describedby="email-error" required />
                <p id="email-error" class="field-error" data-error-for="email" aria-live="polite"></p>
              </div>
              <div class="field-group">
                <label for="budget">Budget</label>
                <input
                  id="budget"
                  name="budget"
                  type="text"
                  placeholder="Example: $800 to $1,200"
                  aria-describedby="budget-error"
                  required
                />
                <p id="budget-error" class="field-error" data-error-for="budget" aria-live="polite"></p>
              </div>
              <div class="field-group">
                <label for="intended-use">Intended use</label>
                <select id="intended-use" name="intendedUse" aria-describedby="intendedUse-error" required>
                  <option value="">Select one</option>
                  <option>Gaming</option>
                  <option>School / Homework</option>
                  <option>Home / Family Use</option>
                  <option>Work / Productivity</option>
                  <option>Upgrade / Troubleshooting</option>
                </select>
                <p id="intendedUse-error" class="field-error" data-error-for="intendedUse" aria-live="polite"></p>
              </div>
              <div class="field-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Share what you need help with, any parts you already own, and your timeline."
                  aria-describedby="message-error"
                  required
                ></textarea>
                <p id="message-error" class="field-error" data-error-for="message" aria-live="polite"></p>
              </div>
              <p class="help-text">A real backend or email form service can be connected when the site goes live.</p>
              <div class="contact-actions">
                <button class="button button-primary" type="submit">Send Request</button>
              </div>
              <p class="form-status" id="form-status" aria-live="polite"></p>
            </form>

            <div class="contact-side">
              <aside class="contact-panel">
                <h3>What helps most</h3>
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
