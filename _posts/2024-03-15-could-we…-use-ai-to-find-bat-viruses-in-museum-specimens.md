---
layout: blog-single
title: Could we… use AI to find bat viruses in museum specimens?
excerpt: >-
  Bats comprise around one in five named mammal species and are found on every
  continent except Antarctica. In recent decades, bats have been implicated as
  potential hosts of several viruses that cause high fatality rates in humans.
  Still, despite years of research, there’s a lot we don’t know about bat virus
  ecology, hindering the ability of experts to anticipate and prepare for the
  next potential pandemic.


  A repository of untapped data could help shed light on the relationship between bat ecology and viral emergence. In my project, supported by the Accelerate and Cambridge Centre for Data Driven Discovery funding call, I am exploring using AI and natural history museum collections for host prediction and viral surveillance.
author: Maya Juman, PhD student, Department of Veterinary Medicine
date: March 18, 2024 9:22 AM
categories:
  - machine-learning
image: /assets/uploads/maya-juman-blog-image-march-2024.jpg
---
Bats comprise around one in five named mammal species and are found on every continent except Antarctica. In recent decades, bats have been implicated as potential hosts of several viruses that cause high fatality rates in humans. Still, despite years of research, there’s a lot we don’t know about bat virus ecology, hindering the ability of experts to anticipate and prepare for the next potential pandemic.

A repository of untapped data could help shed light on the relationship between bat ecology and viral emergence. In my project, supported by the Accelerate and Cambridge Centre for Data Driven Discovery funding call, I am exploring using AI and natural history museum collections for host prediction and viral surveillance.

**An emerging field**

I study fruit bats and paramyxoviruses, a family of viruses that includes the human mumps virus as well as some known zoonotic viruses hosted by bats (e.g., Hendra virus and Nipah virus). I’m working on a proof-of-concept study using machine learning to predict and test which of these bats are most likely to host certain paramyxoviruses. 

One approach for host identification is to retrospectively sample wild animals immediately following a disease outbreak in the vicinity, but that is difficult, expensive, time-consuming, and invasive. Instead, my colleagues and I propose conducting proactive pathogen surveillance in natural history collections, where millions of specimens are already available for screening.

This is an emerging field. There are various challenges associated with extracting viruses, bacteria, and parasites from stuffed specimens in dusty cases and pickled creatures in jars—namely limitations caused by the age and preservation type of the specimens. However, there is also great potential in this line of work, as these historical specimens provide snapshots of host-pathogen interactions across space and time. For our initial project, we are focusing on specimens with associated frozen tissue samples (typically collected within the last three decades) housed at natural history museums in Chicago and New York.

**Using AI and experimenting with data**

Honing in on suitable samples within vast natural history collections is like searching for a needle in a haystack. It’s overwhelming. Where do you start and how do you guess which species are likely to host a virus? To focus our sampling, we are using machine learning to predict likely paramyxovirus host species within the fruit bat family (Pteropodidae). This involves gathering ecological trait data for each of the ~200 species of bats in this family—information like body size, diet, habitat, reproductive cycles, etc.—and using an algorithm to detect patterns in which types of bats are more likely to host viruses. For example, the model may suggest that smaller and more geographically widespread fruit bats are more likely to host paramyxoviruses. We can then use this “trait profile” to identify likely host species that have thus far never been sampled for viruses.

So far, the project has been computationally manageable, because we’ve chosen to run it on a small subset of viruses and a small subset of bats. We are using a type of machine learning algorithm called boosted regression trees, which is particularly good at handling missing data (a big problem in ecological research) and identifying patterns. This is fairly exploratory, hypothesis-generating research, and at the moment we are fine-tuning our model before we use the outputs to target specimens for screening. If some of these specimens test positive, we can then update the data we are feeding into our algorithm to reflect these “novel” hosts, thereby creating a dynamically updated AI pipeline with increasingly accurate predictions.

The funding from the Accelerate Programme will be incredibly helpful for the next stage of our work. It will support my travel to museums and the lab costs of extracting and sequencing viral RNA from several hundred chosen specimens. We may also tap into the expertise of the Accelerate Programme’s AI Clinic if we hit any roadblocks with modelling. It’s particularly helpful to know that we can access technical troubleshooting resources, as this project lies at the intersection of disease ecology and collections-based work—neither of which are historically computationally intensive.

**Our aim**

We hope that the model will first accurately predict known paramyxovirus host species based on their ecology. Based on these ecological trait patterns, it will then generate a list of “novel” suspected hosts, which we plan to use to guide our search for viruses in museum collections. For example, we could screen ~50 specimens of each of the top ten predicted “novel” host species for viral RNA. I’m only looking for one family of viruses in one family of bats, since this is a small-scale proof-of-concept study. However, more broadly, I hope that this study lays out a framework for using machine learning and trait-based modelling to guide viral surveillance in collections.

This project will form a chapter of my PhD thesis. It would be exciting to find some novel hosts in museum collections that we would not have found without using AI to sort through a massive amount of data and generate predictions. However, even if none of the specimens test positive, the predictions themselves will be publishable and will accelerate knowledge in this area. For example, we can map the ranges of these predicted host species and assess the degree of their spatial overlap with humans, which has consequences for downstream viral spillover risk.

**Looking to the future**

What I like about this project conceptually is that we're using modern technology to unlock new data from old specimens and make the most of existing resources by exploring cutting-edge computational methods.
Our study could open the door for proactive host identification in collections before outbreaks occur. Museum collections also offer something different from field-based sampling: a broad spatial and temporal range of host-virus associations. 

I hope that one day museums can function as historical libraries of host-pathogen associations. Ideally, this project will encourage more conversations between machine learning experts, disease ecologists, museum curators, and public health stakeholders. This type of interdisciplinary and international collaboration is fundamental to outbreak prediction and prevention.

*F﻿ind out more about Maya's research [here.](https://mayajuman.github.io/)*

*M﻿aya's project is funded through the Accelerare-C2D3 funding call. Find out more about the call and the projects funded in 2023 [here](https://acceleratescience.github.io/news/2023-10-26-pursuing-innovative-applications-of-ai-in-research-and-real-world-contexts-%E2%80%93-announcing-our-2023-projects.html).*