---
layout: article
title: Solving Schrödinger Bridges via Maximum Likelihood
abstract: >
  The Schrödinger bridge problem (SBP) finds the most likely stochastic
  evolution between two probability distributions given a prior stochastic
  evolution. As well as applications in the natural sciences, problems of this
  kind have important applications in machine learning such as dataset alignment
  and hypothesis testing. Whilst the theory behind this problem is relatively
  mature, scalable numerical recipes to estimate the Schrödinger bridge remain
  an active area of research. Our main contribution is the proof of equivalence
  between solving the SBP and an autoregressive maximum likelihood estimation
  objective. This formulation circumvents many of the challenges of density
  estimation and enables direct application of successful machine learning
  techniques. We propose a numerical procedure to estimate SBPs using Gaussian
  process and demonstrate the practical usage of our approach in numerical
  simulations and experiments.
published: 2021-08-31
author:
  - family: Vargas
    given: Francisco
    person_page: francisco-vargas
  - family: Thodoroff
    given: Pierre
    person_page: pierre-thodoroff
  - family: Lamacraft
    given: Austen
  - family: Lawrence
    given: Neil D.
    person_page: neil-d-lawrence
journal: Entropy
volume: 23
number: 9
pages: 1134
html: https://www.mdpi.com/1099-4300/23/9/1134
pdf: https://www.mdpi.com/1099-4300/23/9/1134/pdf
software: https://github.com/franciscovargas/GP_Sinkhorn
year: 2021
doi: 10.3390/e23091134
firstpage: 1134
key: Vargas-solving21
description: The Schrödinger bridge problem was proposed in the 1930s by Erwin Scrödinger. It involves two probability distributions at a start time an end time. They are related by a dynamic process. Deciding the form of that dynamic process given these distributions is a challenging problem. In this work we provide a maximum likelihood approach to solving it.
---
