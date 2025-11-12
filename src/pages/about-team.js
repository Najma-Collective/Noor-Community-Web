import { createHero } from '../components/pageSections.js';
import { renderStoriesByType } from '../utils/storyBlocks.js';
import { applyHeroImage } from '../utils/heroImage.js';

const teamMembers = [
  {
    name: 'Sara Al-Hassan',
    role: 'Executive Director',
    bio: 'Former EAP lecturer who co-founded Noor Community to bridge access gaps for displaced scholars.'
  },
  {
    name: 'Omar Rahman',
    role: 'Director of Programmes',
    bio: 'Leads curriculum design, ensuring every module aligns with trauma-informed pedagogy.'
  },
  {
    name: 'Nadia Suleiman',
    role: 'Head of Impact & Data',
    bio: 'Designs dashboards and facilitates learning reviews with donors, partners, and alumni.'
  },
  {
    name: 'David Chen',
    role: 'Volunteer Network Lead',
    bio: 'Supports 120+ educators through onboarding, coaching, and community care circles.'
  }
];

export function initAboutTeam(main) {
  document.title = 'About Noor Community | Our Team';
  const hero = createHero({
    title: 'A distributed team with lived experience',
    body: 'Our leadership includes former learners, refugee advocates, and educators who craft programmes with empathy and rigour.'
  });
  main.append(hero);
  applyHeroImage(hero, 'diverse team meeting');

  const teamSection = document.createElement('section');
  teamSection.classList.add('section');
  teamSection.innerHTML = `
    <header>
      <h2>Leadership & Staff</h2>
      <p>Meet the people guiding our programmes, partnerships, and storytelling.</p>
    </header>
    <div class="card-grid"></div>
  `;
  const grid = teamSection.querySelector('.card-grid');
  teamMembers.forEach((member) => {
    const card = document.createElement('md-elevated-card');
    card.innerHTML = `
      <div class="card-content">
        <h3>${member.name}</h3>
        <p><strong>${member.role}</strong></p>
        <p>${member.bio}</p>
      </div>
    `;
    grid.append(card);
  });
  main.append(teamSection);

  const advisory = document.createElement('section');
  advisory.classList.add('section');
  advisory.innerHTML = `
    <header>
      <h2>Alumni advisory council</h2>
      <p>Graduates guide decision making and co-lead new programme pilots.</p>
    </header>
    <md-list>
      <md-list-item>Layla | Co-designs mental health first aid for educators</md-list-item>
      <md-list-item>Issa | Leads policy advocacy labs in partnership with NGOs</md-list-item>
      <md-list-item>Maryam | Hosts storytelling residencies and podcast series</md-list-item>
    </md-list>
  `;
  main.append(advisory);

  renderStoriesByType(main, ['volunteer', 'student'], {
    title: 'Faces behind the mission',
    description: 'Discover volunteer spotlights and learner stories connected to our team members.'
  });
}
