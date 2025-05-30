---
layout: blog-single
title: How can we … use machine learning for more accurate brain age estimation
  and early neurodegeneration detection?
excerpt: Understanding how the brain ages and identifying the earliest signs of
  neurodegeneration are some of the most critical challenges in neuroscience.
  Accurately assessing brain age could help detect conditions like Parkinson’s
  or Alzheimer’s years before symptoms appear, enabling earlier interventions
  that may improve outcomes for millions of people worldwide.
author: Jakob Träuble, PhD Student, Department of Chemical Engineering and
  Biotechnology
date: 2025-06-09T10:00:00+01:00
image: /assets/uploads/jakob-trauble-photo.jpg
---
Understanding how the brain ages and identifying the earliest signs of neurodegeneration are some of the most critical challenges in neuroscience. Accurately assessing brain age could help detect conditions like Parkinson’s or Alzheimer’s years before symptoms appear, enabling earlier interventions that may improve outcomes for millions of people worldwide.

Magnetic Resonance Elastography (MRE) - a technique that provides valuable insights into the mechanical properties of brain tissue by quantifying its stiffness and viscoelasticity has shown strong potential for detecting age-sensitive changes earlier than conventional imaging modalities such as Magnetic Resonance Imaging (MRI) scans. This could help doctors spot early signs of disease before symptoms appear, giving patients a better chance at timely treatment.

Before this benefit can be realised, we need to overcome the challenge of variability across different datasets.



**Addressing the challenge**

Our project - a collaboration between researchers from Cambridge’s Departments of Chemical Engineering and Biotechnology and Applied Mathematics and Theoretical Physics, and clinical partners in the US and Cardiff - combines insights from biomechanical brain imaging and machine learning to address this variability and extract meaningful biological patterns from complex, heterogeneous datasets.

In earlier phases, we developed [contrastive learning frameworks](https://arxiv.org/pdf/2408.00527) tailored to brain age prediction from MRE data, outperforming existing modelling approaches by learning semantically meaningful and age­ sensitive representations of mechanical brain properties. These models revealed that MRE-derived stiffness and damping ratio maps offer superior sensitivity to age-related changes when compared to anatomical MRI. [Our research](https://www.biorxiv.org/content/10.1101/2025.03.25.645330v1.abstract) demonstrates that this approach can help distinguish patients with Alzheimer’s Disease (AD) and Mild Cognitive Impairment (MCI), pointing to MRE’s value as a clinical biomarker for neurodegeneration.

The next phase of our work introduces domain-invariant contrastive learning, which is an approach designed to overcome the challenge of variability, as a result of confounding variables such as scanner type, acquisition protocols, or demographic variation. These factors can introduce biases that skew machine learning models away from the biological signals of interest.

For example, machine learning models trained on heterogeneous datasets may learn representations that are inherently flawed, capturing dataset-specific artefacts such as the type of scanner used rather than true underlying biological signals. This negatively affects downstream tasks like disease diagnosis and progression prediction, reducing the models' accuracy and reliability. 

Furthermore, the inability to effectively integrate datasets with varying protocols and scanner types hampers the pooling of larger, more diverse datasets, which can prevent meaningful analysis and collaboration. The issue is especially pronounced in MRE due to the scarcity of data, making it critical to address for advancing research in this modality.

By effectively integrating diverse datasets, we can enhance the development of robust, generalisable machine learning models, ultimately improving our ability to diagnose and treat neurological diseases.



**Using machine learning to detect biological signals**

Our approach begins by systematically identifying and quantifying confounding variables from metadata using statistical and computational methods. Once identified, domain adaptation techniques are integrated directly into the learning framework. These methods penalise the model if it inadvertently learns dataset­ specific characteristics, guiding it towards representations that are truly predictive of brain age-independent of external factors ensuring it captures true biological signals rather than dataset-specific artefacts.

This method not only enhances downstream task performance, such as accurate brain age estimation and early neurodegeneration detection, but also facilitates seamless integration of data from multiple studies, significantly expanding the pool of usable data. This is especially valuable in brain imaging research, where datasets are often small, expensive to acquire, and vary widely in acquisition protocols - limiting progress unless harmonised effectively.

Support from the Accelerate Science – Centre for Data Driven Discovery funding call is enabling us to scale this framework to larger, more diverse datasets, such as multi-site studies involving different scanners, bringing MRE closer to widespread clinical adoption and fostering more collaborative, data-integrated neuroscience research. The funding has supported the application of our models to disease detection and the development of domain-invariant contrastive learning methods, as well as their evaluation across varied clinical settings, by providing access to computing resources for efficient model training and essential tools for data pre-processing and storage - both critical to handling large, heterogeneous neuroimaging datasets.



**Looking to the future**

The interdisciplinary nature of our work is exciting. In the near term, our goal is to scale and validate these machine learning methods across more diverse datasets and clinical populations to ensure their robustness and generalisability. This is a crucial step toward translating our research into clinical tools. By enabling better data integration and earlier disease detection, our project not only has the ability to push technical boundaries, but holds real-world potential to transform how we understand, monitor, and protect brain health.

We plan to work closely with clinical partners to integrate our models into existing imaging workflows and assess their potential in real diagnostic settings. Ultimately, our aim is to help clinicians detect neurological diseases earlier and more accurately — bringing machine learning one step closer to making a meaningful difference in patients’ lives.

*This project was funded though the 2024 Accelerate-C2D3 funding call for novel applications of AI for research and innovation. You can read more about other funded projects [here.](https://science.ai.cam.ac.uk/news/2024-12-09-exploring-novel-applications-of-ai-for-research-and-innovation-%E2%80%93-announcing-our-2024-funded-projects.html)*