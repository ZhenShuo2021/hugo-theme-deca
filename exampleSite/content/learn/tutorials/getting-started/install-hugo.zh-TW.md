---
title: 安裝 Hugo
description: 安裝 Hugo 靜態網站產生器
weight: 10
tags:
  - getting-started
---

# 安裝 Hugo

Hugo 是一個快速的靜態網站產生器，Deca 主題需要 Hugo 0.149.1 或更新版本。

{{< tabs labels="macOS,Windows,Linux" >}}
{{< tab >}}
使用 Homebrew 安裝：

```bash
brew install hugo
```

{{< /tab >}}

{{< tab >}}
使用 Chocolatey 安裝：

```bash
choco install hugo
```

或下載 [官方發布版本](https://github.com/gohugoio/hugo/releases)。

{{< /tab >}}

{{< tab >}}
使用套件管理器安裝，例如 Ubuntu：

```bash
sudo apt install hugo
```

{{< /tab >}}
{{< /tabs >}}

## 驗證安裝

安裝完成後，驗證 Hugo 版本：

```bash
hugo version
```

確保版本為 0.149.1 或更新。

## 下一步

Hugo 安裝完成後，繼續 [安裝 Deca 主題](../install-deca)。
