# Version Map

This file records how each desktop/source tool is integrated into SEMI-Tool-Hub.

Last checked: 2026-06-03, Asia/Taipei.

## Tool Integration Status

| Hub module | Source folder | Source repo | Source branch / commit | Hub integration status | Notes |
|---|---|---|---|---|---|
| `tools/logo-prep/index.html` | Hub-native | N/A | local working copy | Integrated v0.1 minimal utility slice | Adds a small pre-processing tool that reads PDF-compatible AI, PDF, SVG, and image files in-browser, trims whitespace, and exports transparent PNG for Sponsor Generator intake. |
| `tools/sponsors/index.html` | `/Users/lun04/Desktop/Sponsors Logo HTML Creator` | `SEMITWmkt/Sponsors-Logo-HTML-Creator` | `main @ 72d03a6` | Integrated v5.2.0 + continuity workflow slice | Adds existing HTML restore, continuous paste-to-queue logo intake, whitespace auto-crop for logos, missing/check filters, and current-item focus so recurring sponsor updates can continue from published output instead of rebuilding the list. Source repo still needs sync after Hub validation. |
| `tools/pavilions/index.html` | `/Users/lun04/Desktop/Pavilions Vendor HTML Creator` | `SEMITWmkt/Pavilions-Vendor-HTML-Creator` | `pavilions-v1.1-confidence` working copy | Integrated v1.1 confidence slice + Hub layout fit | Needs manual visual QA and source repo commit. Source repo has `.DS_Store` modified. Hub module removes narrow centering for integrated use. |
| `tools/forum/index.html` | `/Users/lun04/Desktop/Fourm HTML Creator` | `SEMITWmkt/SEMI-AutoCompiler-FORUM` | `main @ f2d1ce5` | Integrated v9.11 + Hub layout fit | Synced from desktop source after user confirmed Forum is updated to v9.11. Hub module removes narrow centering for integrated use. |
| `tools/trends/index.html` | `/Users/lun04/Desktop/Trend_Table Creator ` | `SEMITWmkt/Trend_Table-Creator` | `main @ 88f35b8` | Integrated | Source folder has a trailing space in its name; use clean clone path later. |

## Integration Policy

- SEMI-Tool-Hub is the canonical integrated project.
- Desktop source folders can remain during migration, but Hub modules should stay usable and current.
- Do not copy `.git/`, `.DS_Store`, backups, or local-only files into `tools/`.
- After every integration update, record source branch/commit, date, and verification notes.

## Recommended Clean Workspace Later

The current desktop folder layout is workable, but a future clean workspace should make SEMI-Tool-Hub the root project and avoid spaces or trailing spaces in source paths.

Suggested structure:

```text
SEMI-Tool-Hub/
  index.html
  docs/
  tools/
    sponsors/
    pavilions/
    forum/
    trends/
  sources/ optional-migration-reference/
```

Keep the current desktop folders in place until all remotes and local changes are accounted for.
