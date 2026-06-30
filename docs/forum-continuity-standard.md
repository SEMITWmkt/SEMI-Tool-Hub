# Forum Continuity Standard

This document defines how the Forum Generator should support recurring updates, team handoff, and standardized work without changing the CP team's core Excel-first habit.

## Core Principle

`Program at a Glance Excel` remains the upstream source of truth for forum schedule rows.

The Forum Generator should not replace that Excel. It should standardize everything that happens after the Excel row is selected:

- parsing
- review
- manual enrichment
- save / reopen
- regenerate
- publish check

## Problem To Solve

The main risk is not first-time generation. The main risk is inheritance.

Forum pages are updated repeatedly:

- links change
- speakers change
- logos arrive later
- remarks are corrected
- cooperation wording is revised
- one editor starts the work and another person finishes it later

If the team must reconstruct those decisions from pasted HTML or browser drafts, every update becomes slow and fragile.

## Standard Source Model

The Forum workflow should have four layers. Each layer has a different job.

### 1. Upstream source

`Program at a Glance Excel`

Purpose:

- defines official row structure
- provides the forum row baseline
- remains editable outside the generator

Should preserve:

- recognizable column headers
- row-level forum identity
- registration links
- pricing columns

### 2. Parsed source snapshot

The selected forum row after parsing.

Purpose:

- records what the generator recognized from Excel at that moment
- makes later review easier
- reduces ambiguity during handoff

Should preserve:

- selected forum name
- original parsed row values
- parser version
- source row fingerprint or source title values

### 3. Editable work state

This is the real handoff layer.

Purpose:

- store everything CP adds or fixes after Excel parsing
- let a second editor reopen the work safely
- regenerate HTML without manual reconstruction

Should preserve:

- project name
- selected forum row data
- Chinese and English text edits
- chairs and moderators
- partner organizations
- logos and logo settings
- remarks
- output options
- source links
- pricing state
- publish checklist state

### 4. Output artifact

Generated HTML.

Purpose:

- Drupal publishing output only

Should not be treated as:

- the editing source
- the handoff package
- the place where updates are made manually

## Standard Forum Workflow

The target workflow should remain familiar but become safer.

1. Paste `Program at a Glance Excel` content.
2. Parse and select the forum row.
3. Review the parsed baseline before editing.
4. Add or correct speakers, logos, remarks, partner content, and links.
5. Preview generated HTML.
6. Save work file.
7. Reopen work file later for updates.
8. Regenerate HTML and publish.

## What Should Be Standardized First

These items give the highest handoff value without redesigning the whole tool.

### P0

- `Save work file`
- `Load work file`
- visible `Autosaved draft`
- stable project name field
- parsed forum summary shown before Step 2

### P1

- parsed-field review for key Excel values
- missing-data warnings for links, logos, and speaker rows
- Drupal paste checklist on output step
- source-sync note showing parser/version baseline

### P2

- minimum-input mode for simple forum pages
- clearer AI optional mode
- source row confidence or row preview detail

## Forum Work File Shape

The Forum generator should use the shared work file standard, but with Forum-specific fields.

Recommended shape:

```json
{
  "schema": "semicon-tool-workfile-v1",
  "tool": "Forum HTML Generator",
  "version": "v9.13",
  "projectName": "SEMICON Taiwan 2026 AI Computing Forum",
  "exportedAt": "2026-06-18T00:00:00.000Z",
  "data": {
    "sourceType": "program-at-a-glance-excel",
    "parserVersion": "forum-v9.13",
    "selectedForumKey": "AI Computing Forum|AI 算力論壇|09:00-12:00",
    "parsedForum": {},
    "editedFields": {},
    "people": {},
    "logos": {},
    "outputOptions": {},
    "publishChecks": {}
  }
}
```

## Handoff Rules

To make inheritance easier, the team should pass work forward using the editable state, not HTML.

Recommended rule:

- If work is not finished, pass a work file.
- If work is finished, pass both the work file and the generated HTML.
- If Excel changed after a work file was created, reopen the work file, compare the parsed baseline, and regenerate.

## Implementation Order

This is the recommended order for Forum standardization.

1. Add `Save work file` and `Load work file`.
2. Preserve parsed forum baseline inside the work file.
3. Add parsed review summary before detail editing.
4. Add publish checklist.
5. Add minimum-input mode only after handoff safety is in place.

## Decision Boundary

Do not standardize by asking editors to abandon Excel.

Do standardize by making the generator responsible for:

- carrying forward parsed context
- carrying forward manual edits
- showing what still needs review
- regenerating safe HTML from structured state
