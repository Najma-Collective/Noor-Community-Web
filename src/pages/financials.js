import { createHero, createCardGrid } from '../components/pageSections.js';
import { financials } from '../data/financials.js';
import { renderStoriesByType } from '../utils/storyBlocks.js';
import { applyHeroImage } from '../utils/heroImage.js';

export function initFinancials(main) {
  document.title = 'Financials & Transparency | Noor Community';
  const hero = createHero({
    title: 'Financials & Transparency',
    body: 'Stewardship, accountability, and community trust guide how we invest every donation.'
  });
  main.append(hero);
  applyHeroImage(hero, 'financial transparency nonprofit');

  const allocation = document.createElement('section');
  allocation.classList.add('section');
  allocation.innerHTML = `
    <header>
      <h2>Where your gift goes</h2>
      <p>Our budgeting prioritises direct programme delivery and educator support.</p>
    </header>
  `;
  allocation.append(createCardGrid(financials.highlights));
  main.append(allocation);

  const documents = document.createElement('section');
  documents.classList.add('section');
  documents.innerHTML = `
    <header>
      <h2>Key documents</h2>
      <p>Download the latest statements and policies.</p>
    </header>
    <md-list>
      ${financials.documents
        .map((doc) => `<md-list-item><a href="${doc.href}">${doc.label}</a></md-list-item>`)
        .join('')}
    </md-list>
  `;
  main.append(documents);

  renderStoriesByType(main, ['impact', 'partner'], {
    title: 'Transparency in action',
    description: 'See how impact data and partnerships reinforce trust.'
  });
}
