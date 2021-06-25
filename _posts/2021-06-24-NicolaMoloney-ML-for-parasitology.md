---
layout: post
title:  How can we…expedite data curation for understanding the cell biology of parasites?
date:   2021-06-24 14:00:00
categories:
  - Accelerate-Spark data science residency
tags:
  - news
author: Nicola Moloney, Department of Biochemistry, University of Cambridge
images:
preview:
  - images/nicolamoloney.jpg
excerpt:
  Understanding the proteome – the set of proteins that a cell produces – is crucial in understanding how a cell works, and (in the case of a disease-causing organism) developing effective treatments. One important way to understand the proteome is to study where proteins are found within a cell - known as spatial proteomics. Spatial proteomics can use machine learning methods with quantitative proteomic data to determine where proteins are localised within a cell.
---

*In this new blog series, members of the Cambridge AI for science community tell us about how participation in the Accelerate-Spark data science for science residency has contributed to their research. In this post, [Nicola Moloney from the Department of Biochemistry](https://www.bioc.cam.ac.uk/directory/ms-nicola-moloney) tells us about her work.*

My research involves spatially mapping the [proteomes](https://en.wikipedia.org/wiki/Proteome) of parasites that cause African [trypanosomiasis](https://en.wikipedia.org/wiki/Trypanosomiasis), a disease which substantially reduces the productivity of livestock animals in sub-Saharan Africa. Understanding the proteome – the set of proteins that a cell produces – is crucial in understanding how a cell works, and (in the case of a disease-causing organism) developing effective treatments. One important way to understand the proteome is to study where proteins are found within a cell. Protein function is often tightly linked with localisation and, consequently, where a protein is found can provide information on its role within the cell.

Spatial proteomics can use machine learning methods with quantitative proteomic data to determine where proteins are localised within a cell. To do this, researchers use purpose-built supervised machine learning methods on multidimensional experimental data, to classify which proteins are found in which parts of a cell (known as subcellular compartments). Such classification requires training data, in the form of proteins with a literature-supported localisation within a cell (i.e. data about proteins with characterised functions and localisations). 

My main motivation for attending the Accelerate-[Cambridge Spark](https://cambridgespark.com) data science for science residency was to learn ways to expedite the curation of this training data via programmatic access to scientific literature, in addition to learning new ways to explore large datasets.

During [the course](https://www.cst.cam.ac.uk/news/july-data-science-residency-applications-open) I worked on a project to mine scientific literature in an automated way for information on localisations for individual proteins. This was achieved by accessing online literature databases programmatically via their [APIs](https://en.wikipedia.org/wiki/API). I had no previous experience with using an API before and learned how to from the course lectures and with the help of my project mentor throughout. After the course, I was then equipped to develop this project further into a fully working version. This enabled me to build a database that allows me to efficiently curate a training dataset for use in my research. Other researchers in the domain will also be able to use this tool.

The course also trained me in how to generate interactive visualisations that could be shared with others easily. This is especially helpful as it facilitates the sharing of processed data in informative visualisations without requiring others to run code. Altogether, this course provided me with (i) an overview of other tools in data science that have application in my research, (ii) an ability to implement some of these tools, and (iii) a stronger basis from which I can learn new methods. Importantly, the experience instilled me with a confidence to further explore data science for use in my work. As a result, I more readily attempt to use new tools I learn about and have done so successfully.

Generally, I’ve found that the data science methods I learned on the course enable me to better understand my data by interrogating it with a toolbox of methods, more exhaustively analyse my data by expediting processes, proficiently communicate it with others through visualisations, and better organise my data through improved data management practices. I increasingly use data science in my research and continue to actively develop my skills herein. I plan to continue this tract in future roles.

***Nicola Moloney (June 2021)***
