export function initSidebar() {
  updateDesktopSidebar();
  updateMobileSidebar();
  expandToCurrentPage();
}

export function updateDesktopSidebar() {
  const path = window.location.pathname;
  document.querySelectorAll(".sidebar .active").forEach((el) => {
    el.classList.remove("active");
  });

  const currentLink = document.querySelector(`.sidebar a[href="${path}"]`);
  if (!currentLink) return;

  currentLink.classList.add("active");
  const parentLabel = currentLink.closest(".sidebar-item-collapsible");
  if (parentLabel) parentLabel.classList.add("active");
}

export function updateMobileSidebar() {
  const path = window.location.pathname;

  document.querySelectorAll(".mobile-menu__link--active").forEach((el) => {
    el.classList.remove("mobile-menu__link--active");
  });

  document.querySelectorAll(`.mobile-menu__link[href="${path}"]`).forEach((link) => {
    link.classList.add("mobile-menu__link--active");
    link.closest(".mobile-menu__sidebar-item-collapsible")?.classList.add("mobile-menu__link--active");
  });
}

function expandToCurrentPage() {
  const currentLink = document.querySelector(`.sidebar a[href="${window.location.pathname}"]`);
  if (!currentLink) return;

  // If current link is in a collapsible label, expand it
  const parentLabel = currentLink.closest(".sidebar-item-collapsible");
  if (parentLabel) {
    const checkbox = document.getElementById(parentLabel.getAttribute("for"));
    if (checkbox) checkbox.checked = true;
  }

  // Expand all parent subsections
  let element = currentLink;
  while (element) {
    const subsection = element.closest(".sidebar-subsection");
    if (subsection) {
      const checkbox = subsection.parentElement.querySelector(".sidebar-toggle");
      if (checkbox) checkbox.checked = true;
      element = subsection.parentElement;
    } else {
      break;
    }
  }
}
