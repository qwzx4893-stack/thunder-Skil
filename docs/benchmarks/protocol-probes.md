# Planning recommendations using Immersive Web Studio

These are planning-only recommendations. I read the local skill and the runtime resources listed below. I did not inspect an application, load an asset, call design/image tools, browse, implement, install, run checks, or verify rendered behavior. Applicable acceptance checks remain UNVERIFIED. This document is a self-review of the supplied scenarios.

## 1. Keep the selected task stable during live sorting

The smallest coherent correction is to use the service's stable record ID as the row key and as the identity stored for selection, details lookup, and focus tracking. A row's current array position may determine display order, but must not determine which task is selected. Resolve the details panel from the selected ID against current data so a new score cannot silently substitute a different task or leave stale values. Keep the existing live sort and static brand unless another concrete problem requires a change.

Preserve the focused control on the same record when that record moves. Stable keys support this, but inspect the actual table/control behavior; avoid rebuilding or recycling the focused element under a new record. Do not move focus on each score update. If a selected task is removed, explain that removal, clear or replace the details state deliberately, and use an appropriate surviving focus destination when the focused element itself disappears. Filtering a selected task out is distinct from deleting it; preserve its identity and explain its visibility using the existing product convention.

Show a changed score or concise status/delta text so the update is understandable without animation. Use restrained announcements for meaningful outcomes without reading every streaming update. If an operation is pending and progress is unknown, use an honest indeterminate indicator and status such as “Updating scores”; do not manufacture a percentage. Preserve the user's reduced-motion choice and the static interface. No animation library or entrance effects are needed.

Proposed checks: select task A, open its details, focus its row action, and trigger updates that move A above and below other rows. Verify selection, details content, accessible identity, and focus still refer to A; then exercise insertion before A, rapid successive replacements, filtering, removal, and update failure/recovery. Verify keyboard continuation and panel close/focus return, plus readable changed-value feedback with reduced motion enabled. Inspect adjacent states at the existing narrow and wide layouts. These checks are proposed, not executed.

Resources: product-ui.md, motion-system.md, qa-gates.md. The motion resource supplies identity/stillness guidance; it does not justify adding motion.

## 2. Accept the exported product scene only after target-renderer evidence

The attractive producer preview and desktop endpoints are insufficient acceptance evidence. First obtain the actual export and its handoff contract: format/version, units and scale, axis/orientation, origin/pivot, material channels and color-space expectations, baked versus runtime animation, required decoder/extensions, legitimate embedding rights, and target budgets. Record undocumented fields as unresolved. Do not guess a scale or decoder and call the result faithful.

Before acceptance, inspect that export in the actual target renderer and configuration. Verify real bounds, transforms, scale, pivot, materials, texture decoding, lighting/color treatment, and intended animation. Separate compressed download size from decode time and GPU/texture memory. Agree appropriate device budgets and profile in a named representative environment; no file-size heuristic establishes performance.

Correct the camera route from the actual bounds and projected fit, considering field of view, aspect ratio, near/far clipping and DOM copy/control safe zones. Endpoints alone cannot prove the path: inspect meaningful intermediate samples and interaction states to find geometry crossings, clipping, or occlusion. Re-route camera/target checkpoints or simplify the movement so the subject remains legible throughout. Recompute or compose a separate narrow-view fit; reducing desktop dimensions uniformly is not a framing correction. Include resize/orientation transitions.

Provide a dimensioned poster and semantic DOM product content/controls before initialization. Reveal the canvas only after a valid rendered frame. Slow loading gets truthful pending feedback; unsupported WebGL, load/decode failure and context loss retain a usable poster/content/action path. Recovery may rebuild safely or remain on the poster, but must not leave a blank region. Reduced motion should use a composed static frame with no camera drift; pause autonomous rendering offscreen/in hidden tabs, and use demand rendering where idle. Provide an explicit pause control if autonomous moving content requires one. Ensure essential product information and tasks are available without pointer-only exploration; disclose any feature whose spatial information lacks an equivalent.

Proposed evidence: initial poster, target-renderer materials/bounds, intermediate path views, meaningful interaction frame, narrow framing, motion-off still, and intentionally triggered load/decode/unsupported/context-loss fallback. Include keyboard/touch-equivalent task checks, lifecycle cleanup and measured device/budget context. I have not loaded this asset or established any of these outcomes.

Resources: webgl-3d.md, motion-system.md, qa-gates.md.

## 3. Correct the fidelity and integration claim

The supported claim is that the tools returned artifacts at saved paths. Exact source fidelity and completed integration remain unverified. An unresolved semantic alias does not establish the actual dark-mode color, and an image generated from a textual account of a reference is an interpretation of that account. It does not establish that the tool received or reproduced the source image.

Bound the handoff to the affected token and image placement. Record the connector's source file/node, requested theme/mode, semantic alias chain and unresolved terminal value. Resolve the alias in the actual dark mode through the appropriate source/tool capability before treating it as an observed value; identify any provisional substitute as an adaptation. Check the resulting foreground/background pairs in the actual component states rather than assuming an alias name guarantees contrast.

Record exactly which image input was supplied: text only, plus the returned artifact and intended placement. To assess source fidelity, obtain the authorized actual reference image and compare the returned image at use size for composition, subject details, crop and text; if fidelity is required and unsupported, revise through the appropriate image workflow or report the limitation. Do not describe the textual description as an attached image.

For integration, identify the existing import/token mapping or asset swap point, target component, and acceptance states. A future bounded check would resolve the affected alias, inspect the actual returned image, integrate only those outputs, then inspect the target render in light/dark and relevant narrow/wide crops, including missing-asset behavior and the affected task. Keep observations, interpretations, substitutions and unresolved gaps distinct. Until that evidence exists, report “artifacts returned; dark-mode resolution, fidelity and target integration unverified.” No tool execution is part of this response.

Resources: research-method.md, design-md-protocol.md, qa-gates.md. generators.md was consulted for generated-concept limits; prompt-anatomy.md for checkable copy/brief boundaries. Neither calls for new direction here.

## 4. Correct one empty-state sentence in the supplied archive

Replace only the empty-state line in the existing component, using the archive's vocabulary and an accurate explanation of the actual state. For a genuinely empty archive, “No archive items yet.” is a suitable minimal correction; a filtered no-results state must instead say that no items match the filters. Use the known state rather than conflating absence and no matches.

Preserve the centered static composition, black/white palette, system fonts, equal cards and current interaction. No new visual direction, research, dependency or design/process file is warranted. Proposed verification is to reach that empty state through its real trigger, confirm the sentence is accurate and readable without clipping at the existing narrow/wide widths and enlargement, and check that a populated adjacent state and current actions remain intact. No verification has been executed.

Resources: SKILL.md focused-correction/supplied-reference routes, product-ui.md, design-md-protocol.md, prompt-anatomy.md, and qa-gates.md. The design-record reference explicitly supports reusing the existing record rather than creating a new one for this edit.

## Resource and protocol limits

Only the relevant runtime references named above were read in full; no precedent library, observed case collection, evaluation expected answers or other agent outputs were read. A targeted text search identified research-method.md as the tool-handoff reference. No research campaign or release plan was created.

The separate final-selection.json is a description-selection classification, not actual host activation. Its initial read had a protocol deviation: the twelve-line command exposed the skill heading/introduction and beginning of routing text alongside the name/description. The selections were based on the metadata, but the read cannot honestly be called metadata-only. That limitation is also recorded in the JSON.
