# Layout and interaction integrity

Load for responsive grid changes, clipping, modal work or motion implementation. These checks apply to functional correctness, not a prescribed aesthetic.

## Narrow layout and clipping

When collapsing a multi-column grid, inspect child spans and explicit placements. Reset incompatible values to auto or 1 / -1; retained spans can create implicit tracks. Use minmax(0, 1fr) and min-width: 0 where intrinsic minimums should yield, not as a blanket replacement for every layout. Allow meaningful labels and badges to wrap. Recompose actions and content rather than simply shrinking them.

Document scrollWidth alone can miss content clipped by ancestors. Inspect visible text fragments and actionable controls against the viewport and relevant clipping ancestors. Exclude deliberate decorative bleed, closed off-canvas panels, screen-reader-only content and usable intentional scroll regions. A raw count of all rectangles beyond the viewport is not a defect count. Test the clipped-content counterexample even when document overflow is zero.

## Modal focus and state

Prefer a native dialog opened with showModal() or a maintained accessible primitive. Merely adding role=dialog and aria-modal does not implement modal behavior. A custom implementation must reproduce background inertness and focus management.

On open, move focus inside to a suitable control or reading start. Keep Tab and Shift+Tab within visible enabled controls, including after validation or confirmation replaces the form. Escape and the close control dismiss the top modal. Restore focus to its actual invoker, or a sensible surviving target. Closed panels must not remain in the tab order. Do not hide a still-focused descendant with aria-hidden.

Exercise the real sequence with keyboard input: open, inspect initial focus, traverse both boundaries, trigger a changed state, dismiss and check return focus. Repeat for alternate launchers and the narrow view. Assert focus containment and task outcome; an active CSS class or screenshot is insufficient.

## Motion terminology and lifecycle

Cubic-bezier is an easing function. Repeated current += (target-current)*factor is a tracking filter, not a mass/stiffness/damping spring. Choose actual spring solvers only where useful; timing curves and static states are valid. If a tracking filter should behave consistently across refresh rates, account for elapsed time.

Handle reverse/rapid input and pending media; cancel stale transitions. Respect reduced motion in both CSS and JavaScript. Preserve the content and task without decorative motion, disable custom cursors on touch, and avoid gratuitous sound. See motion-system.md for lifecycle and synchronized media details.

Sources: MDN dialog role and HTMLDialogElement.showModal, consulted 2026-10-17 via Context7; implementation guidance, not a full accessibility certification.
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role
https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal
