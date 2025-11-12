import { createHero } from '../components/pageSections.js';
import { programmeHighlights, programmeOutcomes } from '../data/programmes.js';
import { renderProgrammeStories } from '../utils/storyBlocks.js';
import { applyHeroImage } from '../utils/heroImage.js';

export function initGeneralBusiness(main) {
  document.title = 'Noor Community Programmes | General & Business English';
  const hero = createHero({
    title: programmeHighlights['general-business'].title,
    body: programmeHighlights['general-business'].description,
    actions: [
      { label: 'Apply as a Student', href: './join-students.html' },
      { label: 'Read a Learner Story', href: './stories.html#amira-progress' }
    ]
  });
  main.append(hero);
  applyHeroImage(hero, programmeHighlights['general-business'].heroQuery);

  const outcomes = document.createElement('section');
  outcomes.classList.add('section');
  outcomes.innerHTML = `
    <header>
      <h2>What learners gain</h2>
      <p>Career-ready communication and leadership skills rooted in learner goals.</p>
    </header>
    <ul class="outcomes-list"></ul>
  `;
  const list = outcomes.querySelector('.outcomes-list');
  programmeOutcomes['general-business'].forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    list.append(li);
  });
  main.append(outcomes);

  renderProgrammeStories(main, 'general-business');
}
