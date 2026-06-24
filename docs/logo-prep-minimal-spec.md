# Logo Prep Tool Minimal Spec

## Purpose

Logo Prep Tool is a small pre-processing utility for sponsor logo files.

It exists to convert supplier-provided logo assets into a clean PNG that can be pasted or uploaded into Sponsors Logo Generator.

It is not a layout tool, not a project management tool, and not a backup tool.

## Core User Need

Website editors often receive sponsor logos as `.ai` files.

Those files are difficult to use directly inside a browser-based sponsor layout tool.

Editors need the fastest possible path from:

`supplier AI file -> usable transparent PNG -> sponsor generator`

## Product Position

Logo Prep Tool is a supporting utility for Sponsors Logo Generator.

The workflow should stay simple:

1. Open Logo Prep Tool.
2. Import the logo file.
3. Let the tool render and trim whitespace.
4. Copy or download the PNG.
5. Return to Sponsors Logo Generator for layout, save/load, and HTML output.

## Version 0.1 Scope

### Must do

- Accept:
  - PDF-compatible `.ai`
  - `.pdf`
  - `.svg`
  - standard browser image files such as `.png`, `.jpg`, `.jpeg`, `.webp`
- Render the source visually in-browser.
- Automatically trim surrounding white or empty space.
- Output transparent PNG.
- Allow:
  - copy PNG to clipboard when supported
  - download PNG to local disk
- Clearly explain that `.ai` support depends on PDF-compatible content.

### Must not do

- Batch processing
- Project save/load
- Asset library
- Tier assignment
- Sponsor name fields
- HTML generation
- Sorting or arrangement
- Work file backup
- Any logic already handled by Sponsors Logo Generator

## AI File Rule

Version 0.1 only supports `.ai` files that contain PDF-compatible data.

If an `.ai` file cannot be read, the tool should not try to hide the limitation.

It should explicitly tell the user that the file likely needs one of these:

- re-export with PDF compatibility enabled
- provide PDF instead
- provide SVG or PNG instead

## Design Rule

This tool should feel smaller and lighter than the main generator.

It should behave like a utility, not a second main workstation.

The first screen should immediately expose the actual action:

- upload
- preview
- crop result
- copy/download

No dashboard, no project shell, no extra management language.

## Relationship to Sponsors Generator

Sponsors Generator remains the canonical tool for:

- sponsor ordering
- recurring updates
- save/load
- draft continuity
- bilingual HTML output

Logo Prep Tool only improves the asset handoff before that stage.
