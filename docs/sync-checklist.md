# SEMI Tool Hub — 工具同步 Checklist

> 每次把 source repo 的工具更新同步進 Hub 時，照這份清單走。
> 目的：不要讓版本漂移、不要讓 release notes 落後、不要讓 Hub 上線版本來源不明。

---

## 同步前

- [ ] source repo 已測試，功能正常
- [ ] 確認 source repo 的版本號（`TOOL_VERSION` 或工具內顯示）
- [ ] 確認這次變更對使用者有沒有感——有感 → 要寫 release notes；只是工程調整 → 只寫 commit

---

## 同步中

- [ ] 複製 `index.html` 到 Hub 的 `tools/xxx/index.html`
- [ ] 確認 Hub 內版本號顯示正確（搜尋 `TOOL_VERSION` 或版本字串）
- [ ] 如果工具有用到外部資源（圖片、字型、CDN），確認 Hub 環境也能正常載入

---

## 同步後

- [ ] 更新 `docs/version-map.md`：填日期、Source 版本 → Hub 版本、說明
- [ ] 如果有使用者有感變更 → 更新 `docs/release-notes.md`
- [ ] commit message 格式：`sync: [工具名] v[舊] → v[新]`
  - 範例：`sync: forum v9.13 → v9.14`
  - 範例：`sync: trends v4.7 → v4.8（修正版本漂移）`
- [ ] push 到 Hub repo
- [ ] 確認 GitHub Pages 部署成功，在線上版本確認版本號

---

## 工具各自更新（不同步進 Hub）

有時候 source repo 更新是實驗性的，還沒準備好進 Hub。這時候：

- [ ] 只在 source repo commit，不動 Hub
- [ ] 在 `version-map.md` 的「同步狀態」欄標記 `🔄 source 超前`
- [ ] 準備好時再走上面的同步流程

---

## 緊急 Hotfix（直接改 Hub，不經過 source repo）

盡量避免，但如果發生：

- [ ] 在 Hub 直接修改，commit 標記 `hotfix: [工具名] [問題描述]`
- [ ] 事後把修改補回 source repo，保持來源同步
- [ ] 在 `version-map.md` 備註欄標記 `⚠️ hotfix，source 需補同步`

---

## 目前待處理

| 項目 | 說明 | 優先級 |
|---|---|---|
| Trend 版本漂移 | 已修正：Hub 首頁、workspace metadata、工具實際版本皆為 v4.8 | ✅ 完成 |
| Trend release notes | v4.8 相較 v4.7 的有感變更補充 | 🟡 中 |
| Sponsors release notes | v5.2.0 有感變更補充 | 🟡 中 |
| Pavilions release notes | v1.1 有感變更補充 | 🟡 中 |
