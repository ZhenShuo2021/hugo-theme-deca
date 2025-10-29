---

title: Tabs
description: Introduction to the built-in shortcodes in the Deca theme - Tabs
weight: 10
---

# Tabs

Tabs are a common component for displaying variant content in documentation websites.

<!-- more -->

## Usage

```md
{{</* tabs labels="LABEL_A,LABEL_B" */>}}

{{</* tab */>}}
Content for LABEL_A
{{</* /tab */>}}

{{</* tab */>}}
Content for LABEL_B
{{</* /tab */>}}

{{</* /tabs */>}}
```

## Example

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
Install using a package manager, for example on Ubuntu:

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
Install using a package manager, for example on Ubuntu:

```bash
sudo apt install hugo
```

{{< /tab >}}
{{< /tabs >}}
