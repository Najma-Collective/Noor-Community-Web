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

  const prefersReducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const prefersReducedMotion = prefersReducedMotionQuery.matches;

  const heroOrnaments = Array.from(document.querySelectorAll('.hero-ornament'));
  const ctaGroups = Array.from(document.querySelectorAll('.section-cta .hero-actions'));
  const ornamentSet = new Set(heroOrnaments);
  const ctaGroupSet = new Set(ctaGroups);
  const activeParallax = new Set();
  let parallaxTicking = false;

  const updateParallaxOffsets = () => {
    activeParallax.forEach((ornament) => {
      const rect = ornament.getBoundingClientRect();
      const depth = parseFloat(ornament.dataset.parallaxDepth || '0.35');
      const centerY = rect.top + rect.height / 2 - window.innerHeight / 2;
      const centerX = rect.left + rect.width / 2 - window.innerWidth / 2;
      ornament.style.setProperty('--parallax-shift-y', `${-centerY * 0.08 * depth}px`);
      ornament.style.setProperty('--parallax-shift-x', `${-centerX * 0.04 * depth}px`);
      ornament.classList.add('parallax-shift');
    });
    parallaxTicking = false;
  };

  const requestParallaxTick = () => {
    if (!parallaxTicking) {
      requestAnimationFrame(updateParallaxOffsets);
      parallaxTicking = true;
    }
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (ornamentSet.has(entry.target)) {
        if (entry.isIntersecting) {
          activeParallax.add(entry.target);
          requestParallaxTick();
        } else {
          activeParallax.delete(entry.target);
          entry.target.classList.remove('parallax-shift');
          entry.target.style.removeProperty('--parallax-shift-x');
          entry.target.style.removeProperty('--parallax-shift-y');
        }
        return;
      }

      if (ctaGroupSet.has(entry.target)) {
        if (entry.isIntersecting) {
          entry.target.classList.add('cta-stagger-ready');
          Array.from(entry.target.children).forEach((child, index) => {
            if (child instanceof HTMLElement) {
              child.style.setProperty('--cta-stagger-index', index);
            }
          });
          observer.unobserve(entry.target);
        }
        return;
      }

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

  // Observe all scroll-animated elements, including custom data-triggered animations
  const animatedElements = document.querySelectorAll(
    '.fade-in, .scale-in, .slide-in-left, .slide-in-right, .stagger-children, [data-scroll-animate], [data-card-animate]'
  );

  if (prefersReducedMotion) {
    animatedElements.forEach((el) => {
      el.classList.add('is-visible');
      el.style.removeProperty('opacity');
      el.style.removeProperty('transform');
    });

    heroOrnaments.forEach((ornament) => ornament.classList.add('parallax-disabled'));
    ctaGroups.forEach((group) => group.classList.add('cta-stagger-ready'));
    return;
  }

  animatedElements.forEach((el) => observer.observe(el));
  heroOrnaments.forEach((ornament) => observer.observe(ornament));
  ctaGroups.forEach((group) => {
    group.classList.add('cta-stagger');
    observer.observe(group);
  });

  if (heroOrnaments.length) {
    window.addEventListener('scroll', requestParallaxTick, { passive: true });
    window.addEventListener('resize', requestParallaxTick);
    requestParallaxTick();
  }
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

// Story filters for Stories page
const initStoryFilters = () => {
  const cards = Array.from(document.querySelectorAll('[data-story-card]'));
  if (!cards.length) return;

  const categoryContainer = document.querySelector('[data-dynamic-categories]');
  const startInput = document.querySelector('[data-filter-start]');
  const endInput = document.querySelector('[data-filter-end]');
  const clearButton = document.querySelector('[data-clear-filters]');
  const emptyState = document.querySelector('[data-story-empty]');

  const normalizeTag = (tag) => tag.trim().toLowerCase();

  const cardData = cards.map((card) => {
    const tags = (card.dataset.storyTags || '')
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);
    const tagKeys = tags.map(normalizeTag);
    const dateValue = card.dataset.storyDate ? new Date(card.dataset.storyDate) : null;

    return {
      element: card,
      tags,
      tagKeys,
      date: dateValue
    };
  });

  const uniqueTags = new Map();
  cardData.forEach(({ tags }) => {
    tags.forEach((tag) => {
      const key = normalizeTag(tag);
      if (!uniqueTags.has(key)) {
        uniqueTags.set(key, tag);
      }
    });
  });

  let activeCategory = 'all';
  const categoryButtons = [];

  const updateButtonState = () => {
    categoryButtons.forEach((button) => {
      const isActive = button.dataset.filterKey === activeCategory;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
  };

  const applyFilters = () => {
    const startDate = startInput?.value ? new Date(startInput.value) : null;
    if (startDate) startDate.setHours(0, 0, 0, 0);
    const endDate = endInput?.value ? new Date(endInput.value) : null;
    if (endDate) endDate.setHours(23, 59, 59, 999);

    let visibleCount = 0;

    cardData.forEach(({ element, tagKeys, date }) => {
      const matchesCategory = activeCategory === 'all' || tagKeys.includes(activeCategory);
      const hasValidDate = date instanceof Date && !Number.isNaN(date?.getTime());
      const matchesStart = !startDate || (hasValidDate && date >= startDate);
      const matchesEnd = !endDate || (hasValidDate && date <= endDate);
      const isVisible = matchesCategory && matchesStart && matchesEnd;
      element.hidden = !isVisible;
      if (isVisible) {
        visibleCount += 1;
      }
    });

    if (emptyState) {
      emptyState.hidden = visibleCount !== 0;
      emptyState.setAttribute('aria-hidden', visibleCount === 0 ? 'false' : 'true');
    }
  };

  if (categoryContainer) {
    categoryContainer.innerHTML = '';

    const createButton = (label, key) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'filter-btn';
      button.textContent = label;
      button.dataset.filterKey = key;
      button.setAttribute('aria-pressed', String(key === activeCategory));
      button.addEventListener('click', () => {
        if (activeCategory === key) return;
        activeCategory = key;
        updateButtonState();
        applyFilters();
      });
      categoryContainer.appendChild(button);
      categoryButtons.push(button);
    };

    createButton('All', 'all');

    Array.from(uniqueTags.entries())
      .sort((a, b) => a[1].localeCompare(b[1]))
      .forEach(([key, label]) => {
        createButton(label, key);
      });

    updateButtonState();
  }

  startInput?.addEventListener('change', applyFilters);
  endInput?.addEventListener('change', applyFilters);

  clearButton?.addEventListener('click', () => {
    activeCategory = 'all';
    if (startInput) startInput.value = '';
    if (endInput) endInput.value = '';
    updateButtonState();
    applyFilters();
  });

  applyFilters();
};

// ---------------------------------------------------------------------
// Impact metrics — Google Sheets sync
// ---------------------------------------------------------------------
const IMPACT_SHEET_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vR6IKHRc11k-2FhnGlyhMI4pfAeNuZ0SLuO3NMjMsc-43wnzsCaCBwCDm-jO7CA_UwYqg6M2v79ayTW/pub?gid=0&single=true&output=csv';

const IMPACT_ALIAS_MAP = new Map([
  ['number_of_students', ['students_served', 'students served per year', 'students', 'learners']],
  ['pass_rate', ['pass_rate', 'pass percentage', 'exam pass rate', 'completion rate', 'scholarship_completion_rate']],
  ['student_satisfaction', ['student satisfaction', 'satisfaction score', 'learner satisfaction']],
  ['number_of_programmes', ['programmes', 'programs', 'number of programs', 'courses offered']],
  ['number_of_teachers', ['volunteer_educators', 'educators', 'volunteers', 'teachers']],
  ['number_of_partnerships', ['partnerships', 'partners', 'community partners']]
]);

const HEADER_KEY_TOKENS = new Set(['metric', 'metrics', 'indicator', 'indicators', 'stat', 'stats', 'name', 'names', 'title', 'titles', 'label', 'labels']);
const HEADER_VALUE_TOKENS = new Set(['value', 'values', 'total', 'totals', 'number', 'numbers', 'count', 'counts', 'amount', 'amounts', 'figure', 'figures']);
const HEADER_PROGRESS_TOKENS = new Set(['progress', 'progresses', 'percentage', 'percent', 'percentages', 'rate', 'rates', 'completion', 'completion_rate']);

const classifyHeaderCell = (text = '') => {
  const normalized = normalizeMetricKey(text);
  if (!normalized) return null;
  const tokens = normalized.split('_').filter(Boolean);
  if (!tokens.length) return null;
  const matches = (allowedTokens) => tokens.every((token) => allowedTokens.has(token));
  if (matches(HEADER_KEY_TOKENS)) return 'key';
  if (matches(HEADER_VALUE_TOKENS)) return 'value';
  if (matches(HEADER_PROGRESS_TOKENS)) return 'progress';
  return null;
};

const rowLooksLikeHeader = (row = []) => {
  if (!row.length) return false;
  const classifications = row.map((cell) => classifyHeaderCell(cell));
  const hasHeaderTokens = classifications.some(Boolean);
  if (!hasHeaderTokens) return false;
  return row.every((cell, index) => {
    const value = String(cell || '').trim();
    return !value || Boolean(classifications[index]);
  });
};

const normalizeRowCells = (cells = []) => cells.map((cell) => (cell || '').trim());

const buildMetricsFromRows = (rows = []) => {
  if (!rows.length) return new Map();
  const normalizedRows = rows.map(normalizeRowCells).filter((row) => row.some((cell) => cell));
  if (!normalizedRows.length) return new Map();

  let dataRows = normalizedRows;
  let keyIndex = 0;
  let valueIndex = 1;
  let progressIndex = 2;

  if (rowLooksLikeHeader(normalizedRows[0])) {
    const headerClasses = normalizedRows[0].map((cell) => classifyHeaderCell(cell));
    keyIndex = headerClasses.indexOf('key');
    valueIndex = headerClasses.indexOf('value');
    progressIndex = headerClasses.indexOf('progress');
    dataRows = normalizedRows.slice(1);
  }

  const fallbackValueIndex = valueIndex >= 0 ? valueIndex : keyIndex === 0 ? 1 : 0;
  const fallbackProgressIndex = progressIndex >= 0 ? progressIndex : fallbackValueIndex === 1 ? 2 : 1;

  const getCellValue = (cells, index, fallback) => {
    const tryIndex = (idx) => (idx != null && idx >= 0 && idx < cells.length ? cells[idx] : '');
    const primary = tryIndex(index);
    if (primary) return primary;
    return tryIndex(fallback);
  };

  const records = dataRows
    .map((cells) => {
      const keyValue = getCellValue(cells, keyIndex, 0);
      const valueValue = getCellValue(cells, valueIndex, fallbackValueIndex);
      const progressValue = getCellValue(cells, progressIndex, fallbackProgressIndex);
      return {
        key: resolveMetricKey(keyValue),
        value: valueValue,
        progress: progressValue
      };
    })
    .filter(({ key, value }, rowIndex) => {
      if (!key || !value) return false;
      if (rowLooksLikeHeader(dataRows[rowIndex])) return false;
      return true;
    });

  return buildMetricsMap(records);
};

const normalizeMetricKey = (value = '') => value.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');

const resolveMetricKey = (rawKey = '') => {
  const normalized = normalizeMetricKey(rawKey);
  if (!normalized) return '';

  for (const [canonical, aliases] of IMPACT_ALIAS_MAP.entries()) {
    if (canonical === normalized) return canonical;
    if (aliases.some((alias) => normalizeMetricKey(alias) === normalized)) {
      return canonical;
    }
  }
  return normalized;
};

const parseCsvRows = (text) => {
  const rows = [];
  let current = '';
  let row = [];
  let inQuotes = false;

  const pushCell = () => {
    row.push(current.trim());
    current = '';
  };

  const pushRow = () => {
    if (!row.length) return;
    rows.push(row);
    row = [];
  };

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (char === '"') {
      if (inQuotes && text[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      pushCell();
    } else if ((char === '\n' || char === '\r') && !inQuotes) {
      if (char === '\r' && text[i + 1] === '\n') {
        i += 1;
      }
      pushCell();
      pushRow();
    } else {
      current += char;
    }
  }

  if (current || row.length) {
    pushCell();
    pushRow();
  }

  return rows.filter((cols) => cols.some((value) => value.trim().length));
};

const buildMetricsMap = (records = []) => {
  const metrics = new Map();
  records.forEach(({ key, value, progress, display }) => {
    if (!key || value == null) return;
    metrics.set(key, {
      value,
      progress,
      display: display || value
    });
  });
  return metrics;
};

const parseCsvImpactSheet = (text) => buildMetricsFromRows(parseCsvRows(text));

const parseHtmlImpactSheet = (text) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'text/html');
  const rows = Array.from(doc.querySelectorAll('table tr')).map((row) =>
    Array.from(row.querySelectorAll('th, td')).map((cell) => cell.textContent.trim())
  );
  return buildMetricsFromRows(rows);
};

const parseImpactSheet = (text) => {
  const trimmed = (text || '').trim();
  if (!trimmed) return buildMetricsMap();
  if (trimmed.startsWith('<')) {
    return parseHtmlImpactSheet(trimmed);
  }
  return parseCsvImpactSheet(trimmed);
};

const fetchImpactMetrics = async () => {
  try {
    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timeout = controller ? setTimeout(() => controller.abort(), 8000) : null;
    const response = await fetch(IMPACT_SHEET_URL, {
      headers: { 'Accept': 'text/csv, text/html;q=0.9, */*;q=0.1' },
      cache: 'no-store',
      ...(controller ? { signal: controller.signal } : {})
    });
    if (timeout) {
      clearTimeout(timeout);
    }
    if (!response.ok) {
      throw new Error(`Impact sheet responded with ${response.status}`);
    }
    const text = await response.text();
    const metrics = parseImpactSheet(text);
    if (metrics.size) {
      return metrics;
    }
    throw new Error('Impact sheet returned no rows');
  } catch (error) {
    console.error('Failed to load impact metrics', error);
    return buildMetricsMap();
  }
};

const extractNumericValue = (value) => {
  if (value == null) return null;
  const match = String(value).match(/-?\d+(?:\.\d+)?/);
  if (!match) return null;
  return parseFloat(match[0]);
};

const initImpactMetrics = async () => {
  const statNodes = document.querySelectorAll('[data-stat]');
  const progressBars = document.querySelectorAll('[data-progress-bar]');
  if (!statNodes.length && !progressBars.length) return;

  const setUnavailableState = () => {
    const unavailableMessage = 'Data unavailable';
    statNodes.forEach((node) => {
      const message = node.dataset.statUnavailable || unavailableMessage;
      node.textContent = message;
      node.classList.add('stat-unavailable');
    });

    progressBars.forEach((bar) => {
      let scope = bar.parentElement || bar;
      if (bar.dataset.progressScope) {
        const scopedParent = bar.closest(bar.dataset.progressScope);
        if (scopedParent) {
          scope = scopedParent;
        }
      }
      const target = bar.dataset.progressTarget ? scope.querySelector(bar.dataset.progressTarget) : null;
      const message = bar.dataset.progressUnavailable || unavailableMessage;
      if (target) {
        target.textContent = message;
      } else {
        const messageNode = document.createElement('span');
        messageNode.className = 'progress-unavailable';
        messageNode.textContent = message;
        bar.insertAdjacentElement('afterend', messageNode);
      }
      if (bar.tagName === 'PROGRESS') {
        bar.value = 0;
      } else {
        bar.style.width = '0%';
      }
      bar.classList.add('progress-unavailable');
    });
  };

  const metrics = await fetchImpactMetrics();
  if (!metrics.size) {
    setUnavailableState();
    return;
  }

  statNodes.forEach((node) => {
    const key = resolveMetricKey(node.dataset.stat);
    const metric = metrics.get(key);
    if (!metric) return;
    const suffix = node.dataset.statSuffix || '';
    node.textContent = `${metric.display || metric.value || ''}${suffix}`.trim();
  });

  progressBars.forEach((bar) => {
    const key = resolveMetricKey(bar.dataset.progressBar);
    const metric = metrics.get(key);
    if (!metric) return;
    const numeric = extractNumericValue(metric.progress || metric.value);
    if (typeof numeric !== 'number' || Number.isNaN(numeric)) return;
    const clamped = Math.max(0, Math.min(100, numeric));
    let scope = bar.parentElement || bar;
    if (bar.dataset.progressScope) {
      const scopedParent = bar.closest(bar.dataset.progressScope);
      if (scopedParent) {
        scope = scopedParent;
      }
    }
    const widthTarget = bar.dataset.progressTarget ? scope.querySelector(bar.dataset.progressTarget) : null;

    if (bar.tagName === 'PROGRESS') {
      bar.value = clamped;
    } else {
      bar.style.width = `${clamped}%`;
    }

    if (widthTarget) {
      widthTarget.textContent = `${clamped}%`;
    }
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

// Loading screen functionality
const initLoadingScreen = () => {
  const loadingScreen = document.getElementById('loading-screen');
  if (!loadingScreen) return;

  const hideLoadingScreen = () => {
    loadingScreen.classList.add('hidden');

    // Remove from DOM after animation completes
    setTimeout(() => {
      loadingScreen.remove();
    }, 700);
  };

  // Hide loading screen when page is fully loaded
  if (document.readyState === 'complete') {
    hideLoadingScreen();
  } else {
    window.addEventListener('load', hideLoadingScreen);
  }

  // Fallback: hide after 5 seconds even if load event hasn't fired
  setTimeout(hideLoadingScreen, 5000);
};

// Word of the Day functionality
const initWordOfDay = async () => {
  const wordCard = document.getElementById('word-of-day-card');
  if (!wordCard) return;

  try {
    // Fetch words data
    const response = await fetch('assets/data/words.json');
    const words = await response.json();

    // Get day of year to ensure same word shows all day
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    // Select word based on day of year (cycles through all words)
    const wordIndex = dayOfYear % words.length;
    const word = words[wordIndex];

    // Update DOM with word data
    document.getElementById('word-arabic').textContent = word.word;
    document.getElementById('word-transliteration').textContent = word.transliteration;
    document.getElementById('word-translation').textContent = word.translation;
    document.getElementById('word-definition').textContent = word.definition;
    document.getElementById('word-example-text').textContent = word.example;
    document.getElementById('word-etymology-text').textContent = word.etymology;
    document.getElementById('word-category').textContent = word.category;

    // Add fade-in animation
    wordCard.style.opacity = '0';
    requestAnimationFrame(() => {
      wordCard.style.transition = 'opacity 0.6s ease-in';
      wordCard.style.opacity = '1';
    });
  } catch (error) {
    console.error('Error loading word of the day:', error);
    // Keep default word in HTML if fetch fails
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
  // Initialize loading screen
  initLoadingScreen();

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
  initStoryFilters();
  initImpactMetrics();
  initTeamCarousels();

  // Performance
  initLazyLoading();

  // Forms
  initFormEnhancements();

  // Accessibility
  initFocusVisible();
  initSkipLink();

  // Dynamic content
  initWordOfDay();

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
    initParallax,
    initStoryFilters
  };
}
