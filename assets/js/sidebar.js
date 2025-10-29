import { getCurrentSection } from './utils/url.js';

let previousSection = getCurrentSection();

export function initSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;

  sidebar.removeEventListener('click', handleClick);
  sidebar.addEventListener('click', handleClick);

  updateActiveLinks();
  expandToCurrentPage();
}

export function updateSidebarAfterNavigation() {
  const currentSection = getCurrentSection();

  if (previousSection !== currentSection) {
    resetSidebar();
  }

  updateActiveLinks();
  expandToCurrentPage();
  previousSection = currentSection;
}

function handleClick(e) {
  const button = e.target.closest('.collapse-btn');
  if (!button) return;

  e.preventDefault();
  e.stopPropagation();

  // 使用 DOM 結構判斷：找到按鈕所在的 <a> 標籤的父 <li>，然後找其中的 .sidebar-subsection
  const link = button.closest('a');
  const listItem = link?.parentElement;
  const target = listItem?.querySelector('.sidebar-subsection');
  
  if (!target) return;

  const isExpanded = button.getAttribute('aria-expanded') === 'true';

  target.classList.toggle('collapsed', isExpanded);
  button.setAttribute('aria-expanded', !isExpanded);

  const icon = button.querySelector('.collapse-icon');
  if (icon) icon.classList.toggle('expanded', !isExpanded);
}

function resetSidebar() {
  document.querySelectorAll('.sidebar .sidebar-subsection').forEach(section => {
    section.classList.add('collapsed');

    const parentLi = section.parentElement;
    const link = parentLi?.querySelector(':scope > a');
    const button = link?.querySelector('.collapse-btn');

    if (button) {
      button.setAttribute('aria-expanded', 'false');
      button.querySelector('.collapse-icon')?.classList.remove('expanded');
    }
  });
}

function updateActiveLinks() {
  document.querySelectorAll('.sidebar a').forEach(link => {
    link.classList.remove('active');
  });

  document.querySelectorAll('.sidebar .active-section').forEach(section => {
    section.classList.remove('active-section');
  });

  const currentPath = window.location.pathname;
  const currentLink = document.querySelector(`.sidebar a[href="${currentPath}"]`);
  if (!currentLink) return;

  currentLink.classList.add('active');

  let parent = currentLink.closest('.sidebar-subsection');
  while (parent) {
    parent.classList.add('active-section');
    parent = parent.parentElement.closest('.sidebar-subsection');
  }
}

function expandToCurrentPage() {
  const currentLink = document.querySelector(`.sidebar a[href="${window.location.pathname}"]`);
  if (!currentLink) return;

  // 展開當前鏈接本身控制的 subsection（如果有按鈕）
  const ownButton = currentLink.querySelector('.collapse-btn');
  if (ownButton) {
    expandSection(ownButton);
  }

  // 展開所有父層級的 .sidebar-subsection
  let element = currentLink.parentElement;
  while (element) {
    if (element.classList?.contains('sidebar-subsection')) {
      element.classList.remove('collapsed');
      // 找到控制這個 subsection 的按鈕（在父 li > a 中）
      const button = element.parentElement?.querySelector(':scope > a > .collapse-btn');
      if (button) expandSection(button);
    }
    element = element.parentElement;
  }
}

function expandSection(button) {
  // 使用 DOM 結構判斷：找到按鈕所在的 <a> 標籤的父 <li>，然後找其中的 .sidebar-subsection
  const link = button.closest('a');
  const listItem = link?.parentElement;
  const section = listItem?.querySelector('.sidebar-subsection');
  
  if (section) section.classList.remove('collapsed');
  button.setAttribute('aria-expanded', 'true');
  button.querySelector('.collapse-icon')?.classList.add('expanded');
}