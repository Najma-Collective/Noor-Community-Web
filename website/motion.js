document.addEventListener('DOMContentLoaded', () => {
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const root = document.documentElement;
  let scrollObserver;

  const EXIT_ANIMATION_MS = 320;

  const configureMotionTargets = () => {
    const mappings = [
      { selector: '.md3-card', motion: 'fade-through', trigger: 'scroll' },
      { selector: '.card', motion: 'fade-through', trigger: 'scroll' },
      { selector: '.md3-grid__cell', motion: 'shared-axis-y', trigger: 'scroll' },
      { selector: '.featured-image:not(.page-hero__image)', motion: 'shared-axis-y', trigger: 'scroll' },
      { selector: '.page-hero', motion: 'shared-axis-y', trigger: 'load' },
      { selector: '.page-hero__content', motion: 'fade-through', trigger: 'load' }
    ];

    mappings.forEach(({ selector, motion, trigger }) => {
      document.querySelectorAll(selector).forEach((element) => {
        if (!element.dataset.motion) {
          element.dataset.motion = motion;
        }
        if (!element.dataset.motionTrigger) {
          element.dataset.motionTrigger = trigger;
        }
      });
    });

  };

  const disconnectObserver = () => {
    if (scrollObserver) {
      scrollObserver.disconnect();
      scrollObserver = undefined;
    }
  };

  const observeScrollTargets = () => {
    disconnectObserver();

    scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target;

        if (entry.isIntersecting) {
          target.classList.add('is-visible');
          target.classList.remove('is-exiting');
        } else if (target.classList.contains('is-visible')) {
          target.classList.remove('is-visible');
          target.classList.add('is-exiting');
          window.setTimeout(() => target.classList.remove('is-exiting'), EXIT_ANIMATION_MS);
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '0px 0px -10%'
    });

    document.querySelectorAll('[data-motion][data-motion-trigger="scroll"]').forEach((element) => {
      element.classList.remove('is-visible', 'is-exiting');
      scrollObserver.observe(element);
    });
  };

  const animateHero = () => {
    const heroElements = document.querySelectorAll('[data-motion-trigger="load"]');
    if (!heroElements.length) {
      return;
    }

    heroElements.forEach((element, index) => {
      element.classList.remove('is-visible', 'is-exiting');
      const delay = index * 80;
      window.setTimeout(() => {
        element.classList.add('is-visible');
      }, delay);
    });
  };

  const enableMotion = () => {
    configureMotionTargets();
    root.classList.add('motion-enabled');
    observeScrollTargets();
    animateHero();
  };

  const disableMotion = () => {
    root.classList.remove('motion-enabled');
    disconnectObserver();
  };

  const handlePreferenceChange = (event) => {
    if (event.matches) {
      disableMotion();
    } else {
      enableMotion();
    }
  };

  if (!motionQuery.matches) {
    enableMotion();
  }

  if (typeof motionQuery.addEventListener === 'function') {
    motionQuery.addEventListener('change', handlePreferenceChange);
  } else if (typeof motionQuery.addListener === 'function') {
    motionQuery.addListener(handlePreferenceChange);
  }
});
