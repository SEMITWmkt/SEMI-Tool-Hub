# Sponsors Logo Generator Minimal Product Spec

## Product Principle

This tool is not a sponsor CRM. It is a focused publishing workbench for maintaining the current sponsor logo output list.

The product should help editors answer three questions quickly:

1. What is ready to publish?
2. What is missing or needs checking?
3. Can I safely generate and copy the current HTML?

Everything else should be hidden, automated, or avoided.

## Real-World Context

Sponsor logos arrive over time. Some sponsors provide logos early, some provide them late, and some change links, tiers, or image files after the first output has already been generated.

Therefore, the tool must support continuous updates, not only one-time generation.

The right mental model is:

```text
Current sponsor output list
```

Not:

```text
Full sponsor management system
```

## Core Data Model

Each sponsor should stay simple.

| Field | Required | Main Screen | Notes |
|---|---:|---:|---|
| Tier | Yes | Yes | Strategic Partners, Platinum Sponsors, Gold Sponsors, Silver Sponsors, Bronze Sponsors. Render order is separate from tier identity. |
| Name | Recommended | Yes | Used for identification and title attribute. |
| Drupal image URL | Recommended | Yes | Primary source for published HTML; accepts a full URL or `/sites/default/files/...`. |
| Temporary logo image | Optional | Yes | Base64 is for preview and legacy work files only; it is used in output only when no Drupal image URL exists. |
| Link URL | Optional | Hidden / compact | Missing link should be `Check`, not blocking. |
| Status | Automatic | Yes | Derived from fields, not manually assigned. |
| Notes | Optional | Hidden | Only if needed later. |
| Last updated | Automatic | Hidden | Useful for continuous updates, not daily viewing. |
| Include in output | Optional | Hidden | Useful later for pending logos. Not Round 1. |

## Automatic Management Status

Use only three states.

| Status | Meaning | Rule |
|---|---|---|
| Ready | Safe to publish. | Has logo image. Name is not empty. |
| Missing | Cannot publish correctly. | Missing logo image. |
| Check | Publishable, but needs attention. | Has logo but is missing a name or link, has an invalid link, or relies on a legacy Base64 image. |

Do not add more workflow states in Round 1.

These row-level labels help operators manage individual sponsors. They are separate from the language-specific publish readiness contract below.

## Publish Readiness and Copy Contract

Chinese and English readiness are evaluated independently because an active tier can have a title in one language but not the other.

| State | Current behavior | Copy behavior |
|---|---|---|
| READY | At least one sponsor has a usable logo, every active tier has a title for the target language, and there are no warnings. | Copy for that language is enabled. |
| WARNING | Output remains publishable, but one or more rows has a missing logo, missing name, missing or invalid link, or legacy Base64-only image. A row without a usable logo is omitted from output. | Review remains possible and copy for that language stays enabled. |
| BLOCKED | There is no publishable sponsor, or an active tier lacks its title for the target language. | Copy for that language is disabled. |

The guard must be checked again when Copy is invoked; button appearance alone is not the enforcement boundary.

Avoid:

- Waiting for client
- In review
- Approved
- Sent to designer
- PM confirmed
- Legal checked

Those belong outside this generator.

## Main Screen Priorities

The main screen should show only the active publishing workflow.

### Top Summary

Show a compact status summary:

```text
12 logos · 9 ready · 2 missing · 1 check
```

This is more useful than a large instruction block.

### Primary Action

When empty:

```text
Add logo
```

Secondary:

```text
Load sample
Import backup
```

### Add Logo

The add form should stay compact:

- Tier
- Sponsor name
- Logo upload / paste area
- Link URL
- Add button

Avoid showing export/import, tier customization, and advanced settings before the user has data.

### Sponsor List

Each sponsor row/card should show:

- Logo thumbnail
- Sponsor name
- Tier
- Status
- Move up/down or drag handle
- Delete

Link URL editing can be inline but visually quiet.

### Output Area

Keep output actions simple:

- Preview
- Copy ZH
- Copy EN
- Export backup

Do not show both large code textareas by default if preview is the main validation path. Code can be inside an expandable panel.

## Progressive Disclosure

Hide these by default:

- Tier name customization
- Raw HTML output
- Import/export details
- Project metadata
- Advanced image settings
- Notes

Show them when:

- User opens settings.
- User exports/imports backup.
- User explicitly asks to inspect code.
- A validation issue requires attention.

## Backup Strategy

Because sponsor logos arrive over time, backup/export is a core workflow, not an advanced technical feature.

Round 1 export JSON should include:

```json
{
  "schema": "semicon-sponsors-v1",
  "tool": "Sponsors Logo HTML Generator",
  "version": "v5.0",
  "projectName": "SEMICON Taiwan 2026 Sponsors",
  "exportedAt": "ISO timestamp",
  "tiers": {},
  "sponsors": {}
}
```

The UI should describe backup as:

```text
Save work file
```

Not:

```text
Export JSON
```

The technical format can remain JSON, but the user-facing language should match the job.

## What Not To Build

Do not build these unless a real workflow later requires them:

- Account login
- Approval workflow
- Sponsor contact management
- Deadline tracking
- Multi-user editing
- Comment threads
- Complex status taxonomy
- Sponsor analytics
- Automatic logo quality scoring or image-size classification

Do not infer image quality or classify images as unusually small or large without supported image-analysis behavior.

## Round 1 Scope

Implement the smallest set that changes user confidence:

1. Add top summary counts.
2. Add automatic status per sponsor.
3. Add empty state with one primary action.
4. Add sample data.
5. Upgrade backup export metadata.
6. Rename export/import actions to user-facing language.
7. Add preview language switch.

## Round 1 Acceptance Criteria

- Empty tool clearly tells the user to add a logo.
- User can load sample data and immediately understand the final output.
- Sponsor list shows `Ready`, `Missing`, or `Check` without manual status input.
- Summary counts update after adding/removing sponsors.
- Backup export contains project metadata and can still be imported.
- Preview can switch between Chinese and English.
- Copy remains enabled for READY and WARNING, and is disabled for BLOCKED independently for Chinese and English.

## Legacy Compatibility

Older work files may contain a `scale` property. Import may retain that property for compatibility, but the current UI does not expose a Scale control and generated output does not use legacy scale values.

## Design Guardrail

If a new feature does not help one of these three questions, it should not be in the main UI:

1. Is this logo ready?
2. What do I need to fix?
3. Can I publish this HTML now?
