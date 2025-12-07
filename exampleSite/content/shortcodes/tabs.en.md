---
title: Tabs
description: Introduction to the built-in shortcodes in the Deca theme - Tabs
weight: 10
---

# Tabs

Tabs are a common component for displaying variant content in documentation websites.

<!-- more -->

## Usage

````md
{{</* tabs */>}}
  {{</* tab label="LABEL_A" */>}}
  Content for LABEL_A
  {{</* /tab */>}}

  {{</* tab label="LABEL_B" */>}}
  Content for LABEL_B
  {{</* /tab */>}}
{{</* /tabs */>}}
````

## Example

````md
{{</* tabs */>}}
  {{</* tab label="macOS" */>}}
  Install using Homebrew:

  ```bash
  brew install hugo
  ```
  {{</* /tab */>}}

  {{</* tab label="Windows" */>}}
  Install using Chocolatey:

  ```bash
  choco install hugo
  ```

  Or download the [official release](https://github.com/gohugoio/hugo/releases).
  {{</* /tab */>}}

  {{</* tab label="Linux" */>}}
  Install using a package manager, for example on Ubuntu:

  ```bash
  sudo apt install hugo
  ```
  {{</* /tab */>}}
{{</* /tabs */>}}
````

{{< tabs >}}
  {{< tab label="macOS" >}}
  Install using Homebrew:

  ```bash
  brew install hugo
  ```

  {{< /tab >}}

  {{< tab label="Windows" >}}
  Install using Chocolatey:

  ```bash
  choco install hugo
  ```

  Or download the [official release](https://github.com/gohugoio/hugo/releases).
  {{< /tab >}}

  {{< tab label="Linux" >}}
  Install using a package manager, for example on Ubuntu:

  ```bash
  sudo apt install hugo
  ```

  {{< /tab >}}
{{< /tabs >}}
