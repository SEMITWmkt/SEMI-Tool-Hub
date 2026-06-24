# SEMI Tool Hub — Release Notes

> 給**使用者**看的更新紀錄。只記錄有感變更：新功能、行為改變、重大 bug 修復。
> 工程細節（重構、變數改名、樣式微調）不寫這裡，那屬於 commit message。

---

## [Unreleased]

> 正在開發中，尚未同步進 Hub 的變更放這裡，上線時移到對應版本區塊。

---

## Hub v1.0.0 — 2026-06-24

> **首次整合版本 Baseline**

### 整合進 Hub 的工具

- **Forum HTML Compiler v9.13** — ST26 論壇頁面 HTML 產生器
- **Sponsors Logo Creator v5.2.0** — 贊助商 Logo 排版產生器
- **Pavilions Vendor Creator v1.1** — 展館廠商頁面產生器
- **Trend Table Creator v4.8** — 15 大主題互動表格產生器
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

### v5.2.0
- `TOOL_VERSION` 常數建立，版本號統一管理
- （待補：這版的使用者有感變更）

---

## Pavilions Vendor Creator

### v1.1
- （待補：資料驗證 / workfile 方向的更新內容）

---

## Trend Table Creator

### v4.8
- （待補：相較 v4.7 的有感變更）

> Hub 顯示版本已統一為 v4.8。

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
