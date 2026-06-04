# SEMICON Content Tool Hub Functional Map

This document organizes the product by function, not by current file structure. The goal is to make the Hub feel like one coherent workflow while allowing each generator to keep its specialized logic.

## Product Goal

Create a browser-based workbench for SEMICON Taiwan website editors to find the right page section, choose the right generator, prepare content safely, preview the result, and copy production-ready HTML into Drupal.

## User Roles

| Role | Needs |
|---|---|
| Content Editor | Find the right generator quickly, paste data, preview output, copy HTML with confidence. |
| Event / Marketing Owner | Confirm content accuracy, language versions, sponsor order, forum data, and links. |
| Handover User | Reopen a project later, import/export work, understand what each tool expects. |
| Portfolio Reviewer | Understand the operational problem, system scope, and product thinking behind the tools. |

## Hub-Level Functions

These belong to the central Tool Hub, not individual generators.

| Function | Purpose | Priority |
|---|---|---|
| Tool Launcher | Open Forum, Theme, Sponsor, or Pavilion generator from one cockpit. | P0 |
| Tool Search | Find tools by use case, keyword, or page section. | P0 |
| Tool Metadata | Show status, version, use case, inputs, outputs, and next improvements. | P0 |
| Last Used Tool | Reopen the user's last selected generator. | P0 |
| Tool Info Drawer | Keep help content hidden until needed. | P0 |
| Open in New Window | Let users work in a full isolated generator page. | P0 |
| Functional Docs | Keep product direction and implementation backlog clear. | P1 |
| Case Study Page | Present the project as a portfolio artifact. | P2 |
| Release Notes | Track visible product changes across tool versions. | P2 |

## Shared Generator Functions

These should eventually become consistent across all generators.

| Function | Current Situation | Target Behavior | Priority |
|---|---|---|---|
| Preview | Exists in all tools, but UI differs. | Standard preview area with desktop/mobile and language states where applicable. | P0 |
| Copy HTML | Exists in all tools, but labels differ. | Consistent copy buttons with success state and target language. | P0 |
| Sample Data | Mostly missing. | Every tool has "Load sample" for first-time users. | P0 |
| Error Handling | Uneven. | Row-level or field-level messages that explain what to fix. | P0 |
| Project Save | localStorage exists in some tools. | JSON export/import for handover and cross-device work. | P1 |
| Drupal Guidance | Mostly implicit. | Each tool states where the generated HTML should be pasted. | P1 |
| Empty State | Uneven. | Empty screens explain the next action without lengthy instructions. | P1 |
| Version Badge | Exists in some tools. | Standard tool version and stability status. | P1 |
| Data Validation | Partial. | Warn before output if required fields or URLs are missing. | P1 |
| Terminology | Mixed: Creator / 生成器 / 產生器. | Use "產生器" consistently in Chinese UI. | P1 |

## Individual Tool Functions

### Forum Generator

Core function: build complete bilingual forum page HTML.

| Function | Keep | Improve |
|---|---|---|
| Excel / CSV parsing | Yes | Add clearer field mapping preview. |
| AI-assisted parsing | Yes | Collapse by default and label as optional. |
| Forum selection | Yes | Show source row / parsed confidence if possible. |
| Metadata editing | Yes | Add simple mode for minimum viable forum page. |
| People management | Yes | Add missing URL warnings only when names have links expected. |
| Logo normalization | Yes | Add per-logo status and export-safe warnings. |
| Pricing table output | Yes | Add final checklist for price completeness. |
| Bilingual output | Yes | Keep as flagship function. |
| Draft save | Yes | Add JSON project export/import. |

### Theme / Trend Generator

Core function: build interactive topic cards and drawers.

| Function | Keep | Improve |
|---|---|---|
| Theme block editor | Yes | Add quick jump/search when many blocks exist. |
| Zone/forum lists | Yes | Add missing URL and empty field checker. |
| Scoped CSS output | Yes | Surface as a confidence feature. |
| AI import | Yes | Make optional status clearer. |
| Bilingual output | Yes | Keep language copy buttons consistent. |
| Icon URL support | Yes | Add image load validation if feasible. |
| localStorage | Yes | Add JSON export/import later. |

### Sponsors Logo Generator

Core function: build sponsor logo sections by tier.

| Function | Keep | Improve |
|---|---|---|
| Logo paste/upload | Yes | Add clearer empty state and file requirements. |
| Tier management | Yes | Allow tier order customization later. |
| Sponsor sorting | Yes | Keep drag/drop and move controls. |
| Inline link editing | Yes | Add missing-link warning. |
| JSON backup | Yes | Add project name, export time, and tool version. |
| Bilingual output | Yes | Add preview language switch. |
| Image compression | Yes | Show compressed size/format feedback. |

### Pavilions Vendor Generator

Core function: convert pavilion vendor lists into HTML blocks.

| Function | Keep | Improve |
|---|---|---|
| Excel paste | Yes | Add parsed review table before HTML output. |
| Data format switch | Yes | Explain required columns with sample row. |
| Theme color | Yes | Add SEMICON preset swatches. |
| Intro and bullet content | Yes | Add optional bilingual fields later. |
| Single-language output | Temporary | Move toward bilingual simultaneous output. |
| Preview | Yes | Add row-level validation messages. |
| Tailwind CDN | Temporary | Replace with local CSS before production/portfolio release. |

## Workflow Model

Every generator should eventually follow this pattern:

```text
1. Choose section type
2. Load sample or paste source data
3. Validate and review parsed content
4. Edit details
5. Preview generated section
6. Copy HTML or export project JSON
```

## Suggested Build Order

1. Sponsors Logo Generator: easiest quick win and already has backup logic.
2. Pavilions Vendor Generator: needs validation and bilingual output to feel production-ready.
3. Forum Generator: most valuable but highest complexity.
4. Theme / Trend Generator: already polished; optimize navigation and handover safety.
5. Hub case study: package the project for GitHub and resume use.

## Definition of Done

A generator is considered product-ready when it has:

- Clear first-use state.
- Sample data.
- Required field validation.
- Preview that matches copied output.
- Copy success state.
- JSON export/import or equivalent handover path.
- Drupal paste guidance.
- No production-critical browser console warnings.
