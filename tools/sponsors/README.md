# Sponsors Logo Creator（贊助商 Logo 產生器）

版本：v5.3.0　｜　狀態：ToolHub release；source repo 回同步與 Drupal QA 狀態詳見 [tool-status.md](../../docs/tool-status.md)

## 1. 工具目的

這不是一套贊助商 CRM，而是專注在「維護目前這份贊助商 Logo 輸出清單」的發布工作台。

工具只需要快速回答三個問題：

1. 哪些贊助商已經可以發布？
2. 哪些缺資料、需要檢查？
3. 現在可以安全地產生並複製 HTML 嗎？

其他不屬於這三個問題的功能，都刻意不做（審核流程、贊助商聯絡管理、多人協作等）。

## 2. 為什麼需要持續更新，而不是一次性產生

贊助商 Logo 通常分批到齊：有些提早給、有些晚給，也常常在第一次產生 HTML 之後才更換連結、更換分級或換圖檔。所以這個工具的心智模型是「目前的贊助商輸出清單」，而不是一次性的產生器。

## 3. 使用流程

1. 新增贊助商：選擇分級（Strategic Partners / Platinum Sponsors / Gold Sponsors / Silver Sponsors / Bronze Sponsors）、輸入名稱，優先貼入 Drupal 圖片網址；貼上或上傳的 Base64 圖片只作臨時預覽與舊資料相容。連結可留白，狀態會顯示 Check。
2. 管理清單會自動標示單筆資料狀態：
   - **Ready**：有 Logo、名稱不為空，可發布
   - **Missing**：缺 Logo 圖檔，無法正確發布
   - **Check**：有 Logo 但缺名稱或連結，需人工確認
3. 用上下移動調整各級距內的輸出順序。
4. 用 Preview 分別確認中英文輸出畫面。發布狀態與複製保護會依目前語言獨立計算：
   - **READY**：目前語言可發布，複製功能可用。
   - **WARNING**：目前語言仍可檢查及複製，但有缺名稱、缺／錯誤連結、暫存 Base64 或不會輸出的缺 Logo 項目等提醒。
   - **BLOCKED**：目前沒有任何可輸出的 Logo，或有內容的級距缺少該語言標題；該語言的複製功能停用。
5. Copy ZH / Copy EN 複製對應語言的 HTML，貼到 Drupal。兩個按鈕各自依中文／英文狀態判斷，不會因另一語言可發布而繞過阻擋；正式輸出優先使用 Drupal 圖片網址，不會在已有網址時輸出 Base64。
6. **存工作檔（備份 JSON）**——因為贊助商資料是陸續到齊的，備份／匯出是核心工作流程，不是進階功能。舊工作檔中的 `scale` 可繼續匯入，但目前介面與輸出不使用它。

## 4. 已知問題

ToolHub 發布版本為 v5.3.0。獨立 source repo 的回同步狀態仍須依 [version-map.md](../../docs/version-map.md) 核對；不要因 ToolHub 已發布就假設獨立來源或 Drupal 線上頁面已同步。

## 5. 尚未完成的 QA

貼上還原 HTML、分級排序、Logo 連結、響應式顯示的 Drupal 驗證都還待完成，需在 [docs/qa/](../../docs/qa/) 下留存證據。

## 相關文件

- [Tool Status](../../docs/tool-status.md)
- [Tool Contracts](../../docs/tool-contracts.md)
- [Sponsors Minimal Spec](../../docs/sponsors-minimal-spec.md) — 完整產品原則與範圍界定
- [Version Map](../../docs/version-map.md)
