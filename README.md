# SEMICON Content Tool Hub

SEMICON Content Tool Hub is the integrated browser-based workbench for SEMICON Taiwan website content generators. It brings the Sponsors Logo, Pavilions Vendor, Forum, and Trend Table tools into one portfolio-ready project.

The current product direction is intentionally narrow: help website editors prepare source data, validate whether it is publishable, preview the generated section, and copy HTML that can be pasted into Drupal.

## Tools

| Tool | Purpose | Hub integration status |
|---|---|---|
| Forum Generator | 論壇頁資料、Logo、價格、還原與草稿維護的中英文 HTML 產生器 | Integrated v9.16 |
| Theme / Trend Generator | 主題卡片、展區與論壇議題互動 HTML 產生器 | Integrated |
| Logo Prep Tool | PDF-compatible AI、PDF、SVG 與圖片去白邊轉 PNG 工具 | Integrated v0.1 |
| Sponsors Logo Generator | 贊助商 Logo 分級、排序、備份與中英文輸出 | Integrated v5.2.1 |
| Pavilions Vendor Generator | 專區展商名單與攤位資料 HTML 產生器 | Integrated v1.1 confidence slice |

## Current Architecture

```text
SEMI-Tool-Hub/
  index.html
  docs/
  tools/
    forum/index.html
    logo-prep/index.html
    trends/index.html
    sponsors/index.html
    pavilions/index.html
```

Each generator is loaded as an independent page inside the integrated Hub. This avoids global JavaScript conflicts, CSS leakage, and localStorage collisions while still giving users one launch surface.

The desktop tool folders are treated as source material during migration. The Hub `tools/` directory is the integrated product surface that should be usable from `index.html`.

## Workspace Docs

| Document | Purpose |
|---|---|
| [Product Brief](docs/product-brief.md) | Product framing for problem statement, personas, user story, flow, scope, criteria, metrics, risks, and roadmap. |
| [Product Principles](docs/product-principles.md) | Decision rules for what to build, avoid, and defer. |
| [Tool Status](docs/tool-status.md) | Central status map for each integrated tool, including owner thread, known issues, next action, and Drupal QA state. |
| [Tool Contracts](docs/tool-contracts.md) | Integration contract for each tool: input, output, CSS scope, storage, QA requirement, and risks. |
| [Drupal QA Checklist](docs/qa/README.md) | Standard QA evidence checklist for backend paste, desktop/mobile frontend review, links, screenshots, and known issues. |
| [Project State Standard](docs/project-state-standard.md) | Shared Save/Load work file model so recurring updates do not require manual HTML edits. |
| [Generator UI Standard](docs/generator-ui-standard.md) | Shared shell, labels, and visual direction for all generators. |
| [Data Resilience Scope](docs/data-resilience-scope.md) | Vendor and sponsor parsing scope for messy source data and fixed publishing output. |
| [Roadmap](docs/roadmap.md) | Current delivery phases and next tool priorities. |
| [Version Map](docs/version-map.md) | Integration source, current Hub module status, and drift notes. |
| [Workflow](docs/workflow.md) | Repeatable test, integrate, document, and release process. |
| [Functional Map](docs/functional-map.md) | Product functions organized by workflow and role. |
| [Forum v9.14 Work Log](docs/forum-v914-worklog.md) | Maintainer-facing summary of the Forum continuity workflow, decisions, limits, and next improvements. |
| [Pavilions v1.1 Spec](docs/pavilions-v1.1-spec.md) | Scope and acceptance criteria for the next tool slice. |
| [Trial Runs 2026-06-03](docs/trial-runs-2026-06-03.md) | Baseline results from editor, visitor, and developer perspectives. |
| [Trial Runs 2026-06-08](docs/trial-runs-2026-06-08-data-resilience.md) | Data resilience tests for messy vendor and sponsor source data. |

## UIUX Direction

The current integrated Hub keeps the existing generators usable. The next design pass is captured in [uiux-demo.html](uiux-demo.html), which proposes one shared product language for source input, validation, preview, and Drupal HTML copy workflows.

## Forum v9.16 Workflow

Forum v9.16 uses three source layers:

- Excel/text is for first-time import.
- Forum Draft JSON is the recommended maintenance source after first creation.
- Drupal HTML is the publishing output, not the ideal source of truth.

For a new page, paste Excel/text, parse, select the forum/session if needed, edit fields in Step 2, generate HTML, paste to Drupal, then export the Forum Draft JSON with the project files.

For later updates, import the Forum Draft JSON, edit only changed fields, regenerate HTML, paste to Drupal, then export the updated draft JSON.

Legacy HTML Restore is a recovery helper for existing Drupal body HTML. It can preview and apply Theme, Outline, Venue, and Registration URL, but it does not restore page title, pricing, logo sections, chair/moderator/advised-by fields, or full CMS state.

Step 1 also offers a Manual mode for forums with no Excel or Word source at all: it skips parsing and goes straight to a blank Step 2, with the standard SEMI pricing table left off by default since there is no parsed price data to show. Theme and Outline are independent toggles, and the Registration Fees block only renders when there is an actual CTA link or price data to show.

Step 2 also has an optional Agenda block (between Logos and Registration/Pricing) for forums that need a short session list on the page. Paste the agenda close to as-is: a line that looks like a time (e.g. `10:15 – 10:55`) starts a new session entry, the next line is the session title, and every line after that is one speaker (`Name | Title | Company`). A line starting with `##` is always a standalone section header regardless of blank lines, and wrapping a session title or header in `**...**` highlights that row.

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
