# ToolHub 2026 開發收斂與決策紀錄

本次收斂完成：2026-08-20

## 1. 這份文件的用途

`README.md` 回答的是「ToolHub 現在是什麼、要怎麼開始使用」；這份文件回答的是「它為什麼變成現在這樣」。

本紀錄整理 2026 年開發與發布收斂時做過的重要判斷，包括哪些工作已發布、哪些刻意保留但不發布、重大缺陷如何處理，以及未來重新維護時應從哪裡開始。主要讀者是未來的操作人員、產品負責人與維護者，不需要先熟悉 Git 或程式內部實作。

這不是逐項 changelog，也不是 AI 對話紀錄；重點是保留可交接的產品決策與驗證依據。

## 2. 最終發布狀態

### Released main 版本

| 工具 | 版本 | 狀態 |
|---|---|---|
| Forum HTML Compiler | v9.16 | 已發布、Frozen |
| Sponsors Logo Creator | v5.3.0 | 已發布 |
| Trend Table Creator | v4.11 | 已發布；main 未更動，較新的 reliability 工作已保留但未發布 |
| Pavilions Vendor Creator | v1.1 | 已發布；v1.2 已保留但未發布 |

### 核准發布 commits

| Commit | 說明 |
|---|---|
| `4668d907c0ec1416c4029e0e8440b96822336325` | `feat(forum): ship frozen v9.16 vNext reliability release` |
| `36eebdebcb22ec260752787a95a655221a15c47e` | `feat(sponsors): release v5.3.0 reliability hardening` |
| `41774d0bf0ee6181bda5d329b1be55ed357c5255` | `docs(release): align Forum and Sponsors release metadata` |
| `60df7de9748506466c8f92fa3c3a24b087d3af63` | `chore(repo): ignore Forum audit work products` |

本次功能與版本收斂的 release baseline：
`60df7de9748506466c8f92fa3c3a24b087d3af63`

## 3. 為什麼需要這次收斂

開發進行一段時間後，Forum、Sponsors、Trends、Pavilions 的已完成修改、實驗性工作、QA 紀錄與日常營運檔案同時存在本機工作區。當時最大的風險已不是「功能不夠多」，而是無法快速回答：哪一份能發布、哪一份還在試驗、哪些資料若清掉就無法重建。

因此優先順序從增加功能改為：

1. 驗證已完成工作是否真的可用。
2. 分清楚 Released 與 Held 的邊界。
3. 對齊本機、GitHub、文件與版本紀錄。
4. 先保存未發布工作與無法確認可重建的營運資料。
5. 凍結一個可清楚交接的穩定版本。

這次 closeout 的成果不是「把所有 backlog 做完」，而是建立一個可信任的發布基準。

## 4. 產品原則

| 原則 | 實務含義 |
|---|---|
| 操作人員專注內容，產品負責規則、狀態與流程 | 操作人員不應靠記憶判斷何時要重新產生、哪些欄位會影響哪個語系，或哪些狀態不能複製。 |
| 減少重複決策 | 能由既有資料與明確規則判斷的事情，不要每次都再問操作人員。 |
| 先顯示狀態，再提供控制 | 先讓人看懂現在是 READY、WARNING 或 BLOCKED，再決定下一個動作。 |
| Strong defaults 與 progressive disclosure | 常用流程直接可見；恢復工具、技術細節與少用設定放在次要位置。 |
| Correctness before polish | 先確保資料不遺失、輸出正確、Copy 不會繞過阻擋，再處理視覺微調。 |
| 共用 mechanism，保留各工具自己的 policy | 儲存、版本、驗證可採一致方法；但 Forum、Sponsors 等工具的發布規則不應被硬套成同一套。 |
| Secure by Default | ToolHub 是公開資料的內容營運工具，但 API key、內部資料與本機工作內容仍應採最小保存與最小暴露。 |
| 沒有證據就不擴大架構 | 不因「看起來更工程化」就引入 framework、backend 或通用 workflow architecture；先由實際使用與維護成本證明需要。 |

## 5. Forum v9.16：操作人員視角

### Start / Continue

- 日常工作以瀏覽器 autosave 為正常路徑，不需要每次手動存檔才能繼續。
- 同一瀏覽器重新載入後，可用 **Continue** 回到最近工作。
- **Work File JSON** 用於備份、交接或跨裝置移轉，是比瀏覽器 autosave 更耐久的保存方式。
- Legacy Restore 與舊草稿接續屬於 recovery mechanism，不是新工作流程的第一入口。

### Review

Forum 的主要編輯區改為七個結構化區段：

1. Basic
2. Theme
3. People
4. Partners
5. Agenda
6. Registration & Pricing
7. Venue

Review Map 會顯示各區目前是否有問題；Readiness issue 的「前往修正」可帶操作人員到對應區段或實際欄位。只有區段層級的問題會停在該區，不會隨便替使用者選一個不相關欄位。

Venue 的雙語排列固定為中文在左、英文在右。People 目前是中英文輸出共用同一份資料，介面也已明確提示，不會建立兩套看似獨立但實際不同步的 People 欄位。

### Readiness

| 狀態 | 操作意義 |
|---|---|
| READY | 沒有阻擋發布的問題，可以 Preview，也可以 Copy。 |
| WARNING | 有內容值得人工確認，但輸出仍有用途且可安全檢查；可以 Preview，也可以 Copy。 |
| BLOCKED | 存在會影響發布正確性或安全性的問題；仍可 Preview 以便找問題，但 Copy 會被阻擋。 |

**WARNING 不代表頁面不能發布。** 它代表操作人員應看過提醒，並依實際內容判斷是否接受。

中文與英文的 Readiness 分開計算。例如只有某一語言的 CTA、Venue、pricing information 或其他 target-language data 缺漏時，不應讓另一語言的狀態誤導操作人員。

### Publish

- 正常流程不再要求操作人員記得先按 Generate。
- 進入 Publish 時，系統會確保目前欄位已有對應的最新輸出。
- 編輯後若輸出變 stale，Publish 與 Copy 會先重新產生目前版本。
- 中英文會以同一份 canonical state 進行原子化產生，避免只更新一個語言。
- Copy 會再次檢查目標語言的狀態，不只依賴按鈕外觀。

## 6. Forum 開發與稽核歷程

| Pilot | 重點 | 收斂結果 |
|---|---|---|
| Pilot 1 — State Backbone | 建立 canonical edit revision、generated revision、no-output/current/stale 與 live readiness | 系統能分辨表單內容與輸出是否同步，不再靠操作人員猜測。 |
| Pilot 2 — Issue → Action | 建立結構化 issue metadata 與真正可用的 Go to fix | 問題可導向實際欄位或正確區段，不只是顯示訊息。 |
| Pilot 3 — Review Architecture | 掛載七個 Review sections、active section navigation 與 section readiness state | 大型表單被整理成可定位、可逐區確認的工作區。 |
| Pilot 4 — Continuity | 真正的瀏覽器 autosave、固定 continuation slot、Work File continuity、legacy draft adoption、API key memory-only | 日常接續與耐久交接分層；敏感 key 不寫入長期草稿。 |
| Pilot 5 — Publish Simplification | 移除正常流程的手動 Generate、current-output 自動產生、stale Copy regeneration、雙語原子化產生 | Publish 成為可靠的發布入口，操作人員不需記住隱藏步驟。 |

## 7. 發布前關閉的重要 blockers

### A. Legacy adoption / autosave race

- **Finding：** 舊儲存資料的接續流程可能與新的 autosave 競爭，造成較舊內容覆蓋較新工作。
- **Decision：** 新的 canonical 編輯與 autosave 必須永遠優先；過時的 legacy adoption 不得晚到後改寫權威狀態。
- **Fix：** 將 persistence/adoption 寫入序列化，並在新工作出現後讓過時 adoption 失效。
- **Verification：** 重現原本的 NEW → OLD 失敗順序後，最終仍由 NEW 保持 authoritative state。

### B. IndexedDB transaction correctness

- **Finding：** 資料寫入流程可能在 transaction 真正 commit 前就回報成功。
- **Decision：** API 呼叫完成不等於資料已耐久保存。
- **Fix：** 只有 transaction completion 才視為成功；abort 或 error 必須 reject。
- **Verification：** success、abort 與 error 路徑都以 transaction 結果判定，不再提早發布成功狀態。

### C. Hidden publishable remarks

- **Finding：** Pricing remarks 可能影響產生結果，操作人員卻看不到可編輯的權威欄位。
- **Decision：** 會進入發布輸出的內容不能只藏在不可見狀態。
- **Fix：** Remarks 成為 Review 中可見、可確認的 authoritative fields。
- **Verification：** 相同 canonical data 在 Review 可見，產生結果與操作人員看到的內容一致。

### D. Mode-specific hidden People / partner data

- **Finding：** 切換模式後，部分 People 或 partner data 的控制項可能隱藏，但資料仍會進入輸出。
- **Decision：** 顯示邏輯必須考慮已有內容，不能只看目前 mode。
- **Fix：** visibility 改為 content-aware，issue routing 也只導向實際可處理的區段或欄位。
- **Verification：** 有內容的 mode-specific data 會保持可見、可檢查，且不會路由到任意替代欄位。

以上四項都被視為 release blockers，並在正式發布前關閉。

## 8. 為什麼使用兩個 AI reviewer

這次使用兩種不同的 review 取向：

- **Codex GPT-5.6 Sol**：偏重 repository、state、persistence 與 release engineering。
- **Claude Opus 4.8**：偏重 adversarial product review 與操作人員實際行為。

兩者找到的風險互補，但最終決策仍由 owner／產品負責人做出。AI finding 不會自動被當成事實；重要 blocker 必須先重現、比對程式或重新檢查，才會關閉。這裡只記錄可驗證的結論，不保存或推論 private chain-of-thought。

## 9. Sponsors v5.3.0

Sponsors v5.3.0 的重點是讓預覽、輸出與 Copy 使用同一套判斷，而不是增加更多欄位：

- 中文與英文各自計算 READY／WARNING／BLOCKED。
- Copy 按鈕依目標語言獨立 guard，呼叫 Copy 時會再次檢查。
- Logo 是否可用由 canonical validation 統一判斷，避免預覽與輸出認定不同。
- URL 處理更安全；無效連結不會被當成可點擊輸出。
- 相同 canonical data 產生 deterministic output。
- 英文 tier terminology 採一致的複數用語。
- 改善 responsive output。
- 現行 UI 與輸出已移除 Scale；舊 Work File 的 Scale 只保留 import compatibility。
- README 與 minimal spec 已對齊 v5.3.0 的實際行為。

## 10. Held / Unreleased 工作

### Trends

Released main 維持 **v4.11**。較新的 reliability workstream 已保存，但刻意不納入本次發布。

主要原因是 Anthropic API key 的 localStorage persistence 需要更完整的安全決策；同時此工具使用頻率低，不值得為了低頻需求立即重開整體 release scope。任何後續設計都不應保存或揭露實際 credential。

### Pavilions

Released main 維持 **v1.1**。v1.2 工作已保存但未發布，內容包括：

- canonical vendor state
- incremental add/edit/reorder/delete
- duplicate warnings
- URL handling
- Work File continuity
- limited generated-HTML restore

未發布原因是 browser、mobile 與 Drupal source QA 尚未完整完成。它不是被否定的方向，但也不能因為程式已存在就視為 release-ready。

## 11. Preservation branch

- Branch：`preserve/toolhub-2026-precloseout`
- Commit：`207af64ac4093629d76b2707f46eaf2ad79160ea`

這個 branch 保存 closeout 前 Git 可納入快照的完整 dirty working tree，包含 held Trends／Pavilions development。它不是 released main，也不應被當成下一次開發的直接合併來源。

請勿隨意刪除 preservation branch，也不要 wholesale merge 回 main。未來若要恢復某項工作，應先確認需求，再只取回經過 review 的明確檔案或變更。

## 12. Local / Operational Archive

Closeout 過程另外發現約 **84 MiB**、未進入 Git 追蹤的 Forum 營運與來源資料，包括 Drupal raw captures、轉換後 HTML、Logo／workbook 歷史、audit records 與 final HTML。部分內容無法證明可以從目前工具精確重建，因此決定先封存，而不是清除。

處理結果：

- 依來源 captures、updated HTML、assets/operations、small records 分成四個 logical archive packages。
- 建立 SHA-256 manifest 與 human-readable inventory。
- 每個 archive 都通過 checksum、gzip 與 tar integrity verification。
- 因 GitHub repository 是 public，已拒絕把這些 raw captures／assets 上傳到該 repository。
- Company-controlled SharePoint／OneDrive remote archival 仍待完成。

在 company-controlled remote archival 完成並驗證前，local archive 與原始 operational artifacts 都不應刪除。公開 repository 只保留產品程式、公開文件與必要的 release history，不放 private raw operations material。

## 13. Frozen 範圍與不要隨意重開的工作

Forum v9.16 已 Frozen。只有下列情況應立即重開：

- data loss
- published output 錯誤
- Preview／Copy 壞掉
- security issue
- 真正會阻擋發布的 defect

不要只因下列原因重開：

- minor visual preference
- speculative framework refactor
- 尚未被實際需要的 feature idea
- 對營運沒有影響的 backlog cleanup

Frozen 不代表永遠不能改，而是改動必須有清楚問題、可驗證價值與相稱 QA。

## 14. Post-release backlog

以下是已知但不阻擋本次 release 的項目：

- Clipboard API 不存在時的 Forum clipboard fallback 強化
- 更嚴格的 Work File 結構與型別驗證
- 未使用 persistence helpers 的清理或正式 retention 決策
- dead output-freshness presentation cleanup
- 重複 clear-browser-draft controls
- Partner／其他 mode UX polish
- responsive polish
- Pavilions Tailwind CDN removal
- Trends API-key persistence redesign
- Pavilions v1.2 完整 browser／mobile／Drupal QA

Backlog 不是 release failure，也不代表下次開啟 repository 時就應自動開始處理。先看實際使用與風險，再決定優先順序。

## 15. 下次重新開啟 ToolHub 時

1. 先讀 `README.md`。
2. 再讀本 closeout record。
3. 檢查 current main 與各工具版本。
4. 確認 preservation branch 仍存在且 commit 未改變。
5. 確認 2026 operational archive 已移至 company-controlled storage 並完成驗證。
6. 重新了解各工具目前的實際使用頻率與操作痛點。
7. 之後才決定是否恢復 Trends reliability work 或 Pavilions v1.2。
8. 不要只因 backlog 存在就重新啟動開發。

## 16. 簡短名詞表

| 名詞 | 實務定義 |
|---|---|
| main | 對外代表目前正式產品狀態的主要開發線。 |
| branch | 與 main 分開保存的一條工作線，可用來隔離未發布工作。 |
| commit | 一次有明確內容與說明的版本快照。 |
| working tree | 電腦上目前看到、正在編輯或尚未 commit 的檔案狀態。 |
| autosave | 工具自動把目前工作保存於同一瀏覽器，方便重新載入後接續。 |
| Work File | 可下載、交接、備份或跨裝置載入的結構化工作檔。 |
| readiness | 工具依目前資料判斷是否可以安全發布／複製的狀態。 |
| READY／WARNING／BLOCKED | 可直接進行／需人工確認但仍可進行／存在阻擋問題。 |
| Preview | 在複製前查看目前資料會產生什麼畫面。 |
| Copy | 把目前目標語言的發布 HTML 複製出去。 |
| preservation branch | 保留 closeout 前未發布工作與決策證據的安全分支。 |
| release | 已核准並進入 main 的版本。 |
| held | 已保存但刻意不納入目前 release 的工作。 |
| frozen | 穩定版本暫停一般功能擴張，只處理有明確必要性的問題。 |

本紀錄的維護原則很簡單：若未來的實際產品狀態改變，請更新 current-state 文件並新增新的決策紀錄，不要回頭改寫 2026 年已發生的 release decision。
