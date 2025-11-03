---
title: Code Highlighting
description: Customize Chroma syntax highlighting themes
weight: 30
---

# Code Highlighting

Deca uses Hugo’s built-in Chroma syntax highlighter. By leveraging Hugo’s override mechanism, you can generate and apply custom Chroma themes with simple commands.

## Generating a Theme

Create `assets/css/vendor/chroma.css`, and use the Hugo command to generate theme styles:

> The pipe symbol (`|`) works only on Unix-based systems. Windows users should remove everything after the pipe and manually prepend the selector prefix to the generated file.

```bash
# Generate light theme
hugo gen chromastyles --style=github | sed 's/\./html:not(.dark) ./' >> assets/css/vendor/chroma.css

# Generate dark theme
hugo gen chromastyles --style=github-dark | sed 's/\./html.dark ./' >> assets/css/vendor/chroma.css
```

This command will:

1. Generate a GitHub-style syntax highlighting CSS file
2. Use `sed` to prefix selectors with `html:not(.dark)`
3. Append the result to `assets/css/vendor/chroma.css`

Hugo’s override mechanism will automatically replace the theme’s original file with this one, completing the customization process.
All available styles can be found on the [theme showcase page](https://xyproto.github.io/splash/docs/).

Your final CSS file should look like this:

```css
/* Generated using: hugo gen chromastyles --style=tokyonight-night */

/* Background */ html.dark .bg { color:#c0caf5;background-color:#1a1b26; }
/* PreWrapper */ html.dark .chroma { color:#c0caf5;background-color:#1a1b26; }
/* ... */


/* Generated using: hugo gen chromastyles --style=gruvbox-light */

/* Background */ html:not(.dark) .bg { color:#3c3836;background-color:#fbf1c7; }
/* PreWrapper */ html:not(.dark) .chroma { color:#3c3836;background-color:#fbf1c7; }
/* ... */
```
