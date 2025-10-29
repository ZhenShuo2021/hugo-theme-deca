---
title: 側邊欄設置
description: 配置多個側邊欄
weight: 20
---

# 側邊欄設置

## 基本設置

在 `hugo.toml` 中定義側邊欄：

```toml
[params.sidebars]
  [params.sidebars.docs]
    section = "docs"
  
  [params.sidebars.guides]
    section = "guides"
```

## 側邊欄配置

每個側邊欄需要指定：

- `section`: 對應的內容區域（資料夾名稱）

## 內容組織

建立對應的內容資料夾：

```txt
content/
├── docs/
│   ├── _index.md
│   └── page1.md
└── guides/
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

數字越小，排序越前面。