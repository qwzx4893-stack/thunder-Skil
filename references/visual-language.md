# Visual craft: hierarchy, type, color, space

Load when resolving composition, typography, color, or media treatment. These are adaptable defaults; preserve a supplied system and actual language requirements.

## Typography

Choose reading quality, script coverage, tone, available weights, and embedding license. Set roles, a small scale, line heights, and measure; tune with real copy. Display/body ratios express hierarchy, not universal acceptance. Dense applications can use modest headings and system fonts. Arabic shaping and diacritics need different tracking/leading from Latin display type.

For a linear fluid size between widths W1/W2 (CSS px), with sizes S1/S2 in rem and root R px:
- slope m = (S2 - S1) * R / (W2 - W1).
- intercept b = S1 - m * W1 / R.
- preferred = b rem + (100 * m) vw; clamp between S1 and S2.
Example, 3rem at 375px to 8rem at 1440px, root 16px:
clamp(3rem, 1.23944rem + 7.51174vw, 8rem).
Check endpoints rather than copying coefficients. Rem/viewport mixtures are not proof of zoom accessibility; test enlargement and reflow.

Reading measure often starts around 45–75 Latin characters. Adjust for script and layout, not a hard quota. Display tracking can tighten in Latin where appropriate; avoid automatic negative tracking for Arabic. Balance short headings only when it improves wrapping.

Self-host permitted WOFF2 assets or use established project delivery. Load only needed weights/scripts. Preload genuinely critical fonts. Tune fallback metrics against the actual face; do not paste arbitrary size-adjust values and claim zero CLS.

## Color and semantics

Use project tokens or a small authored set of semantic roles. OKLCH is useful for authoring ramps; perceived lightness alone does not guarantee WCAG contrast. Test rendered pairs in every shipped theme and relevant state.

Gradient, black/white, multiple accent, or saturated palettes can be appropriate when they support identity and hierarchy. Control accent by communicative role and area; no universal one-accent or two-appearance rule. Derive dark themes using meaningful elevation and readable pairs, not a mechanical inversion.

Color is not the only carrier of state. Text and icons preserve meaning in grayscale and color-vision variation. Check text over actual image/gradient regions, including hover and focus. Automated flat-background contrast does not cover those cases.

Inspect actual input placeholder styles as well as entered text: browser defaults, pseudo-element color and opacity can fail on a tinted field even when the main text token passes. Labels remain necessary; a placeholder does not replace one.

For measurement definitions use qa-gates.md. Disabled/inactive controls and decorative text have exceptions; do not conflate a stronger craft target with a conformance claim.

## Composition and space

Establish focal order, alignment axes, related groups, and a spacing rhythm. The appropriate grid follows content: editorial columns, responsive tracks, full-bleed sequence, dense data layout, or a reading flow. Avoid arbitrary margins; optical adjustments are legitimate when visible alignment requires them.

Use scale, placement, weight, contrast, and space to signal importance. No single algorithm can measure 40% visual weight reliably for every interface. Equal cards can be correct for equal objects. Vary rhythm when the content argument changes, not to satisfy a novelty quota.

At narrow widths preserve the argument or task through reordering, simpler navigation, changed density, stacked comparisons, or scoped horizontal data regions. Do not merely shrink a desktop canvas.

## Material and imagery

Choose crop and ratio by subject. Use object-position deliberately; do not crop necessary product detail. Diagrams may need contain rather than cover. Establish field/subject/light relation for staged media; add grain, duotone, blur, or texture only when it earns its rendering cost.

Do not apply a color treatment that misrepresents a product. Preserve text legibility against worst-case images. Generated imagery should be evaluated for artifacts, relevance, consistency, and any implied factual claim.

## Check against pixels

Review at normal size and relevant enlargement. Look for clipped ascenders/diacritics, weak labels, awkward wraps, faux weights, lost hierarchy, incoherent spacing, and inaccessible overlays. Compare actual source when fidelity matters. Fix the organizing issue before adding ornament.
