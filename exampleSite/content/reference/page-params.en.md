---
title: Page Parameters
description: Page parameters available in Front Matter
weight: 20
---

# Page Parameters

These parameters can be defined in a page’s Front Matter to control its display and behavior.

## Basic Parameters

```yaml
---
title: "My Page Title"
description: "This is the page description"
weight: 10
date: '2025-10-22T02:27:46+08:00'
lastmod: '2025-10-29T02:27:46+08:00'
---
```

| Field       | Description                                                            |
| ----------- | ---------------------------------------------------------------------- |
| title       | Page title, displayed in the browser title bar and as the page heading |
| description | Page description, used for SEO and page summary                        |
| date        | Date when the article was created                                      |
| lastmod     | Last modified date                                                     |
| weight      | Sorting weight in the sidebar, smaller numbers appear first            |

## Deca Parameters

```yaml
---
title: "This is a very long page title that looks crowded in the sidebar"
params:
  sidebar_label: "Short Label"
  collapsed: true
---
```

| Field         | Description                                                       | Default |
| ------------- | ----------------------------------------------------------------- | ------- |
| sidebar_label | Custom label for sidebar display, used when the title is too long | None    |
| collapsed     | Controls whether this page is collapsed in the sidebar            | None    |
