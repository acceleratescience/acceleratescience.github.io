---
layout: post
title:  How can we…understand the crafts of ancient communities using machine learning?
date:   2021-06-10 16:49:00
categories:
  - Accelerate-Spark data science residency
tags:
  - news
author: Ema Bauzyte, Department of Archeology, University of Cambridge
images:
preview:
  - images/emabauzyte.jpg
excerpt:
  The composition of metals found at archeological sites can tell us a lot about the communities that lived in an area. In my research, I analyse metals found at archeological sites in Cyprus to investigate what metals were used by whom, and to understand how craftspeople in these communities worked.
---

*In this new blog series, members of the Cambridge AI for science community tell us about how their participation in the Accelerate-Spark data science for science residency has contributed to their research. In this first post, [Ema Bauzyte from the Department of Archeology](https://www.arch.cam.ac.uk/staff/dr-ema-bauzyte) tells us about her work.*

The composition of metals found at archeological sites can tell us a lot about the communities that lived in an area – their creativity, their approach to innovation, and their social identity. In my research, I analyse metals found at archeological sites in Cyprus, using chemical composition analysis, CT imaging and optical microscopy to investigate what metals were used by whom, and to understand how craftspeople in these communities worked.   

The field of archeology is becoming more interested in machine learning. In my research, I work with chemical data with lots of variables. To get insights from this data, I need to be able to explore these variables across lots of different dimensions. I applied to the [Accelerate-Spark data science for science residency](https://acceleratescience.github.io/spark-course-summary.html) as an opportunity to learn how to efficiently process datasets in automated ways while reducing errors. 

Machine learning also seemed like a great way to help keep up with the literature. Last year for example, there was [a major article](https://doi.org/10.1016/j.palaeo.2020.109849) on strontium [isotopes](https://en.wikipedia.org/wiki/Isotope_analysis) used for [provenancing](https://en.wikipedia.org/wiki/Provenance) studies. Analysing the amount of these isotopes present at archeological sites is an important way of assessing the provenance of organic material, but the baselines for these studies usually have to be established through painstaking and expensive empirical analysis of local plants and animals. However, modeling has increasingly been used to predict isotopic ratios. By pooling the available data together and using [random-forest regression](https://en.wikipedia.org/wiki/Random_forest), this paper predicted bioavailable strontium isotope ratios on a global scale. We can then use this information to trace origins of animals and people in the archaeological record. Other applications I have found inspiring relate to the automated identification of structures in images, such as use of Regions-based [Convolutional Neural Networks](https://en.wikipedia.org/wiki/Convolutional_neural_network) to identify archaeological features (like barrows or fields) in aerial images.

While I had actually completed my PhD a while ago, during the course I decided to return to my thesis and applied the [t-sne](https://en.wikipedia.org/wiki/T-distributed_stochastic_neighbor_embedding) algorithm to my research. This already proved incredibly helpful in identifying clusters in my data. Using [Principal Components Analysis](https://en.wikipedia.org/wiki/Principal_component_analysis) and t-sne helped to unlock insights into clusters and relationships between analysed objects that were not possible to see as a human. This approach has helped to answer questions relating to the connectivity of different areas and visualise exactly which sites are related.

The Accelerate Programme and working with [Cambridge Spark](https://cambridgespark.com/) gave me the confidence and curiosity to learn how to use different algorithms and solve problems with machine learning. Cleaning data with code has become part of my day-to-day work. I use these skills all the time – I have moved away from Excel as a result! I am conducting a lot of analysis using techniques like t-sne or hierarchical clustering. I am also now able to engage a lot more with the literature on machine learning and archeology and see how conclusions can be applied in this research. 

I can see these methods will change how landscape studies are conducted in archeology. Archeology traditionally looked at small datasets on one site. With machine learning, it is possible to mine legacy data and see more macro-scale analysis enabling more global studies over time. I also believe that the application of machine learning to archeology can shift the perception of the domain being purely Humanities to more interdisciplinary with ways of working with data which can lead to more innovation and could help make a stronger case for funding.

***Ema Bauzyte (June 2021)***
