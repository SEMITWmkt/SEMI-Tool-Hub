# Trial Runs - 2026-06-03

Scope: baseline review before implementing Pavilions Vendor HTML Creator v1.1.

Test target:

- Source file: `/Users/lun04/Desktop/Pavilions Vendor HTML Creator/index.html`
- Hub snapshot: `tools/pavilions/index.html`
- Baseline source commit: `dd5c70a`

## Summary

The current Pavilions tool can generate HTML from valid data, but it does not give editors enough confidence before publishing. The largest issue is not the final card layout; it is that parsing and validation are mostly invisible.

## Run 1: Website Editor, Clean Standard Data

Scenario:

- Paste standard format rows: Chinese name, English name, pavilion name, booth, URL.
- Generate Chinese output.

Result:

- Passed basic generation.
- Produced 3 vendor cards.
- No `#` links.
- No blank booth markers.
- Output includes `target="_blank"` and `rel="noopener noreferrer"`.

Finding:

- The tool works when the editor already has perfect data.
- There is no sample data or readiness summary, so a first-time editor still has to guess the expected input shape.

## Run 2: Website Editor, Incomplete Standard Data

Scenario:

- Paste rows with missing English name, missing booth, missing URL, and missing local name.

Result:

- Generated output instead of stopping.
- Produced 3 cards from 4 rows.
- One row with missing English name was silently dropped.
- One card had an empty booth value.
- One card used `href="#"`.

Finding:

- This is the main v1.1 risk.
- The editor cannot see which row disappeared or which generated card is unsafe before copying HTML.

## Run 3: Website Editor, Country Pavilion Format

Scenario:

- Switch to country pavilion format.
- Set shared booth.
- Paste country-format rows, including one missing website.
- Generate English output.

Result:

- Produced 3 vendor cards.
- Shared booth applied.
- Missing website became `href="#"`.

Finding:

- Country format is useful, but URL validation needs to be visible.
- Missing URL should be a check warning, not an invisible fallback.

## Run 4: Website Visitor, Generated HTML Smoke Test

Scenario:

- Review generated HTML from clean data as a public website section.

Result:

- Vendor cards are readable in generated markup.
- Links include safe new-window attributes.
- The layout uses inline styles suitable for Drupal paste.

Finding:

- The visitor-facing output is basically viable for clean data.
- Most improvements should happen before output, not inside the final card markup.

## Run 5: Developer / Handoff Review

Scenario:

- Check repo, docs, and Hub sync readiness.

Result:

- Hub docs now exist for principles, roadmap, version map, workflow, and Pavilions v1.1 spec.
- Pavilions source repo does not yet have `README.md`.
- Pavilions source repo does not yet have `USER_GUIDE_zh-TW.md`.
- Pavilions still loads Tailwind from CDN.
- Pavilions has no sample data button.
- Pavilions has no explicit validation language in the UI.

Finding:

- The source repo needs documentation before it is portfolio-ready.
- Tailwind CDN can stay for v1.1 if functionality remains the priority, but it should remain marked as a future production-polish item.

## Baseline Verdict

Current state:

```text
Usable with clean data
Risky with real-world messy data
Not yet handoff-ready
```

v1.1 should focus on:

- Sample data.
- Parsed-data review.
- Row-level validation.
- SEMICON preset colors.
- README.
- Chinese user guide.

Do not spend v1.1 on broad visual redesign.

## v1.1 Branch Re-run

Branch: `pavilions-v1.1-confidence`

Status: implementation trial passed for the confidence slice.

### Run 1: Website Editor, Clean Standard Data

Result:

- Produced 3 vendor cards.
- Readiness summary: `3 列資料 · 3 列可輸出 · 0 列需修正 · 0 列需確認`.
- Badge: `Ready`.
- Review table visible.
- No `#` links.
- No blank booth markers.

### Run 2: Website Editor, Incomplete Standard Data

Result:

- Parsed all 4 rows instead of silently dropping the row with missing English name.
- Produced 3 output cards.
- Readiness summary: `4 列資料 · 3 列可輸出 · 1 列需修正 · 1 列需確認`.
- Badge: `Fix required`.
- Review table shows both `Fix` and `Check`.
- Missing booth row is not output with a blank booth.
- Missing URL still outputs as `#`, but is now visible as a check item.

### Run 3: Website Editor, Country Pavilion Format

Result:

- Produced 3 vendor cards.
- Shared booth applied.
- Readiness summary: `3 列資料 · 3 列可輸出 · 0 列需修正 · 1 列需確認`.
- Badge: `Check links`.
- Missing website is visible in review before copy.

### Run 4: Website Visitor, Generated HTML Smoke Test

Result:

- Clean generated HTML still produces 3 readable cards.
- Links include `target="_blank"` and `rel="noopener noreferrer"`.
- No unexpected `#` links for clean data.
- Existing card output contract remains broadly intact.

### Run 5: Developer / Handoff Review

Result:

- Pavilions source repo now has `README.md`.
- Pavilions source repo now has `USER_GUIDE_zh-TW.md`.
- Tool now has sample buttons.
- Tool now has publish readiness panel.
- Tool now has parsed review table.
- Tool now has SEMICON preset color swatches.
- Tailwind CDN remains and should stay listed as a future production-polish item.

## v1.1 Verdict

Current branch state:

```text
Usable with clean data
Warns on messy data
Handoff-ready at source repo level
Integrated into Hub after direction correction
```

## Hub Integration Correction

The project direction was corrected after review: SEMI-Tool-Hub is the canonical integrated product, not just a snapshot ledger for independent repos.

Actions completed:

- Copied Pavilions v1.1 into `tools/pavilions/index.html`.
- Updated Hub README, workflow, roadmap, product principles, and version map to describe Hub as the integrated workbench.
- Updated Cockpit metadata so Pavilions appears as v1.1 and Sponsors appears as v5.1.1.
- Confirmed Hub launcher paths exist for Forum, Trends, Sponsors, and Pavilions.

Hub smoke result:

```text
tools/forum/index.html: exists
tools/trends/index.html: exists
tools/sponsors/index.html: exists
tools/pavilions/index.html: exists
```

Pavilions smoke result from Hub module:

```text
3 rows parsed
2 rows output
1 row requires fix
1 row requires check
Badge: Fix required
```

Remaining required steps:

- Perform a visual/manual browser check.
- Decide whether missing URL should remain copyable as `#` or require a stronger warning.
- Resolve Forum source drift.
- Commit Pavilions source branch and update `docs/version-map.md` with the final source hash after commit.
