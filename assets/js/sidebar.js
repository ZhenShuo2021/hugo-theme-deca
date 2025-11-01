import { getCurrentSection } from './utils/url.js';

let previousSection = getCurrentSection();

export function initSidebar() {
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

function resetSidebar() {
  // Reset all checkboxes to unchecked state
  document.querySelectorAll('.sidebar .sidebar-toggle').forEach(checkbox => {
    checkbox.checked = false;
  });
}

function updateActiveLinks() {
  document.querySelectorAll('.sidebar a').forEach(link => {
    link.classList.remove('active');
  });

  document.querySelectorAll('.sidebar .sidebar-item-collapsible').forEach(label => {
    label.classList.remove('active');
  });

  document.querySelectorAll('.sidebar .active-section').forEach(section => {
    section.classList.remove('active-section');
  });

  const currentPath = window.location.pathname;
  const currentLink = document.querySelector(`.sidebar a[href="${currentPath}"]`);
  if (!currentLink) return;

  currentLink.classList.add('active');

  // If the current link is inside a collapsible item, mark the label as active
  const parentLabel = currentLink.closest('.sidebar-item-collapsible');
  if (parentLabel) {
    parentLabel.classList.add('active');
  }

  let parent = currentLink.closest('.sidebar-subsection');
  while (parent) {
    parent.classList.add('active-section');
    parent = parent.parentElement.closest('.sidebar-subsection');
  }
}

function expandToCurrentPage() {
  const currentLink = document.querySelector(`.sidebar a[href="${window.location.pathname}"]`);
  if (!currentLink) return;

  // Expand all parent sections by checking their corresponding checkboxes
  let element = currentLink.parentElement;
  while (element) {
    if (element.classList?.contains('sidebar-subsection')) {
      // Find the checkbox that controls this subsection
      const checkbox = element.parentElement?.querySelector(':scope > .sidebar-toggle');
      if (checkbox) {
        checkbox.checked = true;
      }
    }
    element = element.parentElement;
  }
}