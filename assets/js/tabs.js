let tabDelegation = null;

export function initTabs() {
  if (tabDelegation) return;

  tabDelegation = window.app.swup.delegateEvent(".tab-button", "click", (event) => {
    const button = event.delegateTarget;
    const container = button.closest(".tabs-container");
    const tabIndex = parseInt(button.dataset.tabIndex);
    activateTab(container, tabIndex);
  });
}

function activateTab(container, activeIndex) {
  const buttons = container.querySelectorAll(".tab-button");
  const panels = container.querySelectorAll(".tab-panel");

  buttons.forEach((btn, index) => {
    if (index === activeIndex) {
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
    } else {
      btn.classList.remove("active");
      btn.setAttribute("aria-selected", "false");
    }
  });

  panels.forEach((panel, index) => {
    if (index === activeIndex) {
      panel.classList.add("active");
    } else {
      panel.classList.remove("active");
    }
  });
}
