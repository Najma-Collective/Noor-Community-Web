import { getStoriesByProgramme, getStoriesByTypes } from '../data/stories.js';

function createStoryCard(story) {
  const card = document.createElement('md-elevated-card');
  card.classList.add('story-card');
  card.innerHTML = `
    <div class="card-content">
      <h3>${story.title}</h3>
      <p>${story.summary}</p>
      <a href="${story.url}" class="story-link" aria-label="Read ${story.title}">
        Read the story
      </a>
    </div>
  `;
  return card;
}

export function renderProgrammeStories(container, programmeKey, limit = 2) {
  const stories = getStoriesByProgramme(programmeKey).slice(0, limit);
  if (!stories.length) return;

  const section = document.createElement('section');
  section.classList.add('related-stories');
  section.innerHTML = `
    <header>
      <h2>Related Stories</h2>
      <p>See how community members experience this programme.</p>
    </header>
    <div class="story-grid" role="list"></div>
  `;

  const grid = section.querySelector('.story-grid');
  stories.forEach((story) => {
    grid.append(createStoryCard(story));
  });

  container.append(section);
}

export function renderStoriesByType(container, types, options = {}) {
  const stories = getStoriesByTypes(types);
  if (!stories.length) return;

  const { title = 'More Stories', description = '' } = options;

  const section = document.createElement('section');
  section.classList.add('related-stories');
  section.innerHTML = `
    <header>
      <h2>${title}</h2>
      ${description ? `<p>${description}</p>` : ''}
    </header>
    <div class="story-grid" role="list"></div>
  `;

  const grid = section.querySelector('.story-grid');
  stories.forEach((story) => {
    grid.append(createStoryCard(story));
  });

  container.append(section);
}
