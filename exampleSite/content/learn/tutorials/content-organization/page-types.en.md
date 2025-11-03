---
title: Content Management
description: This page explains how to manage the content of a Hugo project and introduces Hugo’s page types along with the two Deca template modes.
weight: 10
---

# Content Management

This page explains how to manage the content of a Hugo project and introduces Hugo’s page types along with the two Deca template modes.

## Page Types

Page types form the basic structure of a Hugo project. Understanding them ensures your project renders as expected.

### Single Page

A regular content page rendered with `page.html` in the [base templates](https://gohugo.io/templates/types/), conceptually corresponding to a [leaf bundle](https://gohugo.io/content-management/page-bundles/#leaf-bundles).

```txt
content/
  docs/
    my-post/
      index.md      ← Single page
      image.png     ← Page resource of the single page
```

### List Page

A list page used to display child pages, rendered with `section.html` in the base templates, corresponding to a [branch bundle](https://gohugo.io/content-management/page-bundles/#branch-bundles).

```txt
content/
  docs/
    tutorial/
      _index.md     ← List page
      image.png     ← Page resource of the list page
```

> [!NOTE]
> If a directory contains other pages, its Markdown file should **not** be named `index.md`.

## Deca Templates

Deca uses the [Hugo new templating system](https://gohugo.io/templates/new-templatesystem-overview/), which automatically matches paths and selects the appropriate template for rendering.
By default, all templates render in document style, while articles under the `content/blog` directory use the blog layout.

If a path is not under `blog` but you still want to use the blog layout, add the following front matter at the top-level `_index.md` of that path:

```md
---
title: Another blog section
cascade:
  type: blog
---
```
