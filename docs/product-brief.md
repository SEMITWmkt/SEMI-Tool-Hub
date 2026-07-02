# SEMI Tool Hub Product Brief

This brief frames SEMI Tool Hub as a product, not only a collection of HTML generators.

## Problem Statement

SEMICON Taiwan website updates rely on repeated manual template editing, copied HTML snippets, and tool-specific habits. This creates avoidable risk: missing fields, broken links, inconsistent layout, and uncertainty about whether the generated HTML is safe to paste into Drupal.

SEMI Tool Hub creates one unified content update workbench so website editors can move from source data to standardized Drupal-ready HTML with clearer validation, preview, and publishing confidence.

Target outcome:

- Reduce dependency on manual HTML template edits.
- Reduce publishing errors caused by missing or malformed source data.
- Make each generator easier to find, understand, and repeat.
- Measure editor update time and lower it from the current baseline to a smaller target after trial runs.

## User Persona

### Primary: Website Editor

The website editor updates SEMICON Taiwan pages under time pressure. They may receive source content from Excel, Word, sponsor lists, forum drafts, or internal event planning notes. They need to produce HTML that can be pasted into Drupal without breaking the live page.

Needs:

- Know which tool to use.
- Know whether the source data is complete enough.
- Preview the result before copying HTML.
- Avoid relearning active tools that already work.

### Secondary: Event / Marketing Owner

The event or marketing owner checks names, links, sponsor levels, booth numbers, and bilingual content. They may not edit HTML directly, but they care about correctness before publishing.

### Tertiary: Developer / Portfolio Reviewer

The developer or reviewer needs to understand the product thinking: why this exists, how scope is controlled, what was improved, and how the integrated Hub differs from separate one-off tools.

## User Story

As a SEMICON Taiwan website editor, I want one workbench that guides me to the right content generator, helps me validate source data, and produces Drupal-ready HTML, so I can publish website sections faster with fewer formatting and data errors.

## User Flow

1. Editor opens SEMI Tool Hub.
2. Editor selects the website section they need to update: Forum, Sponsors, Pavilions, or Trends.
3. Hub explains when the tool should be used and what data should be ready.
4. Editor enters the existing generator workflow.
5. Tool parses or accepts source data.
6. Editor reviews validation messages and preview.
7. Editor copies Drupal-ready HTML.
8. Editor pastes into Drupal and performs final visual check.

## Feature Scope

### In Scope

- Unified Hub entry for all four tools.
- Clear tool cards with purpose, status, and version.
- Tool-level guidance before opening each workflow.
- Validation and preview language shared across tools.
- Pavilions v1.1 data confidence upgrade.
- Documentation for product principles, roadmap, version map, and workflow.

### Out of Scope

- CRM or vendor database.
- Approval workflow.
- Multi-user permissions.
- Analytics dashboard.
- Replacing Drupal.
- Full redesign of active Forum workflow before user adoption risk is reviewed.

## Acceptance Criteria

- Each tool can be launched from the Hub.
- Forum v9.14 remains available inside the Hub with the familiar Excel-first path plus Draft JSON maintenance for future updates.
- Each tool has a clear purpose statement and publishing responsibility.
- The Hub does not display fake controls that imply unavailable features.
- Pavilions v1.1 shows source-data validation before output.
- Generated HTML can be copied and pasted into Drupal content areas.
- README and docs explain the product scope and current roadmap.

## Success Metrics

Metrics should be measured through trial runs instead of guessed.

- Editor task time: minutes from source data to copied HTML.
- Error rate: missing required fields, broken links, or malformed HTML found before publish.
- Rework count: number of times an editor must return to source data after preview.
- Tool discovery time: time needed to choose the correct generator from the Hub.
- Adoption confidence: whether current editors can use the Hub without retraining on the Forum workflow.

Initial target:

- Establish baseline through at least five trial runs.
- Reduce average update time after workflow cleanup.
- Catch missing required fields before Drupal paste.

## Risk / Constraint

- Forum is already in use, so large workflow changes can slow active teams.
- Each original generator has a different visual style and code structure.
- Some source data formats are inconsistent across teams.
- Public deployment must avoid exposing private files or internal-only data.
- The Hub must remain a focused publishing workbench, not expand into a management system.

## Roadmap

### Phase 1: Product Framing

- Define problem statement, personas, user flow, and scope.
- Remove fake demo controls.
- Align Hub language around validation, preview, and Drupal-ready HTML.

### Phase 2: Hub Entry Redesign

- Replace dashboard-like layout with a clear tool selection experience.
- Keep active tools reachable.
- Keep Forum changes focused on continuity, QA, and handoff safety rather than broad redesign.

### Phase 3: Pavilions v1.1 Confidence Upgrade

- Add sample data.
- Add validation for company name, booth, and URL.
- Add SEMICON color presets.
- Update README and user guide.

### Phase 4: Trial Runs

- Run at least five test scenarios.
- Review from website editor, website visitor, and developer perspectives.
- Record issues and update acceptance criteria.

### Phase 5: Portfolio Polish

- Add case study narrative.
- Add screenshots and release notes.
- Publish stable Hub version.
