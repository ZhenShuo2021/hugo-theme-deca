---
title: Homepage Layout Parameters
description: Parameter system for configuring the homepage
weight: 30
---

# Homepage Layout Parameters

Deca provides a ready-to-use configurable homepage system. Through these settings, you can easily customize the homepage appearance. These parameters should be defined in the front matter of `content/_index.md`.

## Parameters

```yaml
---
hero:
  title: "Site Title"
  tagline: "Site Tagline"
  actions:
    - text: "Get Started"
      pageRef: "/learn/tutorials"
      primary: true

features:
  - icon: "⚡"
    title: "Fast"
    description: "Quick to start and operate"
  - icon: "💡"
    title: "Smart"
    description: "Intelligent features and recommendations"

sections:
  - title: "Latest Articles"
    description: "Display recent articles and content"
    items:
      - title: "Article One"
        description: "Description of the first article"
        pageRef: "/articles/1"
      - title: "Article Two"
        description: "Description of the second article"
        pageRef: "/articles/2"

  - title: "Popular Tutorials"
    description: "Featured and trending tutorials"
    items:
      - title: "Tutorial One"
        description: "Description of the first tutorial"
        pageRef: "/tutorials/1"
      - title: "Tutorial Two"
        description: "Description of the second tutorial"
        pageRef: "/tutorials/2"
---
```

| Option     | Sub-option    | Description                                                          |
| ---------- | ------------- | -------------------------------------------------------------------- |
| `hero`     | `title`       | Main title of the hero section                                       |
|            | `tagline`     | Subtitle or tagline in the hero section                              |
|            | `actions`     | List of buttons, each configurable with text, link, and style        |
| `features` | `icon`        | Feature icon                                                         |
|            | `title`       | Feature title                                                        |
|            | `description` | Feature description                                                  |
| `sections` | `title`       | Section title                                                        |
|            | `description` | Section description                                                  |
|            | `items`       | List of items in the section, each with title, description, and link |
| `items`    | `title`       | Item title                                                           |
|            | `description` | Item description                                                     |
|            | `pageRef`     | Page reference link                                                  |
