---
title: Menu
description: Set up top navigation menu
weight: 20
---

# Menu Configuration

Deca supports multi-level top navigation menus with dropdown submenu functionality.

## Basic Menu

Add menu items in `hugo.toml`:

```toml
[menus]
  [[menus.main]]
    name = 'Home'
    pageRef = '/'
    weight = 10
  
  [[menus.main]]
    name = 'Documentation'
    pageRef = '/docs'
    weight = 20
```

## Dropdown Menu

Create items with submenus:

```toml
[[menus.main]]
  name = 'Guides'
  pageRef = '/guides'
  weight = 30

  [[menus.main]]
    name = 'Getting Started'
    pageRef = '/guides/getting-started'
    parent = 'Guides'
    weight = 1

  [[menus.main]]
    name = 'Advanced Setup'
    pageRef = '/guides/advanced'
    parent = 'Guides'
    weight = 2
```

## Parameter Description

- `name`: Menu display name
- `pageRef`: Internal page link
- `url`: External link (use either pageRef or url)
- `weight`: Sort weight, smaller numbers appear first
- `parent`: Parent menu name (for submenus)