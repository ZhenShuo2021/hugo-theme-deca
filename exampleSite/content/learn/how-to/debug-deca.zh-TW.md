---
title: 偵錯 Deca 網站
description: Deca 提供除錯方法讓您除錯您的網站。
weight: 9999
---

# 偵錯 Deca 網站

Deca 主題包含除錯系統，幫助您了解網站的結構、導航和內容組織。這些除錯資訊在配置側邊欄和排除版面問題時特別有用。

<!-- more -->

## 啟用除錯模式

要啟用除錯側邊欄，您需要在執行 Hugo 時將 `HUGO_DEBUG_SIDEBAR` 環境變數設定為 `true`。

{{< tabs labels="macOS/Linux,Windows (PowerShell),Windows (命令提示字元)" >}}

{{< tab >}}

```bash
# 設定環境變數並執行 Hugo 伺服器
export HUGO_DEBUG_SIDEBAR=true
hugo server
```

或在單一指令中執行：

```bash
HUGO_DEBUG_SIDEBAR=true hugo server
```

{{< /tab >}}

{{< tab >}}

```powershell
# 設定環境變數並執行 Hugo 伺服器
$env:HUGO_DEBUG_SIDEBAR="true"
hugo server
```

或在單一指令中執行：

```powershell
$env:HUGO_DEBUG_SIDEBAR="true"; hugo server
```

{{< /tab >}}

{{< tab >}}

```cmd
# 設定環境變數並執行 Hugo 伺服器
set HUGO_DEBUG_SIDEBAR=true
hugo server
```

或在單一指令中執行：

```cmd
set HUGO_DEBUG_SIDEBAR=true && hugo server
```

{{< /tab >}}

{{< /tabs >}}

## 了解除錯輸出

### 側邊欄配置

除錯面板顯示目前頁面使用的側邊欄配置。這有助於您驗證是否根據 `hugo.toml` 設定套用了正確的側邊欄。

### 頁面導航

上一頁/下一頁連結顯示頁面在側邊欄導航中的連接方式，這對於了解使用者瀏覽文檔的流程至關重要。

### 內容組織

平面和樹狀結構幫助您視覺化內容的組織方式，以及階層是否符合您的預期。

## 常見問題排除

### 側邊欄未顯示

如果您的側邊欄未正確顯示：

1. 檢查頁面是否在正確的區段中
2. 驗證配置檔案中的側邊欄配置

### 導航順序問題

如果頁面出現在錯誤的順序中：

1. 檢查前置資料中的 `weight` 參數
2. 驗證檔案命名慣例
3. 在除錯模式中檢視平面結構

### 缺少頁面

如果頁面未出現在側邊欄中：

1. 確認頁面已發布（`draft: false`）
2. 檢查頁面是否在正確的內容目錄中
3. 驗證側邊欄區段配置

## 停用除錯模式

要停用除錯模式，只需移除環境變數或將其設定為 `false`：

{{< tabs labels="macOS/Linux,Windows (PowerShell),Windows (命令提示字元)" >}}

{{< tab >}}

```bash
# 移除環境變數
unset HUGO_DEBUG_SIDEBAR

# 或設定為 false
export HUGO_DEBUG_SIDEBAR=false
hugo server
```

{{< /tab >}}

{{< tab >}}

```powershell
# 移除環境變數
Remove-Item Env:HUGO_DEBUG_SIDEBAR

# 或設定為 false
$env:HUGO_DEBUG_SIDEBAR="false"
hugo server
```

{{< /tab >}}

{{< tab >}}

```cmd
# 設定為 false
set HUGO_DEBUG_SIDEBAR=false
hugo server
```

{{< /tab >}}

{{< /tabs >}}
