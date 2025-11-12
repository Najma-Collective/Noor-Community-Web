import { createHero } from '../components/pageSections.js';
import { renderStoriesByType } from '../utils/storyBlocks.js';
import { applyHeroImage } from '../utils/heroImage.js';

export function initDonate(main) {
  document.title = 'Donate to Noor Community';
  const hero = createHero({
    title: 'Fuel language access and leadership',
    body: 'Your support funds instruction, devices, wellbeing care, and storytelling that shifts narratives.',
    actions: [
      { label: 'Give monthly', href: 'https://donate.noorcommunity.org/monthly' },
      { label: 'Download financials', href: './financials.html' }
    ]
  });
  main.append(hero);
  applyHeroImage(hero, 'donor community impact');

  const givingSection = document.createElement('section');
  givingSection.classList.add('section');
  givingSection.innerHTML = `
    <header>
      <h2>Ways to give</h2>
      <p>Choose the support track that matches your vision.</p>
    </header>
    <div class="card-grid">
      <md-elevated-card>
        <div class="card-content">
          <h3>Monthly circle</h3>
          <p>Provide steady funding for mentor stipends, learner tech, and wellbeing support.</p>
          <a class="story-link" href="https://donate.noorcommunity.org/monthly">Join the circle</a>
        </div>
      </md-elevated-card>
      <md-elevated-card>
        <div class="card-content">
          <h3>Scholarship partners</h3>
          <p>Underwrite exam fees, tuition, and emergency grants for outstanding learners.</p>
          <a class="story-link" href="mailto:partnerships@noorcommunity.org">Partner with us</a>
        </div>
      </md-elevated-card>
      <md-elevated-card>
        <div class="card-content">
          <h3>Corporate giving</h3>
          <p>Engage your team through skilled volunteering, matching gifts, and pro bono storytelling.</p>
          <a class="story-link" href="mailto:hello@noorcommunity.org">Start a conversation</a>
        </div>
      </md-elevated-card>
    </div>
  `;
  main.append(givingSection);

  const trust = document.createElement('section');
  trust.classList.add('section');
  trust.innerHTML = `
    <header>
      <h2>How we steward your gift</h2>
      <p>Transparent reporting keeps you informed about outcomes and operations.</p>
    </header>
    <ul class="outcomes-list">
      <li>Quarterly dashboards outlining programme delivery, participation, and impact metrics.</li>
      <li>Annual audited financial statements and independent monitoring.</li>
      <li>Invitations to donor briefings led by learners and volunteers.</li>
    </ul>
  `;
  main.append(trust);

  renderStoriesByType(main, ['impact', 'student'], {
    title: 'Stories your gift sustains',
    description: 'Learner and impact narratives show how donations translate into outcomes.'
  });
}
