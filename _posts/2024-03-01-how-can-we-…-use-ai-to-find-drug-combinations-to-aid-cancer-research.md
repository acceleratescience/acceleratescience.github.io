---
layout: blog-single
title: How can we … use AI to find drug combinations to aid cancer research?
excerpt: >+
  Overcoming drug resistance is one goal of cancer research.  Experts are
  exploring whether combinations of treatments could make current drugs work
  better, leading to better outcomes for patients. But pinpointing potentially
  successful combinations – what we refer to as synergistic combinations – of
  drugs is far from simple.

author: "By Haoting Zhang, HDRUK-Turing Wellcome PhD Student  Department of
  Computer Science and Technology "
date: March 4, 2024 10:00 AM
image: /assets/uploads/haoting.png
---
Overcoming drug resistance is one goal of cancer research[](<>)Experts are exploring whether combinations of treatments could make current drugs work better, leading to better outcomes for patients. But pinpointing potentially successful combinations – what we refer to as synergistic combinations – of drugs is far from simple.

My research, in collaboration with AstraZeneca, focuses on analysing and predicting the synergies of drug combinations. There are two parts to my project.

**Part one: Improved estimation of synergies**

There are a number of quantification frameworks that estimate the synergistic effect of drug combinations – simply put, how effectively they work in combination with each other – but disagreements in these estimates make it challenging for scientists to determine the best combinations to focus on for drug screening. For example, they try to summarise multiple aspects of drug combinations, including their efficacy and toxicity into a single score.

Furthermore, the lack of accurate uncertainty quantification for those estimates means they can’t be directly used to choose optimal drug combinations based on the most favourable synergistic effect, due to the potentially large uncertainties behind the synergy scores.

Estimating the synergy of drug combinations where we already have relevant data was the first part of the project. My supervisor at Cambridge, Carl Henrik Ek, Marta Milo at AstraZeneca and Magnus Rattray at the University of Manchester and I came up with SynBa, a flexible Bayesian approach to estimate the uncertainty of the synergistic efficacy and potency of drug combinations. We published our findings in the [Journal of Bioinformatics](https://academic.oup.com/bioinformatics/article/39/Supplement_1/i121/7210462) earlier this year.

Through experiments on large combination screenings and comparison against benchmark methods, we showed that SynBa provides improved accuracy of dose–response predictions and better-calibrated uncertainty estimation for the parameters and the synergies.

We’re using a Bayesian framework, which treats quantities as random variables instead of fixed values. This means we can look at the quantities of interest in our outputs as a distribution instead of single estimates, allowing us to estimate how uncertain they are. This is useful because there are cases when it might look like a particular combination of two drugs has great potential, but where biological data is hugely uncertain and contains a large amount of noise from sources that are difficult to understand. Our approach identifies the drug combinations with a high and confident synergy score that can be trusted. In the meantime, SynBa can also flag those combinations with a synergistic but highly uncertain score, in which case more measurements would be required to reduce the uncertainty over the decision to a satisfying level.

**Part two: Navigating an unexplored space**

The second part of my thesis is about predicting the synergy of unexplored drug combinations, utilising the model I built in the first part and the existing pharmacological, biological and chemical data from combination screenings. The data we are working from are all cell lines in vitro.

Using machine learning in this way could help scientists explore the possibilities of combining single drugs in a large unexplored space where there are tens of thousands of candidates. Predicting which ones are most likely to work best could really speed things up, allowing scientists to focus on the most promising combinations. The model we are building and refining is not intended to be a magical end-to-end solution but a tool to help biologists narrow down candidates effectively and help decide what could be interesting combinations.

We’re focusing on providing an uncertainty estimation alongside each prediction, which will enable decision-making to be informed by the confidence level associated with the prediction.[](<>)

**A winning combination**

This technology focuses on identifying the drug combinations that target cancer cell lines. Our dataset mainly consists of breast, lung and bladder cell lines.

We are building our model to be open source and hope it will be helpful to the community of scientists identifying drug combinations to fight cancer. While we are still developing the model, iterating and working with biologists to refine it, we hope it could one day be used by AstraZeneca for real-world development.

I share the vision of the Accelerate Programme for Scientific Discovery and my supervisors of the potential for AI to accelerate scientific discovery and am working to create tools to help scientists solve difficult problems. While I do not know what the future holds, I intend to pursue a career in machine learning and health data science either as an academic researcher or in industry, with the aim of helping to speed up the drug discovery pipeline, especially in the pre-clinical phase.