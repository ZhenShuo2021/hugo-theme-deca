---
title: 顏色主題
description: 自訂品牌色彩和深色模式
weight: 20
---

# 顏色主題

Deca 提供完整的顏色自訂系統，支援品牌色彩和深色模式。

借鑑 Docusaurus 的樣式系統，採用相同的變數命名規範和架構，讓用戶可以輕鬆建立符合 WCAG-AA 標準的色彩主題。

## 自訂方式

建立 `assets/sass/_custom.scss`，並且將 [Docusaurus 主題產生器](https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima)生成的色彩系統貼上，您的 CSS 檔案應該會像這樣：

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
