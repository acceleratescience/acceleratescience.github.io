---
layout: publication-single
title: Machine Learning for Optical Motion Capture-Driven Musculoskeletal
  Modelling from Inertial Motion Capture Data
abstract: Marker-based Optical Motion Capture (OMC) systems and associated
  musculoskeletal (MSK) modelling predictions offer non-invasively obtainable
  insights into muscle and joint loading at an in vivo level, aiding clinical
  decision-making. However, an OMC system is lab-based, expensive, and requires
  a line of sight. Inertial Motion Capture (IMC) techniques are widely-used
  alternatives, which are portable, user-friendly, and relatively low-cost,
  although with lesser accuracy. Irrespective of the choice of motion capture
  technique, one typically uses an MSK model to obtain the kinematic and kinetic
  outputs, which is a computationally expensive tool increasingly well
  approximated by machine learning (ML) methods. Here, an ML approach is
  presented that maps experimentally recorded IMC input data to the human
  upper-extremity MSK model outputs computed from (‘gold standard’) OMC input
  data. Essentially, this proof-of-concept study aims to predict higher-quality
  MSK outputs from the much easier-to-obtain IMC data. We use OMC and IMC data
  simultaneously collected for the same subjects to train different ML
  architectures that predict OMC-driven MSK outputs from IMC measurements. In
  particular, we employed various neural network (NN) architectures, such as
  Feed-Forward Neural Networks (FFNNs) and Recurrent Neural Networks (RNNs)
  (vanilla, Long Short-Term Memory, and Gated Recurrent Unit) and a
  comprehensive search for the best-fit model in the hyperparameters space in
  both subject-exposed (SE) as well as subject-naive (SN) settings. We observed
  a comparable performance for both FFNN and RNN models, which have a high
  degree of agreement (ravg,SE,FFNN=0.90±0.19, ravg,SE,RNN=0.89±0.17,
  ravg,SN,FFNN=0.84±0.23, and ravg,SN,RNN=0.78±0.23) with the desired OMC-driven
  MSK estimates for held-out test data. The findings demonstrate that mapping
  IMC inputs to OMC-driven MSK outputs using ML models could be instrumental in
  transitioning MSK modelling from ‘lab to field’.
published: 2023-04-24
authors:
  internal_authors:
    - Challenger Mishra
  external_authors:
    - family: Dasgupta
      given: Abhishek
    - family: Sharma
      given: Rahul
    - family: Nagaraja
      given: Vikranth H
details:
  journal: Bioengineering
  volume: " 10"
  number: "5"
  pages: "510"
  doi: 10.3390/bioengineering10050510
  website: https://www.mdpi.com/2306-5354/10/5/510
---
