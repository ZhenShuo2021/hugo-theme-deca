---
title: 全站參數
description: hugo.toml 中的網站配置參數
weight: 10
---

# 網站參數

這些參數在 `hugo.toml` 的 `[params]` 區塊中配置，用於控制整個網站的行為和外觀。

## 側邊欄配置

```toml
[params]
  sidebarCollapsed = false
  sidebarCachedRender = false
  [params.sidebars]
    [params.sidebars.tutorial]
      section = "tutorial"

    [params.sidebars.how-to]
      section = "how-to"
```

| 選項                    | 子選項       | 說明                            |
| --------------------- | --------- | ----------------------------- |
| `sidebarCollapsed`    |           | 控制側邊欄預設是否展開                   |
| `sidebarCachedRender` |           | 啟用快取側邊欄渲染以提升大型網站建置效能          |
| `sidebars`            | `key`     | 定義多個側邊欄配置，key 為字典標籤           |
|                       | `section` | 指定 sidebar 的根頂點（Logical path） |

### 快取側邊欄渲染

對於大型文檔網站，啟用 `sidebarCachedRender` 可以顯著提升建置效能：

- 使用 Hugo 的 `partialCached` 功能
- 移除 HTML 中的動態 active 狀態
- JavaScript 負責處理所有互動邏輯
- 每個區段使用單一快取版本
- 適合頁面數量超過 100 頁的大型網站

## 頂端頁首配置

```toml
[params.header.logo]
  light = "images/logo.png"
  dark = "images/logo-dark.png"
  alt = "Logo 替代文字"
  text = "文字 Logo"

[[params.header.social]]
  name = "GitHub"
  url = "https://github.com"
  icon = '<svg>...</svg>'
```

| 選項              | 子選項     | 說明             |
| --------------- | ------- | -------------- |
| `header.logo`   | `light` | 日間模式 Logo 圖片路徑 |
|                 | `dark`  | 夜間模式 Logo 圖片路徑 |
|                 | `alt`   | SEO 用替代文字      |
|                 | `text`  | 網站標題文字         |
|                 | `url`   | 點擊 Logo 連結     |
| `header.social` | `name`  | 社群名稱           |
|                 | `url`   | 社群連結           |
|                 | `icon`  | 社群圖示 SVG       |

## 選單參數

```toml
[[menus.main]]
  name = 'Search'
  weight = 60
  [menus.main.params]
    type = "search"
```

| 選項           | 子選項           | 說明      |
| ------------ | ------------- | ------- |
| `menus.main` | `name`        | 選單名稱    |
|              | `weight`      | 選單排序權重  |
|              | `params.type` | 標記為搜尋按鈕 |

## 底端頁腳配置

```toml
[params.footer.logo]
  text = "網站名稱"
  image = "/images/logo.svg"
  alt = "Logo 替代文字"

[params.footer]
  description = "網站描述"
  copyright = "© 2024 我的網站"

[[params.footer.columns]]
  title = "欄位標題"
  [[params.footer.columns.items]]
    name = "連結名稱"
    pageRef = "/path"
    url = "https://..."
    external = true

[[params.footer.social]]
  name = "GitHub"
  url = "https://github.com"
  icon = '<svg>...</svg>'
```

| 選項                   | 子選項     | 說明       |
| -------------------- | ------- | -------- |
| `footer.logo`        | `text`  | Logo 文字  |
|                      | `image` | Logo 圖片  |
|                      | `alt`   | SEO 替代文字 |
| `footer.description` |         | 頁尾描述文字   |
| `footer.copyright`   |         | 版權聲明     |
| `footer.columns`     | `title` | 欄位標題     |
|                      | `items` | 欄位內的連結項目 |
| `footer.social`      | `name`  | 社群名稱     |
|                      | `url`   | 社群連結     |
|                      | `icon`  | 社群圖示     |

## SEO 配置

```toml
[params]
  author = "Hugo Theme Deca Team"

[params.seo]
  default_og_image = "/images/og-default.png"
  default_twitter_image = "/images/twitter-default.png"
  google_site_verification = "your-verification-code"
  bing_site_verification = "your-verification-code"
  yandex_verification = "your-verification-code"
```

| 選項                             | 子選項 | 說明                 |
| ------------------------------ | --- | ------------------ |
| `author`                       |     | 網站作者資訊             |
| `seo.default_og_image`         |     | 預設 Open Graph 圖片   |
| `seo.default_twitter_image`    |     | 預設 Twitter Card 圖片 |
| `seo.google_site_verification` |     | Google 網站驗證碼       |
| `seo.bing_site_verification`   |     | Bing 網站驗證碼         |
| `seo.yandex_verification`      |     | Yandex 網站驗證碼       |

## Analytics 配置

```toml
[params.analytics]
  google = "G-XXXXXXXXXX"
```

| 選項          | 子選項      | 說明                       |
| ----------- | -------- | ------------------------ |
| `analytics` | `google` | Google Analytics 4 測量 ID |

## 錯誤頁面配置

```toml
[params.error404]
  title = "找不到頁面"
  description = "您要找的頁面不存在"
```

| 選項         | 子選項           | 說明       |
| ---------- | ------------- | -------- |
| `error404` | `title`       | 404 頁面標題 |
|            | `description` | 404 頁面描述 |
