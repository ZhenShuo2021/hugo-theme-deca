---
title: 安裝 Deca 主題
description: 下載並設定 Hugo Theme Deca
weight: 20
---

# 安裝 Deca 主題

現在來安裝 Deca 主題並建立你的第一個網站。

## 建立新網站

首先建立一個新的 Hugo 網站：

```bash
hugo new site my-deca-site
cd my-deca-site
```

## 安裝主題

將 Deca 主題加入你的網站：

```bash
git init
git submodule add https://github.com/ZhenShuo2021/hugo-theme-deca.git themes/hugo-theme-deca
```

## 基本配置

建立基本的 `hugo.toml` 配置檔：

```toml
baseURL = 'https://example.org/'
defaultContentLanguage = 'en'
languageCode = 'en'
title = '我的文檔網站'
theme = 'hugo-theme-deca'

[params.sidebars]
  [params.sidebars.docs]
    section = "docs"
    title = "文檔"

[menus]
  [[menus.main]]
    name = '文檔'
    pageRef = '/docs'
    weight = 10
```

## 建立內容

建立一些文檔頁面：

```bash
hugo new docs/_index.md
hugo new docs/post1.md
hugo new docs/post2.md
```

## 下一步

主題安裝完成後，繼續 [啟動開發伺服器](../development-server)。