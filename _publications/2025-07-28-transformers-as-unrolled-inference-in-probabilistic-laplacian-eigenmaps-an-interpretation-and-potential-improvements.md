---
layout: publication-single
title: " Transformers as Unrolled Inference in Probabilistic
  Laplacian  Eigenmaps: An Interpretation and Potential Improvements"
abstract: We propose a probabilistic interpretation of transformers as unrolled
  inference steps assum ing a probabilistic Laplacian Eigenmaps model from the
  ProbDR framework. Our derivation shows that at initialisation, transformers
  perform “linear” dimensionality reduction. We also show that within the
  transformer block, a graph Laplacian term arises from our arguments, rather
  than an attention matrix (which we interpret as an adjacency matrix). We demon
  strate that simply subtracting the identity from the attention matrix (and
  thereby taking a graph diffusion step) improves validation performance on a
  language model and a simple vision transformer
published: 2025-07-28
authors:
  internal_authors:
    - Aditya Ravuri
    - Neil D. Lawrence
details:
  pdf: https://arxiv.org/pdf/2507.21040
  container-title: NPGML, UniREPS, SPIGM @ NeurIPS 2025
---
