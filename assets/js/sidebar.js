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
  // Clear all active states
  document.querySelectorAll('.sidebar .active, .sidebar .active-section').forEach(el => {
    el.classList.remove('active', 'active-section');
  });

  const currentLink = document.querySelector(`.sidebar a[href="${window.location.pathname}"]`);
  if (!currentLink) return;

  currentLink.classList.add('active');

  // Mark parent label as active if exists
  const parentLabel = currentLink.closest('.sidebar-item-collapsible');
  if (parentLabel) parentLabel.classList.add('active');

  // Mark all parent subsections as active
  let parent = currentLink.closest('.sidebar-subsection');
  while (parent) {
    parent.classList.add('active-section');
    parent = parent.parentElement.closest('.sidebar-subsection');
  }
}

function expandToCurrentPage() {
  const currentLink = document.querySelector(`.sidebar a[href="${window.location.pathname}"]`);
  if (!currentLink) return;

  // If current link is in a collapsible label, expand it
  const parentLabel = currentLink.closest('.sidebar-item-collapsible');
  if (parentLabel) {
    const checkbox = document.getElementById(parentLabel.getAttribute('for'));
    if (checkbox) checkbox.checked = true;
  }

  // Expand all parent subsections
  let element = currentLink;
  while (element) {
    const subsection = element.closest('.sidebar-subsection');
    if (subsection) {
      const checkbox = subsection.parentElement.querySelector('.sidebar-toggle');
      if (checkbox) checkbox.checked = true;
      element = subsection.parentElement;
    } else {
      break;
    }
  }
}