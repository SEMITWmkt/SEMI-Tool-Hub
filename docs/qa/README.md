# SEMI Tool Hub — Drupal QA Checklist

Last updated: 2026-06-30

Use this checklist before marking any tool update publish-ready. The goal is not only to know that HTML was generated, but to prove that it survives the actual Drupal publishing path.

## QA Evidence Folder Pattern

Create one folder per QA run:

```text
docs/qa/YYYY-MM-DD-tool-version/
  README.md
  backend-source.png
  frontend-desktop.png
  frontend-mobile.png
  link-check.md
  known-issues.md
```

Example:

```text
docs/qa/2026-06-30-trends-v4-11/
```

## Required QA Checklist

| Area | Check | Evidence |
|---|---|---|
| Backend paste | Paste generated HTML into Drupal source/editor without manual HTML repair. | Screenshot of Drupal source/editor after paste. |
| Backend save | Save or preview in Drupal without stripping required markup/styles. | Screenshot or note with page URL/draft URL if available. |
| Frontend desktop | Confirm layout at desktop width, including spacing, typography, cards, tables, buttons, and interactive areas. | Desktop screenshot. |
| Frontend mobile | Confirm mobile layout, wrapping, tap targets, overflow, and section spacing. | Mobile screenshot. |
| Links | Click all generated links or sample representative links. | `link-check.md` with pass/fail list. |
| Copy output | Confirm copied HTML matches preview output closely enough for publishing. | Note in QA README. |
| Known issues | Record any issue that remains after QA, even if accepted for release. | `known-issues.md`. |

## Tool-Specific Checks

### Forum HTML Compiler

- Selected forum content matches the source row.
- Chinese and English outputs are both present when required.
- Speaker, moderator, chair, partner, logo, map, and registration links work.
- Pricing/free-admission display follows the selected toggle state.
- Mobile view does not collapse speaker/pricing sections awkwardly.

### Trend Table Creator

- Cards/drawers render inside Drupal without global style conflicts.
- Desktop and mobile interactions work.
- Zone/forum links use the intended labels and URLs.
- CSS is scoped and does not alter other Drupal page sections.
- Version label is checked against `docs/version-map.md` before release.

### Sponsors Logo Creator

- Tier headings and order match source data.
- Logos render without broken images.
- Logo links open the intended destination.
- Mobile wrapping remains readable.
- If HTML restore is used, restored data should match the original published section before edits.

### Pavilions Vendor Creator

- Pavilion title, intro, bullets, color, and language are correct.
- Vendor names and booth numbers match source data.
- Vendor links work and open safely.
- Desktop layout uses the intended card/booth structure.
- Mobile layout wraps without horizontal overflow.

### Logo Prep Tool

- Exported PNG has transparent background when expected.
- Cropping does not cut off logo details.
- Prepared PNG renders correctly after being inserted into Sponsors Logo Creator.

## QA README Template

```markdown
# QA Run: TOOL_NAME VERSION

Date:
Tester:
Tool path:
Source data:
Drupal draft/page:

## Result

- [ ] Pass
- [ ] Pass with known issues
- [ ] Fail

## Evidence

- Backend source:
- Frontend desktop:
- Frontend mobile:
- Link check:
- Known issues:

## Notes

```

## Release Rule

If any required evidence is missing, mark the tool as `QA pending` in `docs/tool-status.md` and do not describe the tool as publish-ready.
