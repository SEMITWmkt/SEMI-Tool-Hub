# Generator UI Standard

This standard keeps SEMI Tool Hub generators feeling like one product while preserving each tool's specialized workflow.

## Product Goal

Editors should not feel like they are learning a new application every time they switch generators.

The shared shell should make these controls predictable:

- Tool identity.
- Version and readiness status.
- Save / Load work file.
- Autosaved draft.
- Editable source state.
- Publish check.
- Preview.
- Copy HTML.

## Standard Layout

Use this structure for every generator:

```text
Header
  Tool name / version / status
  Save work file / Load work file / Autosaved draft

Main workspace
  Left: editable source or structured data
  Right: publish check, preview, copy HTML

Optional panels
  Advanced settings
  Generated HTML
  AI assistant
```

## Common Labels

| Use | Label |
|---|---|
| Save editable state | Save work file |
| Load editable state | Load work file |
| Browser autosave | Autosaved draft |
| Preview generated section | Preview |
| Copy Drupal-ready HTML | Copy HTML |
| Publishable | Ready |
| Needs review | Needs check |
| Cannot publish | Cannot publish |

## Visual Direction

The shared style should be quiet, practical, and work-focused.

Use:

- White panels.
- Thin neutral borders.
- Small version/status badges.
- One primary action per major step.
- Compact publish checks.
- Consistent button labels.

Avoid:

- Decorative dashboards.
- Feature-heavy sidebars.
- Fake controls.
- Large marketing-style hero sections inside generators.
- Tool-specific color systems that make each generator feel unrelated.

## Rollout Order

1. Standardize wording and work-file controls.
2. Standardize publish check language.
3. Standardize preview and copy controls.
4. Keep active Forum workflow stable.
5. Only then unify deeper visual styling.

## Acceptance Criteria

- A first-time editor can find Save / Load work file in every generator.
- A returning editor can update one item without editing HTML.
- A reviewer can identify whether output is Ready, Needs check, or Cannot publish.
- Switching tools does not require relearning core controls.
