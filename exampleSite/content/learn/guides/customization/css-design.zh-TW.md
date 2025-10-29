---
title: CSS 設計系統
description: 了解 Deca 的 CSS 架構和變數系統
weight: 10
---

# CSS 設計系統

Deca 採用直觀易懂化的 CSS 設計系統，基於 Infima 風格的變數架構，使用者無需深入了解複雜的 CSS 架構就能輕鬆自訂主題外觀。

## 設計理念

借鑑 Docusaurus 的樣式系統，採用相同的變數命名規範和架構，讓用戶可以輕鬆建立符合 WCAG-AA 標準的色彩主題。

## 自訂方式

建立 `assets/css/custom.css`，並且將 [Docusaurus 主題產生器](https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima)生成的色彩系統貼上，您的文件應該會像這樣：

```css
:root {
    --ifm-color-primary: #2e8555;
    --ifm-color-primary-dark: #29784c;
    --ifm-color-primary-darker: #277148;
    /* ... */
}

html.dark {
    --ifm-color-primary: #25c2a0;
    --ifm-color-primary-dark: #21af90;
    --ifm-color-primary-darker: #1fa588;
    /* ... */
}
```
