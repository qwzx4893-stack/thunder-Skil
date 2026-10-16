# From a real precedent to a design decision

Use for substantial new expressive surfaces and open redesigns. The output is an implemented relationship with evidence, not a moodboard or a list of famous sites. Local fixes and an explicit supplied direction do not need a new research campaign. Read references/observed-cases.md for worked observations; references/research-method.md governs source honesty.

## 1. Frame the design problem

Write the visitor's next decision, the thing that makes this subject credible, available content/assets, and the unresolved visual question. Example: “Can a visitor distinguish these objects and choose one? We have accurate photographs and dimensions; the unresolved question is how much editorial staging helps comparison.” “Make it premium” does not identify a question.

Choose precedents by the problem they solve: a capability-led studio, a material product, a complex service, an archive, a specimen. Awards and polished screenshots help discovery but do not establish fit. A visually opposite example can expose an assumption. Stop collecting when another source is unlikely to change the decision; do not impose a reference count.

## 2. Observe the original, not just its description

Verify domain, page identity, date, loading/consent state and exact viewport. Open the live source when accessible; Refero and galleries are useful discovery or historical evidence. Wait for visible content to settle through normal state capture, not arbitrary long delays. Distinguish a loading frame from the intended composition.

Inspect the opening, the next meaningful section and the relevant action. For a responsive decision, compare narrow and wide states with the same content selected. A carousel changing slides between captures is a confound. Trigger the relevant harmless interaction and observe its result; a control's presence does not prove its behavior. Do not purchase, submit contact data or cross access restrictions for design research.

Capture a screenshot when supported and record its path; otherwise record the observed viewport/state and say no persistent capture exists. If browsing is unavailable, use supplied captures or the observed cases, label the limitation, and continue with a reversible direction. Never report an unvisited source as inspected.

## 3. Draw a relationship map

Reduce the page to relationships before choosing tokens:

- **Argument:** what is claimed, what proves it, what the visitor can do next. Where does explanation replace spectacle?
- **Hierarchy:** first/second/third attention target; text measure, image area and negative space in relation to the viewport. Record actual values only if measured.
- **Composition:** anchors, alignment, spans, crops, boundaries and purposeful departures from the grid. Explain what would break if an element moved.
- **Medium:** whether photography, typography, diagram, sound or space carries essential meaning. Identify bespoke production work and what survives its removal.
- **Time/input:** what causes a change, what visibly changes, interruption and alternative access. Do not infer an engine from appearance.
- **Recomposition:** what stacks, changes order/crop, condenses or disappears on narrow screens; which action remains reachable.

Keep observations separate from interpretations. “The photograph reserves a dark area beside the object” is observable; “this increases sales” requires evidence beyond a page inspection.

## 4. Make a transfer contract

For each consequential borrowing, write a short record:

```text
Question / source URL + date + state
Observed relationship / interpretation
Transfer to our content / explicit non-transfer
Required assets or behavior / honest fallback
Smallest study / visible success and failure condition
Implementation location / rendered evidence / keep, revise or discard
```

Borrow relationships, not a collage of signatures. Copying a palette, headline treatment and scroll effect from unrelated sites does not create an argument. Explain why each transfer fits this brief; if it depends on a missing bespoke asset, solve the asset problem or choose another direction. A generic shape cannot inherit the credibility of an accurate product image.

## 5. Study the risky mechanism, then build

When a consequential relationship is uncertain, build a small disposable study using the target content and legitimate assets before elaborating the whole site. It may be static HTML/CSS, a working control, a scene or a storyboard for a planning-only task. A trivial, already-established pattern needs no separate prototype.

Test the uncertain variable: object crop at narrow width, headline wrapping, readable overlay, a filter actually changing records, or whether a spatial scene communicates more than a still frame. Do not spend this step polishing navigation or unrelated sections. Keep a simpler alternative so the effect can be removed without losing the argument. A study that exposes failure is useful; do not rationalize it into a pass.

Carry the chosen relationship into implementation and the design record. Name its assets, responsive rule, behavior, fallback and evidence. During final critique, compare the actual render with the contract, not with the maker's explanation. Consult references/qa-gates.md for accessibility and performance; aesthetic precedent does not certify either.

## Worked transfer: a ceramic collection, not a studio clone

Brief: visitors browse twelve vessels by intended use, inspect scale and material, then open a detail view. Accurate object photographs exist; there is no 3D asset. These are hypothetical project inputs, not facts about a real client.

**Observed sources:** Pentagram's Work page lets project imagery dominate restrained chrome and turns a sentence into real category navigation. B&O's A9 page composes a product within photographed space and recomposes the product/text relationship on a narrow screen. See the dated cases for inspection limits.

**Adaptation:** let the vessels lead at a useful inspection size; use a functional “Objects for [all uses]” control only if those categories match visitor vocabulary. Reserve a genuine empty area in a selected photograph for short collection copy on wide screens; move the copy into its own band on narrow screens. Place size/material beside each item and preserve the selected use after returning from details.

**Do not transfer:** Pentagram's logotype, category taxonomy or exact grid; B&O's room, product claims, full-height staging or commerce layout. No invented spin control or procedural substitute for the real vessels. An equal comparison grid may serve this collection better than the source's asymmetric gallery.

**Smallest study:** implement the opening photograph, one functional use filter and three representative records, including the longest name. At wide/narrow widths verify object recognition, readable copy and a reachable detail action. Select a use, open/close details, then reach a no-results state. If sentence filtering is less clear than a labeled select, use the select. If the photograph cannot support readable copy without hiding the vessel, separate the text at both widths.

**Decision evidence:** screenshots establish crop/hierarchy; exercised state changes establish filtering and context preservation. Neither proves commercial conversion. The resulting site should be recognizable as this collection even when the borrowed interaction and all motion are removed.
