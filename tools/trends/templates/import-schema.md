# Trend Table Import Schema

Use `trend-table-import-template.xlsx` or `trend-table-import-template.tsv` as the preferred Excel / Google Sheets source format.
The `.xlsx` file can be edited directly in Excel and loaded into the tool. The TSV file can also be opened in spreadsheets, edited, then pasted back into the tool.

The tool also accepts a grouped worksheet layout closer to the current working Excel:

- `Segment`
- `主題`
- `英文主題`
- `主題介紹`
- `英文主題介紹`
- `關鍵字`
- `英文關鍵字`
- `Group`
- `Group ZH`
- `Group EN`
- `對應專區`
- `英文對應專區`
- `中文對應專區連結`
- `英文對應專區連結`
- `對應論壇`
- `英文對應論壇`
- `中文對應論壇連結`
- `英文對應論壇連結`

Legacy single-link columns such as `對應專區連結`, `對應論壇連結`, `ZoneN URL`, or `ForumN URL` are still accepted. When only one URL is supplied, the importer uses it for Chinese output and tries to infer the English URL by replacing `zh`, `zh-tw`, or `zh_tw` with `en`. You can still override the English URL with a dedicated English URL column.

For grouped sheets, each extra row under the same theme can add one more zone or forum entry. Add `Group`, `Group ZH`, and `Group EN` when one theme needs more than one zone/forum set. Without group columns, all rows for the same theme are merged into the default group.

Recommended grouped-sheet link methods:

1. Preferred: keep names and links in separate columns.

```text
對應論壇: 大師論壇
英文對應論壇: CEO Summit
中文對應論壇連結: https://example.com/zh/forum
英文對應論壇連結: https://example.com/en/forum
```

2. Multiple items in one theme can use line breaks. Keep the Chinese, English, and URL lines aligned by order.

```text
對應論壇:
1.大師論壇
2.半導體先進製程科技論壇

英文對應論壇:
1.CEO Summit
2.Semiconductor Advanced Process Technology Forum

中文對應論壇連結:
https://example.com/zh/forum-1
https://example.com/zh/forum-2

英文對應論壇連結:
https://example.com/en/forum-1
https://example.com/en/forum-2
```

3. You can also put the link in the same cell:

- `中文名稱 | URL` (shared URL for both languages)
- `中文名稱 | English Name | URL` (shared URL for both languages)
- `中文名稱 | English Name | 中文 URL | English URL`

Example grouped rows:

```text
1	AI算力	AI Computing	算力需求迎來指數型爆發...		AI半導體・ASIC・熱管理	AI Semiconductor・ASIC・Thermal	1	AI算力應用	AI Applications	AI半導體技術特區	AI Semiconductor Technology Zone	https://example.com/zh/zone	https://example.com/en/zone	大師論壇	CEO Summit	https://example.com/zh/forum	https://example.com/en/forum
8	策略材料	Strategic Materials	先進材料聚焦突破矽材料...		先進材料・高功率密度	Advanced Materials・High Power Density	1	化合物半導體	Compound Semiconductor	化合物半導體概念區	Compound Semiconductor Area	https://example.com/zh/compound	https://example.com/en/compound	功率暨化合物半導體論壇	Power and Compound Semiconductor Forum	https://example.com/zh/power-forum	https://example.com/en/power-forum
8	策略材料						2	材料	Materials	材料專區	Materials Pavilion	https://example.com/zh/materials	https://example.com/en/materials	策略材料高峰論壇	Strategic Materials Summit	https://example.com/zh/materials-summit	https://example.com/en/materials-summit
```

Rules for grouped sheets:

- Repeated `Segment` values are merged into the same theme.
- `Group` separates multiple zone/forum sets under one theme. `Group ZH` and `Group EN` are optional labels shown only when a theme has multiple groups.
- The first encountered row for a theme clears that theme's old groups before rebuilding.
- Later rows with the same theme and same group keep appending zones/forums.
- Empty cells are allowed on continuation rows.
- Leading numbering such as `1.` or `2.` in zone/forum cells is removed during import.
- If an `.xlsx` cell has a single built-in hyperlink, the importer tries to read it as `Name | URL`. For multiple links, use separate URL columns or line breaks instead of relying on Excel's cell hyperlink.

## Core Fields

- `No`: Theme order, usually `01` to `15`.
- `Icon URL`: Public image URL. Optional; empty values can fall back to bundled icons.
- `Title ZH`: Chinese theme title shown on the card.
- `Title EN`: English theme title shown on the card.
- `Sub ZH`: Chinese keyword line shown below the title.
- `Sub EN`: English keyword line shown below the title.
- `Trend Intro ZH`: Chinese drawer description or trend introduction.
- `Trend Intro EN`: English drawer description or trend introduction.
- `Keywords ZH`: Chinese keywords for internal review and AI reference.
- `Keywords EN`: English keywords for internal review and AI reference.
- `Group`: Optional group number. Use `1`, `2`, etc. when one theme has multiple zone/forum sets.
- `Group ZH`: Optional Chinese group label.
- `Group EN`: Optional English group label.

## Zone Fields

Each zone uses four columns:

- `ZoneN ZH`: Chinese zone name.
- `ZoneN EN`: English zone name.
- `ZoneN URL ZH`: Chinese public URL for that zone.
- `ZoneN URL EN`: English public URL for that zone.

The current template includes `Zone1` to `Zone3`. More triplets can be added later if needed; the importer reads additional `ZoneN` columns automatically.

## Forum Fields

Each forum uses four columns:

- `ForumN ZH`: Chinese forum name.
- `ForumN EN`: English forum name.
- `ForumN URL ZH`: Chinese public URL for that forum.
- `ForumN URL EN`: English public URL for that forum.

The current template includes `Forum1` onward. More triplets can be added later if needed; the importer reads additional `ForumN` columns automatically.

## Iteration Advice

Use Excel or Google Sheets as the source of truth.

Recommended update loop:

1. Maintain official names, URLs, and language pairs in the spreadsheet.
2. Paste the sheet into the tool.
3. Use the tool only for final review, preview, and export.
4. If content changes later, update the spreadsheet first, then paste again.

Supported import file types:

- `.xlsx`
- `.xls`
- `.csv`
- `.tsv`

## AI Assist Rules

AI should only fill or improve missing text fields. It should not change the column order, `No`, URLs, or manually provided official names unless explicitly requested.
