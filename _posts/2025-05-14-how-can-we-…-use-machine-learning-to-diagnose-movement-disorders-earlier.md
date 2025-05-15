---
layout: blog-single
title: How can we … use machine learning to diagnose movement disorders earlier?
excerpt: >-
  Parkinson's is the fastest-growing neurological condition in the world, but
  currently, there is no cure.


  In the UK, around 153,000 people are already living with Parkinson’s . As the condition progresses, the symptoms of Parkinson's can worsen. Treatments are available to help reduce the main symptoms such as tremors and maintain quality of life for as long as possible, but making an accurate diagnosis of Parkinson’s, particularly in its early stages, can be difficult.


  Parkinson’s and its sub-variants as well as other movement disorders such as corticobasal syndrome can present in a very similar way in the early stages. It is important to diagnose them accurately as early as possible, not only in terms of patient care but managing patients' and their families’ expectations.
author: Dr Marta M. Correia, Principal Research Associate, MRC Cognition and
  Brain Sciences Unit
date: 2025-05-15T10:00:57+01:00
categories:
  - machine-learning
image: /assets/uploads/marta-correia-photo.jpeg
---
Parkinson's is the fastest-growing neurological condition in the world, but currently, there is no cure.

In the UK, around 153,000 people are already living with Parkinson’s . As the condition progresses, the symptoms of Parkinson's can worsen. Treatments are available to help reduce the main symptoms such as tremors and maintain quality of life for as long as possible, but making an accurate diagnosis of Parkinson’s, particularly in its early stages, can be difficult.

Parkinson’s and its sub-variants as well as other movement disorders such as corticobasal syndrome can present in a very similar way in the early stages. It is important to diagnose them accurately as early as possible, not only in terms of patient care but managing patients' and their families’ expectations.

**MRI scans and Parkinson’s**


My research focuses on using quantitative MRI methods to understand the brain in health and pathology. I am particularly interested in diffusion MRI, an imaging modality which has been shown to provide useful information about the microstructural architecture of the brain.


One of my projects used diffusion and structural MRI combined with machine learning methods to develop diagnostic models for differentiating Parkinson's disease from other movement disorders.  Diffusion MRI is typically used to study brain white matter (i.e., bundles of myelinated axons), while structural MRI can be used to study the grey matter (i.e., neuronal cell bodies). By combining the two techniques we are able to get a global assessment of the brain changes due to pathology, maximising the amount of information passed on to the diagnostic models.


There is a pressing need for reliable biomarkers to differentiate these disorders, not only to aid diagnosis in early cases, but to monitor progression in trials and to support ante mortem studies of pathogenesis.


MRI scans currently tend to be used to rule out other potential causes of symptoms such as tremors - a tumour or stroke, for example. My collaborators and I are using MRI data to try and aid early diagnosis by employing machine learning to extract relevant features from MRI scans and using them to differentiate between patient sub-variants.

\
We are not alone in exploring this area. In recent years, several studies have used MRI data combined with machine learning and statistical classifiers to successfully differentiate between different forms of Parkinsonism. However, several questions and methodological issues remained to minimise bias and artefact-driven classification. Almost everyone moves a little during an MRI scan, with some sequences taking five to 10 minutes, but those with symptoms of movement disorders including tremors and rigidity can find it more difficult to stay still, with patterns of movement corrupting the quality of images, for example they would be blurrier. If this happens, there is a good chance that machine learning will pick up on artefacts rather than the pathology. 


We compared different approaches for feature selection and different magnetic resonance imaging modalities, with well-matched patient groups and tightly controlling for data quality issues related to patient motion. Our [results](https://academic.oup.com/braincomms/article/2/1/fcaa051/5825725) supported the use of statistical classification approaches to diagnose different forms of Parkinson’s. We concluded that diagnostic biomarker evaluation including MRI-based classifiers may one day be an important tool for clinicians to use when evaluating patients.

\
**Accelerating skills**


I had worked with classification algorithms before taking the Accelerate Programme’s Data Science Residency course and the Machine Learning Academy, but they have been very useful in helping me transition to Python. I used MATLAB for several years and was very comfortable with it, but it is licensed and I wanted to be part of the scientific community’s move to open science and use only publicly available tools so we can be more transparent and make our scripts publicly available to everyone.  The shift means a lot of neuroimaging research has been moving to Python and the courses allowed me to immerse myself in learning it. The Machine Learning Academy also exposed me to several other topics in machine learning, such as different ensemble methods for multi-label classification and methods for explainable AI, which will be very relevant for my future work. 


The Accelerate Programme community is brilliant. I’ve been to some social events and learned how researchers in different departments tackle similar problems. When you’re thinking about translating machine learning methods into a clinical setting it’s useful to make new connections and learn from them. I’m giving a seminar at the Cancer Research UK Institute because of a meeting at an Accelerate Programme Community dinner.


**Looking to the future**


While the Parkinson’s diagnosis project is no longer a key focus for me, I remain interested in the problem of head movements in MRI scanners and how it affects data quality and machine learning outputs. I am working on methods to track the head movements of participants while inside a scanner and using that information to correct the movement artefacts affecting images. These approaches will include offline reconstruction of the MRI images using deep learning, another method covered in the Machine Learning Academy. 


We are currently testing these methods on healthy adults only, but I hope to apply them to children and patients with Parkinsonian syndromes who are more likely to move in a scanner. If successful, these movement correction methods would result in better quality images which would hopefully improve our understanding of brain changes in these populations, as well as reducing the amount of MRI data that is excluded from research studies due to poor quality. It’s important that patients who cannot lie still in a scanner are represented in studies or we are potentially excluding people who have severe symptoms and cannot generalise findings for the benefit of the whole patient population.


Hopefully machine learning can help us solve this problem and increase patient inclusivity in MRI research.