---
layout: publication-single
title: "Noisier2Inverse: Self-Supervised Learning for Image  Reconstruction with
  Correlated Noise"
abstract: We propose Noisier2Inverse, a correction-free self-supervised deep
  learning approach for general inverse prob lems. The proposed method learns a
  reconstruction function without the need for ground truth samples and is ap
  plicable in cases where measurement noise is statistically correlated. This
  includes computed tomography, where detector imperfections or photon
  scattering create correlated noise patterns, as well as microscopy and seismic
  imaging, where physical interactions during measurement introduce dependencies
  in the noise structure. Similar to Noisier2Noise, a key step in our approach
  is the generation of noisier data from which the reconstruction net work
  learns. However, unlike Noisier2Noise, the proposed loss function operates in
  measurement space and is trained to recover an extrapolated image instead of
  the original noisy one. This eliminates the need for an extrap olation step
  during inference, which would otherwise suffer from ill-posedness. We
  numerically demonstrate that our method clearly outperforms previous
  self-supervised approaches that account for correlated noise
published: 2025-03-25
authors:
  internal_authors:
    - Ander Biguri
  external_authors:
    - family: Gruber
      given: " Nadja"
    - family: Schwab
      given: "Johannes "
    - family: Haltmeier
      given: Markus
    - family: Dlaska
      given: Clemens
    - family: Hwang
      given: " Gyeongha"
details:
  pdf: https://arxiv.org/pdf/2503.19468v1
  html: https://arxiv.org/html/2503.19468v1
---
