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

Status: current.

- Confirm all four Hub modules launch from `index.html`.
- Confirm Pavilions v1.1 appears inside Hub.
- Resolve Forum source drift.
- Decide whether source docs should be copied into Hub docs or kept as tool-level references.

## Phase 3: Forum Generator Review

Status: pending.

Focus:

- Confirm Hub snapshot drift from source repo.
- Review AI-assisted parsing path.
- Add minimum-input mode if it reduces editor confusion.
- Add JSON project export/import if current storage is not enough for handoff.
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

Pavilions v1.1 is now the first integrated confidence upgrade. The next priority is Hub-level integrity: all four tools should launch cleanly, and Forum drift should be resolved before visual unification.
