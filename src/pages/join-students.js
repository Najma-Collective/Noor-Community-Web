import { createHero } from '../components/pageSections.js';
import { renderStoriesByType } from '../utils/storyBlocks.js';
import { applyHeroImage } from '../utils/heroImage.js';

export function initJoinStudents(main) {
  document.title = 'Join Noor Community | For Students';
  const hero = createHero({
    title: 'Apply as a Noor Community learner',
    body: 'We welcome refugees and newcomers aged 16+ who are committed to advancing education, careers, and community leadership.',
    actions: [
      { label: 'Start your application', href: 'https://airtable.com/apply-noor-community' }
    ]
  });
  main.append(hero);
  applyHeroImage(hero, 'students celebrating success');

  const eligibility = document.createElement('section');
  eligibility.classList.add('section');
  eligibility.innerHTML = `
    <header>
      <h2>Eligibility snapshot</h2>
      <p>Use this checklist to confirm Noor Community is the right fit.</p>
    </header>
    <md-list>
      <md-list-item>Residing in or recently relocated from displacement contexts.</md-list-item>
      <md-list-item>Commitment to 6–8 hours per week for live and independent study.</md-list-item>
      <md-list-item>Access to a device (loaners available) and reliable internet (support offered).</md-list-item>
    </md-list>
  `;
  main.append(eligibility);

  const process = document.createElement('section');
  process.classList.add('section');
  process.setAttribute('data-accordion', '');
  process.innerHTML = `
    <header>
      <h2>Application process</h2>
      <p>Follow these steps—we will guide you from form submission to orientation.</p>
    </header>
    <div class="accordion">
      <div class="accordion-item">
        <button class="accordion-trigger" data-accordion-trigger>Step 1 — Share your goals</button>
        <div class="accordion-panel" data-accordion-panel>
          <p>Complete the short interest form describing your education or career goals. A member of our team will respond within five days.</p>
        </div>
      </div>
      <div class="accordion-item">
        <button class="accordion-trigger" data-accordion-trigger>Step 2 — Language snapshot</button>
        <div class="accordion-panel" data-accordion-panel>
          <p>Take a collaborative language check so we can tailor your pathway. We celebrate multilingual skills—this is not a pass/fail test.</p>
        </div>
      </div>
      <div class="accordion-item">
        <button class="accordion-trigger" data-accordion-trigger>Step 3 — Orientation & onboarding</button>
        <div class="accordion-panel" data-accordion-panel>
          <p>Join a virtual orientation to meet your mentors, review wellbeing resources, and receive tech setup support.</p>
        </div>
      </div>
    </div>
  `;
  main.append(process);

  renderStoriesByType(main, ['student'], {
    title: 'Learner journeys',
    description: 'Discover how applicants grow into mentors and advocates.'
  });
}
