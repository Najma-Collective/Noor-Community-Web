import { createHero } from '../components/pageSections.js';
import { stories } from '../data/stories.js';
import { applyHeroImage } from '../utils/heroImage.js';

export function initImpactStories(main) {
  document.title = 'Impact Stories | Noor Community';
  const hero = createHero({
    title: 'Stories that make data human',
    body: 'Learners, volunteers, and partners share milestones that bring our metrics to life.'
  });
  main.append(hero);
  applyHeroImage(hero, 'student success story');

  const section = document.createElement('section');
  section.classList.add('section');
  section.innerHTML = `
    <header>
      <h2>Story library</h2>
      <p>Browse narratives connected to programmes, impact, and volunteering.</p>
    </header>
    <div class="story-grid" role="list"></div>
  `;
  const grid = section.querySelector('.story-grid');
  stories.forEach((story) => {
    const card = document.createElement('md-elevated-card');
    card.id = story.id;
    card.classList.add('story-card');
    card.innerHTML = `
      <div class="card-content">
        <h3>${story.title}</h3>
        <p>${story.summary}</p>
        <a class="story-link" href="${story.url}">Read more</a>
      </div>
    `;
    grid.append(card);
  });
  main.append(section);
}
