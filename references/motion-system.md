# Purposeful motion

Load for L1/L2 animation. Start from cause, hierarchy, continuity, sequence, or spatial relation. Static can be the correct choice. User-triggered feedback and ambient brand motion have different costs.

## Choose the smallest mechanism

- CSS transitions/keyframes: small state changes and one-shot effects.
- Web Animations API or the project's animation library: interruptible imperative sequences.
- Motion: component state, layout/shared element and gesture behavior in an existing React/Vue project.
- GSAP timelines: coordinated, reversible multi-step sequences; ScrollTrigger when the idea actually needs pin/scrub.
- CSS scroll/view timelines: progressive enhancement with support checks and readable static content.
- Lenis: optional scroll feel, not a prerequisite for a premium page. Preserve anchors, keyboard, touch, browser find, and reduced motion.
- View Transitions: continuity between real states with immediate fallback.

Check current official docs/Context7 for versions and options. Do not add a second runtime for an effect the existing one handles.

## Timing and interruption

Use a small timing/easing vocabulary fitted to the product. Quick feedback often starts around 120–250ms, larger transitions around 250–500ms, narrative scenes longer only when meaningful. These are starting points, not conformance limits. Respect new input; avoid chained delays and effects that leave controls unresponsive.

Prefer transform/opacity for DOM motion. Other properties, masks, SVG paths, canvas uniforms, and legitimate layout animation require profiling; they are not categorically forbidden. Avoid transition: all and blanket will-change. Concurrent effects and continuous loops need a measured frame/energy budget, not an arbitrary count of DOM writes per second.

## Data changes and object continuity

When sorting, filtering, replacing or streaming data, preserve stable object identity (for example, a record ID); an array position is not identity after reordering. Use continuity only when it helps the user follow what moved or changed. Keep selection/focus attached to the intended object, not a recycled row. A removed selected object needs explicit feedback and a sensible focus destination.

Show measured progress only when the system actually knows it; otherwise use an honest pending/indeterminate state. Under reduced motion or a still interface, communicate changes through text, updated counts, status/delta labels or appropriate announcements. Do not replay a whole result set's entrance for one changed row. Verify a changed sort, insertion/removal and rapid replacement with actual data; animation must not mask stale values or claim a completed save.

## Scroll

Retain native scroll semantics. Pinning should advance meaning through its distance. A two-viewport scene is a useful initial ceiling; longer sequences require content benefit and an alternate sequential path. Re-compose or unpin on mobile. Do not hide essential text behind a timeline.

Refresh geometry after fonts/media; clean up listeners, triggers, split text, observers, tickers, and timelines on route/unmount. Honor pointer capabilities rather than treating touch as desktop hover.

## Lenis + GSAP: one clock

When GSAP drives Lenis, disable its automatic frame loop. This avoids competing clocks.

```js
const lenis = new Lenis({ autoRaf: false });
const update = time => lenis.raf(time * 1000);
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add(update);
gsap.ticker.lagSmoothing(0);
// Cleanup:
function dispose() {
  gsap.ticker.remove(update);
  lenis.destroy();
}
```

Alternatively use Lenis autoRaf without calling raf from another ticker. Read the current integration contract and implement motion preferences for the whole experience, not just the scroller.

## Reduced motion and fallback

Read preference before mounting heavy scenes and respond to changes when feasible. Provide the same information and task completion without parallax, large pans, camera drift, or essential animation. For CSS loops, animation: none or a deliberate static state is safer than tiny-duration infinite loops. A fade can still be motion; choose an appropriate alternative.

Content should be visible by default. Apply hidden entrance states only after the animation capability initializes successfully. Pause autonomous work offscreen and in background tabs. Autoplay moving content may require a user pause/stop control; reduced motion alone is not that control.

## Verify actual behavior

Exercise interruption, reverse/back, repeated entry, keyboard and touch, route changes, and reduced preference. Inspect frames where movement carries meaning, not only the settled screenshot. Profile jank in a representative device context; no animation-count heuristic proves frame rate. Canvas/JS motion needs separate observation from browser CSS animation inventory.

Source: https://github.com/darkroomengineering/lenis#gsap-scrolltrigger
