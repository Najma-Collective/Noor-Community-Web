import { createHero, createCardGrid } from '../components/pageSections.js';
import { programmeHighlights, programmeCTAs } from '../data/programmes.js';
import { renderStoriesByType } from '../utils/storyBlocks.js';
import { applyHeroImage } from '../utils/heroImage.js';

export function initProgrammesOverview(main) {
  document.title = 'Noor Community Programmes | Overview';
  const hero = createHero({
    title: programmeHighlights.overview.title,
    body: programmeHighlights.overview.description,
    actions: programmeCTAs
  });
  main.append(hero);
  applyHeroImage(hero, programmeHighlights.overview.heroQuery);

  const pathways = document.createElement('section');
  pathways.classList.add('section');
  pathways.innerHTML = `
    <header>
      <h2>Three core pathways</h2>
      <p>All pathways combine live instruction, asynchronous labs, wellbeing coaching, and storytelling.</p>
    </header>
  `;
  pathways.append(
    createCardGrid([
      {
        title: programmeHighlights['general-business'].title,
        description: programmeHighlights['general-business'].description,
        link: './programmes-general-business.html'
      },
      {
        title: programmeHighlights.eap.title,
        description: programmeHighlights.eap.description,
        link: './programmes-eap.html'
      },
      {
        title: programmeHighlights['skills-exams'].title,
        description: programmeHighlights['skills-exams'].description,
        link: './programmes-skills-exams.html'
      }
    ])
  );
  main.append(pathways);

  const support = document.createElement('section');
  support.classList.add('section');
  support.innerHTML = `
    <header>
      <h2>Wraparound support</h2>
      <p>Beyond language instruction, we deliver the tools and relationships to stay engaged.</p>
    </header>
    <md-list>
      <md-list-item>Care teams with social workers and alumni mentors.</md-list-item>
      <md-list-item>Device lending libraries and micro-grants for connectivity.</md-list-item>
      <md-list-item>Career and scholarship coaching tailored to learner goals.</md-list-item>
    </md-list>
  `;
  main.append(support);

  renderStoriesByType(main, ['student'], {
    title: 'Programme stories',
    description: 'Learner voices illustrate outcomes from each pathway.'
  });
}
