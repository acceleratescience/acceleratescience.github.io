---
layout: blog-single
title: How can we…use AI for the early detection of neurodegenerative diseases?
excerpt: >
  Understanding and diagnosing brain-related diseases including Alzheimer’s
  disease is complex, primarily due to the need to integrate highly
  heterogeneous data from MRI, PET and non-imaging clinical information such as
  genetic profiles and cognitive scores.


  In recent years, AI has become increasingly instrumental in facilitating disease diagnosis and prognosis, largely through its ability to process and analyse large-scale multi-modal medical data. Recent advancements in brain foundation models have shown significant promise in addressing a range of brain-related tasks, but they tend to be limited by task and data homogeneity, restricted generalisation beyond segmentation or classification, and inefficient adaptation to diverse clinical tasks. 
author: Zhongying Deng, Post-doctoral Research Associate in the Department of Radiology
date: 2026-09-28T16:22:29+01:00
categories:
  - machine-learning
teaser: ""
image: /assets/uploads/zhongying-deng-blogpost-photo.png
---
Understanding and diagnosing brain-related diseases including Alzheimer’s disease is complex, primarily due to the need to integrate highly heterogeneous data from MRI, PET and non-imaging clinical information such as genetic profiles and cognitive scores.

In recent years, AI has become increasingly instrumental in facilitating disease diagnosis and prognosis, largely through its ability to process and analyse large-scale multi-modal medical data. Recent advancements in brain foundation models have shown significant promise in addressing a range of brain-related tasks, but they tend to be limited by task and data homogeneity, restricted generalisation beyond segmentation or classification, and inefficient adaptation to diverse clinical tasks. 

Together with Dr Angelica I. Aviles-Rivero, Prof. Zoe Kourtzi, and Prof. Carola-Bibiane Schönlieb, I am focusing on brain disease analysis and addressing how to enable models to excel in multiple tasks, such as segmentation of brain structures like tumours and classification of brain diseases such as Alzheimer's, a disease that accounts for 60-80% of dementia cases. I am particularly interested in early detection of brain diseases and want to use data captured at a patient’s baseline visit to predict the diagnosis results quickly, so that treatment to slow down the progression of cognitive impairments can begin as soon as possible.

**Building SAM-Brain3D**

To aid in diagnosis, we developed a new brain foundation model, SAM-Brain3D and a Hypergraph Dynamic Adapter (HyDA) which is a lightweight module built upon hypergraph (a machine learning method excelling in capture higher-order relations between different data modalities). 

We trained the SAM-Brain3D model on large-scale data – nine brain segmentation datasets, encompassing 14 MRI sub-modalities and 66,280 image-label pairs from 4451 cases - using Accelerate-C2D3 funding to access the compute needed for the task. This enables the model to capture detailed anatomical and modality-specific characteristics of the brain for segmenting diverse brain targets such as tumours including meningioma, up to 35 brain structures, and unseen targets, as well as giving it some knowledge about brain structures to apply to diverse tasks. 

Hypergraphs can better model high-order relations across multimodal data, so we added HyDA to adapt the SAM-Brain3D model to diverse tasks involving multi-modal data. HyDA fuses complementary multi-modal data to extract disease-related information, and dynamically generates patient-specific convolutional kernels for multi-scale feature fusion and personalised patient-wise adaptation. It therefore can contribute to a better recognition of various brain diseases.

When we tested SAM-Brain3D, they demonstrated that it consistently surpasses current state-of-the-art methods across a variety of brain-related downstream tasks. We believe that the novelty of our work lies not in isolated components, but in purposeful integration and adaptation to the unique challenges of brain disease analysis. 

We have published two papers on the model so far* with another to be published shortly. We have already organised two workshops at top-tier conferences on foundation models for medical imaging  in conjunction with a top medical imaging conference focusing on AI, funded by the 2024 Accelerate-C2D3 call for projects.  Without the funding, it would not have been possible to conduct research on large scale foundation models because we would not have had enough computational resources to achieve our goals. The funding also enabled me to attend the conference and organise the workshops.

**Looking to the future**

The model has some limitations. Many subjects may have incomplete modalities, and these subjects cannot be used for training or inference, limiting the flexibility of HyDA, and our method cannot effectively handle the class imbalance issue, when one data class outnumbers another significantly, potentially reducing the performance of an AI model. This imbalance leads to our method excelling in some metrics like accuracy and specificity while failing in the others such as AUC (Area Under the Curve, where in this case the curve is an Receiver Operating Characteristic curve). It would be interesting to explore how to effectively utilise incomplete modalities and better tackle the class imbalance issue in the future.


We found that model performance can also vary across brain regions, with preliminary observations suggesting that regions strongly implicated in disease pathology – such as the hippocampus in Alzheimer’s disease - tend to provide greater discriminative power, whereas regions with more subtle changes are more challenging to model. We plan to pursue this direction in future work, with the aim of improving clinical interpretability and understanding of disease mechanisms.

We hope that one day our model can be used in clinical practice to help clinicians deal with diverse tasks and scenarios, including the early detection of dementia. Currently, around 982,000 people in the UK are thought to live with the debilitating condition, with that number expected to rise to 1.4 million by 2040, making effective new detection methods and treatments a high priority in medical research. 

This project was funded though the 2024 Accelerate-C2D3 funding call for novel applications of AI for research and innovation. You can read more about other funded projects h[ere.](https://science.ai.cam.ac.uk/news/2024-12-09-exploring-novel-applications-of-ai-for-research-and-innovation-%E2%80%93-announcing-our-2024-funded-projects.html)

\*﻿Full papers available here:

Deng, Z., Wang, H., Huang, Z., Zhang, L., Aviles-Rivero, A.I., Liu, C., He, J., Kourtzi, Z. and Schönlieb, C.B., 2025. Brain foundation models with hypergraph dynamic adapter for brain disease analysis. *Pattern Recognition*, p.112595.

Deng, Z., Wang, S., Aviles-Rivero, A.I., Kourtzi, Z. and Schönlieb, C.B., 2025. HIBMatch: Hypergraph Information Bottleneck for Semi-Supervised Alzheimer's Progression. *IEEE Journal of Biomedical and Health Informatics*.