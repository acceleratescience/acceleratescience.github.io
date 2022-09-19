---
layout: blog-single
title:  How can we … better understand the links between mental and physical health with machine learning?
date:   2021-09-22 16:00:00
categories:
  - Accelerate-Spark data science residency
tags:
  - news
author: Emanuele Osimo, Chain Florey Clinical Fellow, Imperial College London, and Visiting Researcher, University of Cambridge
image:
  - /assets/uploads/emanueleosimo.jpg
excerpt:
   I'm interested in finding out how mental and physical health are interlinked. I study this in serious mental illness, especially in schizophrenia. My long-term aim is understanding how to improve the treatments offered to patients, and help increase their quality of life. In order to do so, we need to disentangle different factors that contribute to a patient’s overall health. Data science and machine learning can help us understand the complex links between mental illness, physical health, and the genetic basis for conditions like schizophrenia.
---

I'm interested in finding out how mental and physical health are interlinked. [I study this](https://www.imperial.ac.uk/people/e.osimo) in serious mental illness, especially in schizophrenia. My long-term aim is understanding how to improve the treatments offered to patients, and help increase their quality of life. In order to do so, we need to disentangle different factors that contribute to a patient’s overall health. 

We know that the overall health of people can be affected by:
* Life events, including past trauma and stress (for example, migrations, bereavement, infections, etc);
* The person's lifestyle;
* The person’s socio-economic status, with connected chances and choices;
* Genetic factors that make that individual more susceptible to mental or physical illness;
* The presence of any mental or physical illness;
* The secondary effects of having any illness. These might include side-effects from medications – for example, some medications cause high cholesterol or weight gain – or other secondary effects arising from patients taking less exercise, socialising less, and so on.

It isn’t the case that everyone with schizophrenia suffers from poor physical health, but we do see connections between mental illness and conditions like hypertension, diabetes, and the [metabolic syndrome](https://www.nhs.uk/conditions/metabolic-syndrome/) (a constellation of connected issues, including usually high blood pressure, high body weight, pre- or fully blown diabetes and other fat-related changes). My work focuses on trying to tease apart some of these different influences on a patient’s health.

There are different ways of studying these relationships. When I first started studying this area, I used imaging; we would carry out [magnetic resonance scans](https://www.nhs.uk/conditions/mri-scan/) of people with schizophrenia and healthy controls, and examine how their bodies (particularly I've looked at hearts and fat mass) were different from people without the condition. You can find a plain language summary of what we've done [at this link](https://www.cambridge.org/core/blog/2020/08/19/physically-healthy-people-with-schizophrenia-show-heart-changes-that-increase-the-risk-of-heart-disease/). The issue with these studies is that it is hard to find a causal relationship from any differences you see – there are usually [confounding factors](https://en.wikipedia.org/wiki/Confounding) that make it difficult to be confident in understanding the reasons for different people’s health outcomes. That's why I’ve also used epidemiological techniques, looking at birth cohort studies where you can compare people’s health trajectories over the life course, excluding data that might be confounding, because so much information is captured about the people in the study. More recently, I’ve been focussing on understanding the genetic basis for disease – this is particularly interesting because it is confounded very little by lifestyle or disease status. 

I joined the [Accelerate-Spark Data Science for Science Residency](https://www.cst.cam.ac.uk/news/free-data-science-training-course-cambridge-researchers) because I wanted to make progress with a specific project I’m currently working on for my PhD. This is investigating the relationship between different parts of the genome and the likelihood of developing schizophrenia, asking: does a specific part of the genome, or gene, associate with having schizophrenia? 

We know from twin-studies that schizophrenia is highly heritable (e.g., some estimates show that around 80% of the risk comes from your genes). Researchers studying the human genome have found many areas of the genome that are linked with the condition through large efforts including thousands of people, called [genome-wide association studies (GWAS)](https://en.wikipedia.org/wiki/Genome-wide_association_study). But schizophrenia is a complex disorder – it is controlled by multiple places (or loci) in the genome, each having a small effect on the development of the condition. When we look at all the common loci we’ve found so far, we can still only account for about 7% of the likelihood of someone developing schizophrenia. Genes themselves make up a relatively small portion of our total genetic material, and one possibility is that the non-coding sections play a more important role in determining whether a person develops schizophrenia than we previously thought.

I’m interested in making better use of the genetic data we have to understand how genetic differences contribute to schizophrenia. To do this, together with my colleagues at the [Computational Regulatory Genomics group](http://group.genereg.net/), among other things, we study the relationship between genes and enhancers. Enhancers are non-coding sequences of the genome that act as regulators of gene expression, or how genes are activated. They can be thought of as switches (or even better, as dimmer switches, as they modulate, rather than switching on and off). If they are switched on "high" in a specific tissue, they will prompt the expression of a particular target gene or set of genes. The relationship between genes and enhancers isn’t simple – an enhancer might affect more than one gene, more than one enhancer might affect a gene, and it isn’t always the case that enhancers and genes are situated close to each other in the genome. To understand their relationship, we need to map the enhancers to the genes they affect: do we know which enhancers might regulate genes associated with schizophrenia?

My colleagues, especially [Radina Georgieva](http://group.genereg.net/group/), had already done lots of work measuring the effect of several genomic features on the relationship between enhancers and genes. This work had identified a number of features that can be used to calculate a probability that an enhancer is controlling a specific gene. In the Accelerate-[Spark](https://www.cambridgespark.com) Data Science for Science course, I developed a model that uses these features to predict whether a particular enhancer is influencing the expression of a particular gene. 

In machine learning-terms, the techniques I used were pretty simple. I built a simple logistic model, then implemented it in Python. The advantage of using Python is that it comes with a package of other machine learning algorithms – random forests or other classifiers – that I could compare to logistic regression in my work. But even these simple methods allowed me to build a model that can accurately predict enhancer target genes.

Now that I have this analysis – and better understand how different enhancers and genes affect each other – I can move forward to a new phase in my work. With these insights, I’ll be revisiting the Genome-Wide Association Studies that have already been carried out for people with schizophrenia. Those studies gave us signals about which bits of the genome are significant in determining whether someone develops schizophrenia. Many of these signal are not close to genes, but instead they might be tagging enhancers. I hope I can now more accurately map these enhancers to their genes.

One of the most useful things I’ve learned through the Data Science Residency is what machine learning can – and can’t – be used for. It can produce impressive results, but to use it effectively in science you need to have a research question that you can keep in mind when designing your model, and you need to bring to the table strong a priori ideas about what features of your data matter. Internal and external calibration and validation of your model are also really important, and to do this you need to understand both the data science and the science at hand.

In future I hope to be able to apply similar techniques to prediction modelling in other clinical scenarios. The brain is a complicated organ, and as a molecular psychiatry community we need to find new ways of studying it. Techniques like machine learning are becoming important tools in our research toolkit.

***Emanuele Osimo (September 2021)***
