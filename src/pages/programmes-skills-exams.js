import { createHero } from '../components/pageSections.js';
import { programmeHighlights, programmeOutcomes } from '../data/programmes.js';
import { renderProgrammeStories } from '../utils/storyBlocks.js';
import { applyHeroImage } from '../utils/heroImage.js';

export function initSkillsExams(main) {
  document.title = 'Noor Community Programmes | Skills & Exam Preparation';
  const hero = createHero({
    title: programmeHighlights['skills-exams'].title,
    body: programmeHighlights['skills-exams'].description,
    actions: [
      { label: 'Join Exam Prep', href: './join-students.html' },
      { label: 'Fund Exam Fees', href: './donate.html' }
    ]
  });
  main.append(hero);
  applyHeroImage(hero, programmeHighlights['skills-exams'].heroQuery);

  const outcomes = document.createElement('section');
  outcomes.classList.add('section');
  outcomes.innerHTML = `
    <header>
      <h2>Exam success indicators</h2>
      <p>Adaptive coaching and mentorship drive measurable score gains.</p>
    </header>
    <ul class="outcomes-list"></ul>
  `;
  const list = outcomes.querySelector('.outcomes-list');
  programmeOutcomes['skills-exams'].forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    list.append(li);
  });
  main.append(outcomes);

  renderProgrammeStories(main, 'skills-exams');
}
