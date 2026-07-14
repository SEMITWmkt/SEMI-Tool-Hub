# SEMI Tool Hub — Tool Status

Last updated: 2026-07-02

This is the central status map for the integrated Hub. It records what each tool currently represents inside `tools/`, what is known to be unresolved, and what must happen before the next publish-ready handoff.

Status labels:

- `Stable`: usable in Hub with no known version mismatch.
- `Hub ahead`: Hub has changes that still need source repo back-sync.
- `Working copy ahead`: local files have changes that still need QA and commit.
- `Version drift`: versions disagree across source, Hub docs, tool UI, or workspace metadata.
- `QA pending`: Drupal paste and frontend evidence are not yet recorded.

## Summary

| Tool | Hub path | Current status | Drupal QA state | Next action |
|---|---|---|---|---|
| Forum HTML Compiler | `tools/forum/index.html` | Hub branch ahead at v9.15 | QA pending for v9.15 workflow | Run Drupal QA for Legacy Restore, Draft JSON, Theme / Outline, pricing, mobile output, map link defaults, and logo URL handling before publish-ready handoff. |
| Trend Table Creator | `tools/trends/index.html` | Working copy aligned at v4.11 | QA pending | Run Drupal QA for output rendering and interaction behavior. |
| Sponsors Logo Creator | `tools/sponsors/index.html` | Hub ahead | QA pending for v5.2.1 restore flow | Back-sync v5.2.1 to source repo and capture Drupal paste evidence. |
| Pavilions Vendor Creator | `tools/pavilions/index.html` | Working copy ahead at v1.2 | Local browser QA conditional; Drupal QA pending | Re-run stable browser/mobile QA and test compact output in Drupal source before publish-ready handoff. |
| Logo Prep Tool | `tools/logo-prep/index.html` | Stable support utility | Not Drupal-output tool | Keep as support utility; verify export works before sponsor QA. |

## Tool Details

### Forum HTML Compiler

| Field | Status |
|---|---|
| Owner thread | Forum continuity / v9.15 maintenance workflow |
| Hub path | `tools/forum/index.html` |
| Version shown in tool | `v9.15` |
| Version in Hub metadata | `v9.15` |
| Version-map state | Hub branch ahead |
| Known issues | v9.15 adds map-url-zh/map-url-en default URLs (semicontaiwan.org) and skips base64 re-encoding for pasted logo URLs (uploaded/dropped files still auto-trim to base64 as before). Still needs Drupal paste evidence and source repo back-sync. Legacy Restore intentionally does not restore title, pricing, logos, or people roles. |
| Drupal QA state | Pending. Needs backend paste, frontend desktop/mobile, link checks, Legacy Restore smoke test, Draft JSON import/export smoke test, map link default verification, logo URL paste verification, and screenshot evidence. |
| Next action | Run v9.15 QA, then back-sync or explicitly mark the source repo behind. |

### Trend Table Creator

| Field | Status |
|---|---|
| Owner thread | Trend Table launch / grouped Excel import refinement |
| Hub path | `tools/trends/index.html` |
| Current version | `v4.11` |
| Version metadata drift | Resolved at metadata layer. README, Hub card, workspace metadata, tool file, and version-map are aligned to `v4.11`. |
| Version-map state | Working copy aligned |
| Remaining risk | Drupal QA / output rendering, not version drift. Generated scoped CSS/HTML, desktop/mobile behavior, and links still need evidence. |
| Drupal QA state | Pending. Needs paste test for generated scoped CSS/HTML and mobile behavior. |
| Next action | Run Drupal QA and capture evidence before marking Trend publish-ready. |

### Sponsors Logo Creator

| Field | Status |
|---|---|
| Owner thread | Sponsor continuity workflow |
| Hub path | `tools/sponsors/index.html` |
| Version shown in tool | `v5.2.1` |
| Version in Hub metadata | `v5.2.1` |
| Version-map state | Hub ahead |
| Known issues | Source repo is still recorded as `v5.2.0`, so Hub changes need source back-sync. |
| Drupal QA state | Pending. Needs paste test for restored HTML, tier ordering, logo links, and responsive display. |
| Next action | Back-sync Hub v5.2.1 into the source repo or mark source intentionally behind. |

### Pavilions Vendor Creator

| Field | Status |
|---|---|
| Owner thread | Pavilions continuity workflow |
| Hub path | `tools/pavilions/index.html` |
| Version shown in tool | `v1.2` |
| Version in Hub metadata | `v1.2` |
| Version-map state | Working copy ahead |
| Known issues | Incremental workflow, non-clickable missing URL output, duplicate warnings, and limited Restore HTML are present in local working copy and still need Drupal paste validation. Tailwind is still loaded from CDN for the tool UI only. |
| Drupal QA state | Pending. Partial local browser QA found and fixed canonical-state defects; still needs stable browser/mobile evidence, backend source paste, booth link checks, and frontend desktop/mobile evidence. |
| Next action | Re-run browser/mobile QA against representative vendor data and Drupal source paste, then decide whether the v1.2 continuity change is publishable. |

### Logo Prep Tool

| Field | Status |
|---|---|
| Owner thread | Logo Prep support utility |
| Hub path | `tools/logo-prep/index.html` |
| Version shown in tool | `v0.1` |
| Version in Hub metadata | `v0.1` |
| Version-map state | Stable support utility |
| Known issues | Not a Drupal HTML generator; output quality depends on source image/PDF/SVG quality. |
| Drupal QA state | Not applicable directly. Evidence should be attached to the downstream Sponsors QA when prepared logos are used. |
| Next action | Keep out of the primary four-tool governance table except as a dependency for Sponsors. |

## Handoff Rule

No tool should be marked publish-ready until:

1. `docs/version-map.md` agrees with tool UI and Hub metadata.
2. The relevant contract in `docs/tool-contracts.md` is still true.
3. Drupal QA has backend paste, frontend desktop, frontend mobile, link, screenshot, and known-issue evidence recorded under `docs/qa/`.
