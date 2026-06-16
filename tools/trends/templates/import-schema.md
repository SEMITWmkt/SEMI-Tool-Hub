# Trend Table Import Schema

Use `trend-table-import-template.xlsx` or `trend-table-import-template.tsv` as the preferred Excel / Google Sheets source format.
The `.xlsx` file can be edited directly in Excel and loaded into the tool. The TSV file can also be opened in spreadsheets, edited, then pasted back into the tool.

The tool also accepts a grouped worksheet layout closer to the current working Excel:

- `Segment`
- `主題`
- `主題介紹`
- `關鍵字`
- `對應專區`
- `對應論壇`

For grouped sheets, each extra row under the same theme can add one more zone or forum entry.
Recommended cell format for `對應專區` / `對應論壇`:

- `中文名稱 | URL`
- or `中文名稱 | English Name | URL`

Example grouped rows:

```text
1	AI算力	算力需求迎來指數型爆發...	AI半導體・ASIC・熱管理	AI半導體技術特區 | AI Semiconductor Technology Zone | https://example.com/zone	大師論壇 | Masters Forum | https://example.com/forum
1	AI算力			半導體封裝專區 | Semiconductor Packaging Zone | https://example.com/zone-2	半導體先進製程科技論壇 | Advanced Process Forum | https://example.com/forum-2
```

Rules for grouped sheets:

- Repeated `Segment` values are merged into the same theme.
- The first encountered row for a theme clears that theme's old zones/forums before rebuilding.
- Later rows with the same theme keep appending zones/forums.
- Empty cells are allowed on continuation rows.

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
