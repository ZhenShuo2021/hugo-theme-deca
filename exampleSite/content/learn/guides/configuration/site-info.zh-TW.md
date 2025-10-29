---
title: 網站資訊
description: 配置 Deca 主題的網站基本資訊，包含網站標題、語言設定、Logo 圖片、社群媒體連結、頁尾版權資訊，以及主頁佈局設定。完整的網站識別元素配置指南。
weight: 10
---

# 網站資訊

Deca 提供多種自訂選項來調整主題外觀和行為。

## 基礎設定

基本網站設定：

```toml
title = '我的網站'
description = '網站描述'
languageCode = 'zh-TW'
```

## Logo 設定

配置網站 Logo：

```toml
[params.header.logo]
  light = "images/logo.png"
  dark = "images/logo-dark.png"
  alt = "網站 Logo"
  text = "網站名稱"
```

## 社群連結

添加社群媒體連結：

```toml
[[params.header.social]]
  name = "GitHub"
  url = "https://github.com/username"
  icon = '<svg>...</svg>'
```

## 頁尾設定

自訂頁尾內容：

```toml
[params.footer]
  description = "網站描述"
  copyright = "© 2024 我的網站"
```

## 主頁設定

Deca 提供配置化的主頁主題，具體設定請參照[主頁佈局參數](reference/home-params)。
