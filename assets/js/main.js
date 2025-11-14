// =====================================================================
// Noor Community — Premium Interactive Features
// Enhanced JavaScript with scroll animations and premium effects
// =====================================================================

// Navigation functionality with enhanced mobile support
const initNavigation = () => {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav-links]');
  if (!toggle || !nav) return;

  const firstNavLink = () => nav.querySelector('a');

  const setMenuState = (isOpen, { focusTarget } = {}) => {
    nav.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    nav.setAttribute('aria-hidden', String(!isOpen));

    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';

    if (focusTarget === 'menu' && isOpen) {
      firstNavLink()?.focus();
    }

    if (focusTarget === 'toggle' && !isOpen) {
      toggle.focus();
    }
  };

  setMenuState(false);

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.contains('open');
    setMenuState(!isOpen, { focusTarget: isOpen ? 'toggle' : 'menu' });
  });

  // Close menu when clicking nav links
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      setMenuState(false);
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (nav.classList.contains('open') && !nav.contains(event.target) && !toggle.contains(event.target)) {
      setMenuState(false, { focusTarget: 'toggle' });
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      setMenuState(false, { focusTarget: 'toggle' });
    }
  });

  // Set active page link
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

// Accessible carousel for team profiles
const initTeamCarousels = () => {
  const carousels = document.querySelectorAll('[data-carousel]');
  if (!carousels.length) return;

  const getGap = (track) => {
    const styles = window.getComputedStyle(track);
    const gapValue = parseFloat(styles.columnGap || styles.gap || '0');
    return Number.isNaN(gapValue) ? 0 : gapValue;
  };

  carousels.forEach((carousel) => {
    const track = carousel.querySelector('[data-carousel-track]');
    const prev = carousel.querySelector('[data-carousel-prev]');
    const next = carousel.querySelector('[data-carousel-next]');
    const status = carousel.querySelector('[data-carousel-status]');
    if (!track) return;

    const items = track.querySelectorAll('[data-carousel-item]');
    if (!items.length) return;

    const scrollByStep = (direction) => {
      const cardWidth = items[0].getBoundingClientRect().width;
      const step = cardWidth + getGap(track);
      track.scrollBy({
        left: step * direction,
        behavior: 'smooth'
      });
    };

    prev?.addEventListener('click', () => scrollByStep(-1));
    next?.addEventListener('click', () => scrollByStep(1));

    track.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollByStep(1);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollByStep(-1);
      }
    });

    const updateControls = () => {
      const maxScrollLeft = Math.max(track.scrollWidth - track.clientWidth, 0);
      const threshold = 8;
      if (prev) {
        prev.disabled = track.scrollLeft <= threshold;
      }
      if (next) {
        next.disabled = track.scrollLeft >= maxScrollLeft - threshold;
      }

      if (status) {
        const trackRect = track.getBoundingClientRect();
        let closestIndex = 0;
        let minDelta = Number.POSITIVE_INFINITY;
        items.forEach((item, index) => {
          const rect = item.getBoundingClientRect();
          const delta = Math.abs(rect.left - trackRect.left);
          if (delta < minDelta) {
            minDelta = delta;
            closestIndex = index;
          }
        });
        status.textContent = `${closestIndex + 1} / ${items.length}`;
      }
    };

    const debouncedUpdate = debounce(updateControls, 80);
    track.addEventListener('scroll', debouncedUpdate, { passive: true });
    window.addEventListener('resize', debouncedUpdate);

    updateControls();
  });
};

// Enhanced accordion functionality with smooth animations
const initAccordions = () => {
  document.querySelectorAll('[data-accordion] .accordion-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const panel = trigger.nextElementSibling;
      if (!panel) return;

      const open = panel.classList.contains('open');

      // Optional: Close other accordions in the same group
      const accordion = trigger.closest('[data-accordion]');
      if (accordion?.dataset.accordionSingle === 'true') {
        accordion.querySelectorAll('.accordion-panel.open').forEach((openPanel) => {
          if (openPanel !== panel) {
            openPanel.classList.remove('open');
            openPanel.previousElementSibling?.setAttribute('aria-expanded', 'false');
          }
        });
      }

      if (open) {
        panel.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        panel.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');

        // Smooth scroll to accordion if it's above viewport
        setTimeout(() => {
          const rect = trigger.getBoundingClientRect();
          if (rect.top < 100) {
            trigger.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }, 300);
      }
    });
  });
};

// Tab functionality with keyboard navigation
const initTabs = () => {
  document.querySelectorAll('[data-tabset]').forEach((tabset) => {
    const buttons = Array.from(tabset.querySelectorAll('[role="tab"]'));
    const panels = Array.from(tabset.parentElement.querySelectorAll('[role="tabpanel"]'));

    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        activateTab(button, buttons, panels);
      });

      // Keyboard navigation
      button.addEventListener('keydown', (event) => {
        let newIndex = index;
        if (event.key === 'ArrowRight') {
          newIndex = (index + 1) % buttons.length;
        } else if (event.key === 'ArrowLeft') {
          newIndex = (index - 1 + buttons.length) % buttons.length;
        } else if (event.key === 'Home') {
          newIndex = 0;
        } else if (event.key === 'End') {
          newIndex = buttons.length - 1;
        } else {
          return;
        }
        event.preventDefault();
        buttons[newIndex].focus();
        activateTab(buttons[newIndex], buttons, panels);
      });
    });
  });

  function activateTab(button, buttons, panels) {
    buttons.forEach((btn) => {
      btn.setAttribute('aria-selected', 'false');
      btn.tabIndex = -1;
    });
    button.setAttribute('aria-selected', 'true');
    button.tabIndex = 0;

    panels.forEach((panel) => {
      const active = panel.getAttribute('data-tab-panel') === button.dataset.tabTarget;
      panel.hidden = !active;
    });
  }
};

// Enhanced scroll animations with multiple animation types
const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');

        // Unobserve after animation to improve performance
        if (!entry.target.dataset.repeat) {
          observer.unobserve(entry.target);
        }
      } else if (entry.target.dataset.repeat) {
        // Re-trigger animation if repeat is enabled
        entry.target.classList.remove('is-visible');
      }
    });
  }, observerOptions);

  // Observe all scroll-animated elements
  const animatedElements = document.querySelectorAll('.fade-in, .scale-in, .slide-in-left, .slide-in-right, .stagger-children');
  animatedElements.forEach((el) => observer.observe(el));
};

// Smooth scroll for anchor links
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href').substring(1);
      if (!targetId) return;

      const target = document.getElementById(targetId);
      if (target) {
        event.preventDefault();

        // Calculate offset for sticky header
        const header = document.querySelector('.site-header');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update URL without jumping
        if (history.pushState) {
          history.pushState(null, null, `#${targetId}`);
        }
      }
    });
  });
};

// Scroll progress indicator
const initScrollProgress = () => {
  // Create progress bar element if it doesn't exist
  let progressBar = document.querySelector('.scroll-progress');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.setAttribute('aria-hidden', 'true');
    document.body.appendChild(progressBar);
  }

  const updateProgress = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

    progressBar.style.transform = `scaleX(${Math.min(scrollPercent / 100, 1)})`;
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
};

// Enhanced header behavior on scroll
const initScrollHeader = () => {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScroll = 0;
  let ticking = false;

  const updateHeader = () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Optional: Hide header on scroll down, show on scroll up
    if (currentScroll > lastScroll && currentScroll > 200) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestTick, { passive: true });
};

// Parallax effect for hero backgrounds
const initParallax = () => {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  if (parallaxElements.length === 0) return;

  let ticking = false;

  const updateParallax = () => {
    parallaxElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = element.dataset.parallaxSpeed || 0.5;

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const yPos = -(scrolled * parseFloat(rate));
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    });

    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestTick, { passive: true });
  updateParallax();
};

// Lazy loading for images
const initLazyLoading = () => {
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach((img) => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
    });
  } else {
    // Fallback for browsers that don't support native lazy loading
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });
  }
};

// Form enhancements
const initFormEnhancements = () => {
  const forms = document.querySelectorAll('form.material-form');

  forms.forEach((form) => {
    // Add floating label effect
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {
      input.addEventListener('focus', () => {
        input.parentElement?.classList.add('focused');
      });

      input.addEventListener('blur', () => {
        if (!input.value) {
          input.parentElement?.classList.remove('focused');
        }
      });
    });

    // Basic form validation feedback
    form.addEventListener('submit', (event) => {
      const invalidInputs = form.querySelectorAll(':invalid');
      if (invalidInputs.length > 0) {
        invalidInputs[0].focus();
      }
    });
  });
};

// Card hover effects enhancement
const initCardEffects = () => {
  const cards = document.querySelectorAll('.card, .post-card, .stat-card');

  cards.forEach((card) => {
    card.addEventListener('mouseenter', function(event) {
      this.style.setProperty('--mouse-x', event.clientX - this.getBoundingClientRect().left + 'px');
      this.style.setProperty('--mouse-y', event.clientY - this.getBoundingClientRect().top + 'px');
    });

    card.addEventListener('mousemove', function(event) {
      this.style.setProperty('--mouse-x', event.clientX - this.getBoundingClientRect().left + 'px');
      this.style.setProperty('--mouse-y', event.clientY - this.getBoundingClientRect().top + 'px');
    });
  });
};

// Performance: Debounce function
function debounce(func, wait = 100) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Performance: Throttle function
function throttle(func, limit = 100) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Accessibility: Focus visible helper
const initFocusVisible = () => {
  let hadKeyboardEvent = true;

  const addFocusVisible = (event) => {
    if (hadKeyboardEvent) {
      event.target.classList.add('focus-visible');
    }
  };

  const removeFocusVisible = (event) => {
    event.target.classList.remove('focus-visible');
  };

  const onKeyDown = () => {
    hadKeyboardEvent = true;
  };

  const onPointerDown = () => {
    hadKeyboardEvent = false;
  };

  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('focus', addFocusVisible, true);
  document.addEventListener('blur', removeFocusVisible, true);
};

// Accessibility: Skip to main content
const initSkipLink = () => {
  const skipLink = document.querySelector('a[href="#main"]');
  if (skipLink) {
    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      const main = document.getElementById('main') || document.querySelector('main');
      if (main) {
        main.tabIndex = -1;
        main.focus();
        main.removeAttribute('tabindex');
        window.scrollTo({ top: main.offsetTop, behavior: 'smooth' });
      }
    });
  }
};

// Reduced motion preference
const respectReducedMotion = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty('--transition-fast', '0ms');
    document.documentElement.style.setProperty('--transition-std', '0ms');
    document.documentElement.style.setProperty('--transition-slow', '0ms');
    document.documentElement.style.setProperty('--transition-spring', '0ms');
  }
};

// Initialize all features
const init = () => {
  // Respect user preferences first
  respectReducedMotion();

  // Core functionality
  initNavigation();
  initAccordions();
  initTabs();
  initSmoothScroll();

  // Visual enhancements
  initScrollAnimations();
  initScrollProgress();
  initScrollHeader();
  initParallax();
  initCardEffects();
  initTeamCarousels();

  // Performance
  initLazyLoading();

  // Forms
  initFormEnhancements();

  // Accessibility
  initFocusVisible();
  initSkipLink();

  console.log('🌿 Noor Community — Premium UI initialized');
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Pause animations when page is hidden to save resources
    document.body.classList.add('page-hidden');
  } else {
    document.body.classList.remove('page-hidden');
  }
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    init,
    initNavigation,
    initTeamCarousels,
    initAccordions,
    initTabs,
    initScrollAnimations,
    initSmoothScroll,
    initScrollProgress,
    initParallax
  };
}
