import { initSidebar, updateSidebarAfterNavigation } from "./sidebar.js";
import { initTheme, initMermaid } from "./theme.js";
import { initTabs } from "./tabs.js";
import { tocHighlight } from "./toc.js";
import { initMobile, updateMobileAfterNavigation } from "./mobile.js";
import { initCodeCopy } from "./code-copy.js";

let swupSPA;

export function initRouter({ pageView, visitEnd }) {
  const hasDebug = document.getElementById("debug-sidebar-container");
  const hasLangSwitcher = document.getElementById("language-switcher");
  const containers = ["#swup"];
  if (hasDebug) containers.push("#debug-sidebar-container");
  if (hasLangSwitcher) containers.push("#language-switcher");

  swupSPA = new Swup({
    containers,
    animateHistoryBrowsing: false,
    linkSelector: 'a[href^="/"]',
    cache: true,
    preload: true,
    animationSelector: false,
    skipPopStateHandling: () => false,
    plugins: [
      new SwupPreloadPlugin({
        throttle: 5,
        preloadHoveredLinks: true,
        preloadVisibleLinks: false,
        preloadInitialPage: true,
      }),
    ],
  });

  swupSPA.hooks.on("page:view", () => {
    pageView();
  });
  swupSPA.hooks.on("visit:end", () => {
    visitEnd();
  });

  swupSPA.hooks.on("page:load", (visit, { page }) => {
    if (page.html.includes('data-page-type="404"') || page.html.includes('class="error-page"')) {
      visit.cache.write = false;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initRouter({
    pageView: () => {
      updateSidebarAfterNavigation();
      updateMobileAfterNavigation();
    },
    visitEnd: () => {
      initCodeCopy();
      tocHighlight();
      initMermaid();
    },
  });
  initSidebar();
  initTheme();
  initTabs();
  initMobile();
  initCodeCopy();
  tocHighlight();
  initMermaid();
});
