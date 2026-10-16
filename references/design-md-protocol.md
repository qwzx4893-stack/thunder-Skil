# DESIGN.md: a compact traceable record

Load when capturing, adapting, or authoring a substantial design system. Reuse the existing record; a local edit does not need a competing source of truth. DESIGN.md is agent-readable documentation, not automatically a validated machine schema.

## Modes and sections

Extract observed values; adapt selected principles for this product; or author from subject evidence. Label the mode and provenance.

Useful sections: product/task and intent; token roles and pairs; typography and language coverage; spacing/radius/elevation; composition and responsive changes; component variants/states; motion and fallback; imagery/licenses; acceptance and important tradeoffs. Include only what the build needs.

## Semantics and consistency

Use project token conventions. New systems often benefit from primitives -> semantic roles -> optional component aliases. Roles can include canvas, surface, text, muted-text, border, action, destructive, success, warning, focus. Color is not the only state cue.

Keep theme values centralized and component semantics consistent. Intentional scoped themes/page exceptions are legitimate; document inheritance. Do not force one palette onto incompatible surfaces or ban every literal. Verify default, focus, hover, selected, and disabled appearance on real backgrounds. Distinguish WCAG requirements from craft preferences.

## Extraction

Inspect pixels and available source. Sample away from anti-aliasing, separate media color from UI color, measure recurring relationships, record font confidence. A screenshot alone does not establish exact font family, tokens, or hidden states. Mark guesses and test them.

Separate observed, interpreted, and adapted decisions: "retained compact top navigation; changed split hero to chronological index for archival records." Reference content never supplies the user's product facts.

## Continuity and verification

Create tokens once, use coherent variants, reread the record on substantial resume, and update decisions that change during implementation. For multi-page products retain shared foundations and page exceptions.

Compare final render with brief and record at relevant widths/states. Check contrast, loading fonts, task hierarchy, component meaning, and re-composition. Resolve drift through evidence; the original plan is not automatically correct.
