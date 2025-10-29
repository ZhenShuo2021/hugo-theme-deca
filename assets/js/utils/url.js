export function getSidebarFromPath(pathname) {
  const config = window.SITE_CONFIG?.sidebars;
  if (!config) return null;
  
  const path = pathname.replace(/^\//, '').replace(/\/$/, '');
  if (!path) return null;
  
  const segments = path.split('/');
  const candidates = [];
  
  for (let i = segments.length; i > 0; i--) {
    candidates.push(segments.slice(0, i).join('/'));
  }
  
  for (const candidate of candidates) {
    for (const [key, cfg] of Object.entries(config)) {
      if (cfg.section === candidate) {
        return key;
      }
    }
  }
  
  return null;
}

export function getCurrentSection() {
  return getSidebarFromPath(window.location.pathname);
}

export function getTargetSection(href) {
  try {
    const url = new URL(href, window.location.origin);
    return getSidebarFromPath(url.pathname);
  } catch {
    return null;
  }
}
