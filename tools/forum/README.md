# Forum HTML Compiler（ST26 論壇 HTML 產生器）

版本：**v9.16**　｜　狀態：**ToolHub released main / frozen**。這是工具的發布基準；不等於每個 Drupal 論壇頁都已由此版本產生，或已完成各頁的上線驗證。狀態邊界見 [Tool Status](../../docs/tool-status.md)。

## 工具目的

將論壇的主題、大綱、人物、合作夥伴、議程、報名與場地等資料，整理成可逐段檢查的雙語發布流程，產生供 Drupal 使用的 HTML。工具支援編輯者維護長頁面與多區塊內容；HTML 是發布輸出，不是後續編輯的理想來源。

## 開始與接續

- **新論壇**：從 Excel／文字來源開始，或選擇 Manual mode 建立空白論壇；有多場次時先確認選取的場次。
- **同一瀏覽器接續**：瀏覽器會自動保存目前工作；重新載入後可使用 Continue。這是同瀏覽器的工作接續，不應當成永久備份。
- **備份、交接或跨裝置**：儲存並保存 Work File JSON；接手時載入工作檔，再繼續編輯。更新並發布後，應保存新版工作檔。
- **舊 HTML 救援**：Legacy Restore 僅為沒有工作檔時的 fallback，不能完整還原 CMS 或所有編輯欄位。

此 repo 既有的檔案保存與命名約定見 [Forum Drafts](../../docs/forum-drafts/README.md)；該文件沿用「草稿 JSON」名稱，v9.16 介面則稱「工作檔」。

## Review：逐段確認內容

七個結構化區段為 Basic、Theme、People、Partners、Agenda、Registration & Pricing、Venue。Review Map 顯示各區狀態；問題可導向相關區段或欄位，讓編輯者在長頁面中定位與逐段檢查。People 資料由中英文輸出共用，不是兩套獨立欄位。

## Publish：依語言檢核與複製

進入 Publish 會依目前欄位產生最新中英文輸出；編輯後若輸出過期，Publish／Copy 會重新產生目前版本。正常流程不需要另外記住手動 Generate 步驟。

中文和英文各自顯示發布檢核狀態：

| 狀態 | 操作意義 |
|---|---|
| READY | 沒有阻擋該語言 Copy 的問題；仍需依正式發布流程人工確認。 |
| WARNING | 可 Preview、可 Copy，但有內容需要人工判斷；**不代表內容完整、翻譯完成或可免審查直接發布**。 |
| BLOCKED | 可 Preview 以查找問題，但該語言 Copy 會停用。 |

Copy 會再次檢查目標語言狀態。兩種語言的檢核不能互相代替。

### 建立或更新頁面

1. 匯入 Excel／文字或選擇 Manual mode；確認論壇／場次。
2. 在七個 Review 區段編輯並逐段確認內容。
3. 進入 Publish，檢查中文與英文各自的 READY／WARNING／BLOCKED，以及實際預覽。
4. 僅對允許 Copy、且已完成必要人工審查的語言複製 HTML，並依 Drupal 發布流程處理。
5. 儲存 Work File JSON，與該論壇的工作資料一起保留，供下次更新或交接。

下次在同一瀏覽器可用 Continue；換瀏覽器或交接則載入 Work File JSON。修改後重新進入 Publish 取得最新輸出。

## 已知邊界

- Legacy Restore 可作部分欄位救援，但不還原完整頁面標題、票價、Logo、chair／moderator／advised-by 等人物角色或完整 CMS 狀態；套用後必須人工檢查。
- 工具不會自動上傳 Logo 到 Drupal，也不是 CMS 遷移或網站治理系統。
- Released main 與正式 Drupal 頁面發布是不同證據層級；本 README 不聲稱所有 production 論壇頁都由 v9.16 產生。

## 相關文件

- [ToolHub 2026 closeout](../../docs/2026-toolhub-closeout-zh.md) — v9.16 決策、驗證與 frozen release 邊界。
- [Tool Status](../../docs/tool-status.md) — current release 與 Drupal QA 狀態。
- [ToolHub README](../../README.md) — Hub 入口及 Forum v9.16 工作流程。
- [Forum v9.14 Work Log](../../docs/forum-v914-worklog.md) — 歷史設計紀錄，**不是 v9.16 的現行使用指南**。
