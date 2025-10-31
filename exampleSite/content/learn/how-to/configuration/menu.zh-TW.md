---
title: 選單
description: 設定頁面選單
weight: 20
---

# 選單設定

Deca 支援多層級的頂部導航選單，包含下拉子選單功能。

## 基本選單

在 `hugo.toml` 中添加選單項目：

```toml
[menus]
  [[menus.main]]
    name = '首頁'
    pageRef = '/'
    weight = 10

  [[menus.main]]
    name = '文檔'
    pageRef = '/docs'
    weight = 20
```

## 下拉選單

建立包含子選單的項目：

```toml
[[menus.main]]
  name = '指南'
  pageRef = '/how-to'
  weight = 30

  [[menus.main]]
    name = '快速入門'
    pageRef = '/how-to/getting-started'
    parent = '指南'
    weight = 1

  [[menus.main]]
    name = '進階設定'
    pageRef = '/how-to/advanced'
    parent = '指南'
    weight = 2
```

## 參數說明

- `name`: 選單顯示名稱
- `pageRef`: 內部頁面連結
- `url`: 外部連結（與 pageRef 擇一使用）
- `weight`: 排序權重，數字越小越前面
- `parent`: 父選單名稱（用於子選單）
