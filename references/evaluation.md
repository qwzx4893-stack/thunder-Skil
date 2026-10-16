# Improve the skill through evidence

Load when changing these instructions or claiming an improvement. Preserve user intent and the skill name. Keep development runs outside runtime references.

## Protocol

1. Snapshot the current bundle and record hypotheses before editing.
2. Inspect primary sources and actual mechanisms. Record strength, missing capability, adaptation, conflict risk, and an evaluation case.
3. Write realistic cases before seeing candidate outputs. Include expressive, operational, reference-led, small-edit, asset-limited, RTL, and no-motion work as appropriate.
4. Pair baseline and candidate on identical prompts, inputs, model/harness, tool access and budget. Use fresh contexts. Repeat meaningful comparisons; record time/tokens if available.
5. Check concrete end states programmatically. Judge taste/task fit separately from objective correctness. Hide condition labels and the maker's argument from reviewers.
6. Freeze a development set and retain held-out briefs to detect overfitting. Once a held-out case guides a fix, it is no longer held out.
7. Keep changes supported by evidence; rerun affected cases and relevant regressions. Record failures and unresolved uncertainty.

Include both expected-use and near-miss requests when evaluating discovery: an actual visual task should activate the skill; a backend-only change should not. Distinguish a model's classification of a description from actual host invocation. Inspect which references were loaded and why; a successful output after reading every resource can conceal excessive context cost. Record reading/time/token data only when observable.

Before adding instructions, identify the demonstrated failure and a smallest plausible correction. Prefer removing irrelevant process over adding another universal stage. Check that a fix for one case does not damage reference fidelity, small edits or stillness. Keep a final confirmation set separate from cases used for edits; after consulting it to revise the skill, label it development evidence.

Use available subagents for independent runs/critique when authorized. A self-run sanity check is useful but not equivalent to a fresh-context comparison. Missing usage data stays unknown. Do not fabricate timing or normalize scores with a moving denominator.

## Assertions and judgment

Assertions concern observable outcomes: action works, a source is honest, focus returns, a missing essential asset is surfaced, a reference is preserved, no unnecessary rewrite occurs. Avoid tests that only match headings or specific phrases. Do not bake the candidate's preferred layout into the grader.

For qualitative review ask about task fit, hierarchy, reference fidelity or subject specificity, craft, relevant states, and restraint. Judge stillness positively when appropriate. Describe limitations with evidence. A safe, accessible but bland page is not automatically excellent; a beautiful broken task is not acceptable.

If using scores, freeze criteria/weights and applicability before runs. Use fixed denominator per case and report per-criterion evidence. Report repeated-run variation and raw counts. Do not compare percentages from differently scoped rubrics.

## Prevent evaluator contamination

Independent runners get only task, inputs, skill condition, tools, output path and budget. Critics get artifact/task/screenshots but no condition, version, expected winner, maker rationale or hypothesis. Mechanical artifacts may leak condition paths: sanitize a copy or disclose broken blinding. Do not call a review blind if it was not.

## Evidence levels

- Bundle/schema/link validation: packaging only.
- Unit/browser fixture tests: behavior of the verifier on those fixtures.
- Behavioral probes: whether an agent applied relevant decisions.
- Paired rendered builds: output comparison in the tested setup.
- Human review/repeated diverse runs: stronger but still bounded evidence.

Keep these separate in release notes. Do not call structural validation proof of better taste. General LLM research and third-party testimonials are motivations, not a benchmark for this bundle.

## Release evidence

Record sources/revisions and coverage, hypotheses, changed files, exact checks/results, baseline/candidate conditions, run limitations, and residual gaps. Archive old claims with their historical conditions; do not reuse them as current-version scores. A release may be useful without universal superiority claims.

Sources:
- https://github.com/anthropics/skills/tree/main/skills/skill-creator
- https://agentskills.io/skill-creation/evaluating-skills
- https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
- https://www.skillsbench.ai/blogs/skillsbench-1-1
