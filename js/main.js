/**
 * Noor Community Website - Interactive Components
 * WCAG 2.2 AA Compliant JavaScript
 * Mobile-First, Accessible, Performance-Optimized
 */

(function() {
  'use strict';

  // ================================
  // MOBILE MENU
  // ================================
  function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const body = document.body;

    if (!toggle || !menu || !overlay) return;

    function openMenu() {
      menu.classList.add('active');
      overlay.classList.add('active');
      toggle.setAttribute('aria-expanded', 'true');
      body.style.overflow = 'hidden';

      // Focus first link in menu
      const firstLink = menu.querySelector('a');
      if (firstLink) firstLink.focus();
    }

    function closeMenu() {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      body.style.overflow = '';
      toggle.focus();
    }

    toggle.addEventListener('click', function() {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    overlay.addEventListener('click', closeMenu);

    // Close on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && menu.classList.contains('active')) {
        closeMenu();
      }
    });

    // Close menu when clicking internal links
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        closeMenu();
      });
    });
  }

  // ================================
  // STICKY HEADER - HIDE ON SCROLL DOWN
  // ================================
  function initStickyHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let lastScrollTop = 0;
    let scrollThreshold = 100;

    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (Math.abs(scrollTop - lastScrollTop) < 5) return; // Prevent jitter

      if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        // Scrolling down
        header.classList.add('hidden');
      } else {
        // Scrolling up
        header.classList.remove('hidden');
      }

      lastScrollTop = scrollTop;
    });
  }

  // ================================
  // ACCESSIBLE ACCORDION
  // ================================
  function initAccordions() {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
      button.addEventListener('click', function() {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const contentId = button.getAttribute('aria-controls');
        const content = document.getElementById(contentId);

        if (!content) return;

        // Close all other accordions (optional - remove for multi-open)
        accordionButtons.forEach(otherButton => {
          if (otherButton !== button) {
            otherButton.setAttribute('aria-expanded', 'false');
            const otherContentId = otherButton.getAttribute('aria-controls');
            const otherContent = document.getElementById(otherContentId);
            if (otherContent) {
              otherContent.classList.remove('active');
            }
          }
        });

        // Toggle current accordion
        if (isExpanded) {
          button.setAttribute('aria-expanded', 'false');
          content.classList.remove('active');
        } else {
          button.setAttribute('aria-expanded', 'true');
          content.classList.add('active');
        }
      });
    });
  }

  // ================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ================================
  function initSmoothScroll() {
    // Only if user hasn't set prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = link.getAttribute('href');

        // Ignore empty # links
        if (href === '#' || href === '#!') return;

        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();

          const headerOffset = 80; // Account for sticky header
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Focus the target for keyboard users
          target.setAttribute('tabindex', '-1');
          target.focus();
        }
      });
    });
  }

  // ================================
  // FORM VALIDATION
  // ================================
  function initFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');

    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach(field => {
          const errorMsg = field.parentElement.querySelector('.error-message');

          if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
            field.setAttribute('aria-invalid', 'true');

            if (!errorMsg) {
              const error = document.createElement('span');
              error.className = 'error-message';
              error.style.color = '#dc2626';
              error.style.fontSize = '0.875rem';
              error.style.marginTop = '0.25rem';
              error.style.display = 'block';
              error.textContent = 'This field is required';
              field.parentElement.appendChild(error);
            }
          } else {
            field.classList.remove('error');
            field.setAttribute('aria-invalid', 'false');
            if (errorMsg) errorMsg.remove();
          }
        });

        if (!isValid) {
          e.preventDefault();
          // Focus first invalid field
          const firstInvalid = form.querySelector('.error');
          if (firstInvalid) firstInvalid.focus();
        }
      });

      // Clear error on input
      form.querySelectorAll('[required]').forEach(field => {
        field.addEventListener('input', function() {
          field.classList.remove('error');
          field.setAttribute('aria-invalid', 'false');
          const errorMsg = field.parentElement.querySelector('.error-message');
          if (errorMsg) errorMsg.remove();
        });
      });
    });
  }

  // ================================
  // ACTIVE PAGE NAVIGATION HIGHLIGHT
  // ================================
  function initActiveNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-links a');

    navLinks.forEach(link => {
      const linkPath = new URL(link.href).pathname;

      if (linkPath === currentPath) {
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  // ================================
  // LAZY LOADING IMAGES
  // ================================
  function initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-src');

            if (src) {
              img.src = src;
              img.removeAttribute('data-src');
              img.classList.add('loaded');
            }

            observer.unobserve(img);
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for browsers without IntersectionObserver
      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => {
        const src = img.getAttribute('data-src');
        if (src) img.src = src;
      });
    }
  }

  // ================================
  // FADE IN ON SCROLL ANIMATION
  // ================================
  function initScrollAnimations() {
    // Only if user hasn't set prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    if ('IntersectionObserver' in window) {
      const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            animationObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1
      });

      const animateElements = document.querySelectorAll('[data-animate]');
      animateElements.forEach(el => {
        el.style.opacity = '0';
        animationObserver.observe(el);
      });
    }
  }

  // ================================
  // DROPDOWN MENU KEYBOARD NAVIGATION
  // ================================
  function initDropdownMenus() {
    const dropdownToggles = document.querySelectorAll('.nav-item > .nav-link');

    dropdownToggles.forEach(toggle => {
      const parentItem = toggle.parentElement;
      const dropdown = parentItem.querySelector('.dropdown-menu');

      if (!dropdown) return;

      // Open dropdown on enter/space
      toggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          dropdown.classList.toggle('show');
        }

        // Close on escape
        if (e.key === 'Escape') {
          dropdown.classList.remove('show');
          toggle.focus();
        }
      });

      // Navigate dropdown items with arrow keys
      const dropdownLinks = dropdown.querySelectorAll('a');
      dropdownLinks.forEach((link, index) => {
        link.addEventListener('keydown', function(e) {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            const nextLink = dropdownLinks[index + 1] || dropdownLinks[0];
            nextLink.focus();
          }

          if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prevLink = dropdownLinks[index - 1] || dropdownLinks[dropdownLinks.length - 1];
            prevLink.focus();
          }

          if (e.key === 'Escape') {
            dropdown.classList.remove('show');
            toggle.focus();
          }
        });
      });
    });
  }

  // ================================
  // BACK TO TOP BUTTON
  // ================================
  function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ================================
  // FILTER/TAB FUNCTIONALITY
  // ================================
  function initFilters() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const filterableItems = document.querySelectorAll('[data-category]');

    if (filterButtons.length === 0 || filterableItems.length === 0) return;

    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = button.getAttribute('data-filter');

        // Update active state
        filterButtons.forEach(btn => {
          btn.classList.remove('active');
          btn.setAttribute('aria-pressed', 'false');
        });
        button.classList.add('active');
        button.setAttribute('aria-pressed', 'true');

        // Filter items
        filterableItems.forEach(item => {
          const category = item.getAttribute('data-category');

          if (filter === 'all' || category === filter) {
            item.style.display = '';
            item.classList.add('fade-in');
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // ================================
  // INITIALIZE ALL
  // ================================
  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        initMobileMenu();
        initStickyHeader();
        initAccordions();
        initSmoothScroll();
        initFormValidation();
        initActiveNavigation();
        initLazyLoading();
        initScrollAnimations();
        initDropdownMenus();
        initBackToTop();
        initFilters();
      });
    } else {
      initMobileMenu();
      initStickyHeader();
      initAccordions();
      initSmoothScroll();
      initFormValidation();
      initActiveNavigation();
      initLazyLoading();
      initScrollAnimations();
      initDropdownMenus();
      initBackToTop();
      initFilters();
    }
  }

  // Run initialization
  init();

  // ================================
  // PERFORMANCE MONITORING
  // ================================
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }

})();
