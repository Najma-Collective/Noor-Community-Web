import { createHero } from '../components/pageSections.js';
import { programmeHighlights, programmeOutcomes } from '../data/programmes.js';
import { renderProgrammeStories } from '../utils/storyBlocks.js';
import { applyHeroImage } from '../utils/heroImage.js';

export function initEAP(main) {
  document.title = 'Noor Community Programmes | English for Academic Purposes';
  const hero = createHero({
    title: programmeHighlights.eap.title,
    body: programmeHighlights.eap.description,
    actions: [
      { label: 'Apply for EAP', href: './join-students.html' },
      { label: 'Support the Scholarship Fund', href: './donate.html' }
    ]
  });
  main.append(hero);
  applyHeroImage(hero, programmeHighlights.eap.heroQuery);

  const outcomes = document.createElement('section');
  outcomes.classList.add('section');
  outcomes.innerHTML = `
    <header>
      <h2>Academic outcomes</h2>
      <p>Students build portfolio-ready artefacts and confidence to navigate admissions.</p>
    </header>
    <ul class="outcomes-list"></ul>
  `;
  const list = outcomes.querySelector('.outcomes-list');
  programmeOutcomes.eap.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    list.append(li);
  });
  main.append(outcomes);

  renderProgrammeStories(main, 'eap');
}
