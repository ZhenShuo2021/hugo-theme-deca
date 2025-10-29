---
title: 主題自訂
description: 自訂主題外觀和行為
weight: 30
---

# 主題自訂

Deca 提供多種自訂選項來調整主題外觀和行為。

## 網站資訊

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
  url = "/"
```

## 社群連結

添加社群媒體連結：

```toml
[[params.header.social]]
  name = "GitHub"
  url = "https://github.com/username"
  icon = '<svg>...</svg>'
```

## 側邊欄行為

控制側邊欄預設狀態：

```toml
[params]
  sidebarCollapsed = false
```

## 頁尾設定

自訂頁尾內容：

```toml
[params.footer]
  description = "網站描述"
  copyright = "© 2024 我的網站"
```