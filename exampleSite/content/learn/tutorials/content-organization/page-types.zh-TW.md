---
title: 內容管理
description: 本頁說明如何管理 Hugo 專案的內容，將介紹 Hugo 的頁面類型和 Deca 兩種模板的使用方式。
weight: 10
---

# 內容管理

本頁說明如何管理 Hugo 專案的內容，將介紹 Hugo 的頁面類型和 Deca 兩種模板的使用方式。

## 頁面類型

頁面類型是 Hugo 專案的基本結構，理解頁面類型讓您的專案可以如預期渲染。

### 單頁 (Single Page)

一般的內容頁面，在[基礎模板](https://gohugo.io/templates/types/)中以 page.html 渲染，和子葉包裹 ([leaf Bundle](https://gohugo.io/content-management/page-bundles/#leaf-bundles))是對應的觀念。

```txt
content/
  docs/
    my-post/
      index.md      ← 單頁
      image.png     ← 單頁的頁面資源
```

### 列表頁 (List Page)

用於顯示子頁面的列表頁，在基礎模板中以 section.html 渲染，和分支包裹 ([branch bundle](https://gohugo.io/content-management/page-bundles/#branch-bundles))是對應的觀念。

```txt
content/
  docs/
    tutorial/
      _index.md     ← 列表頁
      image.png     ← 列表頁的頁面資源
```

> [!NOTE]
> 如果一個目錄還包含其他頁面，就不應該將 markdown 命名為 `index.md`。

## Deca 模板

Deca 使用 [Hugo 新模板系統](https://gohugo.io/templates/new-templatesystem-overview/)，會自動匹配路徑並且選擇對應的模板渲染。預設情況下所有模板使用文檔方式渲染，`content/blog` 目錄底下的文章則以 blog layout 渲染。

如果路徑不是 blog 且仍想使用 blog layout，請在該路徑頂層的 `_index.md` 加上此 front matter:

```md
---
title: Another blog section
cascade:
  type: blog
---
```
