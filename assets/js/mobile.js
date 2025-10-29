let mobileMenuActive = false;
let globalEventsInitialized = false;
let mobileMenuInitialized = false;

export function initMobile() {
  if (!mobileMenuInitialized) {
    initMobileMenu();
    mobileMenuInitialized = true;
  }

  if (!globalEventsInitialized) {
    initGlobalEvents();
    globalEventsInitialized = true;
  }

  // 初始化時也執行自動展開
  expandToCurrentPageMobile();
}

function initGlobalEvents() {
  // Global event handlers can be added here if needed
}

function initMobileMenu() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const menuOverlay = document.getElementById('mobile-menu-overlay');
  const menu = document.getElementById('mobile-menu');
  const menuClose = document.getElementById('mobile-menu-close');

  if (!menuToggle || !menuOverlay || !menu || !menuClose) {
    return;
  }

  // 開啟選單
  menuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    openMobileMenu();
  });

  // 關閉選單
  menuClose.addEventListener('click', () => {
    closeMobileMenu();
  });

  // 點擊遮罩關閉
  menuOverlay.addEventListener('click', () => {
    closeMobileMenu();
  });

  // 初始化 tab 切換
  initMobileMenuTabs();

  // 處理子選單摺疊
  initMobileMenuToggles();

  // 初始化 mobile theme toggle
  initMobileThemeToggle();

  // 初始化 mobile search
  initMobileSearch();

  // 點擊選單項目後關閉選單 (但不包括collapse按鈕和tab按鈕)
  const menuLinks = menu.querySelectorAll('.mobile-menu-link, .mobile-menu-item-with-children');
  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // 如果點擊的是collapse按鈕或tab按鈕，不關閉選單
      if (e.target.closest('.mobile-collapse-btn') || e.target.closest('.mobile-tab-btn')) {
        return;
      }
      closeMobileMenu();
    });
  });
}



function initMobileMenuTabs() {
  const tabButtons = document.querySelectorAll('.mobile-tab-btn');
  const tabContents = document.querySelectorAll('.mobile-tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const targetTab = button.getAttribute('data-tab');

      // 移除所有 active 狀態
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // 添加 active 狀態到當前選中的 tab
      button.classList.add('active');
      const targetContent = document.getElementById(`mobile-tab-${targetTab}`);
      if (targetContent) {
        targetContent.classList.add('active');

        // 當切換到 sidebar tab 時，重新初始化 collapse 按鈕並自動展開
        if (targetTab === 'sidebar') {
          setTimeout(() => {
            initMobileMenuToggles();
            expandToCurrentPageMobile();
          }, 100);
        }
      }
    });
  });
}

function initMobileThemeToggle() {
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
  if (!mobileThemeToggle) return;

  mobileThemeToggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    // 使用現有的 theme toggle 邏輯
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.click();
    }
  });
}

function initMobileSearch() {
  const mobileSearchBtn = document.querySelector('.mobile-search-btn');
  if (!mobileSearchBtn) return;

  mobileSearchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    // 尋找並觸發現有的搜索按鈕
    const headerSearchBtn = document.querySelector('.header-btn[aria-label="Search"]');
    if (headerSearchBtn) {
      headerSearchBtn.click();
    }

    // 關閉 mobile menu
    closeMobileMenu();
  });
}

function initMobileMenuToggles() {
  // 選擇所有 collapse 按鈕，包括 navigation 和 sidebar 中的
  const toggles = document.querySelectorAll('.mobile-collapse-btn');

  toggles.forEach(toggle => {
    // 檢查是否已經有事件監聽器
    if (toggle.hasAttribute('data-toggle-initialized')) {
      return;
    }

    // 標記為已初始化
    toggle.setAttribute('data-toggle-initialized', 'true');

    // 同時支持 click 和 touchstart 事件
    const handleToggle = (e) => {
      e.preventDefault();
      e.stopPropagation();

      // 使用 DOM 結構判斷：找到按鈕所在的 <a> 標籤的父 <li>，然後找其中的 .mobile-menu-subsection
      const link = toggle.closest('a');
      const listItem = link?.parentElement;
      const submenu = listItem?.querySelector('.mobile-menu-subsection');
      const arrow = toggle.querySelector('.mobile-collapse-icon');

      if (!submenu || !arrow) return;

      const isCollapsed = submenu.classList.contains('collapsed');

      if (isCollapsed) {
        submenu.classList.remove('collapsed');
        arrow.classList.add('expanded');
        toggle.setAttribute('aria-expanded', 'true');
      } else {
        submenu.classList.add('collapsed');
        arrow.classList.remove('expanded');
        toggle.setAttribute('aria-expanded', 'false');
      }
    };

    // 添加事件監聽器
    toggle.addEventListener('click', handleToggle);
    toggle.addEventListener('touchstart', handleToggle, { passive: false });

    // 為了更好的觸控支持，也添加 touchend 事件
    toggle.addEventListener('touchend', (e) => {
      e.preventDefault();
    }, { passive: false });
  });
}

function openMobileMenu() {
  const menuOverlay = document.getElementById('mobile-menu-overlay');
  const menu = document.getElementById('mobile-menu');

  if (menuOverlay && menu) {
    menuOverlay.classList.add('active');
    menu.classList.add('active');
    mobileMenuActive = true;
    document.body.style.overflow = 'hidden';

    // 立即初始化 collapse 按鈕
    initMobileMenuToggles();

    // 再次確保所有按鈕都被初始化（包括可能延遲載入的內容）
    setTimeout(() => {
      initMobileMenuToggles();
      expandToCurrentPageMobile();
    }, 100);
  }
}

function closeMobileMenu() {
  const menuOverlay = document.getElementById('mobile-menu-overlay');
  const menu = document.getElementById('mobile-menu');

  if (menuOverlay && menu) {
    menuOverlay.classList.remove('active');
    menu.classList.remove('active');
    mobileMenuActive = false;
    document.body.style.overflow = '';
  }
}

function updateMobileMenuActive() {
  const currentPath = window.location.pathname;
  const menuLinks = document.querySelectorAll('.mobile-menu-link, .mobile-menu-item-with-children');

  menuLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href && (href === currentPath || currentPath.startsWith(href + '/'))) {
      link.classList.add('active');
    }
  });
}

function expandToCurrentPageMobile() {
  const currentPath = window.location.pathname;

  // 在 mobile menu 的 sidebar tab 中尋找當前頁面的鏈接
  const sidebarTab = document.querySelector('#mobile-tab-sidebar');
  if (!sidebarTab) return;

  const currentLink = sidebarTab.querySelector(`a[href="${currentPath}"]`);
  if (!currentLink) return;

  // 展開當前鏈接本身控制的 subsection（如果有按鈕）
  if (currentLink.classList.contains('mobile-menu-item-with-children')) {
    const button = currentLink.querySelector('.mobile-collapse-btn');
    if (button) {
      const link = button.closest('a');
      const listItem = link?.parentElement;
      const targetSection = listItem?.querySelector('.mobile-menu-subsection');

      if (targetSection && targetSection.classList.contains('collapsed')) {
        targetSection.classList.remove('collapsed');
        button.setAttribute('aria-expanded', 'true');
        const icon = button.querySelector('.mobile-collapse-icon');
        if (icon) {
          icon.classList.add('expanded');
        }
      }
    }
  }

  // 展開所有父層級的 .mobile-menu-subsection
  let element = currentLink.parentElement;
  while (element && element !== sidebarTab) {
    if (element.classList?.contains('mobile-menu-subsection')) {
      element.classList.remove('collapsed');
      // 找到控制這個 subsection 的按鈕（在父 li > a 中）
      const button = element.parentElement?.querySelector(':scope > a > .mobile-collapse-btn');
      if (button) {
        button.setAttribute('aria-expanded', 'true');
        const icon = button.querySelector('.mobile-collapse-icon');
        if (icon) {
          icon.classList.add('expanded');
        }
      }
    }
    element = element.parentElement;
  }
}

export function updateMobileAfterNavigation() {
  if (mobileMenuActive) {
    closeMobileMenu();
  }

  setTimeout(() => {
    updateMobileMenuActive();
    // 重新初始化 mobile menu toggles 但不重複綁定主按鈕
    initMobileMenuToggles();
    // 執行自動展開
    expandToCurrentPageMobile();
  }, 100);
}