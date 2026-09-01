---
layout: blog-single
title: How can we…use machine learning to make energy grids more efficient?
excerpt: With more electrification required to power vehicles, enable renewable
  energy and help fight climate change, electrical power grids underpin our
  modern society. But many grids around the world are growing older and in need
  of maintenance and upgrading to cope with growing demand.
author: Tomisin Dada, PhD student, Department of Computer Science and Technology
date: 2026-09-01T11:36:03+01:00
categories:
  - machine-learning
teaser: ""
image: /assets/uploads/tomisin-dada-blogpost-photo.jpg
---
With more electrification required to power vehicles, enable renewable energy and help fight climate change, electrical power grids underpin our modern society. But many grids around the world are growing older and in need of maintenance and upgrading to cope with growing demand.


The AC optimal power flow (AC-OPF) problem is central to the operation and planning of modern power systems, enabling optimal dispatch of generation while satisfying physical constraints and operational limits.


Grid operators try to solve the OPF problem by pinpointing optimal power fill to provide power at the lowest possible cost. This necessitates a precise and ongoing balancing act that often requires predicting electric demands and correcting them in real-time. This can be slow, the corrections are not as frequent as operators would like, or may not take variables into account such as levels of power generation from wind or solar. 


Conventional solution methods can be computationally expensive and slow for large-scale systems. This computational burden poses a significant limitation in merging applications such as real-time optimal power flow under high renewable penetration, demand-side management and large-scale planning tasks, where a large number of OPF instances must be solved rapidly.


**Machine learning for optimisation**


To address this challenge, machine learning (ML) is being explored to solve optimisation problems. 


Purely data-driven ML models often fail to respect the underlying physics of the system, leading to violations of power balance equations and operational constraints. This lack of feasibility limits their applicability in safety-critical power system operations. Simply put, the approach is too risky and impractical for grid operators.


A hybrid approach can be used to find ways to reduce the complexity of the original problem. In this context ML can be used to identify binding constraints and turn a constrained optimisation problem to an unconstrained one which is easier to solve, or linearise the problem reducing complexity or provide an initial estimate of a solution. Despite these benefits, this approach tends to reduce the computational gains achieved by ML models, and some constraint violations can persist.


During my PhD, together with Professor Neil Lawrence, I compared different types of models to help contextualise model performance. We showed that data-driven methods such as a linear models can also outperform DC-OPF (a linearised mathematical model used in power systems engineering to optimise electricity generation dispatch and calculate power prices) and can be better or comparable to ML solutions. So, showing an improvement over DC-OPF does not necessarily justify the complexity of an ML model. 

We then proposed an ML model that outperformed the linear model, but the outperformance was not consistent across all data sets. While it showed some gains, it wasn’t a superior model, but using a baseline comparison was the key contribution we made.


We developed a novel iterative AC power flow solver designed for ML-enhanced AC-OPF, combining the strengths of computationally efficient ML with the reliability and feasibility of conventional solvers such as Newton-Raphson.
We have shown that this fixed-point algorithm can be used differently to a conventional or AC power flow solver, eliminating strange dynamics that can be seen in post process. As well as performance advantages, the new method is flexible - enabling the incorporation of additional constraints – and can be combined with other ML-based frameworks.


**Powering ahead**


I’m currently running our last sets of experiments to show these results on larger grids to strengthen our evidence that we have created something that could one day be deployed in the real world.


There are many potential applications for this technology both in real time grid operations and long-term grid planning.  In the future, we will focus on extending the projection of the framework to enforce additional operational constraints - enhancing the practical applicability of the method for full AC-OPF feasibility. Power grid operators are understandably risk averse, but if there are guardrails and the model is reliable and trustworthy it would be wonderful to see a version of it being deployed to solve real world problems and help modernise power grids