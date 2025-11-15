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
const IMPACT_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQGq8wRez2oJ6TP2PzefRg2fzGEGZm4G6dkprdFMnG-tBC0bYKT1eZq9VHt-Pl-vY/pub?gid=0&single=true&output=csv';

const FALLBACK_IMPACT_SNAPSHOT = `Metric,Value,Progress
students_served,420,
volunteer_educators,68,
countries_represented,17,
scholarship_completion_rate,93%,93
employment_progress,64%,64
student_projects_launched,38,
`;

const IMPACT_ALIAS_MAP = new Map([
  ['students_served', ['students_served', 'students served per year', 'students served', 'students']],
  ['volunteer_educators', ['volunteer educators', 'educators', 'volunteers']],
  ['countries_represented', ['countries', 'country count', 'regions']],
  ['scholarship_completion_rate', ['completion rate', 'course completion', 'program completion']],
  ['employment_progress', ['employment rate', 'employment', 'jobs']],
  ['student_projects_launched', ['projects launched', 'projects', 'capstone projects']]
]);

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

const parseCsvImpactSheet = (text) => {
  const rows = parseCsvRows(text);
  if (!rows.length) return new Map();
  const header = rows[0].map(normalizeMetricKey);
  const keyIndex = header.findIndex((cell) => /metric|indicator|stat|name/.test(cell));
  const valueIndex = header.findIndex((cell) => /value|number|total|count/.test(cell));
  const progressIndex = header.findIndex((cell) => /progress|percent|percentage/.test(cell));

  const records = rows.slice(1).map((cells) => {
    const key = resolveMetricKey(cells[keyIndex] || cells[0]);
    const value = cells[valueIndex >= 0 ? valueIndex : 1] || '';
    const progress = cells[progressIndex] || '';
    return { key, value: value.trim(), progress: progress.trim() };
  });

  return buildMetricsMap(records);
};

const parseHtmlImpactSheet = (text) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'text/html');
  const rows = Array.from(doc.querySelectorAll('table tr'));
  if (!rows.length) return new Map();

  const headerCells = rows[0].querySelectorAll('th, td');
  const header = Array.from(headerCells).map((cell) => normalizeMetricKey(cell.textContent));
  const keyIndex = header.findIndex((cell) => /metric|indicator|stat|name/.test(cell));
  const valueIndex = header.findIndex((cell) => /value|number|total|count/.test(cell));
  const progressIndex = header.findIndex((cell) => /progress|percent|percentage/.test(cell));

  const records = rows.slice(1).map((row) => {
    const cells = row.querySelectorAll('td');
    const getCellText = (index, fallbackIndex) => {
      const cell = cells[index >= 0 ? index : fallbackIndex];
      return cell ? cell.textContent.trim() : '';
    };
    const key = resolveMetricKey(getCellText(keyIndex, 0));
    const value = getCellText(valueIndex, 1);
    const progress = getCellText(progressIndex, 2);
    return { key, value, progress };
  });

  return buildMetricsMap(records);
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
    console.warn('Falling back to snapshot impact metrics', error);
    return parseImpactSheet(FALLBACK_IMPACT_SNAPSHOT);
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

  const metrics = await fetchImpactMetrics();
  if (!metrics.size) return;

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
