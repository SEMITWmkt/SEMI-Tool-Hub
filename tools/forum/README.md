# Forum HTML Compiler（ST26 論壇 HTML 產生器）

版本：v9.14　｜　狀態：Hub branch ahead，QA pending（詳見 [tool-status.md](../../docs/tool-status.md)）

## 1. 工具目的

把 SEMICON Taiwan 論壇（Forum）頁面的資料——主題、大綱、講者/主席/顧問、報名連結、地點、贊助 Logo、票價——整理成可以直接貼進 Drupal 的中英文雙語固定 HTML。

核心目標不是管理論壇資料本身，而是讓 CP（網站內容維運）人員每次小幅更新論壇頁面時，不需要每次都從 Excel 重建整頁，也不需要手動修 HTML。

## 2. 三層資料來源

v9.14 之後，工具區分三種資料來源，各自用途不同：

| 來源 | 用途 |
|---|---|
| Excel / 文字貼上 | 第一次建立論壇頁面時使用 |
| 論壇草稿 JSON（Forum Draft JSON） | 後續維護的建議來源，可完整還原編輯狀態 |
| Drupal HTML（已發布內容） | 只是輸出結果，不是理想的編輯來源；只在沒有草稿 JSON 時，透過 Legacy Restore 做救援用途 |

**請優先用 Forum Draft JSON 做後續維護**，不要每次都重新貼 Excel 或直接改 Drupal HTML。

## 3. 使用流程

### 新頁面

1. 貼上 Excel / 文字內容並解析
2. 若該場次有多個子場，選擇對應的論壇/場次
3. 進入 Step 2，逐欄位編輯
4. 產生 HTML
5. 貼到 Drupal
6. **匯出論壇草稿 JSON**，跟專案檔案一起保存（這一步很重要，之後維護要靠它）

### 更新既有頁面

1. 匯入先前匯出的論壇草稿 JSON
2. 只修改有變動的欄位
3. 重新產生 HTML
4. 貼到 Drupal
5. 匯出更新後的草稿 JSON

### 沒有草稿 JSON 時的救援流程（Legacy Restore）

1. 貼上目前 Drupal 上既有的 body HTML
2. 工具會解析並預覽可還原的欄位（主題、大綱、地點、報名連結）
3. 確認無誤後套用，進入 Step 2
4. **手動檢查**：Logo、票價、講者/主席/顧問欄位、頁面標題——這些欄位 Legacy Restore *不會*自動還原
5. 視情況決定是否重新產生 HTML

## 4. 已知限制（刻意不解決的部分）

- 無法從舊 HTML 自動還原完整票價資訊
- 無法自動上傳 Logo 到 Drupal
- 不是完整的 CMS 遷移工具
- 不會自動同步中英文兩個語言版本
- Legacy Restore 不會還原：頁面標題、票價、Logo 區塊、講者/主席/顧問欄位

詳細設計脈絡見 [Forum v9.14 Work Log](../../docs/forum-v914-worklog.md)。

## 5. 尚未完成的 QA

在標記為 publish-ready 之前，還需要完成：Drupal 後台貼上測試、桌機/手機前台檢查、Legacy Restore 煙霧測試、草稿 JSON 匯入匯出煙霧測試，並在 [docs/qa/](../../docs/qa/) 下留存證據。

## 相關文件

- [Tool Status](../../docs/tool-status.md) — 目前整合狀態與待辦
- [Tool Contracts](../../docs/tool-contracts.md) — 輸入輸出、CSS 隔離、儲存規範
- [Forum v9.14 Work Log](../../docs/forum-v914-worklog.md) — 設計決策與完整脈絡
- [Forum Continuity Standard](../../docs/forum-continuity-standard.md)
