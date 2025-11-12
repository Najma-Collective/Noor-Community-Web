function setAriaAttributes(button, panel, expanded) {
  button.setAttribute('aria-expanded', String(expanded));
  panel.hidden = !expanded;
}

export function initAccordions(root = document) {
  const accordions = root.querySelectorAll('[data-accordion]');
  accordions.forEach((accordion) => {
    const buttons = accordion.querySelectorAll('[data-accordion-trigger]');
    const panels = accordion.querySelectorAll('[data-accordion-panel]');

    buttons.forEach((button, index) => {
      const panel = panels[index];
      if (!panel) return;
      button.setAttribute('aria-controls', panel.id || `${accordion.id || 'accordion'}-panel-${index}`);
      panel.id = button.getAttribute('aria-controls');
      setAriaAttributes(button, panel, index === 0);

      button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        setAriaAttributes(button, panel, !isExpanded);
      });

      button.addEventListener('keydown', (event) => {
        const key = event.key;
        const currentIndex = Array.from(buttons).indexOf(button);
        if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(key)) {
          event.preventDefault();
        }
        if (key === 'ArrowDown') {
          buttons[(currentIndex + 1) % buttons.length].focus();
        } else if (key === 'ArrowUp') {
          buttons[(currentIndex - 1 + buttons.length) % buttons.length].focus();
        } else if (key === 'Home') {
          buttons[0].focus();
        } else if (key === 'End') {
          buttons[buttons.length - 1].focus();
        }
      });
    });
  });
}
