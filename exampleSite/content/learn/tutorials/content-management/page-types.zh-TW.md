---
title: 頁面類型
description: Hugo 的三種基本頁面類型
weight: 10
---

# 頁面類型

Hugo 有兩種基本頁面類型：

## 單頁 (Single Page)

普通內容頁面，如文章或文檔頁面，在[基礎模板](https://gohugo.io/templates/types/)中以 page.html 渲染，和子葉包裹 ([leaf Bundle](https://gohugo.io/content-management/page-bundles/#leaf-bundles))是對應的觀念。

```txt
content/
  docs/
    my-post/
      index.md      ← 單頁
      image.png     ← 單頁的頁面資源
```

## 列表頁 (List Page)

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
