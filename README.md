# SEMICON Content Tool Hub

SEMICON Content Tool Hub is the integrated browser-based workbench for SEMICON Taiwan website content generators. It brings the Sponsors Logo, Pavilions Vendor, Forum, and Trend Table tools into one portfolio-ready project.

The current product direction is intentionally narrow: help website editors prepare source data, validate whether it is publishable, preview the generated section, and copy HTML that can be pasted into Drupal.

## Tools

| Tool | Purpose | Hub integration status |
|---|---|---|
| Forum Generator | 論壇頁資料、Logo、價格與報名資訊的中英文 HTML 產生器 | Integrated; needs source drift review |
| Theme / Trend Generator | 主題卡片、展區與論壇議題互動 HTML 產生器 | Integrated |
| Sponsors Logo Generator | 贊助商 Logo 分級、排序、備份與中英文輸出 | Integrated v5.1.1 |
| Pavilions Vendor Generator | 專區展商名單與攤位資料 HTML 產生器 | Integrated v1.1 confidence slice |

## Current Architecture

```text
SEMI-Tool-Hub/
  index.html
  docs/
  tools/
    forum/index.html
    trends/index.html
    sponsors/index.html
    pavilions/index.html
```

Each generator is loaded as an independent page inside the integrated Hub. This avoids global JavaScript conflicts, CSS leakage, and localStorage collisions while still giving users one launch surface.

The desktop tool folders are treated as source material during migration. The Hub `tools/` directory is the integrated product surface that should be usable from `index.html`.

## Workspace Docs

| Document | Purpose |
|---|---|
| [Product Principles](docs/product-principles.md) | Decision rules for what to build, avoid, and defer. |
| [Roadmap](docs/roadmap.md) | Current delivery phases and next tool priorities. |
| [Version Map](docs/version-map.md) | Integration source, current Hub module status, and drift notes. |
| [Workflow](docs/workflow.md) | Repeatable test, integrate, document, and release process. |
| [Functional Map](docs/functional-map.md) | Product functions organized by workflow and role. |
| [Pavilions v1.1 Spec](docs/pavilions-v1.1-spec.md) | Scope and acceptance criteria for the next tool slice. |
| [Trial Runs 2026-06-03](docs/trial-runs-2026-06-03.md) | Baseline results from editor, visitor, and developer perspectives. |

## Current Focus

Pavilions Vendor HTML Creator v1.1 is now integrated into Hub as the current confidence upgrade:

- Parsed-data review before HTML output.
- Row-level validation for company name, booth, and URL.
- Sample data for first-time use.
- SEMICON preset color swatches.
- README and Chinese user guide.

## Definition of Done

A generator is considered Hub-ready when it has:

- Clear first-use path.
- Sample data.
- Validation before publishing.
- Preview that matches copied HTML.
- Copy success state.
- README and user guide.
- Drupal paste guidance.
- Version entry in `docs/version-map.md`.
