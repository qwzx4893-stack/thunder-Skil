# Small correction to failed-save feedback

Replace the existing generic error text in its current location. Keep the current Arabic RTL layout, lavender palette, purple save action, Arial/system-ui, compact equal rows, native selects, and no animation.

| Known state | Proposed Arabic message |
| --- | --- |
| Browser is explicitly offline | تعذّر الحفظ لعدم الاتصال بالإنترنت. تحقق من اتصالك ثم حاول مرة أخرى. |
| Cause unknown | تعذّر حفظ الطلب. حاول مرة أخرى. |

Use the offline wording only when an existing reliable signal establishes offline status (for example, the browser reports `navigator.onLine === false`). A true online flag does not establish server connectivity; use the unknown wording when no cause is established. Do not diagnose a server failure or invent a support channel. Reuse the existing save control to retry; no new action or redesign is needed.

Keep entered values available for retry. Do not imply that the request was saved, queued, or stored locally. Reuse an existing accessible error/status announcement if present; otherwise give this message an appropriate live announcement so the failed save is perceivable without moving focus unexpectedly.

## Affected verification — proposed, not performed

- Trigger a failed save while explicitly offline: exact offline message appears in the existing error area, values and selected options remain available, and no success state appears.
- Trigger a failure without an established cause: exact unknown message appears; it makes no connectivity or server claim.
- Restore connectivity and retry using the existing save control: confirm the normal success path and removal of stale error text. Repeated failure must remain understandable without losing values.
- Check keyboard retry and assistive-technology announcement without unexpected focus movement. Verify the actual Arabic shaping and punctuation, wrapping at narrow width and 200% enlargement, and no clipping or overlap near the save control. Confirm existing colors, row density, select behavior, RTL order, and lack of animation are unchanged.

## Evidence and limits

Planning only. No app code, rendered page, network behavior, or server contract was supplied or inspected. No implementation or verification is claimed. The current error text and existing design conventions come from the brief. Relevant resources read: supplied `SKILL.md` and `references/product-ui.md`; `references/qa-gates.md` informed the proposed adjacent-state checks. Other references read for the parallel Night Ledger task do not justify a visual change here. No external browsing, packages, image generation, deployment, or submissions were used. Token/cost data was unavailable and is not estimated.
