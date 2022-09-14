---
layout: paper-single
title: Gaussian Process Latent Variable Flows for Massively Missing Data
abstract: Gaussian process latent variable models (GPLVM) are used to perform
  nonlinear and probabilistic dimensionality reduction. They extend Gaussian
  processes (GP) to the domain of unsupervised learning. The Bayesian
  incarnation of the GPLVM uses a variational framework, where the posterior
  over all unknown quantities is approximated by a well-behaved variational
  family, a factorised Gaussian. This gives not only implicit regularisation but
  also mathematical convenience. In this work we narrow our focus on examining
  the quality of the latent representation learnt under this Gaussian
  assumption. We introduce non-Gaussianity in the distribution of the latent
  space through normalising flows. The flexibility afforded by flows is critical
  in modelling massively missing data. Inference is performed using Stochastic
  Variational Inference (SVI) with a structured variational lower bound that
  factorizes across data points permitting efficient and scalable mini-batching
  of gradients. We call this flexible model class (GPLVF). We compare this
  framework with traditional models like the Bayesian GPLVM. Our experiments
  focus on massively missing data settings.
description: Gaussian process latent variable models (GPLVM) are used to perform nonlinear and   probabilistic dimensionality reduction. This work develops a flexible model class, called Gaussian     process latent variable flows (GPLVF), and evaluates its performance in massively missing data settings.
published: 2021-01-15
author:
  - given: Vidhi
    family: Lalchand
    person_page: vidhi-lalchand
  - given: Aditya
    family: Ravuri
    person_page: aditya-ravuri
  - given: Neil D.
    family: Lawrence
    person_page: neil-d-lawrence
journal:
year: 2021
volume:
number:
pages:
doi:
openreview: zaMwvOjsyym
html:
website:
---