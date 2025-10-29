export function initTabs() {
  document.querySelectorAll('.tabs-container').forEach(initTabContainer);
}


function initTabContainer(container) {
  const buttons = container.querySelectorAll('.tab-button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const tabIndex = parseInt(button.dataset.tabIndex);
      activateTab(container, tabIndex);
    });
  });
}

function activateTab(container, activeIndex) {
  const buttons = container.querySelectorAll('.tab-button');
  const panels = container.querySelectorAll('.tab-panel');

  buttons.forEach((btn, index) => {
    if (index === activeIndex) {
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    }
  });
  
  panels.forEach((panel, index) => {
    if (index === activeIndex) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });
}