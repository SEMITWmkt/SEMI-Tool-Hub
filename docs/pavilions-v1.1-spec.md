# Pavilions Vendor HTML Creator v1.1 Spec

## Product Goal

Make the pavilion vendor generator trustworthy for website editors who need to paste Excel-like vendor lists, verify booth and link data, preview the section, and copy Drupal-ready HTML.

The v1.1 release is a confidence upgrade, not a visual redesign.

## Current Baseline

The current tool supports:

- Pavilion name.
- Output language switch.
- Intro text.
- Bullet points.
- Custom HEX color.
- Standard Excel format.
- Country pavilion format with shared booth.
- HTML output and preview tabs.
- Copy button.

Known gaps:

- No parsed-data review before output.
- Missing or malformed rows can silently disappear.
- Missing URL becomes `#` without a clear warning.
- No sample data.
- No SEMICON preset colors.
- No README or Chinese user guide in the source repo.
- Tailwind is loaded from CDN.

## v1.1 Scope

### Must Have

- Add "Load sample data" for standard pavilion format.
- Add "Load sample data" for country pavilion format.
- Show parsed vendor review before or alongside final output.
- Show row-level validation:
  - Missing display company name.
  - Missing booth number.
  - Missing URL.
  - URL does not start with `http://` or `https://`.
- Keep invalid rows visible in review instead of silently dropping them.
- Add SEMICON preset color swatches.
- Add a compact publish readiness summary.
- Add README.
- Add `USER_GUIDE_zh-TW.md`.

### Should Have

- Preserve existing output HTML for valid data.
- Explain standard and country data column expectations near the input.
- Make "copy HTML" clearly tied to Drupal paste use.
- Avoid blocking output for non-critical missing URLs, but mark them as check items.

### Out of Scope

- Vendor CRM.
- Multi-step approval.
- Complex import/export project files.
- Full bilingual simultaneous output.
- Large visual redesign.
- Shared component extraction.

## Acceptance Criteria

- A first-time editor can load sample data and generate HTML within one minute.
- Clean sample data produces no blocking warnings.
- Incomplete rows are visible with row-level warnings.
- Missing booth or company name is easy to identify before copying.
- Missing URL is treated as a check warning, not a silent `#`.
- Preview content matches copied HTML.
- README and user guide explain how to use the tool without developer help.
- Source repo branch and Hub sync status are trackable in `docs/version-map.md`.

## Trial Run Matrix

| Run | Perspective | Scenario | Expected result |
|---|---|---|---|
| 1 | Website editor | Standard clean data | Generate valid Chinese and English output with preview and copy confidence. |
| 2 | Website editor | Incomplete standard data | Missing company, booth, and URL are visible before copy. |
| 3 | Website editor | Country pavilion data | Shared booth applies correctly and website column is validated. |
| 4 | Website visitor | Generated HTML reading test | Vendor cards are readable, links open safely, layout remains usable. |
| 5 | Developer / handoff | Repo, docs, and Hub sync | Branch, README, user guide, version map, and Hub snapshot are coherent. |

## Implementation Notes

- Prefer small functions for parsing, validation, rendering review rows, and rendering output.
- Do not change the visual system broadly in v1.1.
- Keep generated HTML inline-style friendly for Drupal.
- If a row is invalid, keep it in review but do not hide the reason.
