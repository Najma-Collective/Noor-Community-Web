import { createHero, createStatBlocks } from '../components/pageSections.js';
import { impactStats, theoryPillars, transparencyHighlights } from '../data/impact.js';
import { renderStoriesByType } from '../utils/storyBlocks.js';
import { applyHeroImage } from '../utils/heroImage.js';

export function initImpactOverview(main) {
  document.title = 'Our Impact | Noor Community';
  const hero = createHero({
    title: 'Impact & Theory of Change',
    body: 'We measure more than test scores. Our data honours learner agency and informs strategic decisions.'
  });
  main.append(hero);
  applyHeroImage(hero, 'impact presentation classroom');

  const statsSection = document.createElement('section');
  statsSection.classList.add('section');
  statsSection.innerHTML = `
    <header>
      <h2>Key indicators</h2>
      <p>We track participation, progression, and wellbeing across every cohort.</p>
    </header>
  `;
  statsSection.append(createStatBlocks(impactStats));
  main.append(statsSection);

  const theorySection = document.createElement('section');
  theorySection.classList.add('section');
  theorySection.innerHTML = `
    <header>
      <h2>Theory of change</h2>
      <p>Our approach links inputs to long-term community impact.</p>
    </header>
    <div class="card-grid"></div>
  `;
  const grid = theorySection.querySelector('.card-grid');
  theoryPillars.forEach((pillar) => {
    const card = document.createElement('md-filled-card');
    card.innerHTML = `
      <div class="card-content">
        <h3>${pillar.title}</h3>
        <p>${pillar.description}</p>
      </div>
    `;
    grid.append(card);
  });
  main.append(theorySection);

  const transparency = document.createElement('section');
  transparency.classList.add('section');
  transparency.innerHTML = `
    <header>
      <h2>Transparency practices</h2>
      <p>Stakeholders receive timely, honest reporting that blends data and narrative.</p>
    </header>
    <ul class="outcomes-list"></ul>
  `;
  const list = transparency.querySelector('.outcomes-list');
  transparencyHighlights.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    list.append(li);
  });
  main.append(transparency);

  renderStoriesByType(main, ['impact'], {
    title: 'Impact stories',
    description: 'Dive deeper into the stories behind our metrics.'
  });
}
