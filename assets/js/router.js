let swup;

export function initRouter({ onContentReplace }) {
  const hasDebug = document.getElementById('debug-sidebar-container');
  const hasLangSwitcher = document.getElementById('language-switcher');
  const containers = ['#swup'];
  if (hasDebug) containers.push('#debug-sidebar-container');
  if (hasLangSwitcher) containers.push('#language-switcher');

  swup = new Swup({
    containers,
    animateHistoryBrowsing: false,
    linkSelector: 'a[href^="/"]:not([data-no-swup])',
    cache: true,
    preload: true,
    animationSelector: false,
    skipPopStateHandling: () => false,
    plugins: [
      new SwupPreloadPlugin({
        throttle: 5,
        preloadHoveredLinks: true,
        preloadVisibleLinks: false,
        preloadInitialPage: true
      })
    ]
  });

  swup.hooks.on('page:view', () => {
    onContentReplace();
  }, { before: true });

  swup.hooks.on('page:load', (visit, { page }) => {
    if (page.html.includes('data-page-type="404"') || page.html.includes('class="error-page"')) {
      visit.cache.write = false;
    }
  });
}
