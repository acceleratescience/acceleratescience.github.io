---
layout: publication-single
title: Machine Learning for Musculoskeletal Modeling of Upper Extremity
abstract: >-
  We propose a novel machine learning (ML)-driven methodology to estimate
  biomechanical variables of interest traditionally obtained from
  upper-extremity musculoskeletal (MSK) modeling. MSK models facilitate
  personalized modeling, perform “what-if” analyses, and potentially enhance
  clinical decision-making. In certain settings, MSK models are driven by
  inertial motion capture (IMC) data. IMC systems are portable, user-friendly,
  and relatively affordable as well as provide additional biomechanical
  information. However, MSK models can be computationally expensive, often
  require extensive data, and can be prohibitively slow in making real-time
  predictions. Our ML method—involving a rigorous hyperparameters
  search—predicts kinematic and kinetic biomechanical information associated
  with human upper-extremity movements solely using IMC input data, thereby
  bypassing MSK models. The scaled cadaver-based MSK model was based on the
  Dutch Shoulder Model and the spine model implemented in the AnyBody Managed
  Model Repository. We employ neural networks (NNs), which are trained on IMC
  data obtained from five nondisabled subjects in subject-exposed (SE) settings
  (at least a trial from all subjects is used in training) and subject-naive
  (SN) settings (no information from test subjects is used in training). We
  compare the predictions of our ML model with that of an MSK model and find an
  excellent agreement in SE settings (average Pearson’s r=0.96 , normalized RMSE
  (NRMSE)=0.23 ) and strong correspondence in SN settings (average r=0.89 ,
  NRMSE=0.45 ). The linear model performed poorly for SN settings, which
  motivated a more complex ML model. Our findings suggest that an ML-based
  approach is highly viable for estimating upper-extremity biomechanical
  information solely from IMC data.


  [d﻿oi.org/10.1109/JSEN.2022.3197461](<d﻿oi.org/10.1109/JSEN.2022.3197461>)
published: 2022-10-01
authors:
  internal_authors:
    - Challenger Mishra
  external_authors:
    - family: Sharma
      given: Rahul
    - family: Dasgupta
      given: Abhishek
    - family: Cheng
      given: Runbei
    - family: Nagaraja
      given: "Vikranth H. "
    - {}
details:
  journal: IEEE
  volume: "22"
  number: "19"
  pages: 18684-18697
  doi: 10.1109/JSEN.2022.3197461.
  website: https://ieeexplore.ieee.org/document/9857748
---
