---
layout: publication-single
title: Protein Language Model Zero-Shot Fitness Predictions are  Improved by
  Inference-only Dropout
abstract: Protein Language Models (PLMs) such as ESM2 (Lin et al., 2023) have
  been shown to be capable of zero-shot prediction of critical scalar properties
  of proteins (“fitness”, Meier et al. (2021)). In this work, we show that
  injecting a dropout layer at inference time between a PLM’s
  featurizer/embedding layer and its transformer, and averaging its output akin
  to Monte-Carlo dropout (Gal & Ghahramani, 2016) increases zero-shot
  performance on a subset of the ProteinGym dataset (Notin et al., 2023). This
  is the case even when the model was not trained with dropouts to begin with,
  and does not require retraining or f inetuning of the PLM. A dropout of 0.1
  seems performant across all models.
published: 2025-05-31
authors:
  internal_authors:
    - Aditya Ravuri
    - Neil D. Lawrence
details:
  pdf: https://arxiv.org/pdf/2506.14793
  container-title: "MLCB (workshop track) 2025. "
---
