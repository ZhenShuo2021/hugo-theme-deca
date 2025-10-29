---
title: Page Types
description: The three basic page types in Hugo
weight: 10
---

# Page Types

Hugo has two basic types of pages:

## Single Page

A regular content page, such as an article or documentation page, is rendered using `page.html` in the [base templates](https://gohugo.io/templates/types/). It corresponds to a [leaf bundle](https://gohugo.io/content-management/page-bundles/#leaf-bundles).

```txt
content/
  docs/
    my-post/
      index.md      ← single page
      image.png     ← page resource of the single page
```

## List Page

A page used to display a list of subpages is rendered using `section.html` in the base templates. It corresponds to a [branch bundle](https://gohugo.io/content-management/page-bundles/#branch-bundles).

```txt
content/
  docs/
    tutorial/
      _index.md     ← list page
      image.png     ← page resource of the list page
```

> [!NOTE]
> If a directory contains other pages, its markdown file should not be named `index.md`.
