# SEMI Tool Hub — Release Notes

> 給**使用者**看的更新紀錄。只記錄有感變更：新功能、行為改變、重大 bug 修復。
> 工程細節（重構、變數改名、樣式微調）不寫這裡，那屬於 commit message。

---

## [Unreleased]

> 正在開發中，尚未同步進 Hub 的變更放這裡，上線時移到對應版本區塊。

### Forum HTML Compiler v9.14
- 新增 Forum Draft JSON 匯入 / 匯出，讓 CP 後續更新同一頁論壇時不必每次重新貼 Excel、重建欄位。
- 新增既有 Drupal body HTML 還原預覽，可從已發布內容抓回 Theme、Outline、Venue、Registration URL。
- 還原資料可手動套用到表單，套用後可直接進入 Step 2 編輯，不會自動覆蓋欄位或自動產生 HTML。
- Step 1 動線整理：Excel/text 解析按鈕靠近輸入區，場次選擇區有就近繼續按鈕，Legacy Restore 放在正常流程之後。
- Theme / Outline 輸出改為較安靜的 B2B 版型：主題永遠可見，大綱維持可收合但不再像大型紫色 demo accordion。
- 修正手機版 Theme / Outline 過度佔版與 pricing card 底線裁切問題。
- 保留既有 Drupal Readiness / Logo source guidance，降低貼上前的發布風險。

#### v9.14 維護流程提醒
- Excel/text 適合初次建立頁面。
- Forum Draft JSON 是後續維護同一頁論壇的建議來源。
- Drupal HTML 是發布輸出，不建議作為日後編輯的主要來源。
- Legacy Restore 是救援 / 接續工具，不是完整 CMS migration。

#### Legacy Restore 尚不還原
- Drupal 頁面標題 / 論壇名稱。
- 票價表。
- Logo 圖片 / 贊助或主協辦區塊。
- 主席、主持人、指導單位。

#### Draft JSON 注意事項
- Draft JSON 是本機檔案，不是資料庫，也不是 CMS migration 系統。
- 若草稿內含本機上傳 Logo，檔案可能會因 base64 圖片而變大。
- 長期發布仍建議將 Logo 上傳到 Drupal file / media library，並在工具中使用 Drupal file URL。

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
