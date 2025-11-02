// Material 3 modal navigation drawer controller
document.addEventListener('DOMContentLoaded', () => {
  const drawer = document.querySelector('[data-drawer]');
  const trigger = document.querySelector('[data-drawer-trigger]');
  const scrim = document.querySelector('[data-drawer-scrim]');

  if (!drawer || !trigger || !scrim) {
    return;
  }

  const focusableSelector = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([type="hidden"]):not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
  ].join(', ');

  let isOpen = false;
  let lastFocusedElement = null;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const getFocusableElements = () => {
    return Array.from(drawer.querySelectorAll(focusableSelector)).filter((element) => {
      if (element.hasAttribute('disabled') || element.getAttribute('aria-hidden') === 'true') {
        return false;
      }
      const styles = window.getComputedStyle(element);
      return styles.visibility !== 'hidden' && styles.display !== 'none';
    });
  };

  const focusFirstElement = () => {
    const initial = drawer.querySelector('[data-drawer-initial-focus]');
    const focusables = getFocusableElements();
    const target = initial && focusables.includes(initial) ? initial : focusables[0];
    if (target) {
      target.focus({ preventScroll: true });
    } else {
      drawer.focus({ preventScroll: true });
    }
  };

  const handleKeydown = (event) => {
    if (!isOpen) {
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      closeDrawer();
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    const focusable = getFocusableElements();
    if (focusable.length === 0) {
      event.preventDefault();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;

    if (event.shiftKey) {
      if (active === first || !drawer.contains(active)) {
        event.preventDefault();
        last.focus({ preventScroll: true });
      }
    } else if (active === last) {
      event.preventDefault();
      first.focus({ preventScroll: true });
    }
  };

  const enforceFocus = (event) => {
    if (!isOpen) {
      return;
    }

    if (!drawer.contains(event.target)) {
      focusFirstElement();
    }
  };

  const showScrim = () => {
    scrim.hidden = false;
    requestAnimationFrame(() => {
      scrim.classList.add('is-visible');
    });
  };

  const hideScrim = () => {
    scrim.classList.remove('is-visible');

    if (prefersReducedMotion.matches) {
      if (!isOpen) {
        scrim.hidden = true;
      }
      return;
    }

    const handleTransition = (event) => {
      if (event.target !== scrim) {
        return;
      }

      if (!isOpen) {
        scrim.hidden = true;
      }

      scrim.removeEventListener('transitionend', handleTransition);
    };

    scrim.addEventListener('transitionend', handleTransition);
  };

  const openDrawer = () => {
    if (isOpen) {
      return;
    }

    isOpen = true;
    lastFocusedElement = document.activeElement;
    drawer.classList.add('is-open');
    drawer.removeAttribute('aria-hidden');
    document.body.classList.add('md3-drawer-open');
    showScrim();
    focusFirstElement();
    document.addEventListener('keydown', handleKeydown, true);
    document.addEventListener('focusin', enforceFocus, true);
  };

  const closeDrawer = () => {
    if (!isOpen) {
      return;
    }

    isOpen = false;
    drawer.setAttribute('aria-hidden', 'true');
    drawer.classList.remove('is-open');
    document.body.classList.remove('md3-drawer-open');
    hideScrim();
    document.removeEventListener('keydown', handleKeydown, true);
    document.removeEventListener('focusin', enforceFocus, true);

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus({ preventScroll: true });
    }
  };

  trigger.addEventListener('click', () => {
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  scrim.addEventListener('click', closeDrawer);

  drawer.querySelectorAll('[data-drawer-close]').forEach((element) => {
    element.addEventListener('click', closeDrawer);
  });
});
