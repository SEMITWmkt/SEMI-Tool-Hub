# Product Principles

These rules keep SEMICON Content Tool Hub focused on real publishing work instead of drifting into a large management system.

## Product Position

The Hub is the integrated publishing workbench for SEMICON Taiwan website editors. It helps users turn known event data into Drupal-ready HTML sections from one place.

It is not a CRM, approval system, event database, or multi-user back office.

## Core Questions

Every tool should help the editor answer three questions quickly:

1. Is the source data correct enough to publish?
2. Is anything missing or risky?
3. Can this HTML be safely pasted into Drupal?

If a feature does not support one of these questions, it should be deferred.

## Workflow First

Each generator should follow this mental model:

```text
Paste or load data
Review parsed result
Fix visible issues
Preview output
Copy Drupal-ready HTML
Save or document the working state
```

The interface should make this flow obvious without turning the tool into a training manual.

## Reduction First

Prefer:

- Fewer screens.
- Clear labels.
- Sample data.
- Validation messages.
- Explicit copy and preview states.
- Small release slices.

Avoid:

- Approval workflow.
- Contact management.
- Manual status taxonomies.
- Analytics dashboards.
- Multi-user collaboration.
- Complex permissions.
- Features that only exist to look impressive in a portfolio.

## User Roles

| Role | What they need |
|---|---|
| Website editor | Prepare content quickly and know whether it is safe to paste. |
| Event or marketing owner | Check names, links, booth numbers, and language output. |
| Website visitor | See a clean, readable, working section after Drupal publish. |
| Developer / portfolio reviewer | Understand the product thinking, scope control, and implementation path. |

## Design Direction

Visual style should be unified after the functional order is clear.

For now, prioritize:

- Consistent workflow labels.
- Trust indicators.
- Clear empty states.
- Predictable preview and copy behavior.
- Documentation that explains why each tool exists.

Do not redesign all tools at once unless the workflow contract is stable.

## Publishing Safety

Generated HTML should be judged by:

- Does it render correctly inside Drupal content areas?
- Are links valid or clearly marked for checking?
- Are required fields missing?
- Does preview match copied output?
- Can another editor repeat the workflow from the README or user guide?

## Integration Rule

SEMI-Tool-Hub is the primary integrated product.

The desktop tool folders and independent repos can still be used as source material during migration, but the Hub `tools/` folder is not just a passive archive. It is the actual integrated tool surface for the resume-ready project.

When a tool is improved outside the Hub, the validated version must be brought into Hub quickly so the integrated website stays current.
