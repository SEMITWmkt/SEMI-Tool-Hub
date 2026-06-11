# Trend Table Import Schema

Use `trend-table-import-template.tsv` as the fixed Excel / Google Sheets source format.
The TSV file can be opened in spreadsheets, edited, then pasted or imported back into the tool.

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

The current template includes `Zone1` to `Zone3`. More triplets can be added later if needed.

## Forum Fields

Each forum uses three columns:

- `ForumN ZH`: Chinese forum name.
- `ForumN EN`: English forum name.
- `ForumN URL`: Public URL for that forum.

The current template includes `Forum1` to `Forum4`. More triplets can be added later if needed.

## AI Assist Rules

AI should only fill or improve missing text fields. It should not change the column order, `No`, URLs, or manually provided official names unless explicitly requested.
