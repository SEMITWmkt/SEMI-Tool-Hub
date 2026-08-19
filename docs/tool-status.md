# SEMI Tool Hub — Tool Status

Last updated: 2026-08-19

This is the central status map for the integrated Hub. It records what each tool currently represents inside `tools/`, what is known to be unresolved, and what must happen before the next publish-ready handoff.

Status labels:

- `Stable`: usable in Hub with no known version mismatch.
- `Hub ahead`: Hub has changes that still need source repo back-sync.
- `Working copy ahead`: local files have changes that still need QA and commit.
- `Version drift`: versions disagree across source, Hub docs, tool UI, or workspace metadata.
- `QA pending`: Drupal paste and frontend evidence are not yet recorded.
- `Released main`: committed ToolHub release state; this does not by itself mean the corresponding Drupal page has been published.

## Summary

| Tool | Hub path | Current status | Drupal QA state | Next action |
|---|---|---|---|---|
| Forum HTML Compiler | `tools/forum/index.html` | Released main: frozen ToolHub v9.16 | Existing human localhost smoke evidence; live Drupal publication remains separate | Back-sync the source repo as needed and capture Drupal publication evidence without reopening frozen feature work. |
| Trend Table Creator | `tools/trends/index.html` | Released main remains v4.11; later reliability work is held | QA pending | Keep held reliability changes out of this release and run Drupal QA against released v4.11. |
| Sponsors Logo Creator | `tools/sponsors/index.html` | Released main: ToolHub v5.3.0 | Drupal QA pending | Back-sync v5.3.0 to the source repo as needed and capture Drupal paste evidence. |
| Pavilions Vendor Creator | `tools/pavilions/index.html` | Released main remains v1.1; v1.2 is held/unreleased on the preservation branch | Drupal QA pending for released v1.1 | Evaluate held v1.2 separately after closeout; do not represent it as the current main release. |
| Logo Prep Tool | `tools/logo-prep/index.html` | Stable support utility | Not Drupal-output tool | Keep as support utility; verify export works before sponsor QA. |

## Tool Details

### Forum HTML Compiler

| Field | Status |
|---|---|
| Owner thread | Forum vNext reliability release |
| Hub path | `tools/forum/index.html` |
| Version shown in tool | `v9.16` |
| Version in Hub metadata | `v9.16` |
| Version-map state | Frozen ToolHub release; source repo and live Drupal publication are separate states |
| Known issues | Legacy Restore is intentionally a fallback and does not restore title, pricing, logos, or people roles. Repository release does not prove that Drupal has been updated. |
| Drupal QA state | Existing human localhost smoke evidence supports the frozen workflow. Live Drupal backend paste, frontend desktop/mobile, links, and publication evidence remain separate follow-up work. |
| Next action | Preserve the frozen v9.16 release, back-sync source if required, and record Drupal publication evidence. |

### Trend Table Creator

| Field | Status |
|---|---|
| Owner thread | Trend Table launch / grouped Excel import refinement |
| Hub path | `tools/trends/index.html` |
| Current version | `v4.11` |
| Version metadata drift | Resolved at metadata layer. README, Hub card, workspace metadata, tool file, and version-map are aligned to `v4.11`. |
| Version-map state | Released main aligned at v4.11; later reliability work held on preservation branch |
| Remaining risk | Drupal QA / output rendering, not version drift. Generated scoped CSS/HTML, desktop/mobile behavior, and links still need evidence. |
| Drupal QA state | Pending. Needs paste test for generated scoped CSS/HTML and mobile behavior. |
| Next action | Run Drupal QA and capture evidence before marking Trend publish-ready. |

### Sponsors Logo Creator

| Field | Status |
|---|---|
| Owner thread | Sponsor continuity workflow |
| Hub path | `tools/sponsors/index.html` |
| Version shown in tool | `v5.3.0` |
| Version in Hub metadata | `v5.3.0` |
| Version-map state | ToolHub release; source repo back-sync and Drupal publication remain separate |
| Known issues | The independent source repo is still recorded behind ToolHub, so source alignment must be verified separately. |
| Drupal QA state | Pending. Needs paste test for restored HTML, tier ordering, logo links, and responsive display. |
| Next action | Back-sync Hub v5.3.0 into the source repo or mark source intentionally behind. |

### Pavilions Vendor Creator

| Field | Status |
|---|---|
| Owner thread | Pavilions continuity workflow |
| Hub path | `tools/pavilions/index.html` |
| Version shown in tool | `v1.1` |
| Version in Hub metadata | `v1.1` |
| Version-map state | Released main v1.1; v1.2 held/unreleased on `preserve/toolhub-2026-precloseout` |
| Known issues | The v1.2 continuity implementation and its documentation/QA are intentionally excluded from this main release. Tailwind is still loaded from CDN for the v1.1 tool UI only. |
| Drupal QA state | Pending for released v1.1. Held v1.2 evidence must not be used to describe current main behavior. |
| Next action | Keep main at v1.1 and evaluate the held v1.2 work in a separate post-closeout release decision. |

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
