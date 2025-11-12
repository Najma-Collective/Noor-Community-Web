import '@material/web/chips/assist-chip.js';

export function createHero({ title, body, actions = [] }) {
  const section = document.createElement('section');
  section.classList.add('hero');
  section.innerHTML = `
    <div class="hero-content">
      <h1>${title}</h1>
      ${body ? `<p>${body}</p>` : ''}
      <div class="hero-actions"></div>
    </div>
  `;
  const actionContainer = section.querySelector('.hero-actions');
  actions.forEach((action) => {
    const button = document.createElement('md-filled-button');
    button.href = action.href;
    button.textContent = action.label;
    actionContainer.append(button);
  });
  return section;
}

export function createCardGrid(items) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('card-grid');
  items.forEach((item) => {
    const card = document.createElement('md-elevated-card');
    card.innerHTML = `
      <div class="card-content">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        ${item.link ? `<a class="story-link" href="${item.link}">${item.linkLabel ?? 'Learn more'}</a>` : ''}
      </div>
    `;
    wrapper.append(card);
  });
  return wrapper;
}

export function createStatBlocks(stats) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('stat-blocks');
  stats.forEach((stat) => {
    const block = document.createElement('div');
    block.classList.add('stat-block');
    block.innerHTML = `
      <h3>${stat.value}</h3>
      <p><strong>${stat.label}</strong></p>
      <p>${stat.description}</p>
    `;
    wrapper.append(block);
  });
  return wrapper;
}

export function createTestimonialSlider(testimonials) {
  const wrapper = document.createElement('section');
  wrapper.classList.add('section');
  wrapper.innerHTML = `
    <header>
      <h2>Voices from the Community</h2>
      <p>Stories from learners, volunteers, and partners around the world.</p>
    </header>
    <div class="card-grid"></div>
  `;

  const grid = wrapper.querySelector('.card-grid');
  testimonials.forEach((testimonial) => {
    const card = document.createElement('md-filled-card');
    card.innerHTML = `
      <div class="card-content">
        <p>“${testimonial.quote}”</p>
        <p><strong>${testimonial.name}</strong></p>
      </div>
    `;
    grid.append(card);
  });
  return wrapper;
}
