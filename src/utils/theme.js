import { argbFromHex, themeFromSourceColor } from '@material/material-color-utilities';

const SOURCE_COLOR = '#005d6f';

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
}
