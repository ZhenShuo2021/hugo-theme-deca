---
title: 安裝 Deca 主題
description: 下載並設定 Hugo Theme Deca
weight: 20
tags:
  - getting-started
---

# 安裝 Deca 主題

現在來安裝 Deca 主題並建立你的第一個網站。Deca 主題提供兩種安裝方式，請選擇其中一種即可。

## 方式一：Git Submodule（推薦）

這是官方推薦的安裝方式，適合大多數使用情境。

### 建立新網站

首先建立一個新的 Hugo 網站：

```bash
hugo new site my-deca-site
cd my-deca-site
```

### 安裝主題

將 Deca 主題加入你的網站：

```bash
git init
git submodule add https://github.com/ZhenShuo2021/hugo-theme-deca.git themes/hugo-theme-deca
```

### 基本配置

建立基本的 `hugo.toml` 配置檔：

```toml
baseURL = 'https://example.org/'
defaultContentLanguage = 'en'
languageCode = 'en'
title = '我的文檔網站'
theme = 'hugo-theme-deca'

[outputFormats.sidebarInit]
  mediaType = "application/json"
  baseName = "sidebar-init"
  isPlainText = true
  notAlternative = true
  weight = 1

[outputs]
  home = ['sidebarInit', 'html']

[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true
  [markup.tableOfContents]
    startLevel = 2
    endLevel = 4
    ordered = false
  [markup.highlight]
    noClasses = false

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

## 方式二：Hugo Module

**注意**：使用 Hugo Module 需要在電腦上安裝 Go（版本 1.20 或以上）。

### 建立新網站

首先建立一個新的 Hugo 網站：

```bash
hugo new site my-deca-site
cd my-deca-site
```

### 初始化模組

初始化 Hugo Module：

```bash
hugo mod init github.com/yourusername/my-deca-site
```

### 基本配置

建立基本的 `hugo.toml` 配置檔，加入模組設定：

```toml
baseURL = 'https://example.org/'
defaultContentLanguage = 'en'
languageCode = 'en'
title = '我的文檔網站'

[module]
  [[module.imports]]
    path = "github.com/ZhenShuo2021/hugo-theme-deca"

[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true
  [markup.tableOfContents]
    startLevel = 2
    endLevel = 4
    ordered = false
  [markup.highlight]
    noClasses = false

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

### 下載模組

執行以下指令下載主題模組：

```bash
hugo mod get
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
