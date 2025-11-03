// We need to register mermaid to swup, so we need to check mermaid exists anyway
// If loaded at the body ends, updateMermaidTheme either early return with mermaid exist check
// or raises element not found error. So we just load it base on the element detection
let mermaidLoaded = false;
let themeDelegation = null;
let mediaQueryListener = null;

export function initTheme() {
  if (themeDelegation) return;

  themeDelegation = window.app.swup.delegateEvent("#theme-toggle, #mobile-theme-toggle", "click", () => {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateMermaidTheme();
  });

  mediaQueryListener = (event) => {
    if (!localStorage.getItem("theme")) {
      document.documentElement.classList.toggle("dark", event.matches);
      updateMermaidTheme();
    }
  };

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", mediaQueryListener);
}

export function updateThemeOnPageChange() {
  updateMermaidTheme();
}

export function initMermaid() {
  const diagrams = document.querySelectorAll(".mermaid");
  if (diagrams.length === 0) return;

  for (const element of diagrams) {
    if (!element.getAttribute("data-graph")) {
      element.setAttribute("data-graph", element.textContent.trim());
    }
  }

  if (mermaidLoaded && typeof mermaid !== "undefined") {
    updateMermaidTheme();
    return;
  }

  const script = document.createElement("script");
  script.type = "module";
  script.textContent = `
    import mermaidLib from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
    import elk from 'https://cdn.jsdelivr.net/npm/@mermaid-js/layout-elk@0.2.0/dist/mermaid-layout-elk.esm.min.mjs';
    window.mermaid = mermaidLib;
    if (mermaidLib.registerLayoutLoaders) {
      mermaidLib.registerLayoutLoaders(elk);
    }
    window.dispatchEvent(new Event('mermaid-loaded'));
  `;
  document.head.appendChild(script);

  window.addEventListener(
    "mermaid-loaded",
    () => {
      mermaidLoaded = true;
      updateMermaidTheme();
    },
    { once: true },
  );
}

export function updateMermaidTheme() {
  const diagrams = document.querySelectorAll(".mermaid");
  if (diagrams.length === 0) return;
  if (!mermaidLoaded || typeof mermaid === "undefined") return;

  const isDark = document.documentElement.classList.contains("dark");
  mermaid.initialize({
    theme: isDark ? "dark" : "default",
    startOnLoad: false,
  });

  for (const element of diagrams) {
    const originalGraph = element.getAttribute("data-graph");
    if (!originalGraph) continue;

    element.removeAttribute("data-processed");
    element.innerHTML = "";
    element.textContent = originalGraph;
    mermaid.run({ nodes: [element] });
  }
}
