---
layout: blog-single
title: How can we … use AI to produce a roadmap showing how brain regions are related?
excerpt: >-
  Computational neuroscience - specifically combining neuroimaging and genetics
  - offers huge potential to better understand the brain and how it is
  organised, offering insights into healthy populations as well as shedding
  light into how the brain might be altered in clinical populations with mental
  health disorders. 


  We are living in the era of big data with increasing amounts of data available to us, but we don’t have a clear idea of the best way to take an image of the brain and turn it into a biologically validated representation of it, which researchers can work from to shed light on its inner workings. The question of how you take a brain scan and turn it into something meaningful remains unanswered in the neuroimaging community but has occupied them for about 20 years, and this is something which fascinates me. 
author: Dr. Isaac Sebenius
date: 2025-09-09T13:04:01+01:00
image: /assets/uploads/isaac-sebenius.png
---
Computational neuroscience - specifically combining neuroimaging and genetics - offers huge potential to better understand the brain and how it is organised, offering insights into healthy populations as well as shedding light into how the brain might be altered in clinical populations with mental health disorders. 

We are living in the era of big data with increasing amounts of data available to us, but we don’t have a clear idea of the best way to take an image of the brain and turn it into a biologically validated representation of it, which researchers can work from to shed light on its inner workings. The question of how you take a brain scan and turn it into something meaningful remains unanswered in the neuroimaging community but has occupied them for about 20 years, and this is something which fascinates me. 

**A new method** 

For my PhD, I developed a new computational method to study MRI scans and turn images of the structure of the brain into a representation of the brain as a network, including different features of its structure like its thickness, folding patterns, and surface area. 

Together with Research Fellow Sarah Morgan, I developed a new computational approach to estimate the similarity between brain regions. This method, called “MIND,” produces results which are both statistically more robust and more consistent with what we already know about the brain's structure and its underlying biology. MIND doesn’t just use a set of summary values per brain region, but instead draws on the underlying distributions of those values, building up a multivariate distribution and then calculating the similarity of those distributions between brain regions. We developed MIND using data from over 11,000 MRI scans, described it in a [Nature Neuroscience article](https://www.nature.com/articles/s41593-023-01376-7) and released it as an open software tool for wider use by the community.  

One key finding was that MIND can be used to detect clinically-relevant traits using machine learning. For example, we trained Gaussian process prediction models on MIND networks from a developmental cohort and found that it could predict age much more accurately than other methods. This was a critical finding since we know that risk for mental health conditions depends substantially on age – and so by showing that we can use machine learning to effectively track development using MIND, we gained much more confidence that there is meaningful, clinically-relevant signal in the method.  

**Meaningful results** 

Beyond just predicting age, we found that this method closely reflects fundamental biological properties about how the brain is organized, which aren’t explicitly measured by structural MRI – such as the gene expression, cell composition, and genetic influences that characterize different brain areas. For example, this method of quantifying the brain's structural network mapped exceedingly closely onto brain networks derived from gene expression data. This is exciting, because it could help researchers identify which genes are expressed in regions of the brain affected by mental health conditions, and which genes, therefore, may be implicated in the development of these conditions. Brain scans are relatively easy to acquire, so our method represents an important advance in our ability to directly correlate brain scan data with an individual’s complex neurobiology. 

Taken together, we have shown that we can produce a more detailed picture of the structural architecture of the human brain than was previously possible.  The improved roadmap of how brain regions are related could help researchers better understand brain development in healthy humans and how it differs in patients with brain disorders like dementia and psychiatric illnesses like schizophrenia. It could also be used to study the brain's development from its early stages to its ageing, and to find out which connections within the brain are important for different cognitive processes. 

**Thinking ahead** 

The method is already in the hands of researchers and PhD students at Cambridge, as well as collaborators around the world including those in [ENIGMA Consortium](https://enigma.ini.usc.edu/). Putting it into the hands of the active research community is a real milestone, and it has already been used in multiple studies – including [one recent work](https://www.nature.com/articles/s41467-025-60556-0) on Huntington’s Disease. 

Having recently graduated from Cambridge, I have just started medical school and am interested in bridging this work with direct clinical experience and translational care. I will also look for opportunities to expand the research translationally. In five to 10 years’ time, I see myself exploring clinical applications with technologies around the brain and neuroimaging with the aim of helping real world patients. 

 

*Isaac recently completed his PhD in the Department of Psychiatry at the University of Cambridge, and was a member of the Accelerate Programme for Scientific Discovery team. He is currently an MD candidate at Harvard Medical School/MIT.*