---
title: Tabs
description: Deca 主題內建的短碼 (shortcode) 介紹 - Tabs
weight: 10
---

# Tabs

Tabs 是文檔網站常見的變體展示元件。

<!-- more -->

## 使用方式

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

## 範例

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
  Install using package manager, for example on Ubuntu:

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
  Install using package manager, for example on Ubuntu:

  ```bash
  sudo apt install hugo
  ```

  {{< /tab >}}
{{< /tabs >}}
