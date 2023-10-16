---
layout: blog-single
title: How can we … repurpose drugs to live dementia free?
excerpt: >-
  More than half of UK adults know someone that has been diagnosed with
  dementia, and the number of people living with the debilitating disease is
  expected to grow rapidly in the UK and around the world.


  Scientists have long been working on finding ways to keep dementia at bay. One approach is developing new drugs. At the Merkle laboratory at the Wellcome-MRC Institute of Metabolic Science, our team is focusing on trying to repurpose drugs that are already used safely to treat humans and that target metabolic features. 
author: "Dr Ed Harding, Research Associate,  Wellcome-MRC Institute of Metabolic
  Science "
date: August 11, 2023 1:31 PM
categories:
  - machine-learning
tags:
  - news
image: /assets/uploads/ed-harding-profile.jpg
---
More than half of UK adults know someone that has been diagnosed with dementia, and the number of people living with the debilitating disease is expected to grow rapidly in the UK and around the world.

Scientists have long been working on finding ways to keep dementia at bay. One approach is developing new drugs. At the [Merkle laboratory](https://www.merklelab.org/) at the [Wellcome-MRC Institute of Metabolic Science](https://www.ims.cam.ac.uk/), our team is focusing on trying to repurpose drugs that are already used safely to treat humans and that target metabolic features. 

This is because many of the modifiable risk factors for dementia such as obesity, diabetes and hypertension act on metabolic pathways. Our goal is to find pathways that reduce the risk of dementia for everyone and perhaps we can do that by understanding the mechanisms behind those risk factors and leveraging them for new treatments. Of course, there are challenges to making this happen and a lot of problems to solve. 

**Searching for new treatments** 

Trying to repurpose drugs in our scrapie model, combined with pose estimation, is quite unusual, making the project quite ambitious. Scrapie is an aggressive disease whereby the aggregation of a protein called PrP causes neurons in the brain to die. This is also a common feature of many types of dementia in people so it is a good model to develop treatments. For us, the Holy Grail is to find a drug that can keep neurons alive despite the aggregation of this protein. We are focusing on finding drugs that prevent neurodegeneration generally, as opposed to targeting specific processes of amyloid or tau propagation, in the hope that a treatment might generalise across multiple dementia-associated diseases. 

**Automating pre-clinical drug discovery** 

To make our ambition a reality we need to generate data that is unambiguously rigorous. While this sounds obvious, it is particularly challenging in pre-clinical research. When scientists are trying to show that a particular drug or compound works on a system level, we often generate data in mice. In dementia research, we are highly dependent on expert judgement, in part because you can’t ask mice how they are feeling. This is not ideal because assessments from different people can give different results and are prone to bias. These are some of the hardest experiments to perform rigorously.

So, we are building an automated platform to assess new drugs in mice with neurodegeneration, effectively taking human experts out of the loop and replacing them with a form of AI. After placing a mouse in a specially-designed environment, we film it. A combination of computer vision software and neural networks are trained on the Cambridge high-performance cluster to recognise the clinical features of neurodegeneration in mice and to assess the severity of the disease. 

For example, the system may detect profound motor deficits such as tremors or loss of coordination. In the last few months, we have been able to classify motor features very well, but our job is far from being finished. 
We realised early on that the tests we wanted didn’t exist and we would have to make new ones, which are easy for researchers to use and repeat in a standardised fashion. So, we are now prototyping flexible arenas with the Cavendish workshop to challenge mice mentally and/or physically so that when filmed, we get a better idea of disease progression. The next step is to add a new layer where we consider the sequence of motor features in a mouse treated with a new drug to assess how well it works. Once we can do this, we will have a broad platform for automated drug validation that we think will be highly reproducible.

\
**Accelerating the work**

The Accelerate Programme for Scientific Discovery has been essential in connecting us with experts scattered across the University. We were awarded funding from the Accelerate-C2D3 funding call in 2022 to host a conference bringing together experts in computation pipelines as well as the Clinical School in one room. It helped us get advice from the ALBORADA Drug Discovery Institute (ADDI) and share knowledge about drug selection. We used this as the basis of a computational pipeline to predict which drugs would be most likely to work because, with several thousand potential drugs, we just can’t test everything. We also received helpful advice from clinical colleagues in the drug selection process as to what is most suitable for elderly patients so that we have the best chance of moving new treatments forward. We hope we can produce strong enough data so we can recommend one of these drugs to upcoming multi-arm multi-stage (MAMS) trials in people to prevent neurodegeneration. 

Our vision is to slow neurodegeneration and the onset of symptoms in people by around two to five years. This might not sound like much, but at a population level, the impact could be huge. It would mean older people could enjoy dementia-free years, which would not only improve the quality of their lives but those of their families and carers too.

*Ed was awarded funding through the Accelerate Science and the Cambridge Centre for Data Driven Discovery funding scheme in 2022, you can read more about the awarded projects [here.](https://acceleratescience.github.io/news/2022-11-16-successfully-funded-projects-to-pursue-innovative-applications-of-ai-in-research-and-real-world-contexts.html)*