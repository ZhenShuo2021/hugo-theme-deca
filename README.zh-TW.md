# Hugo Theme Deca

[英文](https://github.com/zhenshuo2021/hugo-theme-deca/blob/main/README.md)

Deca 是一個為 [Hugo](https://gohugo.io/) 打造的現代化文檔主題，支援無重載換頁（AJAX）和多側邊欄（multi-sidebar）功能，提供流暢且可擴展的文檔瀏覽體驗。

![screenshot](./images/deca-screenshot.png)

## 核心特性

* 內建 [Swup](https://swup.js.org/) 和[頁面預載功能](https://swup.js.org/plugins/preload-plugin/)，提供絲滑流暢的閱讀體驗
* 三欄式文檔佈局，提供明確的導覽與上下文位置
* 支援多個側邊欄，適用於大型或多模組文檔結構
* 基於 Hugo 高效構建，內部快取頁面渲染結果，支援快速構建大型文檔網站
* JS 最小化，無 JS 環境網站也可正常瀏覽
* CSS 最小化，檔案小於 10KB
* 易於自訂，採用 Infima CSS 變數系統
* 核心資源打包於主題內，無須 CDN，無外部網路也可正常運行

## 為什麼選擇 Deca

Deca 整合無重載換頁的 Swup 以及頁面預載功能，提供如同單頁應用網站的絲滑瀏覽體驗，頁面切換無白屏閃爍、無等待延遲，同時保留靜態網站的 SEO 優勢與載入速度。

除此之外，Deca 大量使用快取功能完整發揮 Hugo 高效的優勢，這是目前 Hugo 生態所有文檔網站都不具備的能力。Deca 不只快取側邊欄數據，讓網站構建時只須讀取快取不需重複遍歷；原生[跳過摺疊的 sidebar](https://github.com/facebook/docusaurus/pull/5136) 以加速構建；針對大型網站，Deca 支援 `sidebarCachedRender` 選項，進一步優化構建效能。

## 授權條款

本專案 MIT 授權，在改編或衍生作品中，請保留原作者 credit。
