const initNavigation = () => {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav-links]');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  const currentPath = window.location.pathname.split('/').pop();
  nav.querySelectorAll('a').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.split('/').pop();
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });
};

const initAccordions = () => {
  document.querySelectorAll('[data-accordion] .accordion-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const panel = trigger.nextElementSibling;
      if (!panel) return;
      const open = panel.classList.contains('open');
      if (open) {
        panel.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        panel.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
};

const initTabs = () => {
  document.querySelectorAll('[data-tabset]').forEach((tabset) => {
    const buttons = Array.from(tabset.querySelectorAll('[role="tab"]'));
    const panels = Array.from(tabset.parentElement.querySelectorAll('[role="tabpanel"]'));

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        buttons.forEach((btn) => btn.setAttribute('aria-selected', 'false'));
        button.setAttribute('aria-selected', 'true');

        panels.forEach((panel) => {
          const active = panel.getAttribute('data-tab-panel') === button.dataset.tabTarget;
          panel.hidden = !active;
        });
      });
    });
  });
};

const initFadeIns = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
};

const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
};

window.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAccordions();
  initTabs();
  initFadeIns();
  initSmoothScroll();
});
