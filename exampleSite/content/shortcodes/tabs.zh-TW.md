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
{{</* tabs labels="LABEL_A,LABEL_B" */>}}

{{</* tab */>}}
Content for LABEL_A
{{</* /tab */>}}

{{</* tab */>}}
Content for LABEL_B
{{</* /tab */>}}

{{</* /tabs */>}}
````

## 範例

````md
{{</* tabs labels="macOS,Windows,Linux" */>}}

{{</* tab */>}}
Install using Homebrew:

```bash
brew install hugo
```
{{</* /tab */>}}

{{</* tab */>}}
Install using Chocolatey:

```bash
choco install hugo
```

Or download the [official release](https://github.com/gohugoio/hugo/releases).
{{</* /tab */>}}

{{</* tab */>}}
Install using package manager, for example on Ubuntu:

```bash
sudo apt install hugo
```
{{</* /tab */>}}

{{</* /tabs */>}}
````

{{< tabs labels="macOS,Windows,Linux" >}}
{{< tab >}}
Install using Homebrew:

```bash
brew install hugo
```
{{< /tab >}}

{{< tab >}}
Install using Chocolatey:

```bash
choco install hugo
```

Or download the [official release](https://github.com/gohugoio/hugo/releases).
{{< /tab >}}

{{< tab >}}
Install using package manager, for example on Ubuntu:

```bash
sudo apt install hugo
```
{{< /tab >}}
{{< /tabs >}}
