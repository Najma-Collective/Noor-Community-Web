import { argbFromHex, themeFromSourceColor } from '@material/material-color-utilities';

const SOURCE_COLOR = '#005d6f';
const ACCENT_COLOR = '#ff6700';
const ON_ACCENT_COLOR = '#1f2933';
const ACCENT_CONTAINER_COLOR = '#ffd7ba';
const ON_ACCENT_CONTAINER_COLOR = '#311500';

function toKebabCase(value) {
  return value.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

export function applyTheme() {
  const theme = themeFromSourceColor(argbFromHex(SOURCE_COLOR));
  const scheme = theme.schemes.light.toJSON();
  const root = document.documentElement;
  Object.entries(scheme).forEach(([key, value]) => {
    root.style.setProperty(`--md-sys-color-${toKebabCase(key)}`, value);
  });
  root.style.setProperty('--md-sys-color-brand', scheme.primary);
  root.style.setProperty('--md-sys-color-brand-container', scheme.primaryContainer);
  root.style.setProperty('--md-sys-color-accent', ACCENT_COLOR);
  root.style.setProperty('--md-sys-color-on-accent', ON_ACCENT_COLOR);
  root.style.setProperty('--md-sys-color-accent-container', ACCENT_CONTAINER_COLOR);
  root.style.setProperty('--md-sys-color-on-accent-container', ON_ACCENT_CONTAINER_COLOR);
}
