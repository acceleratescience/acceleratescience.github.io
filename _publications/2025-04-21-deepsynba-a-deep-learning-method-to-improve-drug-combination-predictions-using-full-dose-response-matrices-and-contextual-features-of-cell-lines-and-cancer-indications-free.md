---
layout: publication-single
title: "DeepSynBa: A deep learning method to improve drug combination
  predictions using full dose-response matrices and contextual features of cell
  lines and cancer indications Free"
abstract: >-
  Many cancer monotherapies have limited activity in clinic, making combinations
  a relevant treatment strategy. The number of possible combinations is vast,
  and the responses can be context-specific, making it challenging to predict
  combination effects. Existing computational models typically predict a single
  aggregated synergy score, i.e. Bliss or Loewe, for a given drug combination.
  However, these approaches exhibit high prediction uncertainty and limited
  actionability because they fail to differentiate between potency and efficacy
  by oversimplifying the drug-response surface using a single synergy score.


  To address these limitations, we introduce DeepSynBa, which models the full dose-response matrix of drug pairs rather than an aggregated synergy score. DeepSynBa formulates this task as a regression problem and uses cell line-specific features and drug embeddings to predict the entire drug-response matrix within a deep learning framework. Following SynBa’s approach of modelling the dose-response surface \[1], DeepSynBa includes an intermediate layer that estimates pharmacological parameters, which are then used to predict dose-response values across dosages. This design also enables post-hoc calculation of traditional synergy scores like Loewe and Bliss, maintaining compatibility with existing synergy predictors.
published: 2025-04-21
authors:
  internal_authors:
    - Carl Henrik Ek
  external_authors:
    - family: Milo
      given: "Marta "
    - family: Zhang
      given: "Haoting "
    - family: " Kuru"
      given: Halil ibrahim
    - family: Ercument Cicek
      given: "A. "
    - family: Tastan
      given: " Oznur "
    - family: Rattray
      given: "Magnus "
details:
  journal: Cancer Research
  volume: Volume 85
  number: Issue 8
  container-title: Supplement 1
  html: https://aacrjournals.org/cancerres/article/85/8_Supplement_1/3646/757490/Abstract-3646-DeepSynBa-A-deep-learning-method-to
  doi: 10.1158/1538-7445.AM2025-3646
---
