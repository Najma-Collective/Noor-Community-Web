import { createHero, createCardGrid } from '../components/pageSections.js';
import { renderStoriesByType } from '../utils/storyBlocks.js';
import { applyHeroImage } from '../utils/heroImage.js';

export function initAboutPartners(main) {
  document.title = 'About Noor Community | Our Partners';
  const hero = createHero({
    title: 'Partnerships rooted in reciprocity',
    body: 'We collaborate with grassroots organisations, universities, and funders who share power with learners.'
  });
  main.append(hero);
  applyHeroImage(hero, 'community partnership handshake');

  const partnersSection = document.createElement('section');
  partnersSection.classList.add('section');
  partnersSection.innerHTML = `
    <header>
      <h2>Partnership ecosystem</h2>
      <p>We co-design learning hubs, scholarship pathways, and wellbeing support with trusted organisations.</p>
    </header>
  `;
  partnersSection.append(
    createCardGrid([
      {
        title: 'Zahra Foundation',
        description: 'Funds scholarships and co-facilitates entrepreneurship labs for women-led businesses.',
        link: './stories.html#partner-journey',
        linkLabel: 'Read the partner story'
      },
      {
        title: 'Global Classrooms Network',
        description: 'Provides curriculum exchange and micro-credential pathways with universities.'
      },
      {
        title: 'Community Tech Hubs',
        description: 'Local partners supply devices, connectivity, and safe spaces for hybrid learning.'
      }
    ])
  );
  main.append(partnersSection);

  const partnerCTA = document.createElement('section');
  partnerCTA.classList.add('section');
  partnerCTA.innerHTML = `
    <header>
      <h2>Partner with us</h2>
      <p>Let’s design new access points for learners and educators in your community.</p>
    </header>
    <md-filled-button href="mailto:partnerships@noorcommunity.org">Start a Conversation</md-filled-button>
  `;
  main.append(partnerCTA);

  renderStoriesByType(main, ['partner', 'impact'], {
    title: 'Partnership in action',
    description: 'See how collaboration accelerates learner outcomes and community trust.'
  });
}
