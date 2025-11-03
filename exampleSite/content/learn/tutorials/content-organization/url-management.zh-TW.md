---
title: URL 管理
description: 目錄結構與 URL 的對應關係
weight: 20
---


Hugo 的目錄結構直接對應到網站 URL。

```txt
content/
  _index.md           → /
  about.md            → /about/
  docs/
    _index.md         → /docs/
    getting-started.md → /docs/getting-started/
```

支援任意深度的巢狀結構：

```txt
content/
  docs/
    tutorial/
      basics/
        _index.md     → /docs/tutorial/basics/
        setup.md      → /docs/tutorial/basics/setup/
```

- `_index.md` - 目錄的列表頁
- `index.md` - 葉子頁面 (bundle)
- `filename.md` - 普通單頁

這是 Hugo 非常強大的功能，很多其他 SSG 都做不到同樣的事情。

> [!NOTE]
> Hugo-theme-deca 部分功能基於判斷路徑匹配，因此修改可能會導致部分功能異常。

在 hugo.toml 中設定 URL 規則，全部的規則請見[文檔 Configure permalinks](https://gohugo.io/configuration/permalinks/)。最推薦的是部分或全部基於資料夾目錄，因為這最符合網頁邏輯和瀏覽習慣，設定如下：

```toml
[permalinks]
  [permalinks.page]
    '/' = '/:sections/:slugorcontentbasename/'
```

這保留了完整的目錄結構，並且基於 slug 或者 contentbasename 選擇最後一段 URL。或者將 `/:sections/` 改為 `/:section/`，就只會保留第一個目錄層級，這讓你可以有組織的整理檔案，同時保持每篇文章的 URL 簡潔。

也可在 front matter 中自訂 URL：

```yaml
---
title: 我的頁面
url: /custom-path/
---
```

同時支援前面的規則方式：

```yaml
---
title: 我的頁面
url: /:section/custom-path/2
---
```

或者，你也可以修改 slug，這用於只修改 URL 的最後一段：

```yaml
---
title: 我的頁面
slug: /我的頁面/2
params:
  description: slug 範例，此範例展示的是加上 `/2` 用於避免和同名的頁面碰撞
---
```

> [!NOTE]
> Front matter 的 url 設定是最高層級，此設定一定生效。slug 設定的優先級可能會低於 hugo.toml 的設定。
