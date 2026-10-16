# One focused expressive test — 0.6.0

**A World Away / Apollo 11** is the final scoped test requested by the user. It uses eight real, coherent NASA photographs, an actual archival montage/captions, and three OFL font families. Open [the source](apollo/index.html), inspect [the media ledger](apollo/ASSETS.md), or run locally:

```sh
node scripts/serve-example.mjs docs/expressive/apollo
```

Open the printed local URL. HTTP is recommended for native video caption loading. No build, external runtime library, API key or network-loaded asset is required. GitHub's HTML source viewer does not execute the site.

## What was actually tested

The main agent built and personally reviewed the rendered opening, chapter sequence, motion graphic, film, contact archive, closing frame, mobile and reduced-motion states. Browser tooling captured/replayed concrete paths; it supplied no aesthetic score. Earlier single-generated-image trial setups were rejected by the user and remain private diagnostic work. They are not presented as representative award-level comparisons.

The focused case has one direction: the lunar horizon establishes scale; a native-scroll chapter sequence develops departure/crossing/arrival; an original schematic path connects the journey; the astronaut photograph restores human scale; archival film supplies real moving evidence; the contact sheet makes source records inspectable; the bootprint resolves the narrative. Media were selected for these roles, not spread interchangeably across generic cards. Condensed display type, readable sans, accession-style mono metadata and a restrained vermilion signal carry the identity across sections.

## Personal critique → correction

| Observed problem | Correction in the skill / artifact | Recheck |
|---|---|---|
| A generated single-image setup could not represent the requested production ambition | New routed expressive-direction reference separates competent defaults from explicit creative ambition; adds media-role/coverage planning and warns against interpreting under-supplied tests as a ceiling | Replaced that setup with one coherent real internet asset set; inspected all eight images together |
| Opening copy crossed the defining Earth image on desktop | Existing subject/framing guidance applied; expressive route now explicitly checks the real text zone at each aspect ratio | Moved copy into clear space; reopened desktop/mobile |
| New chapter copy could appear while the preceding image was still fading/loading | motion-system.md now requires asset readiness, related-state commitment and cancellation of stale transitions | Decode before committing, version pending requests, retain the current coherent frame; replay rapid/reversed chapter selections |
| Core phone text was too small | Existing craft/reflow guidance applied proportionally | Increased narrative reading text and record titles, retained compact metadata; reopened 390/320 |
| Native range values were being treated as visible text by the separate verifier | Fixed text sampling and added real-browser regressions for non-text inputs; visible submit text still fails bad contrast | Full verifier suite, including those counterexamples |

The last item repairs verification tooling; it did not decide visual quality. No extra aesthetic rule was added where existing guidance already covered the local correction.

## Evidence and honest limits

[Desktop opening](apollo/evidence/desktop.png) · [Phone](apollo/evidence/mobile.png) · [Chapter](apollo/evidence/desktop-chapter-1.png) · [Motion graphic](apollo/evidence/desktop-motion-graphic.png) · [Photograph viewer](apollo/evidence/mobile-viewer.png) · [Archival film](apollo/evidence/mobile-film.png) · [Replay observations](apollo/evidence/observations.json)

Replay covers 1440/1024/390/320 and a reduced-motion phone view, required image loading, document reflow, rapid chapter selection with matching image/text, surface filtering, viewer keyboard navigation/Escape, actual film time advancing, caption loading, and pausing on close. These results are separate from the main agent's personal visual judgment. Full WCAG conformance, physical devices, all browsers, field performance and an independent human panel were not established.

**Assessment:** a materially richer, more coherently authored development example than the earlier simple showcases. It remains a main-agent maker review of one case, not a fresh controlled efficacy comparison, an Awwwards award prediction, or proof of universal superiority. The user is the final judge of whether this direction reaches their intended creative level. Initial failures and subsequent corrections are reported rather than hidden behind a passing test count.
