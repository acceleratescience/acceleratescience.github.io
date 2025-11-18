---
layout: publication-single
title: Graph Convolutional Neural Networks to Model  the Brain for Insomnia
abstract: Insomnia affects a vast population of the world and can have a wide
  range of causes. Existing treatments for insomnia have been linked with many
  side effects like headaches, dizziness, etc. As such, there is a clear need
  for improved insomnia treatment. Brain modelling has helped with assessing the
  effects of brain pathology on brain network dynamics and with supporting
  clinical decisions in the treatment of Alzheimer’s disease, epilepsy, etc.
  However, such models have not been developed for insomnia. Therefore, this
  project attempts to understand the characteristics of the brain of individuals
  experiencing insomnia using continuous long-duration EEG data. Brain networks
  are derived based on functional connectivity and spatial distance between EEG
  channels. The power spectral density of the channels is then computed for the
  major brain wave frequency bands. A graph convolutional neural network (GCNN)
  model is then trained to capture the functional characteristics associated
  with insomnia and configured for the classification task to judge performance.
  Results indicated a 50-second non-overlapping sliding window was the most
  suitable choice for EEG segmentation. This approach achieved a classification
  accuracy of 70% at window level and 68% at subject level. Additionally, the
  omission of EEG channels C4-P4, F4-C4 and C4-A1 caused higher degradation in
  model performance than the removal of other channels. These channel electrodes
  are positioned near brain regions known to exhibit atypical levels of
  functional connectivity in individuals with insomnia, which can explain such
  results.
published: 2025-07-02
authors:
  internal_authors:
    - Sam Nallaperuma
    - "Kevin Monteiro "
  external_authors:
    - family: Mason
      given: "Martina "
    - family: Niederer
      given: "Steve  "
details:
  pdf: https://arxiv.org/pdf/2507.14147
  container-title: AI in Healthcare (AIiH) Conference
  html: https://arxiv.org/abs/2507.14147
---
