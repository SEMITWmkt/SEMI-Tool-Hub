# Logo Prep Tool（Logo 前處理工具）

版本：v0.1　｜　狀態：Stable support utility（詳見 [tool-status.md](../../docs/tool-status.md)）

## 1. 工具目的

這是一個小型的 Logo 前處理工具，**不是**獨立的第五個網站產生器，而是 [Sponsors Logo Creator](../sponsors/README.md) 的輔助工具。

用途：把廠商提供的 Logo 素材（常見是 `.ai` 檔）轉成乾淨、去背、去白邊的透明 PNG，方便直接貼進 Sponsors Logo Creator。

## 2. 為什麼需要這個工具

網站編輯常常收到 `.ai` 格式的贊助商 Logo，這類檔案很難直接在瀏覽器工具裡使用。這個工具存在的唯一理由，就是縮短「廠商提供的 AI 檔 → 可用的透明 PNG → 貼進 Sponsors 工具」這段路徑。

## 3. 使用流程

1. 開啟 Logo Prep Tool
2. 匯入 Logo 檔案（支援 PDF-compatible 的 `.ai`、`.pdf`、`.svg`，以及一般圖片格式 `.png` / `.jpg` / `.jpeg` / `.webp`）
3. 工具會在瀏覽器內渲染並自動去除周圍的白邊/空白
4. 複製或下載輸出的透明 PNG
5. 回到 [Sponsors Logo Creator](../sponsors/README.md) 做排版、儲存與 HTML 產生

## 4. 關於 `.ai` 檔案的限制

v0.1 只支援內含 **PDF-compatible** 資料的 `.ai` 檔。如果檔案無法讀取，工具應該明確告知使用者，而不是默默失敗，並建議：

- 請廠商用「PDF 相容」選項重新匯出
- 改用 `.pdf` 提供
- 改用 `.svg` 或 `.png` 提供

## 5. 這個工具刻意不做的事

批次處理、專案存檔/讀取、素材庫、分級欄位、贊助商名稱欄位、HTML 產生、排序——這些都屬於 Sponsors Logo Creator 的職責，不重複做。

## 相關文件

- [Tool Status](../../docs/tool-status.md)
- [Tool Contracts](../../docs/tool-contracts.md)
- [Logo Prep Minimal Spec](../../docs/logo-prep-minimal-spec.md) — 完整產品原則與範圍界定
