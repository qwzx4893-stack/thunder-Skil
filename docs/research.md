# Research and adaptation record

Reviewed 16 October 2026. This is a source-to-decision ledger, not a claim that the newest paper is the strongest evidence or that terminal-agent results establish visual taste. Official specifications define contracts; vendor guidance informs implementation; research findings retain their tested scope.

## Sources and evidence strength

| Source | Kind and scope | Adaptation in Thunder Skil | Limit |
|---|---|---|---|
| [Agent Skills: creator best practices](https://agentskills.io/skill-creation/best-practices) | Maintained open-format authoring guidance | Ground instructions in actual domain work, keep coherent scope, moderate detail, progressive disclosure | Guidance, not a controlled visual-design experiment |
| [OpenAI: Build skills](https://learn.chatgpt.com/docs/build-skills) | Official host behavior/documentation, retrieved on review date | Accurate discovery/install paths, discriminating description, optional agents/openai.yaml display metadata | Host support can change; other hosts may ignore optional metadata |
| [OpenAI: Testing Agent Skills Systematically with Evals](https://developers.openai.com/blog/eval-skills) | Official practical evaluation guide, 22 January 2026 | Separate outcome, process, style and efficiency; positive/negative selection cases; captured artifacts | Does not itself measure this skill or prove aesthetic improvement |
| [OpenAI: Iterating Development Workflows with Codex](https://developers.openai.com/cookbook/examples/codex/iterating-development-workflows-with-codex) | Official workflow-maintenance example, retrieved on review date | Inspect actual failures, decide whether a rule/skill/no change is appropriate, avoid unnecessary process | Example workflow, not a universal optimizer |
| [Anthropic: Skill authoring best practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices) | Official authoring guidance, current page retrieved | Match degrees of freedom to fragility; route references; observe actual use and iterate | Claude-specific details are not silently imposed on every host |
| [Anthropic: Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) | Official engineering account, 9 January 2026 | Combine mechanical end-state checks, model critique and human judgment; distinguish outcome from trace | Layering graders does not remove bias or environment noise |
| [SkillsBench, current paper](https://arxiv.org/html/2602.12670) | Empirical benchmark/preprint; full paper and limitations reviewed | Treat instruction volume as a cost; preserve a no-skill/previous-version baseline; avoid heavyweight process that displaces better default behavior | Terminal/container tasks, bounded models/harnesses, context-length confounds; not evidence of better UI taste |
| [SkillAxe](https://arxiv.org/html/2606.10546) | Evaluation-guided skill-refinement research/preprint | Let observed trajectory failures guide small targeted edits; keep confirmation tasks separate | Its benchmarks, including spreadsheets, do not establish a visual-design result here |
| [Authoring Agent Skills: A Software-Engineering Approach](https://arxiv.org/html/2607.25032) | Authoring note/preprint, submitted 27 July 2026 | Coherent responsibility, interface/implementation separation, low coupling and context economy | Conceptual guidance; not independent causal evidence of gains |
| [Anthropic's maintained skills](https://github.com/anthropics/skills) | Primary skill implementations examined during earlier development | Anti-template diagnostics and skill evaluation practice, re-expressed in original prose | Not an endorsement; third-party prompt text/code is not redistributed |

No paper's aggregate percentage is presented as Thunder Skil's result. Research reports vary across versions; this release cites the source reviewed rather than mixing older counts with a newer paper.

## Actual design expertise used

Direct inspection of original Lusion, Evervault, Apple AirPods Pro, Pentagram, B&O A9 and Sociotype pages informed the [dated observation cases](../references/observed-cases.md). Wide/narrow composition and a few relevant interactions were inspected; each case states what remains unverified. No original-site code or photography is bundled. These observations are more concrete than invented style labels, but they do not establish conversion, full accessibility or performance.

The [precedent method](../references/precedent-lab.md) converts those observations into a transfer decision with assets, non-transfer, an uncertainty study and a rendered keep/revise/discard verdict. The [composition study](../references/composition-study.md) makes claim/task, evidence and action visible using target content.

## Changes motivated by this review

- Reduced the always-loaded entrypoint and replaced its scattered mandatory reading with a route-specific reference map. Additional references are loaded for an unresolved decision, not as a startup reading campaign.
- Added a representative useful slice before elaborating a substantial surface, with actual content and an important state change. A product workspace is allowed to begin with a list/detail/action, rather than a marketing hero.
- Kept open visual choices flexible while making factual truth, asset dependencies and actual verification explicit.
- Added a first-release packaging/CI path and public test evidence. Artifact assertions, helper correctness and taste remain separate.

## User-contributed Design OS v2 draft

An additional incomplete skill supplied by the project owner was reviewed locally: entrypoint, workflows, references, integrations and metadata (45 required Markdown documents, about 608 KB; all Markdown was inventoried). Its original archive and examples are not redistributed.

Most broad ideas were already covered. Three small conditional adaptations were added in original prose: stable object identity and non-motion change feedback; geometry/FOV/aspect-aware framing with intermediate camera-path checks; and explicit producer-to-target handoff assumptions for 3D, design data and generated images. They live in existing references rather than adding a new mandatory framework.

The draft's camera helper did not account for FOV/aspect, so its code was not imported. Conflicting instructions about fixed stage order, transform/opacity-only animation, near-zero motion loops, mandatory memory files and numerical taste thresholds were rejected. Its reported benchmarks were not available in the supplied archive and are not reused as evidence here.

Technical cross-checks: [React's list-identity guidance](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key) explains stable keys when objects move; this supports the identity principle without requiring React. [Three.js PerspectiveCamera documentation](https://threejs.org/docs/pages/PerspectiveCamera.html) defines field of view, aspect and projection parameters; a longest-edge distance heuristic alone cannot establish projected fit. Intermediate-path inspection is an acceptance practice, not an imported camera algorithm.

## Deliberately rejected

No fixed reference count, compulsory 3D, mandatory animation, font/palette blacklist, arbitrary section quota, obligatory approval for delegated taste, automatic install/deployment, or universal “premium” recipe. A request for an exact reference or a local correction can require restraint rather than more originality. A research result can justify removing an instruction.

## Repository tooling sources

The CI actions were resolved from official GitHub release endpoints on the review date and pinned to their commit SHAs: checkout v7.0.1, setup-node v7.1.0 and upload-artifact v7.0.2. Browser CI uses registry release playwright 1.64.1 with Node.js 24. These are development tooling choices, not runtime skill dependencies. [GitHub's social-preview documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/customizing-your-repositorys-social-media-preview) informed the supplied banner format and size target.
