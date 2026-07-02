# SEMI Tool Hub — Tool Integration Contracts

Last updated: 2026-07-02

This document defines the minimum contract each integrated tool must keep when it is copied into or updated inside the Hub. It is intentionally product-facing and handoff-oriented: if a future change breaks one of these contracts, it needs a deliberate version update and QA pass.

## Shared Contract

Every tool inside `tools/` must:

- Run as an independent browser page.
- Avoid depending on another tool's JavaScript state.
- Keep CSS either scoped to its own generated output or isolated inside its own tool page.
- Clearly distinguish source data, validation/checking, preview, and final HTML copy.
- Avoid sending pasted content to third-party services unless the user explicitly opts into an AI/API action.
- Preserve or export enough work state that recurring updates do not require hand-editing published HTML.
- Provide Drupal-ready output or clearly state when it is only a support utility.

## Forum HTML Compiler

| Contract item | Definition |
|---|---|
| Primary input | Forum Excel/CSV rows for first creation, Forum Draft JSON for later maintenance, selected forum content, bilingual labels, speakers/moderators/chairs, pricing, registration/map links, partner/logo data, and optional existing Drupal body HTML for recovery preview. |
| Primary output | Bilingual forum-page HTML that can be pasted into Drupal source. |
| CSS scope | Generated output must stay scoped to the forum section and avoid leaking resets into the Drupal page. |
| Storage | Uses browser-side work/draft storage for same-browser continuity and Forum Draft JSON import/export for handoff and future maintenance. Draft JSON is local structured state, not CMS storage. |
| Drupal QA requirement | Paste generated HTML into Drupal source, save/preview, confirm desktop and mobile layout, Theme / Outline collapse behavior, speaker/pricing sections, buttons, links, and logo image sources. |
| Integration risks | Forum is already in active team use; large workflow changes create retraining risk. v9.14 keeps Excel as the initial import path, uses Draft JSON for maintenance, and treats Legacy Restore as a helper rather than a full CMS migration. |

## Trend Table Creator

| Contract item | Definition |
|---|---|
| Primary input | Theme/trend rows, bilingual titles/subtitles/descriptions, group labels, zone/forum names, zone/forum URLs, icon URLs, optional Excel/TSV imports. |
| Primary output | Scoped interactive theme/trend HTML and CSS that can be pasted into Drupal. |
| CSS scope | Output CSS must remain isolated from global Drupal styles and must not assume full-page ownership. |
| Storage | Work file should preserve themes, groups, links, labels, selected options, and current version metadata. |
| Drupal QA requirement | Paste full output into Drupal source, check cards/drawers/interactions on desktop and mobile, verify all zone/forum links. |
| Integration risks | Version metadata drift is resolved at `v4.11`. Remaining risk is Drupal QA/output rendering: scoped CSS/HTML, desktop/mobile behavior, and zone/forum links still need evidence before publish-ready handoff. |

## Sponsors Logo Creator

| Contract item | Definition |
|---|---|
| Primary input | Sponsor tier labels, sponsor names, logo images/URLs, target links, ordering, existing published HTML for restore/continuation. |
| Primary output | Tiered sponsor logo HTML for Drupal, usually bilingual or label-customized by page need. |
| CSS scope | Output layout styles must stay contained to the sponsor section and avoid affecting unrelated Drupal content. |
| Storage | Work file must preserve tier labels, sponsor rows, images/URLs, missing-logo work items, ordering, and scale settings. |
| Drupal QA requirement | Paste output into Drupal source, verify tier headings, logo image rendering, link targets, desktop grid, and mobile wrapping. |
| Integration risks | Hub is ahead of source repo at `v5.2.1`; source back-sync is required before treating source and Hub as aligned. Logo asset quality may depend on Logo Prep Tool. |

## Pavilions Vendor Creator

| Contract item | Definition |
|---|---|
| Primary input | Pavilion name, introduction, technical/application bullets, theme color, output language, vendor rows, booth numbers, URLs. |
| Primary output | Vendor booth/card HTML for Drupal source. |
| CSS scope | Output uses inline/CMS-safe styles and must not require external CSS from the tool UI. |
| Storage | Work file should preserve pavilion settings, language, color, raw rows, parsed rows, validation state, and output mode. |
| Drupal QA requirement | Paste output into Drupal source, confirm booth cards, vendor names, links, desktop two-column behavior, and mobile wrapping. |
| Integration risks | Current local working copy has compact CMS source output that must be tested before publish. Messy vendor data can still require manual review. |

## Logo Prep Tool

| Contract item | Definition |
|---|---|
| Primary input | PDF-compatible AI, PDF, SVG, PNG, JPG, or other logo image files supported by the browser workflow. |
| Primary output | Transparent PNG logo asset for later use in Sponsors Logo Creator. |
| CSS scope | Not applicable to Drupal output; tool UI styles must remain page-local. |
| Storage | No long-term publishing state required; exported image is the handoff artifact. |
| Drupal QA requirement | Not a Drupal paste tool. QA is indirect: prepared logos must render correctly in Sponsors output. |
| Integration risks | Should remain a support utility, not a fifth primary website HTML generator. Some PDF/AI inputs may not preserve vector fidelity. |

## Change Control

When a tool contract changes:

1. Update this file in the same pull/commit set as the tool change.
2. Update `docs/tool-status.md` and `docs/version-map.md`.
3. Add QA evidence under `docs/qa/`.
4. Record user-facing changes in `docs/release-notes.md` when the behavior changes for editors.
