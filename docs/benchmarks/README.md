# Evaluation evidence — 0.5.0

Reviewed 16 October 2026. The objective is a useful, honest skill, not a promotional taste score. Mechanical correctness, agent behavior, visual judgment and publication integrity are different evidence levels.

## Reproducible verifier checks

Local run: **15 tests passed, 0 failed, 0 skipped**, including the real browser fixture suite. Nine policy tests cover luminance/composition, large-text boundaries, incomplete-coverage aggregation, reflow thresholds and reduced-motion uncertainty. Three bundle tests cover routing/resource integrity, missing-resource detection and Unicode codepoints. Two packaging tests cover reproducibility despite source timestamp changes, local-state exclusion and rejection of credential-like material. One browser test exercises multiple real Chromium fixtures for contrast, unknown backgrounds, names, overflow, animation inventory and page errors.

The first default-sandbox Edge launch failed because of temporary-profile/named-pipe restrictions. Retrying the same suite in a fresh temporary profile outside that restriction passed. This is an environment repair, not a hidden product failure or a reason to relabel missing coverage as PASS.

```sh
npm run validate
npm run test:unit
# For all 15, configure installed Playwright + Chromium:
npm test
```

See [helper setup and limits](../../scripts/README.md). Without BROWSER_EXECUTABLE the browser fixture is explicitly skipped. CI installs a fresh Chromium; a green workflow badge establishes that run's checks, not design excellence.

## Matched development pair: Night Ledger + constrained RTL plan

Baseline: preserved 0.4.0 runtime. Candidate: 0.5.0 initial core/composition revision. Two fresh workers received identical prompts, no prior outcomes, equivalent local tools and separate output directories. No external assets, browser research or deployment. Each built the archive and independently planned the constrained Arabic correction. Conditional data/camera/handoff additions were added after this pair and assessed separately; they were not part of these build trajectories.

**Archive task:** browse three clearly labeled demonstration astronomical records by category, inspect exact metadata, preserve filtering after details, support keyboard/empty recovery and responsive reflow. Real scans, telescope images and measured star positions were unavailable and could not be invented. Original code-native graphics were permitted.

| Evidence | Baseline | Candidate |
|---|---|---|
| Final automated smoke at 320/375/768/1440, normal/reduced | PASS in measured scope | PASS in measured scope |
| Three category paths and exact metadata | Exercised, passed | Exercised, passed |
| Keyboard details, Escape/focus return, category retention | Exercised, passed | Exercised, passed |
| Reachable no-results and reset recovery | Exercised, passed | Exercised, passed |
| Narrow task and enlargement stress checks | Exercised, bounded pass | Exercised, bounded pass |
| Runtime page errors in exercised paths | None observed | None observed |
| Source/demo honesty | Reviewed | Reviewed |
| Independent screenshot/HTML critique | Narrow visual preference | Stronger compact controls and early access, weaker subject specificity |

The per-run interaction scripts group checks differently (32 baseline records, 9 candidate groups); these are **not comparable score denominators**. Both cover the common behavior goals above. Neither establishes screen-reader behavior, browser UI zoom, physical-device performance or complete WCAG conformance.

**Qualitative result:** the reviewer narrowly preferred the baseline for the archive, particularly its explicitly abstract subject-specific marks and hierarchy. The candidate exposed records earlier and had clearer desktop comparison columns, but was more generic and less compact within mobile records. Both constrained Arabic plans tied: useful offline/unknown copy, preserved input/context and no redesign. Read the [full independent review](night-ledger-review.md).

This result is published because losing a comparison is information. It does not support a claim that the candidate universally improves aesthetics. The new core's reduced reading cost and workflow changes must be weighed against those tradeoffs; a narrow preference is not a statistical result.

### Inspect the actual artifacts

| Baseline | Candidate |
|---|---|
| [Archive HTML](artifacts/night-ledger-baseline.html) | [Archive HTML](artifacts/night-ledger-candidate.html) |
| [1440px view](artifacts/night-ledger-baseline-1440.png) | [1440px view](artifacts/night-ledger-candidate-1440.png) |
| [375px view](artifacts/night-ledger-baseline-375.png) | [375px view](artifacts/night-ledger-candidate-375.png) |
| [Arabic correction plan](artifacts/rtl-correction-baseline.md) | [Arabic correction plan](artifacts/rtl-correction-candidate.md) |

The visual reviewer inspected all four screenshots under neutral R7/M2 labels without condition mapping or maker build rationale. R7 was candidate; M2 baseline. Both plan artifacts exposed reference inventories, a possible procedural blinding leak. The reviewer did not execute interactions; actual behavior evidence comes from the separate browser runs.

## Context and attribution

The initial candidate entrypoint is 6,994 codepoints versus 8,064 for 0.4.0, about 13% smaller. In the archive reports the baseline runner listed nine relevant Markdown references and the candidate four. These are self-reported resource lists, not complete token traces or measured cost savings. No accurate API token, latency or monetary comparison is available.

Only one build per condition for this case, the same model family, local file-URL testing and one independent critic. The case was a development task known during authoring, not held-out proof. No no-skill, Anthropic or UI/UX Pro Max condition was run in this release. Old development scores are not relabeled as current-release results.

## Additional confirmation and adverse probes

Four independent final-runtime planning probes covered stable identity through data reorder, an incorrectly framed/undocumented 3D export, unsupported design/image fidelity claims, and a one-line correction under a supplied static reference. The responses preserved scope, named concrete failure checks and did not claim execution. These are behavioral plans, not verified implementations of those mechanisms.

Read the [actual planning outputs](protocol-probes.md) and [selection classifications](description-selection.json).

A description-selection probe classified 12/12 expected positive/negative prompts correctly (6 intended UI cases, 6 near-miss/backend/print cases). This is **not actual host activation telemetry**. The runner's first read exposed a small amount of introductory body text beyond metadata; it disclosed that deviation, so this is not described as strictly metadata-only testing.

## Final-runtime confirmation pair: Second Seat

Two additional fresh workers received an identical furniture-repair clinic brief after the conditional runtime changes were complete. They were not given the first comparison, hypotheses or each other's output. Neither this case nor its critique caused a runtime instruction edit. The task required two exact demo service fees, two dates, a changing summary, name/email validation, preservation on failure and a local-only confirmation without sending data.

Both final implementations passed their exercised service/date/summary, invalid-input retention, keyboard, local confirmation, narrow/reduced-motion and runtime checks. The per-run scripts differ in grouping, so their raw counts are not compared as success percentages. A separate common portable audit then returned automated-smoke PASS for both at identical 320/375/768/1440 normal/reduced contexts and produced the reviewer screenshots.

**Independent visual result: candidate narrowly preferred.** Its stacked service rows kept names and fees more comparable on mobile and its work-ticket composition connected the task with the subject. The baseline had stronger up-front demo disclosures and illustrated both repair subjects. Remaining candidate tradeoffs include very small optional drawing annotations on mobile and some less prominent prototype explanation. Read the [full independent review](second-seat-review.md).

| Baseline | Candidate |
|---|---|
| [Clinic HTML](artifacts/second-seat-baseline.html) | [Clinic HTML](artifacts/second-seat-candidate.html) |
| [1440px view](artifacts/second-seat-baseline-1440.png) | [1440px view](artifacts/second-seat-candidate-1440.png) |
| [375px view](artifacts/second-seat-baseline-375.png) | [375px view](artifacts/second-seat-candidate-375.png) |

Reviewer labels Q4 and Z9 concealed the mapping (Q4 baseline, Z9 candidate); all four screenshots and relevant HTML were inspected, no maker reports or other comparisons. No condition-identifying leak was reported. The critic did not execute interactions; task behavior came from the separate browser checks.

## Initial failures and repairs

- Both Night Ledger builds initially needed stronger Tab containment in their dialogs. The candidate additionally repaired action wrapping, tablet labels and enlarged column overlap found in rendered review. Their affected task paths and smoke checks were rerun.
- Second Seat baseline initially passed an overflow-only test despite cramped summary columns under enlargement. Visual review found the defect; a flexible label/value grid and a geometry check corrected it.
- Second Seat candidate corrected a wrapping wordmark at 320px and added/exercised defensive handling for an unbroken long confirmation name.
- Default-sandbox browser launch failures were recorded as unavailable verification; fresh-profile permitted runs supplied actual evidence. They were not silently counted as passes.

These are final-after-repair outcomes, not first-pass perfect runs. Earlier artifacts remain in the private development workspace; this public report preserves the material failure history without publishing machine paths or unrelated logs.

## What the complete release evidence supports

Two matched build cases produced **one narrow baseline visual preference and one narrow candidate preference**; the constrained Arabic plan tied. Four conditional planning probes and a bounded description-selection probe support the revised decisions in their tested scenarios. Fifteen local helper/package tests passed. This supports a functioning first public release with concrete strengths and known tradeoffs. It does not establish cross-model reliability, statistical improvement, full accessibility or superiority to company/community design skills.

See the [machine-readable summary](summary.json). Accurate token/cost measurements, physical devices, assistive technology, real browser zoom, hosted application behavior and field performance remain outside this evidence.
