# WebGL and spatial work

Load for L2–L4. Use canvas when spatial interaction or a material effect serves the task; DOM/CSS or a poster may carry the idea more cheaply. Check current engine docs and versions.

## Scope and engine

A single shader/media plane can use a small WebGL abstraction. Real spatial scenes may justify three.js; React projects can use React Three Fiber with compatible React versions. Do not introduce a large scene graph just for a static gradient or opacity reveal.

Keep content, controls, and equivalent data in semantic DOM. Canvas is visual enhancement unless a fully accessible interaction model is explicitly provided. Pointer motion is never the only way to obtain essential information.

## Assets and first paint

Use legitimate product/scene assets and embedding rights. Declare missing models/HDRIs/posters under the main asset rule. Compress geometry and textures according to actual decoder support. Measure download size, decoding, GPU memory, and visual quality; do not assume file compression reduces texture memory equally.

Poster first with intrinsic dimensions; initialize and fade in canvas after a rendered frame. If load, decoding, support, or context fails, keep a usable poster/DOM composition. Test failure, not just the happy path. A tiny canvas that exists is not proof its pixels are correct.

## Production handoff

When another tool/person produces a scene asset, specify units and scale, axes/orientation, origin/pivot, material channels, baked versus runtime animation, format/decoder and target budget. Check the actual exported file in the target renderer: a saved-path message or attractive producer preview does not establish correct transforms, materials or playback. Follow the installed tool's skill/schema and current engine docs; do not impose a universal exporter recipe.

## Framing and camera paths

For spatial compositions, derive camera/target checkpoints from actual object bounds and projected fit using the relevant field of view, aspect ratio and safe content zones. Resize can change fit even with unchanged world coordinates. Inspect intermediate path samples as well as endpoints: interpolation can cross geometry, clip the subject or sweep it behind DOM copy between two good keyframes. Check a meaningful interaction state, narrow viewport and motion-off composition. A generic distance proportional to the longest bounding-box edge is only a starting heuristic, not a framing proof.

## Responsive performance

Set an explicit DPR cap, initially around 1–1.5 on constrained devices and up to 2 on stronger devices, then profile. Use device capability and measured behavior; touch/coarse pointer alone does not prove a weak GPU.

Set per-scene budgets for JS, asset transfer, draw calls, triangles, texture memory, shader cost, and frame time. Start conservative and measure on a representative device. Common starting points, not universal limits: hero GLB around 2MB; mobile textures around 1k; limited dynamic shadows and postprocessing. Explain any tradeoff against task and fallback. Core Web Vitals targets and measurement context live in qa-gates.md.

Use demand rendering when idle, instancing for repeated geometry, frustum culling, suitable LOD, and adaptive quality without thrashing. Pause offscreen/hidden work. Real-time interaction can legitimately run at display frame rate; a DOM-write-rate threshold is not a GPU budget.

## Lighting and color

Match color spaces per texture role and engine version. Use believable scale/contact, appropriate material maps, and environment/key lighting. Decide tone mapping from subject/product truth. Do not automatically force ACES or a metallic placeholder onto every scene.

## Lifecycle and fallback

Test WebGL support, decode failure, slow initialization, reduced motion, context loss, and resize. Dispose owned textures, geometry, materials, render targets, listeners, controls, and renderer. Use the engine/framework's ownership rules to avoid double disposal. Context restoration can rebuild or remain on poster; never leave a blank rectangle.

Reduced motion normally serves a composed static frame, without camera drift. Mobile may simplify geometry, textures, post and interaction while retaining the narrative.

## Evidence

Capture initial poster, meaningful interaction frame, narrow layout, reduced-motion state, and unsupported/failure fallback. Exercise keyboard/touch-equivalent tasks. Inspect pixels and scene behavior, not merely canvas dimensions. Report measured device/environment and remaining limits. Automated DOM smoke tests do not certify canvas rendering or accessible data equivalence.
