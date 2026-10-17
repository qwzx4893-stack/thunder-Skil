# 0.6.1 · bounded repair of the contributed study

This is maintenance of the existing Antigravity v3 architectural example, not a new design benchmark. The original baseline and Antigravity trial files remain untouched. The public [repaired source](atelier/index.html) starts from Antigravity's `enhanced/fixed_index.html`; it does not represent fresh generation by the revised skill.

## What changed

- Replaced oversized craft instructions with a scoped diagnostic reference plus a conditional layout/interaction reference. Removed forced archetype selection and universal craft loading. Project validator limits are compatibility constraints, not a universal skill standard.
- Converted the acquisition and inspection overlays to native modal dialogs. Focus enters the close control, background interaction is inert, Tab boundaries follow visible controls, Escape closes, and focus returns to the actual invoker. Confirmation explicitly focuses its completion control.
- Kept the already repaired narrow hero composition, removed the fixed-395px debug logger, and added an explicit fictional-content notice. No purchase is transmitted; certificates, project metadata, materials and publishing claims are demonstration data.

## Current captures and replay

[390px opening](evidence/390.png) · [320px opening](evidence/320.png) · [1440px opening](evidence/1440.png) · [390px drawer](evidence/390-drawer.png) · [Replay observations](evidence/observations.json)

These captures are from the repaired source shipped here. They replace stale screenshot evidence for this repair; older Antigravity comparison captures are not silently relabeled as current.

Reproduce from the repository root with installed Playwright/Chromium:

```sh
node scripts/verify-atelier.mjs test-results/atelier
```

The replay checks meaningful hero text fragments at 320/390/1440px, both drawer launchers, initial and return focus, Tab/Shift+Tab boundaries, confirmation-state focus, price changes, plate switching, archive search and the inspection dialog. Captures use reduced motion. No automatic taste score, new A/B trial, physical-device performance result, screen-reader certification or claim of doubled quality is made. Hidden off-canvas panels and usable horizontal archive scrolling are not counted as clipping failures.

Local result on 2026-10-17: **9 replay groups passed**, no uncaught page errors in those paths; **15 existing verifier tests passed, 0 failed, 0 skipped** using installed Chromium. Both the canonical skill and the local enhanced instruction copy pass the bundle validator. The original baseline remains unchanged. These results describe the repaired output, not fresh-generation success by the skill.

To open the example locally, run `node scripts/serve-example.mjs docs/fixes/atelier` and open the printed URL. GitHub's source viewer does not execute HTML.

## Sources and media boundary

The contributed HTML uses remote Google Fonts and remote Unsplash photography; network access is required for those assets. No photos or font binaries are bundled in this example. Captures retain the original media rights and are excluded from the project's MIT asset grant. The layouts and repair code are project code under MIT.

Original photo URLs retained in the source: [photo 1600585154340](https://images.unsplash.com/photo-1600585154340-be6161a56a0c), [photo 1600596542815](https://images.unsplash.com/photo-1600596542815-ffad4c1539a9), [photo 1600607687939](https://images.unsplash.com/photo-1600607687939-ce8a6c25118c). These stock photographs establish visual subject matter, not the fictional location, structural system, dates or authorship asserted by the demo records. No photographer identity or institutional endorsement is invented.

Dialog behavior was checked against [MDN's dialog focus guidance](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) and [showModal](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal), consulted through Context7 on 2026-10-17.
