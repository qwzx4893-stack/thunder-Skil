# Small correction to failed-save feedback

Planning only. No implementation or rendered verification was performed.

Keep the existing Arabic RTL layout, lavender palette, purple actions, Arial/system-ui typography, equal compact rows, native selects and lack of animation. Change only the failed-save message and its immediate recovery affordance. Preserve entered values and selection after failure.

- When the app has an offline signal: **«لم يُحفظ الطلب. يبدو أنك غير متصل بالإنترنت. تحقق من الاتصال ثم حاول مجددًا.»**
- For all other failures: **«لم يُحفظ الطلب. حاول مجددًا.»**
- Reuse the existing save action to retry. If the existing error component already offers a retry control, label it **«إعادة المحاولة»**. Do not add a new panel or duplicate action for this copy change.

Use the offline wording only when supported by the app's available connection signal; such a signal is a hint and does not diagnose the server. Otherwise use the unknown-failure wording. Do not invent an error code, timeout, maintenance state, ticket number or claim that the request was saved. No automatic repeated submission.

Affected verification (planned acceptance checks):

1. Trigger a failed save with the app offline; verify the offline wording and retained form values. Restore connectivity and retry through the existing save control; confirm the actual result with the application's existing success behavior.
2. Trigger an unknown failure while the connection signal is online; verify the generic wording without unsupported cause, retained values and a usable retry path.
3. Check the error region's existing accessible announcement mechanism. The updated message must be announced once after failure without moving focus away from the task; retry remains keyboard reachable and avoids duplicate requests using the existing saving state.
4. Inspect each message in the existing narrow and wide RTL layouts, and at 200% text enlargement: readable Arabic shaping, natural wrapping, no clipped text or obscured action, unchanged compact row structure. Confirm native selects, visual styles, focus order and stillness remain intact.

Scope dependencies: the existing error component, failure handling and connection signal must be inspected at implementation time. No source app was supplied, so these are proposed checks, not passes. The supplied skill's planning-only path and product-ui guidance informed the plan. No approval question is necessary.

Resources read: supplied `SKILL.md`; `references/product-ui.md`, `references/qa-gates.md`, `references/prompt-anatomy.md`, `references/anti-slop.md` within the supplied skill bundle. No external browsing, install, image generation, deployment or submission occurred. Token and cost measurements are unavailable.
