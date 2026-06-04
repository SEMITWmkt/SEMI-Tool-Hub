# Sponsors Round 1 Implementation Slice

Round 1 improves user confidence without changing the generated HTML structure.

## Do Now

1. Status summary
   - Add compact counts near the top of the management area.
   - Format: `0 logos · 0 ready · 0 missing · 0 check`.
   - Update after add, remove, import, clear, and scale/link edits.

2. Automatic sponsor status
   - Ready: has image and has non-placeholder name.
   - Missing: no image.
   - Check: has image but missing name or missing link.
   - Show status in the management list only.

3. Empty state
   - Replace plain empty text with a clear empty state.
   - Primary action: add/paste/upload first logo.
   - Secondary action: load sample data.

4. Sample data
   - Add sample sponsors using lightweight inline SVG/data URLs.
   - Samples should demonstrate at least two tiers.
   - Must be removable/clearable like normal data.

5. Backup metadata
   - Keep import backward-compatible with current JSON.
   - Export new JSON with schema, tool, version, projectName, exportedAt.
   - User-facing label should become `Save work file`.

6. Preview language switch
   - Let preview iframe render Chinese or English output.
   - Do not change copy buttons in Round 1.

## Do Later

- Tier drag sorting.
- Notes per sponsor.
- Include/exclude from output.
- Logo quality detection.
- Full visual redesign of the generator.
- Shared component extraction.

## Safety Rule

Do not alter `generateBilingualHTML()` output markup unless required for preview language switching. The first optimization pass should make the tool easier to trust, not change the Drupal output contract.
