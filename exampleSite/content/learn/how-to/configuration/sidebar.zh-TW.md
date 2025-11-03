---
title: 側邊欄
description: 配置多個側邊欄
weight: 30
---

# 側邊欄設置

## 基本設置

在 `hugo.toml` 中定義側邊欄：

```toml
[params.sidebars]
  sidebarCollapsed = false
  [params.sidebars.docs]
    section = "docs"

  [params.sidebars.how-to]
    section = "how-to"
```

## 側邊欄配置

每個側邊欄需要指定：

- `section`: 該 sidebar 的根，應設定對應的資料夾名稱

> [!NOTE]
> 「資料夾名稱」在 Hugo 的正式術語是[邏輯路徑 (logical path)](https://gohugo.io/methods/page/path/)，此設定方式的優點是避免模糊。

## 內容組織

建立對應的內容資料夾：

```txt
content/
├── docs/
│   ├── _index.md
│   └── page1.md
└── how-to/
    ├── _index.md
    └── page2.md
```

## 頁面權重

使用 `weight` 參數控制頁面在側邊欄中的順序：

```yaml
---
title: 頁面標題
weight: 10
---
```

數字越小，排序越前面，不同 page bundles 的權重獨立處理。如果頁面沒有配置權重，頁面的排序依據將按照 [Hugo 預設的排序方式](https://gohugo.io/quick-reference/glossary/#default-sort-order)。
