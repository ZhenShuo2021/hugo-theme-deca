---
title: Page Types
description: Hugo's three basic page types
weight: 10
---

# Page Types

Hugo has two basic page types:

## Single Page

Regular content pages, such as articles or documentation pages, rendered as page.html in [base templates](https://gohugo.io/templates/types/), also known as [leaf bundles](https://gohugo.io/content-management/page-bundles/#leaf-bundles).

```txt
content/
  docs/
    my-post/
      index.md      ← Single page
      image.png     ← Page resource for single page
```

## List Page

Used to display lists of child pages, rendered as section.html in base templates, also known as [branch bundles](https://gohugo.io/content-management/page-bundles/#branch-bundles).

Note that you must use `_index.md` with an underscore for Hugo to recognize it as a list page.

```txt
content/
  docs/
    tutorial/
      _index.md     ← List page
      image.png     ← Page resource for list page
```