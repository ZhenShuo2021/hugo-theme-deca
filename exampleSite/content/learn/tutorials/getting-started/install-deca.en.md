---
title: Install Deca Theme
description: Download and configure Hugo Theme Deca
weight: 20
---

# Install Deca Theme

Now let's install the Deca theme and create your first website.

## Create New Site

First create a new Hugo site:

```bash
hugo new site my-deca-site
cd my-deca-site
```

## Install Theme

Add the Deca theme to your site:

```bash
git init
git submodule add https://github.com/ZhenShuo2021/hugo-theme-deca.git themes/hugo-theme-deca
```

## Basic Configuration

Create a basic `hugo.toml` configuration file:

```toml
baseURL = 'https://example.org/'
languageCode = 'en-US'
title = 'My Documentation Site'
theme = 'hugo-theme-deca'

[params.sidebars]
  [params.sidebars.docs]
    section = "docs"
    title = "Documentation"

[menus]
  [[menus.main]]
    name = 'Docs'
    pageRef = '/docs'
    weight = 10
```

## Create Content

Create your documentation pages:

```bash
hugo new docs/_index.md
hugo new docs/post1.md
hugo new docs/post2.md
```

## Next Step

After theme installation is complete, continue to [Start Development Server](../development-server).