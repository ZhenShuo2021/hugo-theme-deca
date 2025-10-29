---
title: Color Theme
description: Customize brand colors and dark mode
weight: 20
---

# Color Theme

Deca provides a complete color customization system with support for brand colors and dark mode.

## Primary Color Customization

Deca uses Infima-style primary color variables:

```css
:root {
  --ifm-color-primary: #2e8555;        /* Primary color */
  --ifm-color-primary-dark: #29784c;   /* Dark variation */
  --ifm-color-primary-darker: #277148; /* Darker variation */
  --ifm-color-primary-darkest: #205d3b;/* Darkest variation */
  --ifm-color-primary-light: #33925d;  /* Light variation */
  --ifm-color-primary-lighter: #359962;/* Lighter variation */
  --ifm-color-primary-lightest: #3cad6e;/* Lightest variation */
}
```

## Quick Customization

Simply modify the primary color, other variations will be applied automatically:

```css
:root {
  --ifm-color-primary: #your-brand-color;
}
```

## Dark Mode

Deca automatically supports dark mode using the `html.dark` selector:

```css
html.dark {
  --ifm-color-primary: #25c2a0;
  --bg-primary: var(--color-neutral-900);
  --text-primary: var(--color-neutral-100);
}
```

## Semantic Colors

Use semantic variables to ensure consistency:

```css
:root {
  --color-accent: var(--ifm-color-primary);
  --text-primary: var(--color-neutral-800);
  --bg-primary: #ffffff;
  --border-color: var(--color-neutral-300);
}
```

## Customization Method

Override variables in your CSS file:

```css
/* Custom theme colors */
:root {
  --ifm-color-primary: #ff6b6b;
}

html.dark {
  --ifm-color-primary: #ff8e8e;
}
```

This approach allows you to easily create themes that match your brand style while maintaining dark mode consistency.