# Product Evolution Playbook

This document explains SEMI Tool Hub as a product evolution effort, not only a set of independent HTML generators. It is written so the current project story can be documented now, while leaving space to add old-vs-new comparisons and measured improvement data later.

## Why This Document Exists

SEMI Tool Hub did not begin as one large platform. It started from repeated publishing pain points in actual SEMICON Taiwan website work. Instead of building a broad system too early, the project first created several small tools that each solved one concrete workflow problem. After those tools proved useful, they became candidates for integration into one unified Hub.

This is a normal product path:

```text
Problem discovery
-> workflow pain point confirmation
-> small tool development
-> tool-level validation
-> integrated platform assembly
-> old vs new comparison
-> continuous optimization
```

In product language, this is best described as:

- Product iteration
- Modular validation
- Platform integration
- Continuous improvement

## Product Evolution Narrative

SEMI Tool Hub follows a modular product strategy. Each tool was first developed as an independent utility around a high-frequency website publishing task, so the workflow could be tested directly against real editing needs. Once the individual generators became usable and repeatable, they were brought together into one integrated workspace. The Hub therefore represents the next stage of the product: moving from isolated tools to a unified publishing workbench with clearer entry points, shared language, and stronger handoff value.

## Why Build Small Tools First

This approach lowers product risk.

- It validates one workflow at a time instead of forcing a full platform redesign before the real pain points are understood.
- It keeps development focused on high-value tasks that already happen in production-like work.
- It makes each module easier to test, correct, and explain.
- It creates a clearer path for future before/after comparison because each tool has its own problem statement.
- It avoids overbuilding management features before the core HTML publishing workflows are stable.

## Evolution Stages

### Stage 1: Independent Tool Development

At this stage, each workflow problem is handled as its own tool project.

- Forum HTML Generator
- Pavilions Vendor HTML Generator
- Sponsors Logo HTML Generator
- Fifteen Trends Trend Table Generator

Primary goal:

- Solve one publishing problem well enough to reduce manual HTML work.

### Stage 2: Tool-Level Validation

At this stage, each tool is reviewed as a real editor workflow.

Primary questions:

- Does the tool reduce manual formatting work?
- Does it create more consistent HTML output?
- Does it reduce copy/paste or template-editing mistakes?
- Can another person understand how to use it again later?

### Stage 3: Hub Integration

At this stage, validated tools are integrated into SEMI Tool Hub.

Primary goal:

- Turn separate utilities into one coherent product surface.

Integration value:

- One entry point
- Shared workflow language
- Lower tool discovery cost
- Better product storytelling
- Easier portfolio presentation

### Stage 4: Comparison and Optimization

At this stage, old workflows and integrated workflows are compared directly.

Primary goal:

- Measure product value, not just implementation completion.

Typical evidence:

- Time saved
- Fewer steps
- Fewer formatting errors
- Less rework
- More consistent HTML structure

## Module Map

This section describes how each independent project contributes to the final Hub.

| Module | Original workflow problem | Independent tool role | Hub integration value | Comparison data to add later |
|---|---|---|---|---|
| Forum HTML Generator | Forum page updates likely depended on repeated manual content arrangement, bilingual HTML handling, and fragile formatting steps. | Compiles forum content into structured bilingual HTML output. | Keeps a complex, high-value workflow inside the unified product instead of leaving it as a separate one-off utility. | Old update steps, average update time, repeated formatting fixes, bilingual consistency issues. |
| Pavilions Vendor HTML Generator | Vendor lists and booth information likely required repeated formatting, cleanup, and manual HTML assembly. | Converts raw vendor data into formatted HTML blocks with validation and parsed review. | Demonstrates structured data handling and validation inside the Hub. | Old vendor-list processing time, missing booth/URL rate, row cleanup effort. |
| Sponsors Logo HTML Generator | Sponsor tier sections and logo ordering likely required repetitive arrangement, asset checking, and manual HTML edits. | Organizes sponsor rows, tier sections, links, and output HTML in one workflow. | Strengthens recurring sponsor publishing tasks and repeatable section updates. | Old sponsor section assembly time, missing-logo handling effort, tier sorting rework. |
| Fifteen Trends Trend Table Generator | Theme/trend sections likely required repeated card/table formatting and content structure management. | Produces standardized trend table output and preserves structured project state. | Adds strategic content formatting capability beyond simple list generators. | Old trend content formatting time, layout inconsistency count, navigation or update friction. |

## PM-Style Workflow For This Project

This is the recommended operating flow for SEMI Tool Hub as a product.

1. Discover the workflow problem.
2. Write the problem in plain language.
3. Define why the problem matters.
4. Decide whether the issue should be solved by a new tool, a tool improvement, or Hub-level integration.
5. Build the smallest useful slice.
6. Trial-run the workflow with realistic content.
7. Record what improved and what still hurts.
8. Integrate validated changes into SEMI Tool Hub.
9. Compare old and new workflows.
10. Start the next iteration.

## Recommended Documentation Stack

SEMI Tool Hub does not need heavy enterprise documentation, but it should keep a lightweight PM stack.

- `docs/product-brief.md`: what the product is, who it serves, and why it exists.
- `docs/roadmap.md`: what phase the product is in and what comes next.
- `docs/workflow.md`: how changes move from idea to integrated Hub.
- `docs/version-map.md`: which source tools became which Hub modules.
- `docs/product-evolution.md`: the product story, modular strategy, and future comparison structure.

## Before / After Comparison Template

Use this template later for each module.

### 1. Original problem

What specific workflow problem existed before the tool or Hub integration?

### 2. Old workflow

How did the work happen before?

- Who performed it?
- What source materials were used?
- Which steps were manual?
- Where did errors or delays usually happen?

### 3. New solution

What tool or Hub workflow now replaces or improves the old process?

### 4. Old vs new comparison

What changed?

- Manual HTML editing: reduced / unchanged / removed
- Copy/paste steps: reduced from `TBD` to `TBD`
- Required tools/windows: reduced from `TBD` to `TBD`
- Error-prone fields: reduced / validated / still manual

### 5. Impact

What value was created?

- Time saved
- Step reduction
- Error reduction
- Output consistency
- Easier handoff

### 6. Next optimization

What still needs improvement?

## Metrics To Collect Later

These are the best first metrics for your future comparison pass.

| Metric | How to measure | Current status |
|---|---|---|
| End-to-end task time | Minutes from receiving source content to copied HTML ready for Drupal | TBD |
| Step count | Number of distinct actions from source input to final output | TBD |
| Rework count | Number of times the editor must go back and fix source data or formatting | TBD |
| Validation catch rate | Number of missing or malformed fields caught before final copy | TBD |
| Output consistency | Whether generated structure is standardized across repeated updates | Qualitative now, quantify later if useful |
| Handoff readiness | Whether another user can continue the work without redoing the process from scratch | Partial now, measure via trial run |

## Suggested Data Collection Method

When you are ready to add proof, measure one workflow at a time.

1. Find the old materials or old working method.
2. Reconstruct the old workflow as accurately as possible.
3. Run the same task through the current tool.
4. Record time, steps, and friction points for both.
5. Save the result as a small case note inside the relevant tool section or a future case-study document.

## Current Position

The current project is already strong enough to document as a product evolution effort even before all comparison data is collected.

Current factual framing:

- The product already has an integrated Hub structure.
- The product already contains four core modules.
- The product already shows a modular-to-platform evolution path.
- Quantified before/after evidence should be added next, not invented early.

## Next Documentation Step

After old materials are collected, create one short comparison record for each module using this structure:

```text
Problem
-> Old workflow
-> New tool workflow
-> Old vs new comparison
-> Measured impact
-> Next optimization
```

That will turn SEMI Tool Hub from a documented implementation project into a documented product case study.
