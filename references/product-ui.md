# Product interfaces and established systems

Load for dashboards, tools, forms, settings, editors, commerce flows, and existing apps. Optimize task completion and comprehension; no mandatory hero or decorative signature.

## Model the work

Identify actor, object, state, decision, action, result, recovery. Follow a primary path from entry to observable outcome. Identify needed context before acting and feedback afterward. Dense interfaces need hierarchy and grouping, not compulsory whitespace or oversized headings.

Preserve navigation, terminology, routing, data contracts, and component APIs unless change is in scope. Prefer existing accessible primitives. Native selects and familiar controls are legitimate; custom replacements must preserve semantics.

## Information and actions

- Separate browse, select, inspect, edit when their combination becomes confusing. Choose tables/lists/boards/details/forms for the work.
- Put filters and bulk actions near affected content. Distinguish selected and total counts. Preserve sort/filter context after edits.
- Evaluate action frequency and scan effort with representative content. A small frequently switched status set may benefit from visible choices; a long/rarely changed set may suit a select. Choose by use and space, not a global preference for custom or native controls. Make comparable columns/labels unambiguous at each width.
- Use consistent affirmative/secondary/destructive roles and recovery proportional to product risk.
- Communicate state through text/icon/context as well as hue. Separate absent, zero, unknown, stale, loading, failed.
- Two-dimensional tables may scroll in a named region; essential identification and actions stay discoverable on mobile.

## Behavior and states

Default/focus/pressed belong to controls, hover to hover-capable input, selected to selection, disabled to unavailable actions, loading to async work, error to failure, empty to absence. Do not invent eight decorative states for everything.

Trigger real transitions. Errors preserve valid input and offer recovery. Async actions prevent duplicates and explain progress. After an action, show or announce the outcome where it can be understood; closing a panel or removing a filtered row alone may be ambiguous. Verify promised states through actual entries, not unreachable code. For persistence verify save, reload/read-back, and failure. Label prototype data and persistence limitations.

During sorting, filtering or live updates, preserve records and selected/focused objects by stable identity, not row index. Explain removal or changed values through appropriate text/status/deltas even without animation. Use a truthful indeterminate state when actual progress is unknown. For animated continuity read references/motion-system.md only when needed.

Check keyboard order, focus visibility, dialog focus return, escape when appropriate, meaningful announcements, and touch alternatives. A visible ring alone does not prove keyboard task completion.

## Responsive and language

Choose priority, order, density, navigation, columns, affordances at smaller widths. Test long labels, translations, digits, empty results, errors. Full surfaces need a 320 CSS px/equivalent 400% reflow check plus 200% enlargement review. Document exceptions for genuine two-dimensional content.

Before hiding a desktop summary or side panel, identify any unique reason, deadline or next-action context it supplies. Move necessary context beside the affected item/control on narrow screens; do not preserve the action while deleting why it matters. After a state change, reconcile related counts, priority recommendations and details from the same current records so an old callout cannot contradict the updated list.

Arabic/RTL:
- Set language/direction. Use logical CSS properties and intentional reading/focus order.
- Check actual Arabic font coverage/shaping; avoid Latin tracking and leading that clips diacritics.
- Isolate mixed-script IDs, code, phone, email, units with bdi or scoped direction where appropriate.
- Use intended locale for dates/numbers/currency. Do not mechanically reverse charts, chronology, playback, every icon.
- Inspect real mixed-script content at narrow widths; translation alone is not RTL verification.

Can a first-time user tell what needs attention, what action is possible, and whether it worked? Verify this in the running task.
