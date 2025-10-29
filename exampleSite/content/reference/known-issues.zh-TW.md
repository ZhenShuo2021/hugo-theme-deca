---
title: 已知問題
description: Deca 目前的已知問題整理
weight: 1000
---

# 已知問題

這些問題暫時不會修復，詳情請見 [Why Not Deca](blog/create-deca/#why-not-deca)，不過還是把問題記錄下來。

1. 行動版切換的「Contents」分頁無法被 Swup 更新。
2. 部分頁面的 Swup SPA 結果與原始 HTML 不一致。
3. 沒有目錄的章節頁面被 `toc.js` 錯誤地渲染了目錄。
4. 應統一 CSS，以確保不同頁面類型之間的項目位置一致。
5. 需要更好的方法來處理條件載入的 HTML 與 Swup 之間的互動，例如 `hasShortCode` 方法。
6. `sidebar.html` 應以更符合 Hugo 原生方式的方式進行渲染。
7. 需要一個 JavaScript 檔案來自動摺疊側邊欄選單，詳見 [performance bottleneck](blog/create-deca/#performance-bottle-neck)。
