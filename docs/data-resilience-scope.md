# Data Resilience Scope: Vendors and Sponsors

This scope defines the next product slice for Pavilions Vendor HTML Creator and Sponsors Logo HTML Creator.

## Product Goal

Other teams may provide messy source data, but the publishing output should remain stable.

The tools should absorb reasonable input disorder, surface what was understood, flag what still needs human checking, and always produce a predictable Drupal-ready HTML structure from publishable rows.

## Problem Statement

Website editors often receive content as copied Excel ranges, CSV text, email snippets, mixed language company names, inconsistent URLs, or partial sponsor lists. If every variation requires manual cleanup before using the generator, the tool only moves the work instead of reducing it.

The goal is not to accept every possible input perfectly. The goal is to make the tool resilient enough that editors can paste imperfect data, review the parsed result, and fix only the risky parts.

## User Persona

Primary persona: SEMICON Taiwan website editor.

The editor receives vendor and sponsor information from multiple internal teams. They need to publish a consistent web section without becoming the person who manually repairs every data format.

## User Story

As a website editor, I want to paste messy vendor or sponsor data into the tool and see a normalized review list, so I can quickly identify missing fields and still output a fixed Drupal-ready HTML section from valid records.

## Target User Flow

1. Editor receives a messy list from another team.
2. Editor pastes the list into the generator.
3. Tool parses likely names, tiers, booths, links, and required fields.
4. Tool shows a review state: Ready, Check, or Missing.
5. Editor fixes only rows that need attention.
6. Tool outputs fixed-format HTML from rows that are publishable.
7. Editor copies HTML into Drupal.

## Feature Scope

### Pavilions Vendor HTML Creator

In scope:

- Accept tab-separated Excel paste.
- Accept simple CSV paste.
- Accept pipe-separated and multiple-space-separated rows.
- Normalize URLs that start with `www.` or domain-like text.
- Infer URL and booth from partially shifted columns.
- Keep invalid rows visible in review.
- Exclude rows without company name or booth from output.
- Keep output HTML structure fixed.

Out of scope:

- Full spreadsheet upload.
- Vendor database.
- Approval workflow.
- Perfect parsing for every email paragraph.

### Sponsors Logo HTML Creator

In scope:

- Accept pasted sponsor metadata lists.
- Infer tier, company name, and URL.
- Create placeholder sponsor rows when Logo is missing.
- Exclude missing-logo rows from HTML output.
- Keep missing-logo rows in the management list as action items.
- Allow Logo to be added later.

Out of scope:

- Auto-fetching logos from websites.
- Sponsor CRM fields.
- Contact management.
- Approval status.

## Acceptance Criteria

- A messy vendor list can still produce a review table.
- Vendor rows with company name and booth produce fixed-format cards.
- Vendor URLs missing protocol are normalized when safe.
- Sponsor pasted metadata can create a visible working list without Logo images.
- Missing Sponsor Logo rows do not create broken `<img>` output.
- Sponsor rows with valid Logo images still generate fixed bilingual HTML.
- Both tools show enough status information for another editor to continue the task.

## Success Metrics

- Number of source formats accepted without pre-cleaning.
- Number of risky rows caught before copy.
- Time from pasted source data to fixed HTML output.
- Whether a second editor can continue from the current tool state or work file.
