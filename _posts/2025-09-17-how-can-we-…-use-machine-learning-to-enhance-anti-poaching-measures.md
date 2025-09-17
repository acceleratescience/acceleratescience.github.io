---
layout: blog-single
title: "How can we … use machine learning to enhance anti-poaching measures? "
excerpt: >-
  Africa supports an extraordinary range of habitats and animals, but its
  biodiversity is declining at an alarming rate. For example, the populations of
  monitored vertebrates have declined by 76% between 1970 and 2020 and numerous
  landscapes are under threats from human exploitations.  


  Currently, 19% of Africa’s land is protected to conserve nature and provide ecosystem services for humans. This percentage is expected to increase in a few years following a global commitment for protected areas to cover 30% of the earth by 2030.  However, many of the existing protected areas (PAs) are only ‘paper parks’ because, despite being established legally, they lack effective management, leaving them vulnerable to threats such as illegal logging and poaching. 


  Rangers play a crucial role in detecting illegal activities and preventing further violations in protected areas. But growing up around Nigeria’s Cross River National Park and embarking on patrols here with rangers for almost two years, I noticed that patrol deployment could be improved to maximise limited human and financial resources. 
author: Charles Emogor
date: 2025-09-30T01:00:13+01:00
image: /assets/uploads/charles-emogor-blogpost-photo.png
---
Africa supports an extraordinary range of habitats and animals, but its biodiversity is declining at an alarming rate. For example, the populations of monitored vertebrates have declined by 76% between 1970 and 2020 and numerous landscapes are under threats from human exploitations.  

Currently, 19% of Africa’s land is protected to conserve nature and provide ecosystem services for humans. This percentage is expected to increase in a few years following a global commitment for protected areas to cover 30% of the earth by 2030.  However, many of the existing protected areas (PAs) are only ‘paper parks’ because, despite being established legally, they lack effective management, leaving them vulnerable to threats such as illegal logging and poaching. 

Rangers play a crucial role in detecting illegal activities and preventing further violations in protected areas. But growing up around Nigeria’s Cross River National Park and embarking on patrols here with rangers for almost two years, I noticed that patrol deployment could be improved to maximise limited human and financial resources. 

Without adequate protection of current and future parks, wild animals may be hunted to extinction, which will in turn reduce ecosystem functioning and negatively impact human well-being and livelihoods—as many communities living around PAs depend on wildlife for food and income.  

**A SMARTer approach** 

Many PAs use [SMART](https://smartconservationtools.org/) (spatial monitoring and reporting tool) to gather geo-reference patrol data, including ranger tracklogs and records of illegal activities they encounter (snares, empty cartridges, and hunters). However, the technology’s ability to develop a feedback loop that can inform effective patrol routes that limit illegal activity is limited. To overcome this challenge, I plan to build prototype deep learning models to help park rangers identify where and when to patrol based on recent field data. 

My project spans computer science and ecology and involves researchers at Harvard (Professor Milind Tambe) and Cambridge universities (Professors Anil Madhavapeddy and Robert Fletcher). We aim to increase the efficacy of PAs by analysing decades of SMART data across multiple parks in sub-Saharan Africa (Mozambique, Cameroon, Nigeria, and Uganda).  

While the SMART data makes up the bulk of our research, we are also collecting data on hunter behaviour from Nigeria, which is a critical part of the project. My PhD focused on understanding why people kill pangolins, and I developed a good relationship with hunters who have been open to engaging in my current research. Building on this relationship, we have deployed 120 hand-held GPS to hunters to carry when hunting, allowing us to gather data on their movements and the location of animal capture, including the species. Given that some of the hunters use the Cross River National Park and patrols are ongoing, we hope to gather overlapping data from rangers and hunters in space and time, allowing us to understand how hunters react to ranger presence.  

The data from the hunters also serves another purpose: understanding what shortfall they would face if patrols became more effective. Losing meat and income from hunting without alternative livelihood sources would be detrimental to the well-being of local communities, so we intend to quantify such shortfalls and make the information available to policymakers.  

We would not have been able to collect this crucial data without a grant from the Accelerate Programme in collaboration with the [Cambridge Centre for Data Driven Discovery](https://www.c2d3.cam.ac.uk/) (C2D3). 

**Analysing the data** 

Currently, we are in the early stages of collecting the spatial data, but have started developing deep learning models to understand patterns of poaching and ranger effort together with landscape-level predictor variables, such as slope, vegetation cover, and distance to water bodies, communities, and roads. As an ecologist who is moving into machine learning and computer science—thanks to funding from Schmidt Science Fellows—I am learning as I go and have found the resources at Accelerate Programme, including their year-long Machine Learning Academy, very useful in learning and applying AI in my research.  To validate my deep learning models, we will compare my results with occupancy models, which are used to account for imperfect detection of a variable of interest in a predefined area and to determine the probability of the true presence or absence of a species.  

**Looking ahead** 

A core focus of the work is to deploy our models in the field using existing tools. We hope to develop an adaptive management pipeline for SMART data, allowing for real-time updates and adjustments to patrol strategies based on the latest field data. As SMART is used in over 1,000 protected areas globally, we hope to apply machine learning methods to help reduce illegal hunting plaguing thousands of protected areas globally.  

I would love to change the way patrols are conducted, from reactive (for example, removing traps that may have already maimed or killed animals) to deterring illegal activities from happening in the first place. If we can do this, we will not only be saving species but also avoiding situations where members of local communities are arrested, causing emotional and financial burdens to their families.  



*This project was funded though the 2024 Accelerate-C2D3 funding call for novel applications of AI for research and innovation. You can read more about other funded projects [here.](https://science.ai.cam.ac.uk/news/2024-12-09-exploring-novel-applications-of-ai-for-research-and-innovation-%E2%80%93-announcing-our-2024-funded-projects.html)*