# Forum v9.14 Work Log

## Problem Background

CP users should not need to rebuild a forum page from Excel every time they make a small update.

Before v9.14, the Forum generator could create a page from Excel/text and manual edits, but it did not have a durable editable source of truth for later maintenance. Browser draft storage helped short-term recovery, but it was not a reliable handoff artifact across projects, editors, or devices.

## Design Decision

- Excel/text is for initial import.
- Forum Draft JSON is for future maintenance.
- Drupal HTML is the publishing output, not the ideal editing source.
- Legacy Restore is a recovery/helper workflow for existing Drupal body HTML, not a full CMS migration system.

This keeps the CP team's familiar Excel-first habit while adding a safer way to maintain the same page later.

## What Changed in v9.14

- Legacy HTML Restore Preview for existing Drupal body HTML.
- Apply restored Theme, Outline, Venue, and Registration URL into the form.
- Continue to Step 2 after applying restored fields.
- Compact restore review UI for CP / website editors.
- Improved Step 1 action placement for Excel/text parse, forum selection, and Legacy Restore.
- Quieter collapsible Theme / Outline block in generated output.
- Mobile Theme / Outline and pricing card rendering fixes.
- Forum Draft JSON import/export for page maintenance.

## Intentionally Not Solved

- Full pricing restore from legacy HTML.
- Automatic logo upload to Drupal.
- Full CMS migration.
- Automatic bilingual page synchronization.
- Automatic restoration of page title, chair/moderator/advised-by fields, or sponsor/logo sections from legacy HTML.

## Recommended CP Workflow

### New Page Workflow

1. Paste Excel/text.
2. Parse data.
3. Select forum/session if needed.
4. Continue to Step 2.
5. Edit fields.
6. Generate HTML.
7. Paste generated HTML into Drupal.
8. Export Forum Draft JSON and save it with the forum project files.

### Update Existing Page Workflow

1. Import the previous Forum Draft JSON.
2. Edit only changed fields.
3. Generate HTML.
4. Paste updated HTML into Drupal.
5. Export the updated Draft JSON.

### Legacy Recovery Workflow

1. Paste existing Drupal body HTML.
2. Parse restore preview.
3. Apply Theme, Outline, Venue, and Registration URL if they look correct.
4. Continue to Step 2.
5. Manually check Logo, pricing, people roles, and Drupal page title.
6. Generate HTML only if appropriate for the update.

## Future Possible Improvements

- Pricing restore preview.
- Legacy logo preserve / Drupal file URL replacement workflow.
- More formal CP onboarding guide.
- Batch QA checklist for live pages.
- Source repo back-sync after Hub QA is complete.
