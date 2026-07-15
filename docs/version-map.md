# SEMI Tool Hub — Version Map

> 這份文件記錄 Hub repo 內每個工具目前整合的版本，以及它來自哪個 source repo 的哪個狀態。
> 每次把工具更新同步進 Hub 時，更新這裡。

---

## 目前 Baseline（建立日期：2026-06-24）

| 工具 | Hub 路徑 | Hub 內版本 | Source Repo | Source 版本 | 同步狀態 | 備註 |
|---|---|---|---|---|---|---|
| Forum HTML Compiler | `tools/forum/index.html` | v9.16 | `Forum HTML Creator` | v9.14 | Hub branch ahead | Forum continuity release: Legacy Restore, Step 1 workflow cleanup, quieter Theme / Outline output, mobile fixes, Draft JSON import/export. v9.15 adds map-url-zh/map-url-en default URLs and skips base64 re-encoding for pasted logo URLs. v9.16 adds a Manual mode (no Excel/Word source needed), decouples the Theme and Outline toggles, hides the Registration Fees header when there is nothing to show under it, and adds an optional Agenda block with section headers and highlighted rows. Source repo back-sync / Drupal QA evidence still pending. |
| Sponsors Logo Creator | `tools/sponsors/index.html` | v5.2.1 | `Sponsors Logo HTML Creator` | v5.2.0 | Hub ahead | 強化貼上線上 HTML 還原流程，source repo 待回同步 |
| Pavilions Vendor Creator | `tools/pavilions/index.html` | v1.2 | `Pavilions Vendor HTML Creator` | v1.1 | Working copy ahead | 本機工作區已加入增量維護、缺/壞 URL 非連結輸出、重複警告、有限 HTML restore 與 README；待 Drupal QA 與 source repo 回同步 |
| Trend Table Creator | `tools/trends/index.html` | v4.11 | `Trend_Table Creator` | v4.11 | Metadata aligned; QA pending | 2026-06-30 confirmed tool file title, UI badge, workfile metadata, Hub card, workspace metadata, and version-map all use `v4.11`. Remaining risk is Drupal QA / output rendering / template QA, not version drift. |
| Logo Prep Tool | `tools/logo-prep/index.html` | v0.1 | —（無獨立 repo） | v0.1 | ✅ | 輔助工具，不與四大工具同層管理 |

---

## 版本漂移待修清單

- [x] **Trend Table Creator v4.8**：將 Hub 首頁、workspace metadata、工具內版本號統一為 `v4.8`
- [x] **Trend Table Creator v4.9**：將 Hub 首頁、workspace metadata、工具內版本號統一為 `v4.9`
- [x] **Trend Table Creator v4.11**：以 `tools/trends/index.html` 為實際版本來源，已統一 README、Hub 首頁、workspace metadata、工具檔與 version-map。先前 `v4.8` / `v4.10.1` / `v4.9` 漂移已在 metadata 層解決；本次未更動功能。

---

## 更新紀錄

<!-- 每次同步時，在這裡補一行 -->

| 日期 | 工具 | Source 版本 → Hub 版本 | 說明 |
|---|---|---|---|
| 2026-06-24 | 全部 | — | Baseline 建立 |
| 2026-06-24 | Trend Table Creator | v4.8 → v4.8 | 修正 Hub 顯示版本漂移，統一首頁、workspace metadata 與工具本體版本 |
| 2026-06-25 | Sponsors Logo Creator | v5.2.1 → v5.2.1 | 將「貼上既有 HTML」改為線上 HTML 接續工作流，補匯入摘要並保留未來網址抓取入口 |
| 2026-06-29 | Forum HTML Compiler | v9.13 → v9.13 | 新增手動免費入場、pricing 顯示控制與 outline 格式控制；尚未 bump 版本號 |
| 2026-06-29 | Trend Table Creator | v4.8 → v4.9 | 強化 grouped sheet 匯入、Excel hyperlink 讀取、展區 / 論壇連結欄位與狀態摘要 |
| 2026-06-29 | Pavilions Vendor Creator | v1.1 → v1.1 | 本機工作區調整輸出為更適合 CMS source 的壓縮 HTML；待測試與 commit |
| 2026-06-30 | Trend Table Creator | v4.9 → v4.11 | Metadata-only version drift resolution. `tools/trends/index.html` is the source of truth; README, Hub card, workspace metadata, and version-map now all show `v4.11`. |
| 2026-07-02 | Forum HTML Compiler | v9.13 → v9.14 | Documented Forum continuity workflow: Legacy Restore helper, Step 1 action placement, quieter collapsible Theme / Outline block, mobile fixes, and Draft JSON import/export for future maintenance. |
| 2026-07-13 | Pavilions Vendor Creator | v1.1 → v1.2 | Hardened incremental publishing workflow: stable order, add/edit/reorder/delete controls, missing/invalid URL warnings with non-clickable output, duplicate warnings, import confirmation, limited generated-HTML restore, README, and QA evidence. |
| 2026-07-13 | Forum HTML Compiler | v9.14 → v9.15 | Split map-url into map-url-zh/map-url-en with semicontaiwan.org default URLs; logo URL input now skips canvas/base64 re-encoding and keeps the pasted URL as-is to avoid HTML bloat. |
| 2026-07-15 | Forum HTML Compiler | v9.15 → v9.16 | Added Manual mode for forums with no Excel/Word source (skips parsing, defaults Theme and Pricing off). Decoupled Theme and Outline toggles so an outline-only forum no longer forces a "To be announced" theme line. Registration Fees header now only renders when there is a real CTA link or price data. Added an optional Agenda block (between Logos and Registration/Pricing): time-line-anchored parsing so pasted agendas need little to no manual reformatting, `##` for standalone section headers, `**...**` to highlight a row, and full Name/Title/Company per speaker. |

---

## 使用方式

1. **工具在 source repo 更新** → 先在那邊測試
2. **同步進 Hub** → 複製 `index.html` 到對應 `tools/xxx/`
3. **更新這份 version-map** → 填日期、版本號、說明
4. **寫 release-notes** → 如果是使用者有感的變更
5. **commit** → `sync: forum v9.14 → hub`
