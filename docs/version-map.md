# SEMI Tool Hub — Version Map

> 這份文件記錄 Hub repo 內每個工具目前整合的版本，以及它來自哪個 source repo 的哪個狀態。
> 每次把工具更新同步進 Hub 時，更新這裡。

---

## 目前 Baseline（建立日期：2026-06-24）

| 工具 | Hub 路徑 | Hub 內版本 | Source Repo | Source 版本 | 同步狀態 | 備註 |
|---|---|---|---|---|---|---|
| Forum HTML Compiler | `tools/forum/index.html` | v9.13 | `Forum HTML Creator` | v9.13 | ✅ 同步 | 最完整，版本概念一致 |
| Sponsors Logo Creator | `tools/sponsors/index.html` | v5.2.0 | `Sponsors Logo HTML Creator` | v5.2.0 | ✅ 同步 | `TOOL_VERSION` 常數已建立 |
| Pavilions Vendor Creator | `tools/pavilions/index.html` | v1.1 | `Pavilions Vendor HTML Creator` | v1.1 | ✅ 同步 | 資料驗證 / workfile 方向進行中 |
| Trend Table Creator | `tools/trends/index.html` | v4.8 | `Trend_Table Creator` | v4.8 | ✅ 同步 | 已修正 Hub 首頁 / workspace metadata / 工具內版本顯示 |
| Logo Prep Tool | `tools/logo-prep/index.html` | v0.1 | —（無獨立 repo） | v0.1 | ✅ | 輔助工具，不與四大工具同層管理 |

---

## 版本漂移待修清單

- [x] **Trend Table Creator**：將 Hub 首頁、workspace metadata、工具內版本號統一為 `v4.8`

---

## 更新紀錄

<!-- 每次同步時，在這裡補一行 -->

| 日期 | 工具 | Source 版本 → Hub 版本 | 說明 |
|---|---|---|---|
| 2026-06-24 | 全部 | — | Baseline 建立 |
| 2026-06-24 | Trend Table Creator | v4.8 → v4.8 | 修正 Hub 顯示版本漂移，統一首頁、workspace metadata 與工具本體版本 |

---

## 使用方式

1. **工具在 source repo 更新** → 先在那邊測試
2. **同步進 Hub** → 複製 `index.html` 到對應 `tools/xxx/`
3. **更新這份 version-map** → 填日期、版本號、說明
4. **寫 release-notes** → 如果是使用者有感的變更
5. **commit** → `sync: forum v9.14 → hub`
