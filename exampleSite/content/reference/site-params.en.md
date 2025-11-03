---
title: Site Parameters
description: Website configuration parameters in hugo.toml
weight: 10
---

# Site Parameters

These parameters are defined in the `[params]` section of `hugo.toml` and control the overall behavior and appearance of the website.

## Sidebar Configuration

```toml
[params]
  sidebarCollapsed = false
  sidebarCachedRender = false
  [params.sidebars]
    [params.sidebars.tutorial]
      section = "tutorial"

    [params.sidebars.how-to]
      section = "how-to"
```

| Option                | Sub-option | Description                                                                  |
| --------------------- | ---------- | ---------------------------------------------------------------------------- |
| `sidebarCollapsed`    |            | Controls whether the sidebar is collapsed by default                         |
| `sidebarCachedRender` |            | Enables cached sidebar rendering for improved build performance on large sites |
| `sidebars`            | `key`      | Defines multiple sidebar configurations, where the key is a dictionary label |
|                       | `section`  | Specifies the root section of the sidebar (Logical path)                     |

### Cached Sidebar Rendering

For large documentation sites, enabling `sidebarCachedRender` can significantly improve build performance:

- Uses Hugo's `partialCached` functionality
- Removes dynamic active states from HTML
- JavaScript handles all interactive logic
- Single cached version per section
- Recommended for sites with 100+ pages

## Header Configuration

```toml
[params.header.logo]
  light = "images/logo.png"
  dark = "images/logo-dark.png"
  alt = "Logo alt text"
  text = "Text Logo"

[[params.header.social]]
  name = "GitHub"
  url = "https://github.com"
  icon = '<svg>...</svg>'
```

| Option          | Sub-option | Description                       |
| --------------- | ---------- | --------------------------------- |
| `header.logo`   | `light`    | Path to logo image for light mode |
|                 | `dark`     | Path to logo image for dark mode  |
|                 | `alt`      | Alt text for SEO                  |
|                 | `text`     | Website title text                |
|                 | `url`      | Link when clicking the logo       |
| `header.social` | `name`     | Social platform name              |
|                 | `url`      | Social profile link               |
|                 | `icon`     | SVG icon for the platform         |

## Menu Parameters

```toml
[[menus.main]]
  name = 'Search'
  weight = 60
  [menus.main.params]
    type = "search"
```

| Option       | Sub-option    | Description                       |
| ------------ | ------------- | --------------------------------- |
| `menus.main` | `name`        | Menu name                         |
|              | `weight`      | Menu sorting weight               |
|              | `params.type` | Marks the item as a search button |

## Footer Configuration

```toml
[params.footer.logo]
  text = "Website Name"
  image = "/images/logo.svg"
  alt = "Logo alt text"

[params.footer]
  description = "Website description"
  copyright = "© 2024 My Website"

[[params.footer.columns]]
  title = "Column Title"
  [[params.footer.columns.items]]
    name = "Link Name"
    pageRef = "/path"
    url = "https://..."
    external = true

[[params.footer.social]]
  name = "GitHub"
  url = "https://github.com"
  icon = '<svg>...</svg>'
```

| Option               | Sub-option | Description                     |
| -------------------- | ---------- | ------------------------------- |
| `footer.logo`        | `text`     | Logo text                       |
|                      | `image`    | Logo image                      |
|                      | `alt`      | Alt text for SEO                |
| `footer.description` |            | Footer description text         |
| `footer.copyright`   |            | Copyright statement             |
| `footer.columns`     | `title`    | Column title                    |
|                      | `items`    | List of links within the column |
| `footer.social`      | `name`     | Social platform name            |
|                      | `url`      | Social profile link             |
|                      | `icon`     | Social platform icon            |

## SEO Configuration

```toml
[params]
  author = "Hugo Theme Deca Team"

[params.seo]
  default_og_image = "/images/og-default.png"
  default_twitter_image = "/images/twitter-default.png"
  google_site_verification = "your-verification-code"
  bing_site_verification = "your-verification-code"
  yandex_verification = "your-verification-code"
```

| Option                         | Sub-option | Description                   |
| ------------------------------ | ---------- | ----------------------------- |
| `author`                       |            | Website author information    |
| `seo.default_og_image`         |            | Default Open Graph image      |
| `seo.default_twitter_image`    |            | Default Twitter Card image    |
| `seo.google_site_verification` |            | Google site verification code |
| `seo.bing_site_verification`   |            | Bing site verification code   |
| `seo.yandex_verification`      |            | Yandex site verification code |

## Analytics Configuration

```toml
[params.analytics]
  google = "G-XXXXXXXXXX"
```

| Option      | Sub-option | Description                       |
| ----------- | ---------- | --------------------------------- |
| `analytics` | `google`   | Google Analytics 4 Measurement ID |

## Error Page Configuration

```toml
[params.error404]
  title = "Page Not Found"
  description = "The page you are looking for does not exist"
```

| Option     | Sub-option    | Description      |
| ---------- | ------------- | ---------------- |
| `error404` | `title`       | 404 page title   |
|            | `description` | 404 page message |
