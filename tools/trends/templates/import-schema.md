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
- `對應專區`
- `英文對應專區`
- `對應專區連結`
- `對應論壇`
- `英文對應論壇`
- `對應論壇連結`

For grouped sheets, each extra row under the same theme can add one more zone or forum entry.

Recommended grouped-sheet link methods:

1. Preferred: keep names and links in separate columns.

```text
對應論壇: 大師論壇
英文對應論壇: CEO Summit
對應論壇連結: https://example.com/forum
```

2. Multiple items in one theme can use line breaks. Keep the Chinese, English, and URL lines aligned by order.

```text
對應論壇:
1.大師論壇
2.半導體先進製程科技論壇

英文對應論壇:
1.CEO Summit
2.Semiconductor Advanced Process Technology Forum

對應論壇連結:
https://example.com/forum-1
https://example.com/forum-2
```

3. You can also put the link in the same cell:

- `中文名稱 | URL`
- or `中文名稱 | English Name | URL`

Example grouped rows:

```text
1	AI算力	AI Computing	算力需求迎來指數型爆發...		AI半導體・ASIC・熱管理	AI Semiconductor・ASIC・Thermal	AI半導體技術特區	AI Semiconductor Technology Zone	https://example.com/zone	大師論壇	CEO Summit	https://example.com/forum
1	AI算力					半導體封裝專區	Semiconductor Packaging Zone	https://example.com/zone-2	半導體先進製程科技論壇	Advanced Process Forum	https://example.com/forum-2
```

Rules for grouped sheets:

- Repeated `Segment` values are merged into the same theme.
- The first encountered row for a theme clears that theme's old zones/forums before rebuilding.
- Later rows with the same theme keep appending zones/forums.
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

## Zone Fields

Each zone uses three columns:

- `ZoneN ZH`: Chinese zone name.
- `ZoneN EN`: English zone name.
- `ZoneN URL`: Public URL for that zone.

The current template includes `Zone1` to `Zone3`. More triplets can be added later if needed; the importer reads additional `ZoneN` columns automatically.

## Forum Fields

Each forum uses three columns:

- `ForumN ZH`: Chinese forum name.
- `ForumN EN`: English forum name.
- `ForumN URL`: Public URL for that forum.

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
