---
title: "建立 Hugo Theme Deca 的原因和思路"
date: '2025-10-29T06:17:21+08:00'
---

# 建立 Hugo Theme Deca 的原因和思路

Deca (ten) 是一個 [Hugo](https://gohugo.io/) 文檔風格的主題，特色是 Hugo 生態系中第一個整合無重載換頁 (AJAX) 功能的文檔主題。

## 動機

當我用過一輪各種不同的 SSG 產生器後，我認知到文檔網站的使用者體驗最基本的就是**三行式佈局加上 AJAX 導航**，三行式讓你完整清晰的知道自己身處何處，而 AJAX 則是在各個頁面跳轉時不需重渲染整個 DOM，由此保持畫面的穩定，進而提供流暢的閱讀體驗。

有經驗的讀者看完這句話應該就知道我說的就是 [Docusaurus](https://docusaurus.io/) 和 [Vitepress](https://vitepress.dev/)，對比其他不支援的文檔網站，這種閱讀體驗可以毫不誇張的說是降維打擊。於是我就在想，如果我們能在 Hugo 完成整合 AJAX 的文檔網站，是否就能做到一樣的事，並且支援超大系統，小型系統則是快上加快呢？

由於提交 PR 終究是在幫別人的專案打工，也不一定會被接受，因此就有了 Deca 這個專案。讀者應該也會發現 Deca 的佈局跟 Docusaurus 不能說是非常相似，應該說幾乎完全「借鑑」。

## 市場調查

Hugo 最大的特色就是速度很快，且有能力構建規模化的網站，比如說這篇文章說到 Hugo [有能力構建 120 萬頁的館藏網站](https://discourse.gohugo.io/t/v-a-explore-the-collections-over-1-million-pages-generated-by-hugo/33227)，而 Docusaurus 在[兩萬頁的 MDX 會構建失敗](https://github.com/facebook/docusaurus/discussions/11259)。然而 Hugo 卻一直沒有一個好的文檔主題，讓用戶可以滑順的閱讀，我的要求並不高，至少不能閃爍，最好有 AJAX 功能，讀者可以觀察現存的 Hugo 文檔主題，即使是最知名的幾個仍然有畫面閃爍問題，而 AJAX 更是沒有任何現存的文檔主題支援。

## 設計思路

體驗過幾個 Hugo 主題後，我總結了一些 Hugo 主題的設計思路並且應用在 Deca 專案中。

1. **避免 Tailwind**

    Hugo 的核心特色還有**單一檔案運行**以及**模板自動覆蓋**功能，當用戶在同樣的相對路徑建立檔案，就會自動覆蓋主題相對路徑的檔案。這讓用戶可以輕鬆自定義，還能在自定義後能輕鬆跟隨上游更新。

    然而 Tailwind 和此邏輯衝突，因為模板和 CSS 耦合，用戶自定義就無法使用上游沒有構建的 Tailwind classes。Hugo 內建有 TailwindCSS 方法，然而還是要手動安裝 JS 世界的工具，既然如此，那為何不直接用 JS 世界的 SSG 就好了，要這樣自找麻煩呢？

2. **Battery not included**

    比起其他 SSG 工具，Hugo 的處境比較特殊一點。

    Docusaurus/Vitepress 等背後都有金主支援，因此有更可靠的維護，Hexo/Hugo 則屬於另一種，只提供引擎，主題由社群建立，因此所有開源主題基本上都是個人專案，沒有穩定維護，因此你常常可以看到半小時就可以解決的簡單 issue 卻存在了兩年都沒人解決。

    Battery not included 就是把專案維持在精簡可控的範圍，主題本身維護輕鬆，並且設計讓下游容易自定義。

3. **CSS 設計**

    以我的觀察，Hugo 用戶絕大多數不是前端開發者，為此，在 CSS 設計一開始考慮的方向就是**簡單、原生、可自訂**，所以方法很簡單，沒有 material design 顏色自訂，沒有 Tailwind，就是最簡單的原生 CSS。顏色自定義更粗暴，讀者已經知道本專案大量借鑑 Docusaurus，因此直接使用 Infima 色彩，甚至沒有 secondary color（注意色），一套顏色搞定所有東西。

    使用者則是可以使用 Docusaurus 提供的[色彩生成器](https://docusaurus.io/docs/styling-layout#theme-class-names)輕鬆的自定義網站主題。

4. **API 使用**

    很多 Hugo 主題使用了官方的 API，然而我發現一個很奇妙的問題，由於 Hugo 模板要怎麼做實際上是看主題開發者如何調用的，因此使用文檔上的設定可能因為主題開發者的使用方式出現完全不同的結果，這可能不是主題開發者有意為之，而是隨著時間推移官方用法出現改變。Deca 注意到了這件事，因此所有自訂參數全部使用 Hugo 預留的 Params 入口設定，從根本免去此問題。

    最重要的是 Deca 在基礎設定上嚴格遵守 Hugo 說明，在參數設定上照抄現有工具，讓用戶能無縫銜接不需重新理解。

5. **除錯能力**

    由於前面提到的 API 使用，以及 Hugo 文檔的清晰度問題，很多 Hugo 用戶常常遇到配置問題。因此 Deca 帶有除錯入口，用戶可以使用環境 `HUGO_DEBUG_SIDEBAR=true hugo server` 啟用除錯功能。

## 成果

透過 Hugo 架構，我們可以享受他帶來的「單 binary，超快速，可覆蓋」的優勢，以及比起其他 SSG 支援更豐富的 [URL 自定義](https://gohugo.io/content-management/urls/)功能，並且有著簡單自訂、純 HTML/CSS/JS 的 Hugo 優勢，無須學習多變的 CSS 框架，更不用理解複雜的 React/Vue，以及最重要的 AJAX 整合，享受順暢的瀏覽體驗。

## 效能測試

實際測試 [4000 頁的網站](https://github.com/zachleat/bench-framework-markdown)，Deca 渲染速度如下*：

|   | Default | sidebarCachedRender | vs Deca cached |
| --- | --- | --- | :---: |
| Deca | 187.7s | 24.3s | — |
| Docusaurus 3.9.2** | 539.6s | — | 22× slower |
| Hugo Doc theme A | Error | — | — |
| Hugo Doc theme B | 382.4s | — | 15.7× slower |
| Hugo Doc theme C*** | 121.8s | — | 5× slower |

這個主要重點測試了**網站框架**和**基本文字渲染**的速度，以大型文檔網站為例，由於頁面大多都是文字，因此這個測試應該能算是有參考價值。在長文件中，更多的效能瓶頸會來自 goldmark（Hugo 使用的 markdown to HTML 工具），而 Go 語言的效能值得信賴。

<div style="font-size: 90%;">

* *: Tested on M1 MacBook Pro 8G RAM at 2025/11/10.
* **: With Docusaurus Faster `experimental_faster: true`.
* ***: This theme doesn't have mobile sidebar. Without mobile sidebar, Deca takes 106s to build the site.

</div>

## 效能瓶頸{#performance-bottle-neck}

Deca 將 sidebar 資料蒐集快取處理，因此所有 sidebar 的資料蒐集都是簡單查表，因此效能瓶頸只在 sidebar 渲染上，由於每個頁面都要走訪該 sidebar 的頁面，時間複雜度是 O(N²)。

現在把 sidebar 改為只渲染已經展開的頁面，被摺疊頁面不會再渲染，但是問題依舊存在，為了從根本解決問題，Deca 內建快取 sidebar 渲染功能，只要在 `hugo.toml` 啟用 `sidebarCachedRender = true`，即使是大型文檔網站也不用擔心效能問題。

## Why Not Deca

除非這個專案受到關注，否則他應該短時間內都不會再更新，主要原因很簡單，因為 Deca 開發者本人也不是前端開發者。

次要原因則是 Hugo 的限制以及 Rust 的崛起。Hugo 由於 Go 模板語言的特性，實際上在開發時是用後端語言開發前端頁面，因此開發者反而要兼顧兩者語言的特性，Hugo 的問題請看 Bootstrap 從 Hugo 遷移到 Astro 的心得：

1. [Docs: migration from Hugo to Astro #41251](https://github.com/twbs/bootstrap/pull/41251)
2. [\[Prototype\] Migrate docs from Hugo to Astro 🚀 #38319](https://github.com/twbs/bootstrap/pull/38319)

就算不像他們那麼大的開發能力，以任何開發過 Hugo 一週的開發人員，都會因為模板難以除錯感到困擾，就我來說，我的困擾是 return 模板無法印出任何東西，在寫 sidebar-init 模板時，由於要處理巢狀目錄要寫遞迴，但是卻無法除錯遞迴，這光想就讓人覺得可怕。

其次，[Hugo 文檔的問題](https://discourse.gohugo.io/t/thoughts-about-hugos-documentation/55837)也需要解決，雖然我已經看的很熟能快速找到問題，但是一般用戶還是難以從官方文檔取得答案。

最重要的是多數文檔需要的 versioning 功能，在 Hugo 已經苦等將近十年：

1. [Documentation site: versioning](https://discourse.gohugo.io/t/documentation-site-versioning/5898)
2. [How to Doc Variations](https://discourse.gohugo.io/t/how-to-doc-variations/19165)
3. [How to make Hugo working with multiple versions](https://discourse.gohugo.io/t/how-to-make-hugo-working-with-multiple-versions/26910)
4. [How to display different version docs when user switch between different document versions？](https://discourse.gohugo.io/t/how-to-display-different-version-docs-when-user-switch-between-different-document-versions/47841/2)

有一些複雜的 workaround 可以解決，但是終究是 workaround 不是乾淨的正式解決方案，雖然在近期[可能會得到支援](https://github.com/gohugoio/hugo/pull/13679)，但是以結論來說，目前還不支援，而 Deca 是文檔專案，缺乏版本功能那麼似乎沒必要繼續投入。

壓倒駱駝的最後一根稻草是 Rust，[Docusaurus Faster](https://github.com/facebook/docusaurus/issues/10556) 使用 Rspack 加速，已經將構建速度提升 2-5 倍。如果連 Docusaurus 在未來都有能力支援大型文檔，又有臉書在背後支持，那麼 Deca 的存在意義似乎不復存在。

壓倒駱駝的更多稻草是，我們在開發前端專案，然而 Hugo 要整合前端工具卻讓整個邏輯有點割裂。比如說用戶想要啟用 AVIF，因為 Go 沒有原生的 AVIF 工具，因此 Hugo 不打算整合。這是個合理且明智的決定，但是對用戶而言不是好消息。同樣的，我覺得 Discourse 顯示 note 的方式很好，免去頁面跳轉的困擾，但是 Hugo 不提供 [footnote render hook](https://github.com/gohugoio/hugo/issues/7291)。

總結來說 Hugo 專案在發展蓬勃的前端環境中，優勢會是比較獨特的利基點，綜上所述，Deca 專案暫時不會更新，因為沒有合適的原因值得投入資源。

> 不過即使這麼說，Deca 即使只完成了 POC 階段，但光是支援 AJAX 就已經讓他比 Hugo 生態系的競爭對手更具競爭力。
