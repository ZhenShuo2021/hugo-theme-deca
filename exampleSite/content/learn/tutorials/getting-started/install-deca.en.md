---
title: Installing Deca Theme
description: Download and configure Hugo Theme Deca
weight: 20
tags:
  - getting-started
---

# Installing Deca Theme

Let's install the Deca theme and create your first website. Deca theme offers two installation methods - choose either one.

## Method 1: Git Submodule (Recommended)

This is the officially recommended installation method, suitable for most use cases.

### Create a New Site

First, create a new Hugo site:

```bash
hugo new site my-deca-site
cd my-deca-site
```

### Install the Theme

Add the Deca theme to your site:

```bash
git init
git submodule add https://github.com/ZhenShuo2021/deca.git themes/deca
```

### Basic Configuration

Create a basic `hugo.toml` configuration file:

```toml
baseURL = 'https://example.org/'
defaultContentLanguage = 'en'
languageCode = 'en'
title = 'My Documentation Site'
theme = 'deca'

[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true
  [markup.tableOfContents]
    startLevel = 2
    endLevel = 4
    ordered = false
  [markup.highlight]
    noClasses = false

[params.sidebars]
  [params.sidebars.docs]
    section = "docs"
    title = "Documentation"

[menus]
  [[menus.main]]
    name = 'Documentation'
    pageRef = '/docs'
    weight = 10
```

## Method 2: Hugo Module

**Note**: Using Hugo Module requires Go (version 1.20 or higher) installed on your computer.

### Create a New Site

First, create a new Hugo site:

```bash
hugo new site my-deca-site
cd my-deca-site
```

### Initialize Module

Initialize Hugo Module:

```bash
hugo mod init github.com/yourusername/my-deca-site
```

### Basic Configuration

Create a basic `hugo.toml` configuration file with module settings:

```toml
baseURL = 'https://example.org/'
defaultContentLanguage = 'en'
languageCode = 'en'
title = 'My Documentation Site'

[module]
  [[module.imports]]
    path = "github.com/ZhenShuo2021/deca"

[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true
  [markup.tableOfContents]
    startLevel = 2
    endLevel = 4
    ordered = false
  [markup.highlight]
    noClasses = false

[params.sidebars]
  [params.sidebars.docs]
    section = "docs"
    title = "Documentation"

[menus]
  [[menus.main]]
    name = 'Documentation'
    pageRef = '/docs'
    weight = 10
```

### Download Module

Run the following command to download the theme module:

```bash
hugo mod get
```

## Create Content

Create some documentation pages:

```bash
hugo new docs/_index.md
hugo new docs/post1.md
hugo new docs/post2.md
```

## Next Steps

After installing the theme, continue to [Start Development Server](../development-server).
