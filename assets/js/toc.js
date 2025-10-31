export function tocHighlight () {
  "use strict";
  
  const SCROLL_OFFSET_RATIO = 0.33;
  const TOC_SELECTOR = "#TableOfContents";
  const ANCHOR_SELECTOR = ".anchor, h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]";
  const TOC_LINK_SELECTOR = 'a[href^="#"]';
  const ACTIVE_CLASS = "active";

  function getActiveAnchorId(offsetRatio) {
    const anchors = [...document.querySelectorAll(ANCHOR_SELECTOR)];
    const tocLinks = [...document.querySelectorAll(`${TOC_SELECTOR} ${TOC_LINK_SELECTOR}`)];
    const tocIds = new Set(tocLinks.map(link => link.getAttribute("href").substring(1)));
    
    const threshold = window.scrollY + window.innerHeight * offsetRatio;
    const isNearBottom = window.innerHeight + window.scrollY >= 
                         document.documentElement.scrollHeight - 10;
    
    if (isNearBottom) {
      for (let i = anchors.length - 1; i >= 0; i--) {
        if (tocIds.has(anchors[i].id)) {
          return anchors[i].id;
        }
      }
    }
    
    for (let i = anchors.length - 1; i >= 0; i--) {
      const top = anchors[i].getBoundingClientRect().top + window.scrollY;
      if (top <= threshold && tocIds.has(anchors[i].id)) {
        return anchors[i].id;
      }
    }
    
    return anchors.find(anchor => tocIds.has(anchor.id))?.id || "";
  }
  
  function updateTOC() {
    const toc = document.querySelector(TOC_SELECTOR);
    if (!toc) return;
    
    const activeId = getActiveAnchorId(SCROLL_OFFSET_RATIO);
    if (!activeId) return;
    
    const currentLinks = [...document.querySelectorAll(`${TOC_SELECTOR} ${TOC_LINK_SELECTOR}`)];
    
    currentLinks.forEach(link => {
      const isActive = link.getAttribute("href") === `#${activeId}`;
      link.classList.toggle(ACTIVE_CLASS, isActive);
    });
  }
  
  function init() {
    if (!document.querySelector(TOC_SELECTOR)) {
      return;
    }
    
    // Don't run TOC highlighting on section pages
    const isSectionPage = document.querySelector('.section-page');
    if (isSectionPage) {
      return;
    }
    
    const anchors = [...document.querySelectorAll(ANCHOR_SELECTOR)];
    const links = [...document.querySelectorAll(`${TOC_SELECTOR} ${TOC_LINK_SELECTOR}`)];
    updateTOC();
  }
  
  // 只綁定一次 scroll 和 hashchange - 它們會自動查詢最新 DOM
  window.addEventListener("scroll", updateTOC, { passive: true });
  window.addEventListener("hashchange", updateTOC, { passive: true });
  
  // 初始頁面載入
  if (document.readyState === 'complete') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', () => init());
  }
  
  // Swup 頁面切換後重新初始化
  document.addEventListener('swup:page:view', () => init());
};
