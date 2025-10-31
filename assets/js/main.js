import { initRouter } from './router.js';
import { initSidebar, updateSidebarAfterNavigation } from './sidebar.js';
import { initTheme, initMermaid } from './theme.js';
import { initTabs } from './tabs.js';
import { tocHighlight } from './toc.js';
import { initMobile, updateMobileAfterNavigation } from './mobile.js';
import { initCodeCopy } from './code-copy.js';

document.addEventListener('DOMContentLoaded', () => {
  initRouter({
    onContentReplace: () => {
      updateSidebarAfterNavigation();
      initTabs();
      updateMobileAfterNavigation();
      initCodeCopy();
      initMermaid();
    }
  });

  initSidebar();
  initTheme();
  initTabs();
  initMobile();
  initCodeCopy();
  tocHighlight();
  initMermaid();
});