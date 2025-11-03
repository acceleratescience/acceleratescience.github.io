---
layout: blog-single
title: How can we … use LLMs to understand whether disease research happens
  where it’s most needed?
excerpt: >-
  Only 43% of clinical trials take place in low and middle‑income countries,
  despite being home to 80% of the world’s population, while just 0.2% of global
  biomedical research funding goes to low‑income countries, even though they
  shoulder a disproportionately high share of disease burden. 


  Trials in high‑resource settings often produce results that do not necessarily translate to low‑resource contexts, undermining intervention effectiveness. Overall, underinvestment in high‑burden regions leaves critical needs unmet, exacerbating disparities in morbidity and mortality, leading to widened global health inequities.
author: Hongyu Zhou, Research Associate, Department of Computer Science and Technology
date: 2025-11-11T00:00:09+00:00
image: /assets/uploads/hongyu-zhou-blogpost-photo.png
---
Only 43% of clinical trials take place in low and middle‑income countries, despite being home to 80% of the world’s population, while just 0.2% of global biomedical research funding goes to low‑income countries, even though they shoulder a disproportionately high share of disease burden. 

Trials in high‑resource settings often produce results that do not necessarily translate to low‑resource contexts, undermining intervention effectiveness. Overall, underinvestment in high‑burden regions leaves critical needs unmet, exacerbating disparities in morbidity and mortality, leading to widened global health inequities.  

**Finding model answers** 

To investigate this problem, I worked with [Prashant Garg](https://profiles.imperial.ac.uk/prashant.garg) from Imperial College London and Professor [Thiemo Fetzer](https://warwick.ac.uk/fac/soc/economics/staff/tfetzer/) from University of Warwick and Bonn to use a large language model (LLM) to identify relevant diseases in approximately 300,000 papers published in elite medical journals.  

We used a large language model (gpt-4o-mini) to read medical research papers and identify two simple things: which disease each paper studied and which country or region it focused on. Using the same approach, we analysed over 3,000 disease outbreak alerts from the World Health Organization, capturing when and where different health emergencies occurred. Together, these data allowed us to build a time-based view of global medical research and historical disease outbreaks, showing how countries conduct research to combat endemic disease burdens and respond to emerging health crises.  

We document three striking findings. First, research responsiveness to disease burdens has grown steadily since 1990 but remains uneven across income groups, with wealthier countries leading research production on non-communicable diseases. Second, funding choices have a powerful influence: for instance, without philanthropic support, research responsiveness in low-income economies would shrink by about 38%. Third, health shocks such as major outbreaks trigger immediate and enduring increases in research attention, with the strongest responses observed for high-lethality diseases, showing how the global research system mobilizes most intensely when the risks are greatest.  

**Accelerating the project** 

I presented the findings at the International Conference on Computational Social Science in Sweden this summer, and we have released a preprint describing the work [here](https://www.medrxiv.org/content/10.1101/2025.09.29.25336909v1). We are looking to publish the findings in the coming months.  

Currently, we have focused on extracting the disease and country from papers and alerts. As a next step, we aim to use LLMs to extract richer epidemiological and demographic variables such as age, sex, ethnicity, and comorbidities. With this data, we could build a more detailed understanding of studied populations and health disparities. We will also leverage their ability to identify relationships between pathogens, populations, and interventions to construct a knowledge map that can help trace the generation of localised medical evidence. 

This collaboration would not have taken shape without the Accelerate Programme, which created the bridge between my background in information science with a focus on metascience, and the expertise of my colleagues in economics. What brought us together was a shared curiosity about the versatility of large language models and how they might open new directions for social science research, illustrating the Accelerate Programme’s role in bringing different disciplines into dialogue. 

**Next steps** 

We envision our paper as a step toward building a dynamic knowledge map that tracks the equity and responsiveness of global disease research in relation to health burdens. Such a map can help ground broader discussions about who produces medical knowledge and whose health needs are prioritized.  

Beyond analyses, we aim to provide a framework that can evolve and update in real time, enabling health organisations, funders, and policymakers to identify under-served regions, rebalance investments, and coordinate more equitable responses to future health crises.