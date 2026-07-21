# Sponsors Logo Creator（贊助商 Logo 產生器）

版本：v5.2.1　｜　狀態：Hub ahead，source repo 待回同步 v5.2.0（詳見 [tool-status.md](../../docs/tool-status.md)）

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

1. 新增贊助商：選擇分級（Platinum / Gold / Silver / Strategic Partner 等）、輸入名稱、貼上或上傳 Logo 圖檔、填入連結（可留白，狀態會顯示 Check）
2. 清單會自動標示狀態：
   - **Ready**：有 Logo、名稱不為空，可發布
   - **Missing**：缺 Logo 圖檔，無法正確發布
   - **Check**：有 Logo 但缺名稱或連結，需人工確認
3. 用清單上的 Scale 微調視覺比例，用上下移動排序
4. 用 Preview 確認中英文輸出畫面
5. Copy ZH / Copy EN 複製對應語言的 HTML，貼到 Drupal
6. **存工作檔（備份 JSON）**——因為贊助商資料是陸續到齊的，備份/匯出是核心工作流程，不是進階功能

## 4. 已知問題

Hub 內版本（v5.2.1）目前領先 source repo（v5.2.0），代表 Hub 這邊已經做的修改（線上 HTML 接續工作流）還沒回同步到 source repo。詳見 [version-map.md](../../docs/version-map.md)。

## 5. 尚未完成的 QA

貼上還原 HTML、分級排序、Logo 連結、響應式顯示的 Drupal 驗證都還待完成，需在 [docs/qa/](../../docs/qa/) 下留存證據。

## 相關文件

- [Tool Status](../../docs/tool-status.md)
- [Tool Contracts](../../docs/tool-contracts.md)
- [Sponsors Minimal Spec](../../docs/sponsors-minimal-spec.md) — 完整產品原則與範圍界定
- [Version Map](../../docs/version-map.md)
