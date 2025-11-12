import './styles/main.scss';

import '@material/web/button/filled-button.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/tabs/tabs.js';
import '@material/web/tabs/primary-tab.js';
import '@material/web/labs/card/elevated-card.js';
import '@material/web/labs/card/filled-card.js';

import { applyTheme } from './utils/theme.js';
import { initAccordions } from './utils/accordion.js';
import { initTabs } from './utils/tabs.js';

applyTheme();

document.addEventListener('DOMContentLoaded', () => {
  initAccordions();
  initTabs();
});
