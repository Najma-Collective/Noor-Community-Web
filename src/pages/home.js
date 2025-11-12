import { createHero, createCardGrid, createStatBlocks, createTestimonialSlider } from '../components/pageSections.js';
import { programmeHighlights, programmeCTAs } from '../data/programmes.js';
import { impactStats } from '../data/impact.js';
import { getFeaturedStories } from '../data/stories.js';
import { testimonials } from '../data/testimonials.js';
import { renderStoriesByType } from '../utils/storyBlocks.js';
import { applyHeroImage } from '../utils/heroImage.js';

export function initHome(main) {
  document.title = 'Noor Community | Home';

  const hero = createHero({
    title: 'Where displaced learners grow agency through language',
    body: 'Noor Community connects refugees, migrants, and volunteers to transformative English programmes, wraparound mentorship, and storytelling that moves decision makers to act.',
    actions: programmeCTAs
  });
  main.append(hero);
  applyHeroImage(hero, programmeHighlights.overview.heroQuery);

  const programmesSection = document.createElement('section');
  programmesSection.classList.add('section');
  programmesSection.innerHTML = `
    <header>
      <h2>Programmes designed for real journeys</h2>
      <p>Every pathway blends trauma-informed pedagogy, career mentoring, and community accountability.</p>
    </header>
  `;
  programmesSection.append(
    createCardGrid([
      {
        title: programmeHighlights['general-business'].title,
        description: programmeHighlights['general-business'].description,
        link: './programmes-general-business.html',
        linkLabel: 'View General & Business English'
      },
      {
        title: programmeHighlights.eap.title,
        description: programmeHighlights.eap.description,
        link: './programmes-eap.html',
        linkLabel: 'View EAP'
      },
      {
        title: programmeHighlights['skills-exams'].title,
        description: programmeHighlights['skills-exams'].description,
        link: './programmes-skills-exams.html',
        linkLabel: 'View Skills & Exam Prep'
      }
    ])
  );
  main.append(programmesSection);

  const statsSection = document.createElement('section');
  statsSection.classList.add('section');
  statsSection.innerHTML = `
    <header>
      <h2>Impact that pairs data with dignity</h2>
      <p>We publish the metrics that donors need while centring the agency of our learners.</p>
    </header>
  `;
  statsSection.append(createStatBlocks(impactStats));
  main.append(statsSection);

  const journeys = document.createElement('section');
  journeys.classList.add('section');
  journeys.setAttribute('data-tabs', '');
  journeys.innerHTML = `
    <header>
      <h2>Choose your Noor Community journey</h2>
      <p>Three clear pathways support applications, volunteering, and donor engagement.</p>
    </header>
    <md-primary-tabs>
      <md-primary-tab aria-controls="tab-students">For Students</md-primary-tab>
      <md-primary-tab aria-controls="tab-volunteers">For Volunteers</md-primary-tab>
      <md-primary-tab aria-controls="tab-donors">For Donors</md-primary-tab>
    </md-primary-tabs>
    <div class="tab-panels">
      <div data-tab-panel id="tab-students">
        <p>Get tailored learning plans, peer accountability groups, and scholarship navigation support.</p>
        <md-filled-button href="./join-students.html">Apply Now</md-filled-button>
      </div>
      <div data-tab-panel id="tab-volunteers">
        <p>Coach learners across time zones with ready-made curriculum, coaching guides, and community care.</p>
        <md-filled-button href="./join-volunteers.html">Volunteer</md-filled-button>
      </div>
      <div data-tab-panel id="tab-donors">
        <p>Sustain programmes, fund devices, and underwrite exam fees with transparent reporting every quarter.</p>
        <md-filled-button href="./donate.html">Support the Work</md-filled-button>
      </div>
    </div>
  `;
  main.append(journeys);

  main.append(createTestimonialSlider(testimonials));

  const featured = document.createElement('section');
  featured.classList.add('section');
  featured.innerHTML = `
    <header>
      <h2>Latest stories from the community</h2>
      <p>Explore lived experiences across programmes, impact, and volunteering.</p>
    </header>
    <div class="story-grid" role="list"></div>
  `;
  const grid = featured.querySelector('.story-grid');
  getFeaturedStories(3).forEach((story) => {
    const card = document.createElement('md-elevated-card');
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
  main.append(featured);

  renderStoriesByType(main, ['student', 'volunteer'], {
    title: 'Related journeys',
    description: 'See how our programmes, impact, and volunteer network intersect.'
  });
}
