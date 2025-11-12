import { createHero } from '../components/pageSections.js';
import { faqs } from '../data/faq.js';
import { renderStoriesByType } from '../utils/storyBlocks.js';
import { applyHeroImage } from '../utils/heroImage.js';

export function initFAQ(main) {
  document.title = 'FAQ | Noor Community';
  const hero = createHero({
    title: 'Frequently Asked Questions',
    body: 'Find quick answers about eligibility, volunteering, and how we steward resources.'
  });
  main.append(hero);
  applyHeroImage(hero, 'faq discussion community');

  const faqSection = document.createElement('section');
  faqSection.classList.add('section');
  faqSection.setAttribute('data-accordion', '');
  faqSection.innerHTML = `
    <header>
      <h2>Questions & answers</h2>
      <p>Contact us anytime for more details—we respond within two business days.</p>
    </header>
    <div class="accordion"></div>
  `;
  const accordion = faqSection.querySelector('.accordion');
  faqs.forEach((item, index) => {
    const entry = document.createElement('div');
    entry.classList.add('accordion-item');
    entry.innerHTML = `
      <button class="accordion-trigger" data-accordion-trigger>${item.question}</button>
      <div class="accordion-panel" data-accordion-panel>
        <p>${item.answer}</p>
      </div>
    `;
    accordion.append(entry);
    if (index === 0) {
      entry.querySelector('[data-accordion-panel]').hidden = false;
      entry.querySelector('[data-accordion-trigger]').setAttribute('aria-expanded', 'true');
    }
  });
  main.append(faqSection);

  renderStoriesByType(main, ['student', 'volunteer'], {
    title: 'Still deciding?',
    description: 'Explore stories that answer the questions we hear most.'
  });
}
