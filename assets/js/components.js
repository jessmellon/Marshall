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
          "Practical services that help you avoid wasting money on the wrong parts.",
          "Choose the level of help you need, from a custom build plan to live guidance and troubleshooting support."
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
          "A simpler, smarter way to plan your PC.",
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
          "A clear process that keeps the whole decision simple.",
          "Stop guessing and get it right the first time with a plan that is built around your goals, not a generic template."
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
          "Straightforward pricing for personalized help.",
          "Pick the level of support that fits where you are, from a custom plan to full guidance."
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
                    ${plan.featured ? "Book a Consultation" : "Get My Plan"}
                  </a>
                </article>
              `
            )
            .join("")}
        </div>
        <p class="local-note">
          <strong>Note:</strong> Local hands-on build assistance may be available upon request.
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
          "Early social proof placeholders for launch.",
          "Replace these as soon as the first real client feedback comes in."
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
          "Answers for first-time builders and careful buyers.",
          "A few quick answers to common questions before you get started."
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
          "Let’s Build Your PC the Right Way",
          "Tell me a little about what you’re looking for and I’ll take it from there."
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
                <label for="intended-use">What will you use this PC for?</label>
                <select id="intended-use" name="intendedUse" aria-describedby="intendedUse-error" required>
                  <option value="">Select one</option>
                  <option>Gaming</option>
                  <option>Work</option>
                  <option>Streaming</option>
                  <option>General use</option>
                  <option>School</option>
                </select>
                <p id="intendedUse-error" class="field-error" data-error-for="intendedUse" aria-live="polite"></p>
              </div>
              <div class="field-group">
                <label for="timeline">Timeline</label>
                <select id="timeline" name="timeline" aria-describedby="timeline-error" required>
                  <option value="">Select one</option>
                  <option>ASAP</option>
                  <option>1-2 weeks</option>
                  <option>Just exploring</option>
                </select>
                <p id="timeline-error" class="field-error" data-error-for="timeline" aria-live="polite"></p>
              </div>
              <div class="field-group">
                <label for="help-type">What do you need help with?</label>
                <select id="help-type" name="helpType" aria-describedby="helpType-error" required>
                  <option value="">Select one</option>
                  <option>Build plan</option>
                  <option>Consultation</option>
                  <option>Troubleshooting</option>
                </select>
                <p id="helpType-error" class="field-error" data-error-for="helpType" aria-live="polite"></p>
              </div>
              <div class="field-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Share your goals, any parts you already picked, and anything else I should know."
                  aria-describedby="message-error"
                  required
                ></textarea>
                <p id="message-error" class="field-error" data-error-for="message" aria-live="polite"></p>
              </div>
              <p class="help-text">Built specifically for your needs. Clear, honest recommendations with no upselling.</p>
              <div class="contact-actions">
                <button class="button button-primary" type="submit">Get My Plan</button>
              </div>
              <p class="form-status" id="form-status" aria-live="polite"></p>
            </form>

            <div class="contact-side">
              <aside class="contact-panel">
                <h3>What helps most</h3>
                <ul class="contact-list">
                  <li>Your budget range</li>
                  <li>What you want the PC to do</li>
                  <li>Whether you need a build plan, consultation, or troubleshooting</li>
                </ul>
              </aside>
              <aside class="contact-panel">
                <h3>Why clients choose this</h3>
                <ul class="social-placeholder">
                  <li>Stop guessing and get it right the first time</li>
                  <li>Avoid wasting money on the wrong parts</li>
                  <li>Clear, honest recommendations with no upselling</li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
