let tabDelegation = null;

export function initTabs() {
  if (tabDelegation) return;

  tabDelegation = window.app.swup.delegateEvent(".tab__button", "click", (event) => {
    const button = event.delegateTarget;
    const container = button.closest(".tab__container");
    const tabIndex = parseInt(button.dataset.tabIndex);
    activateTab(container, tabIndex);
  });
}

function activateTab(container, activeIndex) {
  const buttons = container.querySelectorAll(".tab__button");
  const panels = container.querySelectorAll(".tab__panel");

  buttons.forEach((btn, index) => {
    if (index === activeIndex) {
      btn.classList.add("tab--active");
      btn.setAttribute("aria-selected", "true");
    } else {
      btn.classList.remove("tab--active");
      btn.setAttribute("aria-selected", "false");
    }
  });

  panels.forEach((panel, index) => {
    if (index === activeIndex) {
      panel.classList.add("tab--active");
    } else {
      panel.classList.remove("tab--active");
    }
  });
}
