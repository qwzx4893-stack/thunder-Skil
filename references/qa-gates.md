# Verification: correctness, visual judgment, evidence

Load before delivery. Match depth to scope. This is the canonical measurement reference; scripts/policy.mjs holds the same automated constants. A local change verifies its component, adjacent states, and narrow/wide layout; full surfaces verify the task and relevant views below.

## Outcome vocabulary

PASS = the stated check was exercised and met.
FAIL = observed violation.
UNVERIFIED = applicable but not measured, unavailable, or incompletely covered.
N/A = inapplicable, with reason.

Never convert skipped, missing, or partial evidence into PASS. Report automated smoke checks separately from full product acceptance and taste.

## Correctness checks

| Check | Evidence |
|---|---|
| Primary task and recovery | Entry -> action -> observable outcome; meaningful failure and recovery; persistence read-back when applicable |
| Reflow/responsive | 375, 768, 1440px views for full pages; additional 320 CSS px/equivalent 400% reflow check; unintended document overflow <=1px |
| Accessibility | Actual keyboard task, visible/unobscured focus, labels/semantics, state announcements where needed, touch path, reduced motion |
| Contrast | WCAG AA normal text >=4.5:1, large text >=3:1; meaningful non-text UI >=3:1 where required; actual themes and states |
| Content/assets | Real or clearly labeled demo content, accurate claims, legitimate assets; declared substitutions and unresolved facts |
| Runtime | No new uncaught page errors, broken required images, or failed essential resources |
| Motion/canvas | Equivalent content/task without motion; meaningful moving frame, unsupported and context-loss fallbacks where applicable |

Large text means >=24 CSS px or >=18.66px bold (approximately 700+). Disabled/inactive controls and other standard exceptions require context. A flat-background contrast calculation does not cover images, gradients, pseudo-content, translucent ancestors, canvas, or every hover state. Inspect those separately. An intentional scrollable data region can be N/A for document-overflow interpretation only when its contents and controls remain usable.

Run the project's relevant build/type/lint checks as appropriate. Use real triggers; a state keyword or an unreachable error branch is not evidence. Screenshots alone do not establish correct behavior. Check representative long content, zoom/enlargement, and RTL if relevant. Do not claim full WCAG conformance from these partial checks.

For clipped content despite zero document overflow, and modal initial focus, Tab boundaries and return focus, use layout-interaction-integrity.md. Do not treat all off-screen rectangles as defects or an open modal class as proof of keyboard usability.

## Portable smoke helper

From the project:
node <skill-dir>/scripts/audit.mjs <url-or-html> --out <evidence-dir>
Optional: --browser <executable> --playwright <module-path>.

The helper resolves Playwright from the project/skill environment, or the explicit module path. It never installs dependencies. Node 18+ and an available Chromium browser are required for browser checks. Browser launch limitations are UNVERIFIED, not successful QA.

It records screenshots, bounded flat-background contrast, overflow, page errors, broken images, accessible-name signals, reduced CSS-animation inventory, and manual follow-ups. Exit 0 means only its automated smoke scope passed; 1 means automated failure; 2 means incomplete evidence or a setup problem. Full task, keyboard behavior, canvas/JS motion, non-text contrast, state coverage, theme variations, and visual taste still need explicit review. See scripts/README.md for exact coverage.

## Performance: target vs measurement

Targets: field p75 LCP <=2500ms, INP <=200ms, CLS <=0.1. A local browser run cannot establish field p75. Use real-user/field data when available; label lab measurements with device, network, cache, tool and sample count. A lab CLS/LCP observation is not an INP or field-quality certificate.

Set JS/media/frame budgets from the existing stack and target device. L0/L1 should usually avoid heavy runtimes; L2–L4 must justify cost and retain fallback. Report compressed transfer separately from decoded/GPU memory. No universal JS cap can account for every established application.

## Visual and UX judgment

Review task clarity, hierarchy, subject fit, composition/type/material craft, content credibility, state/recovery quality, and motion restraint (including justified stillness). Cite pixels or task behavior and one concrete next correction. Static and operational interfaces are not penalized for lacking a signature animation.

Inspect local collisions even when document overflow is zero. Transformed pseudo-elements, diagrams, ornaments and positioned labels can leave their allocated region and cross adjacent text without widening the page. Reserve enough space, recompose or clip only the decoration; never hide necessary content to satisfy an overflow check. Reopen the affected width and state after repair.

For substantial work, give a fresh critic task, constraints, screenshots and artifact without the maker's rationale. Distinguish independent review, self-review and human review. A rubric helps compare; it cannot convert taste into an objective percentage.

## Repair and delivery

Fix blockers before polish. Recheck the affected path after each meaningful fix. Stop iteration when acceptance is met and another pass has no material finding; if tools, inputs, or scope prevent completion, name the gap and its impact. Never weaken a gate to make the report green. Keep evidence paths and concise observations, not promotional scores.
