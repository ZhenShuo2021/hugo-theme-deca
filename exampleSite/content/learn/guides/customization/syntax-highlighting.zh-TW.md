---
title: 程式碼高亮
description: 自訂 Chroma 語法高亮主題
weight: 30
---

# 程式碼高亮

Deca 使用 Hugo 內建的 Chroma 語法高亮工具。透過 Hugo 的覆蓋機制，只需簡單指令即可生成並套用自訂的 Chroma 主題。

## 生成主題

首先建立 `assets/css/vendor/chroma.css`，然後使用 Hugo 指令產生主題樣式：

> 管線符號 (`|`) 只能在 Unix 系統上運作。Windows 使用者應移除管線符號後的部分，並手動在生成的檔案中添加選擇器前綴。

```bash
# 生成淺色主題
hugo gen chromastyles --style=github | sed 's/\./html:not(.dark) ./' >> assets/css/vendor/chroma.css

# 生成深色主題
hugo gen chromastyles --style=github-dark | sed 's/\./html.dark ./' >> assets/css/vendor/chroma.css
```

此指令會執行以下操作：

1. 生成 GitHub 風格的語法高亮 CSS 檔案
2. 使用 `sed` 為選擇器添加 `html:not(.dark)` 前綴
3. 將結果附加至 `assets/css/vendor/chroma.css`

Hugo 的覆蓋機制會自動以此檔案取代主題的原始檔案，完成自訂化流程。
所有可用樣式可於 [主題展示頁面](https://xyproto.github.io/splash/docs/) 查閱。

最終生成的 CSS 檔案應如下所示：

```css
/* Generated using: hugo gen chromastyles --style=tokyonight-night */

/* Background */ html.dark .bg { color:#c0caf5;background-color:#1a1b26; }
/* PreWrapper */ html.dark .chroma { color:#c0caf5;background-color:#1a1b26; }
/* ... */


/* Generated using: hugo gen chromastyles --style=gruvbox-light */

/* Background */ html:not(.dark) .bg { color:#3c3836;background-color:#fbf1c7; }
/* PreWrapper */ html:not(.dark) .chroma { color:#3c3836;background-color:#fbf1c7; }
/* ... */
```
