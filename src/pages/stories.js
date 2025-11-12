import { createHero } from '../components/pageSections.js';
import { stories } from '../data/stories.js';
import { initTabs } from '../utils/tabs.js';
import { applyHeroImage } from '../utils/heroImage.js';

const categories = [
  { id: 'student', label: 'Student Stories' },
  { id: 'volunteer', label: 'Volunteer Spotlights' },
  { id: 'impact', label: 'Impact Insights' }
];

function filterStories(type) {
  return stories.filter((story) => story.type === type);
}

export function initStories(main) {
  document.title = 'Stories | Noor Community';
  const hero = createHero({
    title: 'Stories that move people to act',
    body: 'Read how learners, volunteers, and partners turn language learning into opportunity.'
  });
  main.append(hero);
  applyHeroImage(hero, 'community storytelling session');

  const section = document.createElement('section');
  section.classList.add('section');
  section.setAttribute('data-tabs', '');
  section.innerHTML = `
    <header>
      <h2>Explore by theme</h2>
      <p>Use the tabs to discover narratives from across the community.</p>
    </header>
    <md-primary-tabs>
      ${categories.map((category) => `<md-primary-tab aria-controls="panel-${category.id}">${category.label}</md-primary-tab>`).join('')}
    </md-primary-tabs>
    <div class="tab-panels">
      ${categories
        .map(
          (category) => `
            <div data-tab-panel id="panel-${category.id}">
              <div class="story-grid" role="list">
                ${filterStories(category.id)
                  .map(
                    (story) => `
                      <md-elevated-card id="${story.id}" class="story-card">
                        <div class="card-content">
                          <h3>${story.title}</h3>
                          <p>${story.summary}</p>
                          <a class="story-link" href="${story.url}">Read more</a>
                        </div>
                      </md-elevated-card>
                    `
                  )
                  .join('')}
              </div>
            </div>
          `
        )
        .join('')}
    </div>
  `;
  main.append(section);
  initTabs(section);
}
