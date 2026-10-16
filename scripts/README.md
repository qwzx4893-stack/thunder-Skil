# Portable verification helpers

Node 22+ is the maintained development target. The validator and unit tests need no packages:

```text
node <skill-dir>/scripts/validate-skill.mjs <skill-dir>
npm test --prefix <skill-dir>
```

`npm run test:unit` explicitly runs only policy/bundle tests. `npm test` additionally includes browser fixtures, which are explicitly skipped when BROWSER_EXECUTABLE is unset. The GitHub workflow installs its own isolated Chromium and includes the browser suite.

`npm run package` validates the skill and builds a deterministic ZIP-format .skill plus SHA-256 checksum. The Node-only packager uses a fixed allowlist, rejects symbolic links/hidden paths and credential-like material, normalizes known text files to LF and fixes ZIP timestamps; it does not package _build/, .git/ or arbitrary working-directory files. Public docs/assets are included; host-specific optional metadata remains optional. Independent ZIP readers are used in release/CI verification.

The validator checks this bundle's plain name/description YAML subset, resource routing, and its chosen <8192-codepoint loader target. This target preserves compatibility with the original DSH setup; it is not a universal Agent Skills limit. Other YAML fields require extending the validator or a real YAML parser. Scripts and development evidence are not subject to the reference-loader length target.

Browser smoke:

```text
node <skill-dir>/scripts/audit.mjs http://localhost:5173 --out <evidence-dir>
node <skill-dir>/scripts/audit.mjs <page.html> --out <evidence-dir> --browser <chromium-executable>
```

Playwright or playwright-core must be available from the consuming project's working directory or the skill directory. --playwright accepts an explicit installed module path. --browser accepts a Chromium executable; BROWSER_EXECUTABLE is an alternative. No packages or browsers are installed automatically. Use a local/test target and follow the project's authorization rules. Opening a URL can execute that page's normal code.

Output is report.json plus normal/reduced-motion screenshots at 320/375/768/1440. The scope is automated smoke only: document overflow, required image load, uncaught page errors, sampled visible DOM text contrast over resolvable flat backgrounds, missing control-name signals, and running CSS/Web Animations under reduced motion. Console errors and request failures are reported as unverified resource issues because their essentiality requires context. There is no universal DOM-write-rate or animation-count failure threshold.

Contrast intentionally marks image/gradient backgrounds, text shadows, non-normal blends, ancestor opacity/filters, unresolved colors, and pseudo-content as unverified. It cannot see all themes, hover/focus states, shadow roots, cross-origin frames or canvas pixels. Transparent foreground text is composited onto the resolved background. Any known unmeasured sample makes that contrast check UNVERIFIED, rather than allowing a percentage of skips to disappear.

The helper never clicks arbitrary controls. Task completion, dialog behavior, real keyboard order, save/reload/failure, non-text contrast, meaningful/reduced JS/canvas motion, zoom, and taste require explicit scoped testing. Follow-ups are emitted as UNVERIFIED and are excluded from the smoke-scope aggregate, not silently passed.

Exit 0 = automated smoke PASS only; 1 = observed automatic FAIL; 2 = incomplete automated coverage or setup unavailable. Inspect report.scope and manualChecks before making a full acceptance claim. File-URL behavior can differ from a served app. Use a dev server when routes or module loading require it.

The old _build/tests harness and historical results remain development evidence; they are not runtime dependencies or current-release acceptance instruments.

## Showcase capture and scoped replay

The single 0.6.0 focused case uses `node scripts/capture-apollo.mjs <output-dir>`. It serves only the example locally, captures use-size states and replays chapter races, filtering, keyboard viewing, real film/caption loading and reduced motion. It does not grade aesthetics. `node scripts/serve-example.mjs docs/expressive/apollo` serves the runnable experience on loopback for manual inspection; HTTP enables native caption loading. External media/font rights remain in the example's ASSETS.md. Native range/checkbox values are not text-contrast glyph samples; meaningful non-text UI still needs explicit review.

`node scripts/capture-showcase.mjs docs/examples/<case>/index.html <output-dir> [chromium-executable]` records full-page desktop (1440×1000) and mobile (375×860) views and a small, case-specific interaction replay. It uses the same installed Playwright resolver. The JSON records image loading, document overflow, uncaught page errors and observed state text. It has no aesthetic grader or score. Main-agent maker critique and the resulting skill corrections are documented separately in docs/self-review-0.5.1.md. Screenshots do not establish full accessibility or field performance.
