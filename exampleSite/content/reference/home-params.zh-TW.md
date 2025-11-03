---
title: 主頁佈局參數
description: 主頁的的參數系統
weight: 30
---

# 主頁佈局參數

Deca 提供開箱即用的配置化主頁功能，透過這些設定，你可以輕鬆自訂主頁。這些設定應該被配置在 `content/_index.md` 的 front matter 中。

## 參數

```yaml
---
hero:
  title: "網站標題"
  tagline: "網站標語"
  actions:
    - text: "開始使用"
      pageRef: "/learn/tutorials"
      primary: true

features:
  - icon: "⚡"
    title: "快速"
    description: "快速上手與操作"
  - icon: "💡"
    title: "智能"
    description: "智慧化功能與推薦"

sections:
  - title: "最新文章"
    description: "展示近期文章與內容"
    items:
      - title: "文章一"
        description: "文章描述一"
        pageRef: "/articles/1"
      - title: "文章二"
        description: "文章描述二"
        pageRef: "/articles/2"

  - title: "熱門教程"
    description: "精選熱門教學資源"
    items:
      - title: "教學一"
        description: "教學描述一"
        pageRef: "/tutorials/1"
      - title: "教學二"
        description: "教學描述二"
        pageRef: "/tutorials/2"
---
```

| 選項       | 子選項        | 說明                    |
|------------|---------------|-----------------------------|
| `hero`     | `title`       | 英雄區塊主標題                 |
|            | `tagline`     | 英雄區塊副標題或標語              |
|            | `actions`     | 按鈕列表，每個按鈕可配置文字、連結與樣式    |
| `features` | `icon`        | 特徵圖示                    |
|            | `title`       | 特徵標題                    |
|            | `description` | 特徵描述                    |
| `sections` | `title`       | 區塊標題                    |
|            | `description` | 區塊描述                    |
|            | `items`       | 區塊內的項目列表，每個項目包含標題、描述與連結 |
| `items`    | `title`       | 項目標題                    |
|            | `description` | 項目描述                    |
|            | `pageRef`     | 頁面連結                    |
