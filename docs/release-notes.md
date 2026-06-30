# SEMI Tool Hub — Release Notes

> 給**使用者**看的更新紀錄。只記錄有感變更：新功能、行為改變、重大 bug 修復。
> 工程細節（重構、變數改名、樣式微調）不寫這裡，那屬於 commit message。

---

## [Unreleased]

> 正在開發中，尚未同步進 Hub 的變更放這裡，上線時移到對應版本區塊。

### Forum HTML Compiler v9.13 post-baseline
- 新增手動免費入場控制，避免只為調整價格文字而手改 HTML。
- 新增 pricing 顯示開關，讓編輯者能明確控制是否輸出價格 / 免費入場資訊。
- 支援較可控的 outline 格式，降低貼入 Drupal 前再修版面的機率。
- 壓縮免費論壇 pricing 輸出，讓 CMS source 內容更乾淨。

### Trend Table Creator v4.11
- Metadata alignment completed: Hub launcher, workspace metadata, tool file, and version-map now use `v4.11`.
- Remaining release risk is Drupal QA / output rendering evidence, not version metadata drift.

### Trend Table Creator v4.9 historical working changes
- 強化 grouped sheet 匯入，支援中文、英文、URL 拆欄維護。
- 支援同一主題多列展區 / 論壇資料自動合併。
- 嘗試讀取 Excel 內建 hyperlink，減少連結遺失。
- 將展區 / 論壇編輯從大段文字改為欄位化列編輯，降低資料對錯成本。
- 新增狀態摘要，快速看目前主題數、必修缺漏、缺 URL、缺英文名稱。

### Pavilions Vendor Creator v1.1 working copy
- 調整輸出 HTML 為更適合 CMS source 的壓縮格式。
- 簡化 booth 區塊輸出，移除不必要的 Booth / 攤位標籤文字。

### Sponsors Logo Creator v5.2.1
- 強化既有 HTML 還原流程，支援從已發布內容接續更新。
- 補上匯入摘要，讓編輯者知道這次還原了多少可再編輯資料。

---

## Hub v1.0.0 — 2026-06-24

> **首次整合版本 Baseline**

### 整合進 Hub 的工具

- **Forum HTML Compiler v9.13** — ST26 論壇頁面 HTML 產生器
- **Sponsors Logo Creator v5.2.1** — 贊助商 Logo 排版產生器
- **Pavilions Vendor Creator v1.1** — 展館廠商頁面產生器
- **Trend Table Creator v4.11** — 15 大主題互動表格產生器
- **Logo Prep Tool v0.1**（輔助工具）— Logo 去背與尺寸前處理

---

## Forum HTML Compiler

### v9.13
- 三步驟流程重構（資料輸入 → 設定 → 預覽輸出）
- AI 解析整合（支援 Claude / OpenAI / Gemini，使用者自帶 API key）
- Logo 管理全面翻新：canvas 去白邊、`object-fit` 輸出、比例滑桿（30–100%）
- 各輸出區塊可獨立開關（theme、outline、day pass、group discount、footnote）
- CSS 隔離修正（`.st26, .st26 *` 選擇器、防禦性 reset）
- 修復 `renderPerson` / `addPerson` 命名衝突
- 修復 `handleParse` 函式被覆蓋的 bug
- 修復 Claude model name 錯誤
- 修復 canvas taint（本地 data URL 不加 `crossOrigin`）
- 修復 preview iframe 觸發 mobile CSS

---

## Sponsors Logo Creator

### v5.2.1
- 強化既有 HTML 還原流程，支援從已發布內容接續更新。
- 補上匯入摘要，降低更新贊助商名單時重頭整理的成本。

### v5.2.0
- `TOOL_VERSION` 常數建立，版本號統一管理

---

## Pavilions Vendor Creator

### v1.1
- 建立資料驗證 / workfile 方向。
- 支援展商資料整理、發布檢查與固定格式 HTML 輸出。

---

## Trend Table Creator

### v4.11
- Hub launcher metadata, workspace metadata, tool file, and version-map are aligned to `v4.11`.
- Remaining risk is Drupal QA / output rendering / template QA, not version drift.

### v4.9
- Historical working changes before the v4.11 metadata alignment.
- 強化 grouped sheet 匯入，支援中文、英文、URL 拆欄維護。
- 支援同一主題多列展區 / 論壇資料自動合併。
- 將展區 / 論壇編輯區改為欄位化列編輯。
- 新增狀態摘要，協助快速檢查缺漏。

### v4.8
- Historical metadata alignment note: Hub 顯示版本曾統一為 v4.8。

---

## Logo Prep Tool

### v0.1
- 初始版本，輔助工具，功能以 Logo 前處理為主

---

## 寫作格式參考

```
### vX.Y.Z — YYYY-MM-DD
#### ✨ 新功能
- 簡短描述，使用者視角，不要工程語言
#### 🐛 修復
- 修復了什麼問題，使用者之前遇到的症狀
#### ⚠️ 行為變更
- 原本怎樣，現在怎樣，使用者需要注意什麼
```
