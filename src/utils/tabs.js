export function initTabs(root = document) {
  const tabGroups = root.querySelectorAll('[data-tabs]');
  tabGroups.forEach((group) => {
    const tabs = group.querySelector('md-tabs');
    const panels = group.querySelectorAll('[data-tab-panel]');
    if (!tabs) return;

    const update = (index) => {
      panels.forEach((panel, panelIndex) => {
        panel.hidden = panelIndex !== index;
      });
    };

    tabs.addEventListener('change', (event) => {
      update(event.target.activeTabIndex ?? event.detail?.activeTabIndex ?? 0);
    });

    update(tabs.activeTabIndex ?? 0);
  });
}
