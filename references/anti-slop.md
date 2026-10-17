# Diagnose generic or unfinished work

Load before committing an open visual direction, and again for visual critique. These are diagnostic signals, not global style bans. A supplied brand, explicit reference, or real product convention can justify any aesthetic pattern.

## Challenge the model's favorite defaults

The risk is a recurring bundle of choices applied regardless of subject. Inspect the whole composition, not a blacklist of isolated fonts or hues. Changing one default palette can simply reveal the model's next favorite template.

| Recurring default | Test before retaining it | Useful alternative decision |
|---|---|---|
| Cream ground, expressive serif, clay/orange accent | Does the subject explain this editorial warmth, or did it appear before any subject evidence? | Derive surface, reading voice and emphasis from actual material, brand or task; this palette remains valid when supported |
| Near-black stage with acid green/red highlights | Does dark contrast serve inspection, content or brand, or stand in for generic technical credibility? | Choose light/dark, contrast distribution and accent semantics independently from the technology category |
| Newspaper-like rules, square corners, narrow columns | Do these organize real records/comparison, or just signal designer taste? | Structure around the content's actual relations; do not replace every card kit with the same editorial kit |
| Identical rounded tiles, repeated soft shadows, decorative gradient haze | Are items truly comparable and do surfaces encode hierarchy? | Use geometry and grouping that follow the argument; vary emphasis where the content differs |
| Large statistic, tiny label, supporting numbers and gradient | Is the number both sourced and the most meaningful opening? | Open with the characteristic subject, a real demonstration, image, interaction, or claim suited to the visitor |

These are patterns to examine on unspecified axes, not reasons to override an explicit reference. An Inter/system-font choice, centered layout, black/white scheme, gradient or card grid can be deliberate. If the only justification is modern, premium, clean or professional, make a more specific decision.

## Typography and visual grammar are information

- Do not reflexively highlight one headline word with an italic, weight change or accent color. Emphasize a word only when that distinction communicates something; otherwise use the complete typographic composition for hierarchy.
- Uppercase micro-labels, exaggerated tracking and a small label above every heading are not free sophistication. Keep labels that orient a task or distinguish content; remove invented framing. Preserve real codes, abbreviations and units. Arabic has no Latin case distinction; do not import Latin label habits mechanically.
- Sequence numbers communicate actual order or reference identity. Do not number unrelated features merely to make a layout look editorial.
- Repeated metadata separators, monospace captions and arrows on every link can become template chrome. Keep each device only where it adds meaning or a useful interaction cue; do not manufacture dates, coordinates or statuses to decorate empty space.
- Choose type roles deliberately. Let scale, width, spacing, alignment and wrapping participate in the composition. One family can carry several roles; an arbitrary second family does not create identity.

## Spend emphasis and motion intentionally

Choose the element that deserves memory and keep surrounding decisions disciplined. Do not apply the same fade/slide entrance to every section or hover choreography to every card by default. A coordinated opening or meaningful reveal can create hierarchy; response to opening, expanding, selecting or confirming should explain the change. Keep stillness when it fits the task. Remove an accessory when it weakens the main idea instead of adding more polish effects.

Review the design plan against the brief before implementation: which part is an answer this subject caused, and which would recur for any nearby prompt? Revise the organizing choice, record the reason, and test the built pixels again. A compelling rationale does not excuse a generic render.

| Signal | Question | Useful correction |
|---|---|---|
| Same hero/cards regardless of subject | Does information hierarchy explain the geometry? | Change the organizing argument, not just palette |
| Style chosen from "premium/modern" | What specific subject or task caused the decision? | Gather evidence and state a layout consequence |
| Repeated decorative labels/numbers | Are they information or filler? | Remove or replace with meaningful orientation |
| Generic font/palette substitution | Does it improve reading, language, or brand fit? | Keep or change for a stated reason |
| Nested cards and shadows | Do surfaces encode distinct groups/elevation? | Use fewer surfaces or clearer spacing |
| Unrelated stock images or generic 3D | Is this evidence, atmosphere, or a fake product? | Obtain real material or declare/recompose |
| Fabricated proof | Can the claim be traced? | Source, label demo, or remove |
| Placeholder shell | Does absent content prevent the task? | Resolve the critical content, reduce scope honestly |
| Every element animates | What hierarchy or cause does each motion express? | Keep purposeful motion, remove repetition |
| Novel controls with weak behavior | Is novelty worth losing conventions? | Use an accessible familiar primitive |
| Beautiful screenshot, dead task | Can the primary action actually finish? | Implement and exercise the real state transition |
| Tiny low-contrast microcopy | Is secondary information still readable? | Restore size, contrast, and proximity |

## Hard defects vs judgment

Broken tasks, fabricated facts, inaccessible essential controls, unintended layout distortion, and missing promised behavior are correctness defects. Rounded corners, purple hues, Inter typography, centered heroes, native selects, hairlines, or zero motion are not correctness defects by themselves.

### Responsive Layout Integrity & Clipping Defects
- **The Grid Span Collapse Bug**: Switching a CSS Grid from multi-column to single-column at a breakpoint (`grid-template-columns: 1fr`) without resetting child column spans (`grid-column: span N`) creates implicit columns that expand beyond the viewport. This is a severe correctness defect. Always reset child spans (`grid-column: auto` or `1 / -1`).
- **Destructive Clipping vs. Decorative Bleed**: `overflow-x: hidden` on `body` or a main container does not solve layout overflow; it hides the horizontal scrollbar while silently cutting off interactive buttons, headings, and readable text from view. A background image or ambient texture may bleed beyond the viewport edges, but readable content and interactive controls must never be clipped.

The portable scripts perform bounded checks; they do not certify taste or originality. Do not add hidden markers, fake states, numbers, or distinctive labels merely to satisfy a checker. A keyword match is not proof of a rendered state.

## Practical critique

Use the first glance to identify subject and next action, then follow the primary task. Blur/grayscale can help hierarchy inspection, but cannot establish accessibility or visual weight numerically. Compare composition, content, and behavior to a similar brief or recent project. A repeated heading vocabulary is not proof of geometric convergence.

Every criticism needs observed evidence, user consequence, and a concrete correction. Name intentional exceptions. Do not replace one universal house style with another.

Source influence: Anthropic frontend-design, inspected 2026-10-16. Adapted in original prose with explicit-reference and operational-UI exceptions; no third-party prompt text copied.
https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md
