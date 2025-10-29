---
title: Theme Customization
description: Customize theme appearance and behavior
weight: 30
---

# Theme Customization

Deca provides various customization options to adjust theme appearance and behavior.

## Site Information

Basic site configuration:

```toml
title = 'My Website'
description = 'Website description'
languageCode = 'en-US'
```

## Logo Configuration

Configure site logo:

```toml
[params.header.logo]
  light = "images/logo.png"
  dark = "images/logo-dark.png"
  alt = "Website Logo"
  text = "Website Name"
  url = "/"
```

## Social Links

Add social media links:

```toml
[[params.header.social]]
  name = "GitHub"
  url = "https://github.com/username"
  icon = '<svg>...</svg>'
```

## Sidebar Behavior

Control sidebar default state:

```toml
[params]
  sidebarCollapsed = false
```

## Footer Configuration

Customize footer content:

```toml
[params.footer]
  description = "Website description"
  copyright = "© 2024 My Website"
```