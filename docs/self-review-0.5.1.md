# Four designs, four short repair cycles

16 October 2026 · Thunder Skil 0.5.1 · **main-agent maker self-review**

The user requested a short, valuable round with direct critique by the main agent, rather than a subagent critic or an automatic aesthetic grader. Four new static HTML/CSS/JS concepts were built using the skill's relevant workflow and references. The main agent personally inspected rendered wide/narrow screenshots, identified concrete problems, changed the reusable guidance immediately after each critique, repaired the example and reopened the affected views/states. The examples were made sequentially; later examples can benefit from earlier corrections. This is development feedback, not an independent or blinded efficacy experiment.

Two cases start without third-party visual assets. Two start with internet-sourced images chosen for their intended identity and checked against their source/license. Original copy, fictional/demo records and local behavior are labeled in each interface. No other frontend design skill or subagent supplied the current round's critique. Browser automation captured/replayed specified paths and recorded mechanical observations; it did not judge taste.

## 1. Midad / مِداد — from scratch

**Brief:** Create an Arabic RTL editorial workspace where an editor can identify the article needing a decision, inspect it, and move it into review. Use calm teal/paper typography and plausible, explicitly fictional Arabic article records. No external imagery or invented commercial proof.

**Initial observation:** The desktop priority panel explained why one article mattered and its deadline; on mobile it disappeared while the action remained. Reading the implementation also exposed that the recommendation would stay stale after the article changed state. Secondary Arabic metadata needed slightly more size.

**Reusable repair:** [product-ui.md](../references/product-ui.md) now requires relocating unique reason/deadline context before hiding a panel and reconciling recommendations, counts and details from the same current records.

**Artifact repair and recheck:** Mobile received a compact priority/action strip, shared state derives the recommendation, and metadata was enlarged. Replayed open → move to review; the mobile priority changes to “لا مقالات تنتظر قرارك الآن.” and the affected record/count update. A later local whitespace correction separated adjacent Arabic statistic labels; it did not become another universal rule.

[Initial mobile](showcase/midad/before-mobile.png) · [Repaired mobile](showcase/midad/mobile.png) · [Changed state](showcase/midad/changed.png) · [Runnable source](examples/midad/index.html)

## 2. After Hours — from scratch

**Brief:** Make a bold typographic programme for a fictional two-night film weekend. Build original graphic geometry, two date filters, screening details and a local shortlist. Do not require film stills, tickets or account infrastructure.

**Initial observation:** A large decorative play triangle suggested playback. An outlined “My plan” count looked like a control but was inert. The poster was attractive, but these treatments promised behavior it did not provide.

**Reusable repair:** [visual-language.md](../references/visual-language.md) now checks action affordances against behavior: implement the implied action or make the element clearly illustrative/status. This does not prohibit real play controls or outlined buttons.

**Artifact repair and recheck:** Replaced the triangle with a film-reel illustration and implemented the plan button/dialog, including an empty state. Replayed screening → add → close → plan, then changed the date. The actual plan contains “Between last trains · 21 Nov · 18:30”; the second day shows “The quiet block.” Reload clears this explicitly disclosed local-only state.

[Initial desktop](showcase/after-hours/before-desktop.png) · [Repaired desktop](showcase/after-hours/desktop.png) · [Local plan](showcase/after-hours/plan.png) · [Runnable source](examples/after-hours/index.html)

## 3. Field Notes — with sourced artwork

**Brief:** Build a quiet art-viewing concept around Van Gogh's *Wheat Field with Cypresses* (1889), sourced from The Met's public-domain collection. Derive olive/paper colour and serif scale from the painting. Let visitors distinguish the complete work from a labeled brushwork crop and open a focused viewer. Preserve attribution and avoid museum/exhibition affiliation claims.

**Initial observation:** Mobile placed roughly 575 CSS pixels of introduction before the artwork. That sequence delayed the actual viewing task. A lower desktop section also lost the opening's inset. The ordinary view loaded the 8,291,194-byte original rather than a display-sized derivative.

**Reusable repair:** [composition-study.md](../references/composition-study.md) now checks how far the core subject/task falls below a narrow opening and requires coherent reading/focus order when recomposing. [visual-language.md](../references/visual-language.md) separates native source quality from delivery dimensions/weight, deliberate original access and truthful crop labeling. These are conditional decisions, not an image-first mandate for every page.

**Artifact repair and recheck:** The mobile view shows the complete painting early, DOM order follows that viewing sequence, section insets align, and mode labels are larger. Ordinary views use a 1600×1274 JPEG derivative (747,809 bytes); the viewer offers the unchanged 4000×3184 source explicitly. No network-performance result is inferred from local capture. A re-opened viewer exposed excess image-box height; explicit intrinsic sizing removed it, and keyboard containment includes the original-image link. Full/detail toggle and viewer open/Escape were replayed, then the final mobile/viewer images were inspected.

[Initial mobile](showcase/field-notes/before-mobile.png) · [Repaired mobile](showcase/field-notes/mobile.png) · [Viewer](showcase/field-notes/viewer.png) · [Runnable source](examples/field-notes/index.html)

## 4. Still / Form — with sourced photography

**Brief:** Design an architectural image-study portfolio around Matt Boitor's portrait photograph of a concrete/glass atrium. Use warm mineral colours, open grotesk typography and a spatial grid derived from the railing's diagonal. Preserve the photographic frame, offer a labeled railing detail and a working study dialog. Present it as commentary on a stock photo, never as the fictional studio's built project.

**Initial observation:** The decorative diagonal in the desktop annotation column escaped its allocated drawing box and crossed “Follow the diagonal.” Document overflow was zero. A width check could not detect this local collision.

**Reusable repair:** [qa-gates.md](../references/qa-gates.md) now distinguishes local collisions from document overflow and calls for rechecking transformed pseudo-elements, ornaments and positioned labels without clipping necessary content.

**Artifact repair and recheck:** The decorative drawing is contained within its reserved box; adjacent text is clear in the reopened desktop view. Applied the preceding delivery guidance with a 1400×2104 derivative (707,762 bytes), retaining source attribution and the original file. Replayed full frame → railing detail → full frame → study dialog → Escape. The detail label, viewer open/closed state and final study screenshot were checked.

[Initial desktop](showcase/still-form/before-desktop.png) · [Repaired desktop](showcase/still-form/desktop.png) · [Study](showcase/still-form/study.png) · [Runnable source](examples/still-form/index.html)

## Evidence and limits

The four cases have full-page 1440×1000 and 375×860 captures, plus relevant state images. Main-agent visual inspection, scoped interaction replay and mechanical checks are separate evidence. The final capture JSONs record zero document overflow at those widths, loaded required images and no uncaught page errors: [Midad](showcase/midad/observations.json), [After Hours](showcase/after-hours/observations.json), [Field Notes](showcase/field-notes/observations.json), [Still / Form](showcase/still-form/observations.json).

Release verification: 15/15 verifier tests passed, including the real-browser fixture suite with no skips; bundle routing/size validation passed. The separate technical smoke covered 320/375/768/1440, normal/reduced-motion settings. Its initial Still / Form report flagged the small brand slash at 3.658:1; although logotypes have a WCAG exception, the accent was darkened as a local craft improvement and the affected check rerun. Existing contrast guidance already covered colour roles, so this did not justify another broad rule. These mechanical results did not supply the aesthetic critique above.

The maker both authored and reviewed these cases. This round does not establish independent human preference, broad skill superiority, WCAG conformance, assistive-technology coverage, field performance, production backend behavior or every browser/state. Prior [matched development comparisons](benchmarks/README.md) retain their own methodology and outcomes. No older result was relabeled as part of this self-review.

To inspect an example, clone/download the repository and open `docs/examples/<case>/index.html` locally. These examples need no server, dependencies or image network access. GitHub's source viewer does not execute the HTML. To reproduce captures, use the documented [capture helper](../scripts/README.md) with an installed Chromium/Playwright environment. See the [asset ledger](examples/ASSETS.md) before reusing third-party images.
