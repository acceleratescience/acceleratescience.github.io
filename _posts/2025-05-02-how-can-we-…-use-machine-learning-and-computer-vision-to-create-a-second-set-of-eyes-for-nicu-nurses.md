---
layout: blog-single
title: How can we … use machine learning and computer vision to create a second
  set of eyes for NICU nurses?
excerpt: >
  Premature and poorly newborns need round-the-clock care, with clinical
  decisions guided by measurements, such as vital sign monitoring, as well as
  subjective observations by clinical staff. These observations can provide
  crucial information, such as detection of seizures, lethargic behaviour and
  other abnormal movements.


  However, nurses in neonatal intensive care units (NICUs) care for multiple babies at once, who are often in covered incubators. Even with ‘continuous monitoring,’ significant events such as seizures can be missed due to their transient, fleeting nature. Furthermore, long-term changes, such as lethargic behaviour can be potentially indicative of sepsis, one of the most serious conditions for a newborn. Nursing schedules and shift patterns mean these trends are difficult to identify. 
author: Alex Grafton, Research Associate, Department of Engineering
date: 2025-05-06T10:00:00+01:00
teaser: ""
image: /assets/uploads/alex-grafton-blogpost-photo.jpg
---
Premature and poorly newborns need round-the-clock care, with clinical decisions guided by measurements, such as vital sign monitoring, as well as subjective observations by clinical staff. These observations can provide crucial information, such as detection of seizures, lethargic behaviour and other abnormal movements.


However, nurses in neonatal intensive care units (NICUs) care for multiple babies at once, who are often in covered incubators. Even with ‘continuous monitoring,’ significant events such as seizures can be missed due to their transient, fleeting nature. Furthermore, long-term changes, such as lethargic behaviour can be potentially indicative of sepsis, one of the most serious conditions for a newborn. Nursing schedules and shift patterns mean these trends are difficult to identify. 


**Building upon Meerkat Project data**


Working in collaboration with the Department of Paediatrics and the Department of Engineering, I’m harnessing the power of machine learning and computer vision to provide a second set of eyes for NICU nurses as part of the Meerkat Project , ensuring clinically significant events are noted and acted upon.


AI has multiple roles in Meerkat such as classification tasks (detecting the presence of the baby or an intervention), pose estimation (for locating the baby’s head and limbs) and time-series analysis (for identifying adverse events and trends). The project aims to overcome two problems with vision-based monitoring; babies having to be on flat surfaces, supine or unclothed, which presents a barrier to real-world use, and the use of high-performance computers.


We aim to optimise our models to make them suitable to use in the NICU, ideally on a single device that can be used in and around a cot, such as NVIDIA Jetson products. Space is already limited around the cot, so equipment mustn’t take up too much space to avoid getting in the way of care. It is important that data can be processed in real-time cot-side, keeping it secure and private, but this means models have to be optimised with simpler deep neural networks to maintain accuracy without requiring a huge amount of computing power. 


**Perfecting pose estimation**


One focus of our Accelerate Programme-funded project was testing whether we could take models that work on Cambridge’s high-performance computing platforms  and use them locally in a hospital environment as well as pose estimation - looking at an image and knowing where a baby is. 


We use transfer learning to develop pose estimation models for the NICU. We start with a model trained on images of adults and refine it to work well on images of neonates.  This lets us take advantage of the similarities in the images while adapting to the specific circumstances of the NICU. 


The model currently detects the baby’s torso by locating the hips and shoulders, and we hope will soon be able to locate the baby’s limbs. The Accelerate Programme funded the purchase of computer hardware and time on the HPC for training, as well as an undergraduate research opportunity in Summer 2024 to test new model architectures and model compression techniques for real-time performance on an NVIDIA Jetson.


We set out to test several different architectures using a high-quality dataset collected by the project from 48 participants in neonatal intensive care , comprising RGB video data (standard colour imaging), infra-red video, depth video data (providing 3D scene information). It is  among the largest neonatal video datasets for research and also contains data from an unmodified NICU environment, meaning we can train or optimise models using real-world data, including times where parents and nurses are interacting with the baby. 


We were interested in merging different types of images that could be used to analyse a baby’s movements in different situations, such as normal colour video during the daytime and infrared images in the dark. 


The camera uses infrared to measure depth and works in the dark which is very useful because babies are often in covered incubators. We found it to be a challenge for a model to look at images and choose the most useful type to use for analysis. Instead, we tested model architectures that extract different features from different image types and combine them to produce an overall measurement.


We have not yet shared our results, but we have managed to achieve performance that matches what you might expect from adult models that do the same thing and have analysis in real-time at a rate of 30 frames per second.


**Looking to the future**


Having made progress in pose estimation, we are now looking at how we may be able to use the camera set-up to monitor vital signs and improve the way they are reported. We intend to widen our dataset and explore how the cot environment affects the performance of our models. For example, we will investigate whether the position of the baby and if he or she is clothed or covered makes a difference. We would also like to look at how to report common scenarios that could raise a patient monitor alarm unnecessarily. When someone interacts with the baby in the cot, it can often affect the vital sign measurement and trigger alarms, potentially causing alarm fatigue.
Our ultimate goal is to provide a second set of eyes for clinicians to help them monitor a baby’s health by spotting long-term trends and short-term events. Automatically drawing attention to important events means that clinical staff can spend less time looking through videos and more time using their expertise to analyse baby behaviour.


*This project was funded though the 2023 Accelerate-C2D3 funding call for novel applications of AI for research and innovation. You can read more about other funded projects [here. ](https://science.ai.cam.ac.uk/news/2023-10-26-pursuing-innovative-applications-of-ai-in-research-and-real-world-contexts-%E2%80%93-announcing-our-2023-projects.html)*