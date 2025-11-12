/**
 * Shimmed Material app theme that maps the design tokens defined in CSS to the
 * Material Web components.
 */
const THEME_CSS = `
:root {
  --md-ref-typeface-brand: var(--md-ref-typeface-brand);
  --md-ref-typeface-plain: var(--md-ref-typeface-plain);
}

md-filled-button,
md-tonal-button,
md-outlined-button,
md-text-button {
  font-family: var(--md-sys-typescale-label-large-font-family);
  font-size: var(--md-sys-typescale-label-large-font-size);
  font-weight: var(--md-sys-typescale-label-large-font-weight);
  letter-spacing: var(--md-sys-typescale-label-large-letter-spacing);
}

md-top-app-bar {
  font-family: var(--md-sys-typescale-title-large-font-family);
  font-weight: var(--md-sys-typescale-title-large-font-weight);
  letter-spacing: var(--md-sys-typescale-title-large-letter-spacing);
}
`;

if (globalThis.document) {
  const themeSheet = new CSSStyleSheet();
  themeSheet.replaceSync(THEME_CSS);
  if ('adoptedStyleSheets' in document) {
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, themeSheet];
  } else {
    const style = document.createElement('style');
    style.textContent = THEME_CSS;
    document.head.append(style);
  }
}

export {};
