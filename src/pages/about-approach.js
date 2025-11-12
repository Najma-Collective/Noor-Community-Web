import { createHero, createCardGrid } from '../components/pageSections.js';
import { renderStoriesByType } from '../utils/storyBlocks.js';
import { applyHeroImage } from '../utils/heroImage.js';

export function initAboutApproach(main) {
  document.title = 'About Noor Community | Our Approach';
  const hero = createHero({
    title: 'The Noor Pedagogy blends care with rigour',
    body: 'We align trauma-informed practice, multilingual pride, and real-world projects to build English fluency that sticks.'
  });
  main.append(hero);
  applyHeroImage(hero, 'language class collaboration');

  const pillars = createCardGrid([
    {
      title: 'Trauma-informed facilitation',
      description: 'Educators receive coaching on psychological safety, restorative feedback, and wellbeing check-ins.'
    },
    {
      title: 'Multilingual affirmation',
      description: 'Learners leverage native languages as assets, co-creating glossaries and interpreting key texts.'
    },
    {
      title: 'Project-based outcomes',
      description: 'Each cohort delivers community impact artefacts—from pitch decks to policy briefs—that demonstrate mastery.'
    }
  ]);
  const pillarsSection = document.createElement('section');
  pillarsSection.classList.add('section');
  pillarsSection.innerHTML = `
    <header>
      <h2>Pillars of the Noor Pedagogy</h2>
      <p>Our approach was co-designed with learners and backed by international language specialists.</p>
    </header>
  `;
  pillarsSection.append(pillars);
  main.append(pillarsSection);

  const learningCycle = document.createElement('section');
  learningCycle.classList.add('section');
  learningCycle.innerHTML = `
    <header>
      <h2>The learning cycle</h2>
      <p>Every module follows a rhythm that balances input, practice, feedback, and reflection.</p>
    </header>
    <ol class="learning-cycle">
      <li><strong>Discover:</strong> Learners investigate authentic texts and community issues.</li>
      <li><strong>Practice:</strong> Small-group labs reinforce speaking, writing, and listening strategies.</li>
      <li><strong>Co-create:</strong> Teams build artefacts with mentors—presentations, essays, campaigns.</li>
      <li><strong>Reflect:</strong> Structured reflections and data dashboards inform the next sprint.</li>
    </ol>
  `;
  main.append(learningCycle);

  renderStoriesByType(main, ['student'], {
    title: 'Learners living the pedagogy',
    description: 'Stories showcase how trauma-informed practice results in confident communicators.'
  });
}
