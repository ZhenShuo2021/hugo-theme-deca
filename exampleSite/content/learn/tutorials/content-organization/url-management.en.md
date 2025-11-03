---
title: URL Management
description: Relationship between directory structure and URLs
weight: 20
---

# Content Organization

Hugo's directory structure directly corresponds to website URLs.

## Basic Mapping

```txt
content/
  _index.md           → /
  about.md            → /about/
  docs/
    _index.md         → /docs/
    getting-started.md → /docs/getting-started/
```

## Multi-level Structure

Supports nested structures of arbitrary depth:

```txt
content/
  docs/
    tutorial/
      basics/
        _index.md     → /docs/tutorial/basics/
        setup.md      → /docs/tutorial/basics/setup/
```

## File Naming

- `_index.md` - List page for directory
- `index.md` - Leaf page (bundle)
- `filename.md` - Regular single page

## URL Customization

This is a very powerful feature of Hugo that many other SSGs cannot achieve.

> [!NOTE]
> Some features of Hugo-theme-deca are based on path matching, so modifications may cause some features to malfunction.

### Custom Rules

Set URL rules in hugo.toml. For all rules, see [Configure permalinks documentation](https://gohugo.io/configuration/permalinks/). The most recommended approach is to base it partially or entirely on folder directories, as this best matches web logic and browsing habits:

```toml
[permalinks]
  [permalinks.page]
    '/' = '/:sections/:slugorcontentbasename/'
```

This preserves the complete directory structure and chooses the last URL segment based on slug or contentbasename. Alternatively, change `/:sections/` to `/:section/` to preserve only the first directory level, allowing you to organize files systematically while keeping each article's URL concise.

### Frontmatter

You can also customize URLs in front matter:

```yaml
---
title: My Page
url: /custom-path/
---
```

Also supports the rule-based approach:

```yaml
---
title: My Page
url: /:section/custom-path/2
---
```

Or you can modify the slug, which is used to modify only the last segment of the URL:

```yaml
---
title: My Page
slug: /my-page/2
params:
  description: Slug example, this example shows adding `/2` to avoid collision with pages of the same name
---
```

> [!NOTE]
> The url setting in frontmatter is the highest priority and will always take effect, while slug priority may be lower than hugo.toml settings.
