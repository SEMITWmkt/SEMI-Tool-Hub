# Pavilions — Korea Pavilion Test Data (2026)

這裡存放 [Pavilions Vendor Creator](../../tools/pavilions/README.md) 開發期間，用來測試「Excel 貼上解析」邏輯的真實案例資料，原本散落在 `tools/pavilions/` 資料夾根目錄，沒有任何文件或程式引用，容易讓人誤以為還在使用中。

| 檔案 | 說明 |
|---|---|
| `korea-backend-source.txt` | 韓國館參展廠商原始資料（從 Drupal 後台複製出來的測試樣本） |
| `korea-backend-cleaned.html` / `korea-backend-cleaned-paste.html` | 上述資料清理後的版本，用來驗證解析結果 |
| `demo-subtle-optimizations.html` | 一份獨立的 UI 設計探索稿，跟韓國館資料本身無關，當時剛好放在同一批 |

**用途已經結束**——這批資料是開發階段用來驗證「不同 Excel 格式解析是否正確」的真實案例，不是現行產品的一部分。保留在這裡純粹是留一份「處理過的真實案例」參考；如果之後確認完全不需要，可以整包刪除，不影響任何現行工具。
