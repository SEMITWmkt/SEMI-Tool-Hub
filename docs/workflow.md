# Workflow

This workflow makes SEMI-Tool-Hub the canonical integrated project while still respecting the existing desktop tool folders during migration.

## Standard Tool Update Flow

1. Review the tool as a user and product manager.
2. Write or update the spec and scope.
3. If editing a desktop source repo, create a feature branch there.
4. Implement the smallest useful slice.
5. Run local trial tests from editor, visitor, and developer perspectives.
6. Update README and user guide when the tool needs handoff documentation.
7. Bring the validated tool into `SEMI-Tool-Hub/tools/<tool>/`.
8. Update `docs/version-map.md`.
9. Run Hub smoke tests from `SEMI-Tool-Hub/index.html`.
10. Commit and push after confirmation.

## Branch Naming

Use short branch names that include the tool and release slice:

```text
pavilions-v1.1-confidence
sponsors-v5.2-polish
forum-handoff-safety
trends-validation
```

## Documentation Per Tool

Each integrated tool should have enough documentation for handoff. During migration, source repos should also keep:

- `README.md` for project purpose, file structure, version, and local use.
- `USER_GUIDE_zh-TW.md` for website editors.
- Optional changelog when release history becomes meaningful.

## Trial Run Types

Every meaningful release should have at least five trial runs:

| Run | Perspective | Purpose |
|---|---|---|
| 1 | Website editor | Can the editor complete the intended workflow with clean data? |
| 2 | Website editor | Are errors visible when data is incomplete or malformed? |
| 3 | Website visitor | Does the generated HTML read and behave correctly after publish? |
| 4 | Developer | Are source repo, branch, docs, and Hub snapshot traceable? |
| 5 | Handoff / portfolio reviewer | Can another person understand what the tool does and why it exists? |

## Integration Rules

- Hub is the product that should be demo-ready.
- `tools/forum`, `tools/trends`, `tools/sponsors`, and `tools/pavilions` should all work from the Hub launcher.
- Do not copy `.git/`, `.DS_Store`, backups, or local-only files into Hub.
- Record integration source and status in `docs/version-map.md`.
- If Hub differs from a desktop source folder unexpectedly, mark it as drift and decide which version is correct.
- When syncing an independent tool into Hub, copy the source feature baseline first, then reapply only documented Hub-specific layout or shell adaptations.

## Source Sync Checklist

Use this checklist when an independent tool project has a newer version than the Hub module.

1. Confirm the independent source version and latest meaningful change.
2. Compare the source tool with the Hub copy before editing.
3. Sync the feature baseline into `tools/{module}/`.
4. Reapply only necessary Hub adaptations, such as iframe layout fit or launcher metadata.
5. Update `README.md`, `docs/version-map.md`, and any launcher version labels.
6. Smoke test the Hub entry and the direct tool URL.
7. Record any remaining intentional differences.

## Current Next Step

Run Hub-level smoke tests after source syncs, then continue standardizing work-file controls, publish checks, preview, and copy flows across all generators.
