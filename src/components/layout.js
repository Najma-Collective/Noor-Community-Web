import './md-top-app-bar.js';
import '@material/web/button/filled-button.js';

const primaryNav = [
  { label: 'Home', href: './index.html', id: 'home' },
  { label: 'About Us', href: './about-story.html', id: 'about' },
  { label: 'Our Programmes', href: './programmes-overview.html', id: 'programmes' },
  { label: 'Our Impact', href: './impact-overview.html', id: 'impact' },
  { label: 'Stories', href: './stories.html', id: 'stories' },
  { label: 'Join Us', href: './join-students.html', id: 'join' }
];

const utilityNav = [
  { label: 'Contact Us', href: '#footer-contact' },
  { label: 'FAQ', href: './faq.html' },
  { label: 'Financials', href: './financials.html' }
];

const footerColumns = [
  {
    title: 'Mission',
    links: [
      {
        label: 'Language unlocks agency for refugees and newcomers worldwide.',
        href: './about-story.html'
      }
    ]
  },
  {
    title: 'Explore',
    links: [
      { label: 'About Us', href: './about-story.html' },
      { label: 'Our Programmes', href: './programmes-overview.html' },
      { label: 'Our Impact', href: './impact-overview.html' }
    ]
  },
  {
    title: 'Act',
    links: [
      { label: 'Apply', href: './join-students.html' },
      { label: 'Volunteer', href: './join-volunteers.html' },
      { label: 'Contact Us', href: '#footer-contact' }
    ]
  },
  {
    title: 'Trust',
    links: [
      { label: 'FAQ', href: './faq.html' },
      { label: 'Financials & Transparency', href: './financials.html' },
      { label: 'Follow on Instagram', href: 'https://instagram.com', external: true }
    ]
  }
];

function createNavList(items, activeId) {
  const list = document.createElement('ul');
  list.classList.add('nav-list');
  items.forEach((item) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.label;
    link.classList.add('nav-link');
    if (activeId && item.id === activeId) {
      link.setAttribute('aria-current', 'page');
    }
    if (item.external) {
      link.target = '_blank';
      link.rel = 'noreferrer noopener';
    }
    listItem.append(link);
    list.append(listItem);
  });
  return list;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('site-footer');

  const grid = document.createElement('div');
  grid.classList.add('footer-grid');

  footerColumns.forEach((column) => {
    const section = document.createElement('section');
    section.innerHTML = `
      <h3>${column.title}</h3>
      <ul class="footer-links"></ul>
    `;
    const list = section.querySelector('ul');
    column.links.forEach((linkItem) => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = linkItem.href;
      link.textContent = linkItem.label;
      if (linkItem.external) {
        link.target = '_blank';
        link.rel = 'noreferrer noopener';
      }
      li.append(link);
      list.append(li);
    });
    grid.append(section);
  });

  footer.append(grid);

  const contactBlock = document.createElement('div');
  contactBlock.classList.add('footer-contact');
  contactBlock.id = 'footer-contact';
  contactBlock.innerHTML = `
    <p><strong>Email</strong> hello@noorcommunity.org</p>
    <p><strong>WhatsApp</strong> +44 0000 000000</p>
  `;
  footer.append(contactBlock);

  const subFooter = document.createElement('div');
  subFooter.classList.add('sub-footer');
  subFooter.innerHTML = `
    <p>© ${new Date().getFullYear()} Noor Community. Privacy Policy.</p>
  `;
  footer.append(subFooter);

  return footer;
}

export function renderLayout({ activeId = 'home', headline = 'Noor Community' } = {}) {
  document.body.innerHTML = '';
  document.body.classList.add('noor-shell');

  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.classList.add('skip-link');
  skipLink.textContent = 'Skip to main content';

  const header = document.createElement('header');
  header.classList.add('site-header');

  const utilityBar = document.createElement('div');
  utilityBar.classList.add('utility-nav');
  utilityBar.append(createNavList(utilityNav));

  const appBar = document.createElement('md-top-app-bar');
  appBar.classList.add('primary-app-bar');
  appBar.innerHTML = `
    <a slot="navigation-icon" class="brand" href="./index.html" aria-label="Noor Community home">
      Noor Community
    </a>
    <div slot="headline" class="headline">${headline}</div>
    <nav slot="action-items" class="primary-nav"></nav>
    <md-filled-button slot="action-items" class="donate" href="./donate.html">Donate</md-filled-button>
  `;

  const nav = createNavList(primaryNav, activeId);
  nav.setAttribute('role', 'menubar');
  appBar.querySelector('.primary-nav').append(nav);

  header.append(utilityBar, appBar);

  const main = document.createElement('main');
  main.id = 'main-content';
  main.tabIndex = -1;

  const footer = createFooter();

  document.body.append(skipLink, header, main, footer);

  return { main, header, footer };
}
