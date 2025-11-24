---
layout: publication-single
title: Online Reinforcement Learning for Autoformalization
abstract: >-
  

  We study online reinforcement learning for autoformalization: translating informal mathematical conjectures into formal statements in Lean 4. Autoformalization lacks a natural dense reward; using type-check success alone produces syntactically valid but semantically vacuous outputs and is vulnerable to reward hacking. We propose composite reward formulations that combine syntactic signals (Lean type-check) with semantic measures: (i) exact-match style metrics based on BEq / BEq+ when ground-truth formalizations exist, and (ii) a continuous embedding-based similarity reward that requires no paired data. Training uses Group Relative Policy Optimization with a KL-divergence penalty to avoid distributional collapse, and we release a multi-project Lean-4 REPL API and training code. On RLMEval (including a manually curated, context-aware Con-NF set of 71 samples), our best RL model (batch size 768, "TripleEmbed" scaling) substantially raises type-check rates (TC1 from 17.29% → 26.01%, TC50 from 76.41% → 85.46%) while producing modest gains in BEq / BEq+. We analyse reward tradeoffs, show the importance of the KL penalty, and discuss extensions to proof autoformalization and learned critics as future work.
published: 2025-10-31
authors:
  internal_authors:
    - Soumya Banerjee
  external_authors:
    - family: Sorg
      given: "Simon "
    - family: Li
      given: "Wenda "
details:
  html: https://www.researchgate.net/publication/396825045_Online_Reinforcement_Learning_for_Autoformalization
  container-title: Multimodal Algorithmic Reasoning Workshop, The Thirty-Ninth
    Annual Conference on Neural Information Processing Systems (NeurIPS)
---
