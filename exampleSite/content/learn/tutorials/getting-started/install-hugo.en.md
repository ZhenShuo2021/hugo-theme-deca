---
title: Install Hugo
description: Install Hugo static site generator
weight: 10
tags:
  - getting-started
---

# Install Hugo

Hugo is a fast static site generator. The Deca theme requires Hugo 0.146.0 or newer.

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

## Verify Installation

After installation, verify the Hugo version:

```bash
hugo version
```

Make sure the version is 0.146.0 or newer.

## Next Step

After Hugo installation is complete, continue to [Install Deca Theme](../install-deca).