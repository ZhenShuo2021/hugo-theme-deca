---
title: 顏色主題
description: 自訂品牌色彩和深色模式
weight: 20
---

# 顏色主題

Deca 提供完整的顏色自訂系統，支援品牌色彩和深色模式。

## 主色系自訂

Deca 採用 Infima 風格的主色系變數：

```css
:root {
  --ifm-color-primary: #2e8555;        /* 主色 */
  --ifm-color-primary-dark: #29784c;   /* 深色變化 */
  --ifm-color-primary-darker: #277148; /* 更深變化 */
  --ifm-color-primary-darkest: #205d3b;/* 最深變化 */
  --ifm-color-primary-light: #33925d;  /* 淺色變化 */
  --ifm-color-primary-lighter: #359962;/* 更淺變化 */
  --ifm-color-primary-lightest: #3cad6e;/* 最淺變化 */
}
```

## 快速自訂

只需修改主色，其他變化會自動應用：

```css
:root {
  --ifm-color-primary: #your-brand-color;
}
```

## 深色模式

Deca 自動支援深色模式，使用 `html.dark` 選擇器：

```css
html.dark {
  --ifm-color-primary: #25c2a0;
  --bg-primary: var(--color-neutral-900);
  --text-primary: var(--color-neutral-100);
}
```

## 語意化顏色

使用語意化變數確保一致性：

```css
:root {
  --color-accent: var(--ifm-color-primary);
  --text-primary: var(--color-neutral-800);
  --bg-primary: #ffffff;
  --border-color: var(--color-neutral-300);
}
```

## 自訂方式

在你的 CSS 檔案中覆寫變數：

```css
/* 自訂主題色彩 */
:root {
  --ifm-color-primary: #ff6b6b;
}

html.dark {
  --ifm-color-primary: #ff8e8e;
}
```

這種方式讓你能輕鬆建立符合品牌風格的主題，同時保持深色模式的一致性。