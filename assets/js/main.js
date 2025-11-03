import { initSidebar } from "./sidebar.js";
import { initTheme, initMermaid } from "./theme.js";
import { initTabs } from "./tabs.js";
import { tocHighlight } from "./toc.js";
import { initCodeCopy } from "./code-copy.js";

let swupSPA;

export function initRouter({ pageView, visitEnd }) {
  swupSPA = new Swup({
    containers: ["#swup", "#mobile-menu", "#site-header"],
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
        preloadVisibleLinks: true,
        preloadInitialPage: true,
      }),
    ],
  });

  swupSPA.hooks.on("visit:start", (visit) => {
    const hasDebug = document.getElementById("debug-sidebar-container");
    const dynamicContainers = ["#swup", "#mobile-menu", "#site-header"];
    if (hasDebug) dynamicContainers.push("#debug-sidebar-container");

    visit.containers = dynamicContainers;
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

  if (window.app) {
    window.app.swup = swupSPA;
  }
}

// Event listeners using delegateEvent are idempotent and only bound once.
// This prevents duplicate event handlers when navigating between pages
function initOnce() {
  initTheme();
  tocHighlight();
  initTabs();
}

function initEveryPage() {
  tocHighlight();
  initSidebar();
  initCodeCopy();
  initMermaid();
}

window.app = {
  initSidebar,
  initTheme,
  initMermaid,
  initTabs,
  tocHighlight,
  initCodeCopy,
  initRouter,
  swup: null,
};

document.addEventListener("DOMContentLoaded", () => {
  initRouter({
    pageView: () => {},
    visitEnd: () => {
      initEveryPage();
    },
  });
  initOnce();
  initEveryPage();
});
