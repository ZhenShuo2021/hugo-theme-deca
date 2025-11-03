---
title: Sidebar
description: Configure multiple sidebars
weight: 30
---

# Sidebar Setup

## Basic Setup

Define sidebars in `hugo.toml`:

```toml
[params.sidebars]
  sidebarCollapsed = false
  [params.sidebars.docs]
    section = "docs"

  [params.sidebars.how-to]
    section = "how-to"
```

## Sidebar Configuration

Each sidebar needs to specify:

- `section`: The root of the sidebar, set to the corresponding folder name

> [!NOTE]
> The “folder name” in Hugo’s formal terminology is called the [logical path](https://gohugo.io/methods/page/path/). This approach helps prevent ambiguity.

## Content Organization

Create corresponding content folders:

```txt
content/
├── docs/
│   ├── _index.md
│   └── page1.md
└── how-to/
    ├── _index.md
    └── page2.md
```

## Page Weight

Use `weight` parameter to control page order in sidebar:

```yaml
---
title: Page Title
weight: 10
---
```

The smaller the number, the higher the priority in sorting. The weights of different page bundles are handled independently. If a page does not have a configured weight, its order will follow [Hugo’s default sorting](https://gohugo.io/quick-reference/glossary/#default-sort-order).
