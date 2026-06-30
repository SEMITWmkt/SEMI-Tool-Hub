# Trial Runs - 2026-06-08 Data Resilience

Scope: Vendor HTML and Sponsor Logo resilience slice inside SEMI Tool Hub.

Goal: verify that messy source data can be normalized into fixed publishing output, while risky rows remain visible for editor review.

## Summary

This round focuses on product continuity and practical input tolerance.

The tools should not require other teams to provide perfect source data. They should accept common imperfect formats, normalize what is safe, flag what still needs checking, and keep generated HTML predictable.

## Run 1: Website Editor, Messy Vendor CSV

Scenario:

- Paste vendor rows as CSV instead of Excel tabs.
- Include an English company name with `Co., Ltd.`.
- Provide URL as `www.example.com`.
- Keep the expected fixed vendor card output.

Expected result:

- Parser keeps the company name readable.
- URL is normalized to `https://`.
- Booth and URL can be inferred if columns shift.
- Review table shows any inferred fields as `Check`.
- Publishable rows still produce fixed card HTML.

## Run 2: Website Editor, Vendor Pipe-Separated Rows

Scenario:

- Paste vendor rows with `|` separators from an email or shared document.
- Include booth and URL in non-standard positions.

Expected result:

- Parser splits rows by pipe.
- Booth and URL are inferred when possible.
- Missing booth or company remains visible as `Fix`.
- Invalid rows are not silently hidden.

## Run 3: Website Editor, Sponsor Metadata Before Logos

Scenario:

- Paste a sponsor list containing tier, sponsor name, and URL.
- No logo images are ready yet.

Expected result:

- Tool creates sponsor rows in the management list.
- Rows show `Missing` because Logo is absent.
- The work can continue later by adding Logo images row by row.
- Generated HTML does not include missing-logo rows.

## Run 4: Event / Marketing Owner, Link Review

Scenario:

- Sponsor or vendor source has URLs without protocol or malformed URLs.

Expected result:

- Domain-like URLs are normalized when safe.
- Malformed URLs are marked `Check`.
- Output does not use malformed sponsor URLs as clickable links.
- Vendor rows with missing URLs remain visible before copy.

## Run 5: Developer / Handoff Review

Scenario:

- Inspect code and docs after the data resilience slice.

Expected result:

- `docs/data-resilience-scope.md` defines scope and acceptance criteria.
- `docs/version-map.md` records the current Hub module state.
- `docs/roadmap.md` records the data resilience phase.
- Scripts pass syntax checks.
- `git diff --check` passes.

## Current Verdict

Current state:

```text
Vendor: more tolerant pasted-data parsing, fixed card output retained.
Sponsor: metadata can arrive before logos, missing-logo rows are tracked but not output.
```

Manual browser validation is still recommended before pushing source repo syncs.
