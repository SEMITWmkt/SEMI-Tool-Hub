# Project State Standard

This standard defines the shared continuity model for all SEMI Tool Hub generators.

## Product Principle

Generated HTML is an output artifact, not the source of truth.

The source of truth should be an editable project state that can be saved, loaded, updated, and used to regenerate fixed Drupal-ready HTML.

## Problem Statement

SEMICON Taiwan website sections require continuous updates. Sponsors are added later, vendor booths change, forum speakers are corrected, and trend cards need small content edits.

If editors must manually edit generated HTML for every small update, the tool creates a new risk: broken markup, inconsistent layout, missing links, and lost work context.

## User Story

As a website editor, I want to reopen a previous generator state, update one sponsor, booth, logo, link, or card, and regenerate the final HTML, so recurring website updates do not require manual HTML editing.

## Required Workflow

Every generator should support this lifecycle:

1. Create or paste source data.
2. Validate and preview generated output.
3. Save a work file.
4. Reopen the work file later.
5. Change one part of the structured data.
6. Regenerate and copy the full HTML output.

## Common Controls

Use these user-facing labels across tools:

| Control | Meaning |
|---|---|
| Save work file | Download the editable project state. |
| Load work file | Restore a previous project state. |
| Autosaved draft | Local browser draft saved automatically. |
| Clear draft | Remove current local working state. |
| Copy HTML | Copy generated Drupal-ready HTML. |

Avoid labels like:

- Export JSON
- Import JSON
- Raw data backup
- Download config

The file can still be JSON technically, but the user should understand it as a work file.

## Work File Requirements

Every work file should include:

- `schema`
- `tool`
- `version`
- `projectName`
- `exportedAt`
- `data`

Tool-specific data belongs inside `data`.

Example:

```json
{
  "schema": "semicon-tool-workfile-v1",
  "tool": "Pavilions Vendor HTML Creator",
  "version": "v1.1",
  "projectName": "SEMICON Taiwan 2026 Packaging Pavilion",
  "exportedAt": "2026-06-08T00:00:00.000Z",
  "data": {}
}
```

## Tool Expectations

### Sponsors Logo Generator

Work state should preserve:

- Project name.
- Tier labels.
- Sponsor tier, name, link, Logo image, display scale, and order.
- Missing Logo rows, so future updates can continue from incomplete sponsor lists.

### Pavilions Vendor Generator

Work state should preserve:

- Pavilion name.
- Output language.
- Intro text.
- Bullet points.
- Theme color.
- Data format.
- Shared booth.
- Raw pasted vendor data.

### Trend Table Generator

Work state should preserve:

- All cards, drawers, links, icon URLs, category labels, and output settings.

### Forum Generator

Work state should preserve:

- Parsed forum data.
- Speaker data.
- Logo data.
- Pricing data.
- Output language / page settings.

Because Forum is already in use, project state should be added without changing the familiar workflow.

## Acceptance Criteria

- User can save a work file after creating output.
- User can load the work file later and see the same editable state.
- User can change one item and regenerate full HTML.
- Generated HTML never becomes the editing source.
- Missing or incomplete items remain visible in the editable state.
