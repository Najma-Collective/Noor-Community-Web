import { createHero } from '../components/pageSections.js';
import { renderStoriesByType } from '../utils/storyBlocks.js';
import { applyHeroImage } from '../utils/heroImage.js';

export function initJoinVolunteers(main) {
  document.title = 'Join Noor Community | For Volunteers';
  const hero = createHero({
    title: 'Volunteer with Noor Community',
    body: 'Educators, interpreters, and industry mentors co-create powerful learning journeys for displaced students.',
    actions: [
      { label: 'Become a volunteer', href: 'https://airtable.com/noor-volunteer' },
      { label: 'Read volunteer stories', href: './stories.html#volunteer-spotlight' }
    ]
  });
  main.append(hero);
  applyHeroImage(hero, 'virtual classroom mentor');

  const expectations = document.createElement('section');
  expectations.classList.add('section');
  expectations.innerHTML = `
    <header>
      <h2>What volunteering involves</h2>
      <p>We set you up for success with training, coaching, and a global community of peers.</p>
    </header>
    <md-list>
      <md-list-item>Teach or coach 90-minute sessions once per week.</md-list-item>
      <md-list-item>Attend monthly community care circles and coaching workshops.</md-list-item>
      <md-list-item>Collaborate with a co-facilitator and alumni mentor for continuity.</md-list-item>
    </md-list>
  `;
  main.append(expectations);

  const support = document.createElement('section');
  support.classList.add('section');
  support.setAttribute('data-accordion', '');
  support.innerHTML = `
    <header>
      <h2>Volunteer support system</h2>
      <p>See how we accompany you from onboarding to ongoing mentorship.</p>
    </header>
    <div class="accordion">
      <div class="accordion-item">
        <button class="accordion-trigger" data-accordion-trigger>Training & onboarding</button>
        <div class="accordion-panel" data-accordion-panel>
          <p>Access asynchronous modules plus live workshops on trauma-informed practice, cultural humility, and facilitation.</p>
        </div>
      </div>
      <div class="accordion-item">
        <button class="accordion-trigger" data-accordion-trigger>Coaching & resources</button>
        <div class="accordion-panel" data-accordion-panel>
          <p>Receive ready-to-use lesson guides, classroom tech support, and personalised coaching sessions.</p>
        </div>
      </div>
      <div class="accordion-item">
        <button class="accordion-trigger" data-accordion-trigger>Community care</button>
        <div class="accordion-panel" data-accordion-panel>
          <p>Join peer debriefs, wellbeing circles, and storytelling workshops to sustain your practice.</p>
        </div>
      </div>
    </div>
  `;
  main.append(support);

  renderStoriesByType(main, ['volunteer'], {
    title: 'Volunteer spotlights',
    description: 'Meet the educators and mentors building classrooms with Noor Community.'
  });
}
