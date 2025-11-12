const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: 1rem;
      padding: 0.75rem 5vw;
      background: rgba(255, 255, 255, 0.95);
      color: var(--text-primary, #1f2933);
      box-shadow: 0 4px 16px rgba(15, 23, 42, 0.1);
      position: relative;
    }

    ::slotted([slot='navigation-icon']),
    ::slotted([slot='headline']),
    ::slotted([slot='action-items']) {
      display: inline-flex;
      align-items: center;
      gap: 1rem;
    }

    ::slotted([slot='headline']) {
      justify-self: center;
      font-family: 'Crimson Text', serif;
      font-size: clamp(1.25rem, 2vw, 1.75rem);
      font-weight: 600;
    }

    ::slotted([slot='action-items']) {
      justify-self: end;
    }

    @media (max-width: 720px) {
      :host {
        grid-template-columns: auto 1fr;
        grid-template-areas:
          'nav donate'
          'headline headline';
        row-gap: 0.5rem;
      }

      ::slotted([slot='navigation-icon']) {
        grid-area: nav;
      }

      ::slotted([slot='headline']) {
        grid-area: headline;
        justify-content: flex-start;
      }

      ::slotted([slot='action-items']) {
        grid-area: donate;
        justify-content: flex-end;
      }
    }
  </style>
  <slot name="navigation-icon"></slot>
  <slot name="headline"></slot>
  <slot name="action-items"></slot>
`;

class MdTopAppBar extends HTMLElement {
  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });
    root.appendChild(template.content.cloneNode(true));
  }
}

if (!customElements.get('md-top-app-bar')) {
  customElements.define('md-top-app-bar', MdTopAppBar);
}
