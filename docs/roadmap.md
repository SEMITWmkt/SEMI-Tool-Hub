# Roadmap

This roadmap is ordered by publishing confidence and portfolio value.

## Phase 0: Workspace Order

Status: corrected toward integrated Hub.

- Treat SEMI-Tool-Hub as the integrated product.
- Treat desktop tool folders as migration sources.
- Add product principles, workflow, roadmap, and version map.
- Track which source version is represented in each Hub module.
- Use repeatable trial runs before implementation.

## Phase 1: Pavilions Vendor HTML Creator v1.1

Status: integrated into Hub; manual visual QA still needed.

Goal: make the pavilion vendor generator trustworthy for website editors before changing visual style.

Scope:

- Add parsed-data review table before output.
- Add row-level validation for missing company name, booth, and URL.
- Add sample data for standard and country formats.
- Add SEMICON preset color swatches.
- Add README and `USER_GUIDE_zh-TW.md`.
- Keep existing generated HTML structure unless a validation fix requires a small change.

Out of scope:

- CRM-style vendor management.
- Approval states.
- Full bilingual simultaneous export.
- Large visual redesign.
- Replacing Tailwind CDN, unless required for publish safety.

## Phase 2: Hub Integrity Review

Status: completed enough for the current integrated Hub; ongoing as tools change.

- Confirm all four Hub modules launch from `index.html`.
- Confirm Pavilions v1.1 appears inside Hub.
- Keep Forum v9.14 source sync and QA status documented.
- Align embedded tool layouts with the Hub workspace so tools do not appear as narrow standalone pages.
- Decide whether source docs should be copied into Hub docs or kept as tool-level references.

## Phase 2.5: Vendor and Sponsor Data Resilience

Status: current implementation slice.

Goal: make the two simpler generators absorb messy source data while keeping fixed Drupal-ready output.

Scope:

- Pavilions accepts tab, CSV, pipe, and multi-space pasted rows.
- Pavilions normalizes domain-like URLs and infers booth / URL when columns shift.
- Sponsors accepts pasted sponsor metadata lists before logos are ready.
- Sponsors keeps missing-logo rows as work items but excludes them from generated HTML.
- Both tools keep validation visible before copy.

Out of scope:

- Auto-fetching logos.
- Full spreadsheet file upload.
- CRM fields.
- Approval workflows.
- Replacing the active Forum workflow.

## Phase 2.6: Project State Continuity

Status: active across Sponsors, Pavilions, Trends, and Forum v9.14.

Goal: make recurring website updates editable through saved structured state instead of manual HTML edits.

Scope:

- Add shared project state standard.
- Sponsors work files preserve project name, tier labels, sponsor rows, missing-logo rows, links, scale, and order.
- Pavilions work files preserve pavilion name, language, intro, bullets, color, data format, shared booth, and raw vendor rows.
- Local autosaved drafts make browser refreshes safer.
- Generated HTML remains an output artifact, not the editing source.
- Trends work files preserve theme cards, drawer settings, global labels, and responsive output settings.
- Sponsor rows support direct name and tier edits for one-item updates.
- Pavilions parsed review rows support direct company, booth, and URL edits.

Next:

- Run QA on Forum v9.14 Draft JSON maintenance workflow and back-sync source state.

## Phase 2.7: Shared Generator UI

Status: specified, incremental rollout.

Goal: make all generators feel like the same SEMI Tool Hub product without forcing a disruptive redesign.

Scope:

- Add shared generator UI standard.
- Standardize work-file wording.
- Standardize publish check language.
- Standardize preview and copy controls.
- Preserve active Forum workflow while aligning the outer shell.

## Phase 3: Forum Generator Review

Status: pending.

Focus:

- Keep Forum source and Hub snapshot synchronized before adding further workflow changes.
- Use `Program at a Glance Excel` as the fixed upstream source and standardize the post-parse workflow instead of replacing Excel.
- Maintain Forum continuity slice based on `docs/forum-continuity-standard.md`.
- Review AI-assisted parsing path.
- Add minimum-input mode if it reduces editor confusion.
- Extend JSON project export/import only after v9.14 QA identifies gaps.
- Add Drupal paste checklist.

## Phase 4: Theme / Trend Generator Review

Status: pending.

Focus:

- Clarify AI optional workflow.
- Add empty-field checks.
- Add quick navigation for large theme sets.
- Confirm keyword settings and output contract.

## Phase 5: Hub Portfolio Polish

Status: pending.

Focus:

- Case study page.
- Tool screenshots.
- Release notes.
- Unified status labels.
- Shared language for preview, copy, sample data, and validation.

## Current Priority

Vendor and Sponsor data resilience is the current confidence slice. After it is manually trial-run in the Hub, sync validated changes back to the source repos and then return to remaining generator-specific issues.
