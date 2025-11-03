const TOC_SELECTOR = "#TableOfContents";
const ANCHOR_SELECTOR = ".anchor, h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]";
const TOC_LINK_SELECTOR = 'a[href^="#"]';
const ACTIVE_CLASS = "active";

let scrollHandler = null;
let resizeHandler = null;
let lastActiveLink = null;

function getVisibleBoundingClientRect(element) {
  const rect = element.getBoundingClientRect();
  const hasNoHeight = rect.top === rect.bottom;
  if (hasNoHeight && element.parentNode) {
    return getVisibleBoundingClientRect(element.parentNode);
  }
  return rect;
}

function isInViewportTopHalf(boundingRect) {
  return boundingRect.top > 0 && boundingRect.bottom < window.innerHeight / 2;
}

function getNavbarHeight() {
  const navbar = document.querySelector(".site-header");
  if (!navbar) return 0;
  return navbar.clientHeight;
}

function getActiveAnchorId() {
  const anchors = [...document.querySelectorAll(ANCHOR_SELECTOR)];
  const tocLinks = [...document.querySelectorAll(`${TOC_SELECTOR} ${TOC_LINK_SELECTOR}`)];
  const tocIds = new Set(tocLinks.map((link) => link.getAttribute("href").substring(1)));

  const filteredAnchors = anchors.filter((anchor) => tocIds.has(anchor.id));

  const anchorTopOffset = getNavbarHeight();

  const nextVisibleAnchor = filteredAnchors.find((anchor) => {
    const boundingRect = getVisibleBoundingClientRect(anchor);
    return boundingRect.top >= anchorTopOffset;
  });

  if (nextVisibleAnchor) {
    const boundingRect = getVisibleBoundingClientRect(nextVisibleAnchor);
    if (isInViewportTopHalf(boundingRect)) {
      return nextVisibleAnchor.id;
    }
    const prevIndex = filteredAnchors.indexOf(nextVisibleAnchor) - 1;
    return prevIndex >= 0 ? filteredAnchors[prevIndex].id : null;
  }

  return filteredAnchors.length > 0 ? filteredAnchors[filteredAnchors.length - 1].id : null;
}

function updateLinkActiveClass(link, active) {
  if (active) {
    if (lastActiveLink && lastActiveLink !== link) {
      lastActiveLink.classList.remove(ACTIVE_CLASS);
    }
    link.classList.add(ACTIVE_CLASS);
    lastActiveLink = link;
  } else {
    link.classList.remove(ACTIVE_CLASS);
  }
}

function updateTOC() {
  const toc = document.querySelector(TOC_SELECTOR);
  if (!toc) return;

  const activeId = getActiveAnchorId();
  if (!activeId) return;

  const currentLinks = [...document.querySelectorAll(`${TOC_SELECTOR} ${TOC_LINK_SELECTOR}`)];

  currentLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeId}`;
    updateLinkActiveClass(link, isActive);
  });
}

export function tocHighlight() {
  const toc = document.querySelector(TOC_SELECTOR);
  if (!toc) return;

  if (scrollHandler) {
    updateTOC();
    return;
  }

  scrollHandler = () => updateTOC();
  resizeHandler = () => updateTOC();

  window.addEventListener("scroll", scrollHandler, { passive: true });
  window.addEventListener("resize", resizeHandler, { passive: true });

  updateTOC();
}
