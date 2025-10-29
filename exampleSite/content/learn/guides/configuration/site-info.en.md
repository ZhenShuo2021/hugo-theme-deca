---
title: Site Information
description: Configure your Deca theme site identity including title, language, logo, social media links, footer copyright, and homepage layout. Complete guide to essential site information settings.
weight: 10
---

# Site Information

Deca provides various customization options to adjust theme appearance and behavior.

## Basic

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
```

## Social Links

Add social media links:

```toml
[[params.header.social]]
  name = "GitHub"
  url = "https://github.com/username"
  icon = '<svg>...</svg>'
```

## Footer Configuration

Customize footer content:

```toml
[params.footer]
  description = "Website description"
  copyright = "© 2024 My Website"
```
## Home Page Settings

Deca provides configurable homepage themes. For detailed settings, refer to [Homepage Layout Parameters](reference/home-params).
