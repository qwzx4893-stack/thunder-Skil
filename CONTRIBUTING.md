# Contributing

Thunder Skil is a reusable design workflow, not a catalog of mandatory aesthetics. Contributions should solve a demonstrated decision or implementation failure while preserving user intent.

## Propose a change

Describe the task, observed failure, smallest useful correction and possible regressions. Include a minimal reproduction, screenshot or actual state transition when relevant. Distinguish your observations from interpretations. Do not include private client material, credentials, unlicensed prompt corpora or third-party site assets.

Before changing instructions, preserve the baseline and freeze a realistic check. Compare actual outputs where warranted. An added rule should earn its context cost; removing unnecessary process is welcome. Existing identities, reference fidelity, operational conventions, Arabic/RTL and justified stillness must remain supported.

## Local verification

Use Node.js 22+ for maintained development environments.

```sh
npm run validate
npm run test:unit
```

Browser fixtures require an installed Playwright module and Chromium browser. Follow [the helper documentation](scripts/README.md). `npm test` explicitly skips the browser fixture when `BROWSER_EXECUTABLE` is unset; do not report a skipped fixture as passed. CI installs its own isolated browser and runs all fixtures.

For instruction changes, read [the evaluation protocol](references/evaluation.md). Separate package/helper correctness, model behavior and visual judgment. Record original failures before repair and label a previously held-out task as development evidence once it guides changes.

## Pull requests

Explain the concrete trigger, resulting behavior, validation and limits. Keep changes scoped. Add or update tests for meaningful verifier behavior, not wording matches. Link source material with its date/revision and explain why it transfers; a general paper is not proof of improved typography.

Runtime identity remains `immersive-web-studio` for compatibility. Thunder Skil is the repository/display name. Keep references routed and individually below this bundle's chosen 8192-codepoint compatibility target. Do not publish `_build/`, secrets or machine-specific evidence paths.
