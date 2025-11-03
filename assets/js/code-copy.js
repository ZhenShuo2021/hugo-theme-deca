const COPY_ICON =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
const SUCCESS_ICON =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20,6 9,17 4,12"></polyline></svg>';

async function copyToClipboard(text) {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    const success = document.execCommand("copy");
    document.body.removeChild(textArea);
    return success;
  } catch {
    return false;
  }
}

function showSuccess(button) {
  const original = button.innerHTML;
  button.innerHTML = SUCCESS_ICON;
  button.classList.add("copied");
  setTimeout(() => {
    button.innerHTML = original;
    button.classList.remove("copied");
  }, 2000);
}

function addCopyButton(pre) {
  if (pre.querySelector(".code-copy-btn")) return;

  const wrapper = document.createElement("div");
  wrapper.className = "code-block-wrapper";
  pre.parentNode.insertBefore(wrapper, pre);
  wrapper.appendChild(pre);

  const button = document.createElement("button");
  button.className = "code-copy-btn";
  button.innerHTML = COPY_ICON;
  button.title = "Copy code";

  button.onclick = async () => {
    const code = pre.querySelector("code");
    if (code && (await copyToClipboard(code.textContent))) {
      showSuccess(button);
    }
  };

  wrapper.appendChild(button);
}

export function initCodeCopy() {
  document.querySelectorAll("pre code").forEach((code) => {
    addCopyButton(code.parentElement);
  });
}
