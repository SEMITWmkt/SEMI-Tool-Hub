# Release Notes

This file records visible SEMI Tool Hub changes that have been published to `main`, plus pending branch candidates that still need review before release.

Use this together with `docs/version-map.md`:

- `release-notes.md` answers: what changed and when.
- `version-map.md` answers: which source version each Hub tool represents.

## 2026-06-24

### Released to `main`

#### Hub Homepage

- Removed the SEMI trademark image from the homepage header and restored a neutral product mark.
- Kept the hero support copy on one line for desktop layouts, with normal wrapping on narrower screens.
- Moved Logo Prep Tool out of the primary tool grid and into a support utility area.
- Kept the homepage focused on four primary work areas: Forum, Trend Table, Sponsors, and Pavilions.

#### Trend Table Creator

- Updated the Trend Table workbench layout so the editor and preview areas are better balanced inside the Hub workspace.
- Preserved the existing tool workflow while improving integrated workspace fit.

#### Logo Prep Tool

- Added Logo Prep Tool as a Hub-native support utility.
- Supports PDF-compatible AI, PDF, SVG, and image inputs.
- Exports transparent PNG files for sponsor logo preparation.
- Added `docs/logo-prep-minimal-spec.md`.

#### Pavilions Vendor Creator

- Improved country pavilion vendor parsing.
- Tightened booth/card output for CMS source use.
- Kept the generated HTML compact for Drupal paste workflows.

#### Sponsors Logo Creator

- Added continuity workflow improvements for recurring sponsor updates.
- Supports continuing from existing sponsor data instead of rebuilding the entire section every time.

### Branch Candidates

The `project-state-continuity` branch contains additional work that has not been fully accepted as a single release. Do not open a broad pull request until each item below is reviewed.

Candidate items visible in the branch comparison:

- Product and workflow documentation updates:
  - `docs/data-resilience-scope.md`
  - `docs/generator-ui-standard.md`
  - `docs/project-state-standard.md`
  - `docs/trial-runs-2026-06-08-data-resilience.md`
- `README.md`, `docs/roadmap.md`, and `docs/version-map.md` edits.
- Additional Pavilions changes in `tools/pavilions/index.html`.
- Trend icon assets under `tools/trends/assets/icons/`.
- `uiux-unified-demo.html`.

Recommended branch review order:

1. Review docs-only candidates first.
2. Review Pavilions functional changes with sample data.
3. Review Trend icon assets and whether they are needed in the published Hub.
4. Decide whether `uiux-unified-demo.html` should stay as a reference artifact, move into docs, or be removed from release scope.

## Earlier Published Milestones

### Initial Hub Launch

- Published SEMI Tool Hub as the integrated launcher for Forum, Trend Table, Sponsors, and Pavilions tools.
- Added `workspace.html` to load individual tools without merging their JavaScript and CSS into one page.

### Unified Homepage Direction

- Promoted the unified homepage direction to `index.html`.
- Established large tool cards as direct entry points into the Hub workspace.
- Removed demo-only wording from the production homepage.

### Trend Table Excel-First Workflow

- Upgraded Trend Table Creator to an Excel-first workflow.
- Added Trend Table README, usage guide, import schema, sample templates, and screenshots.
- Added workbook parsing support through the local `xlsx.full.min.js` asset.

