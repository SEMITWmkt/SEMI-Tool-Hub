# Pavilions Vendor Creator QA Evidence

Date tested: 2026-07-13  
Version tested: v1.2  
Files tested:

- `tools/pavilions/index.html`
- `tools/pavilions/README.md`
- `docs/tool-status.md`
- `docs/tool-contracts.md`
- `docs/version-map.md`
- `index.html`
- `workspace.html`

## Test Environment

Local repository inspection, static JavaScript syntax check, and partial in-app browser QA against local HTTP servers.

- First local server: `http://127.0.0.1:8765`
- Fresh local server used to avoid contaminated autosave state: `http://127.0.0.1:8766`
- Browser automation became unstable around JavaScript confirm dialogs, and browser policy later rejected continued use of `127.0.0.1:8766`. Results below distinguish verified browser evidence from remaining conditional items.
- A final re-attempt against `http://localhost:8765` could not continue because the browser plugin reported its required `browser-client.mjs` file missing in the current runtime.

Drupal backend paste testing was not performed in this run.

## Current-State Findings Before v1.2 Changes

| Finding | Status |
|---|---|
| Current tool version | v1.1 |
| Source file | `tools/pavilions/index.html` |
| Supported fields | Pavilion name, output language, intro text, bullet points, theme color, data format, shared booth, raw vendor rows, parsed vendor items |
| Save/autosave/import | JSON work file export/import and `localStorage` autosave existed |
| Restore generated HTML | Not supported |
| Generated HTML | Inline-style wrapper with booth cards; compacted before copy |
| Validation | Missing name/booth/URL and invalid URL warnings existed |
| Missing URL behavior | Missing or invalid URLs silently became `href="#"` |
| Duplicate handling | Not detected |
| Special characters | Escaped at output, but already-encoded entities could double-encode |
| Editing existing list | Parsed rows were editable, but no reorder/delete controls |
| Generated HTML import | Not supported |
| External dependencies | Tool UI loads Tailwind from CDN; generated HTML does not depend on Tailwind |
| Preview/output consistency | Preview and copied output used the same compact HTML string |
| Version consistency | v1.1 was consistent across tool/status/version map/workspace/Hub card after prior sync |
| Silent `#` fallback | Present before v1.2 |

## Focused v1.2 Browser Review Findings

| Finding | Evidence | Result |
|---|---|---|
| Parsed rows are intended to become canonical after parse | `parsedVendorItems` drives work file export, review table, preview, and output | Confirmed by code review |
| Review-table edits were not reliably synced from input events | Browser fill changed DOM inputs, but generated output reverted to old parsed values | Fixed in this pass |
| Raw input changes could silently reparse and replace parsed edits | Browser test changed raw input after edits; generate switched data source without clear protection before the fix | Fixed in this pass |
| Preview and copied output use same compact string | `compactHtmlForSource(finalHtml)` feeds both `outputHtml.value` and `previewContainer.innerHTML` | Confirmed by code review and partial browser state read |
| Missing/invalid URL output is structurally non-clickable | Output uses `<span data-url-status="missing-or-invalid">` instead of `<a href="#">` | Confirmed by code review |
| Restore HTML uses DOM parsing | `DOMParser().parseFromString(...)`, then `querySelectorAll('a, span[data-url-status="missing-or-invalid"]')` | Confirmed by code review |

## Test Cases

| Test case | Expected result | Actual result | Status | Evidence |
|---|---|---|---|---|
| Create a new list | Standard sample data parses and outputs booth cards | Static inspection confirms sample path calls `generateHtml()` and output uses normalized parsed rows | Conditional pass | `tools/pavilions/index.html` |
| Add a vendor later | New row can be added without rebuilding full raw list | `新增單筆` appends one parsed item and refreshes output without reparsing raw rows; input-event syncing was fixed after browser test exposed stale state | Conditional pass | `addParsedVendorRow()`, browser partial |
| Edit a vendor | Editing one row preserves unrelated entries | Browser test exposed stale parsed state when automation filled review inputs; fixed with `input` event draft sync | Conditional pass | `updateParsedVendorDraft()` |
| Delete a vendor | Selected vendor is removed with confirmation | `deleteParsedVendor()` confirms, splices one row, refreshes output | Pass | `deleteParsedVendor()` |
| Reorder vendors | Order changes only through explicit action | Up/down controls call `moveParsedVendor()`; parser no longer sorts rows | Pass | `moveParsedVendor()` |
| Missing URL | Vendor remains visible and non-clickable | Missing URL creates warning and empty `safeUrl`; output renders `<span data-url-status="missing-or-invalid">` | Pass | `buildFinalHtml()` |
| Invalid URL | Warn before output and avoid fake link | Invalid URL creates warning and non-clickable output | Pass | `isValidUrl()` / `normalizeParsedVendorItem()` |
| Duplicate name | Warn, do not merge/delete | Duplicate normalized names add duplicate warning | Pass | `applyDuplicateWarnings()` |
| Duplicate URL | Warn, do not merge/delete | Duplicate normalized URLs add duplicate warning | Pass | `applyDuplicateWarnings()` |
| Chinese vendor name | Unicode preserved through clean/escape pipeline | Static inspection shows no ASCII-only conversion of display names | Conditional pass | No browser screenshot |
| English vendor name | English names parsed and escaped | Static inspection confirms standard and country paths preserve names | Conditional pass | No browser screenshot |
| Special characters | `&`, quotes, punctuation, full-width chars remain valid HTML | Input is decoded once by `cleanCell()` and escaped by `escapeHtml()` | Conditional pass | No browser screenshot |
| Long vendor name | Output should wrap inside card without horizontal page overflow | Generated card uses flex and fixed min width; no browser visual test performed | Conditional pass | Needs browser QA |
| Import saved project | Load asks before replacing current work | Work file import calls `confirmReplaceCurrentWork()` before `applyWorkState()` | Pass | `workFileInput` listener |
| Restore generated HTML | Recover order/name/booth/URL when structure matches this tool | Limited DOMParser restore added; success/partial/failure alerts exist | Conditional pass | Needs browser QA with real generated HTML |
| Copy output | Copy button copies code view when output is not an error | Existing copy path preserved | Conditional pass | Clipboard not exercised in this environment |
| Compact output | Preview and copied HTML use same compact string | `compactHtmlForSource(finalHtml)` feeds both `outputHtml.value` and `previewContainer.innerHTML` | Pass | `refreshVendorOutputFromParsed()` / `generateHtml()` |
| Desktop preview | Preview should match copied output | Same HTML source is used | Conditional pass | No browser screenshot |
| Mobile preview | Cards should wrap without scripts | Generated output uses flex-wrap and inline styles | Conditional pass | Needs browser/Drupal QA |
| 30-vendor list | Should remain usable | No algorithmic sorting; duplicate scan is linear maps; not browser-perf tested | Conditional pass | Needs browser QA |
| 60-vendor list | Should remain usable | Same as 30-vendor list; review table is scrollable | Conditional pass | Needs browser QA |

## Browser-Tested Defects Fixed In This Pass

1. **Review-table edits could become stale.** Browser fill changed visible inputs, but generated output still used old `parsedVendorItems`. The fix adds `data-index` / `data-field` attributes and a review-table `input` listener that updates parsed draft state before generate.
2. **Raw input could silently replace parsed edits.** Changing raw Excel text after editing parsed rows could reparse without a clear user decision. The fix asks for confirmation; canceling keeps the parsed working list and regenerates from it.

## Static Checks Run

- Extracted `tools/pavilions/index.html` script block to `/tmp/pavilions-script.js`
- Ran `node --check /tmp/pavilions-script.js`
- Ran `git diff --check`
- Searched changed Pavilions files for `href="#"`, `safeUrl`, `innerHTML`, `localStorage`, `restore`, `duplicate`, `amp;`, stale `v1.1`, and Drupal readiness claims

Result: pass.

## Known Unresolved Issues

- Drupal backend paste QA is still pending.
- Browser automation was partial; mobile and 30/60-vendor visual checks still need a stable browser pass.
- Tailwind CDN remains a tool-UI dependency.
- Restore HTML is intentionally limited and does not recover intro text, bullets, color, or language from arbitrary Drupal content.
- URL validation does not check reachability.
