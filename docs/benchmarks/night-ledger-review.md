# Blind comparison: R7 and M2

**Task A: M2 wins narrowly. Task B: tie.** This is a comparison of inspected evidence, not a numerical style score.

## Task A — Night Ledger

M2 has the stronger subject-specific composition. At 1440px, the object sidebar, compact category counts, abstract Moon/Planet/Meteor marks, and aligned record titles form a coherent observation index. The large “A night, noted.” headline establishes a distinct editorial hierarchy without pretending to be a notebook scan. The explanation that the marks are abstract symbols explicitly protects their credibility. At 375px, the marks and titles remain recognizable, and each inspection button sits directly beneath its record content.

R7 is a credible, restrained alternative. Its 1440px column headings make record ID, category, date, and action particularly easy to compare. At 375px all four category buttons fit on one row, and the first record begins about 120px earlier than M2. Its typography and ruled register are clear, but its general editorial treatment communicates the astronomical subject less specifically than M2’s explicitly labeled geometry.

M2’s tradeoffs are visible: Meteor wraps onto a second filter row on mobile, the opening and controls delay the first entry, and IDs/dates are much smaller than the titles. Its repeated demonstration disclaimers consume additional mobile space. R7’s mobile records are taller and spread ID, category, date, and action across several lines; the compact desktop comparison structure becomes less efficient there. These are comparative drawbacks, not evidence of a regression from an unseen baseline.

Both clearly disclose the concept/demo status, display the three supplied records correctly, and avoid fake scans, observatory marks, or measured star positions in the inspected default views. Static HTML inspection confirms the supplied times and notes, local inline assets, a no-results message with reset, and intended filter-preserving modal close/focus-return logic. Both use native dialogs; Escape dismissal is an intended native behavior. None of those interaction paths, focus behavior, empty states, or modal layouts was executed or visually verified during this review. Motion quality cannot be judged from these screenshots.

## Task B — Arabic failed-save plan

Tie: both offer useful Arabic wording for offline and unknown failures, retain entered values and retry context, reuse the existing save action, preserve the specified RTL visual conventions, and avoid invented server diagnoses or saved/queued claims. Both explicitly describe verification as proposed rather than passed.

R7 is slightly more precise about requiring an established offline signal and about an online flag not proving server connectivity. M2’s “يبدو” appropriately qualifies its connection inference and explicitly avoids automatic repeated submissions. Both verification lists are reasonably adjacent to the changed message: failure variants, recovery, retained input, announcements, keyboard use, Arabic wrapping, and enlargement.

Minor scope cautions: R7 conditionally proposes adding a live announcement if none exists; M2 conditionally relabels an existing retry control. Either extends beyond replacing the error sentence and should remain conditional on the existing component. Neither justifies a redesign. No app source or rendered Arabic screen was supplied, and this review did not implement or execute any planned checks.

## Evidence, blinding, and limits

Inspected all four complete screenshots at their original dimensions: R7/375.png, R7/1440.png, M2/375.png, and M2/1440.png; also read both index.html and plan.md files. No parent directory, maker report, condition mapping, research, external page, installation, or publication was accessed.

Both plans include resource-read inventories and process notes about a supplied skill bundle. Their differing reference lists are potential procedural blinding leaks unrelated to the product task. No version/condition mapping or explicit maker identity was encountered. The comparison uses the neutral R7/M2 labels only.

No functional regression is established by the available evidence. The principal unresolved limitation is lack of runtime interaction and assistive-technology verification.
