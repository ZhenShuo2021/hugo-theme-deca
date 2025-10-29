---
title: Sidebar Setup
description: Configure multiple sidebars
weight: 20
---

# Sidebar Setup

## Basic Setup

Define sidebars in `hugo.toml`:

```toml
[params.sidebars]
  [params.sidebars.docs]
    section = "docs"
  
  [params.sidebars.guides]
    section = "guides"
```

## Sidebar Configuration

Each sidebar needs to specify:

- `section`: Corresponding content area (folder name)

## Content Organization

Create corresponding content folders:

```txt
content/
├── docs/
│   ├── _index.md
│   └── page1.md
└── guides/
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

Smaller numbers appear first.