---
layout: blog-single
title: How can we … use machine learning to make medical imaging segmentation
  more accessible?
excerpt: >
  Medical image segmentation is inherently time-consuming and costly due to the
  reliance on expert manual labelling. In this process, highly trained
  professionals, such as radiologists or specialized doctors, meticulously
  delineate structures and anomalies in imaging data.


  I am exploring segmentation methods with the aim of building an automatic model that can process images more quickly and efficiently while preserving the accuracy of results using machine learning. I would also like to explore the interoperability of the model since we would like to understand how the model performs. This would result in cost savings, making segmentation scans more accessible  , which is good news for health services, patients, and clinicians, who could benefit from more accurate results.
author: "Chun-Wun (Sam) Cheng, PhD student in Mathematics of Information ,
  Department of Applied Mathematics and Theoretical Physics, University of
  Cambridge "
date: 2025-04-14T15:52:35+01:00
image: /assets/uploads/sam-cheng-blog-photo.png
---
Medical image segmentation is inherently time-consuming and costly due to the reliance on expert manual labelling. In this process, highly trained professionals, such as radiologists or specialized doctors, meticulously delineate structures and anomalies in imaging data.


I am exploring segmentation methods with the aim of building an automatic model that can process images more quickly and efficiently while preserving the accuracy of results using machine learning. I would also like to explore the interoperability of the model since we would like to understand how the model performs. This would result in cost savings, making segmentation scans more accessible, which is good news for health services, patients, and clinicians, who could benefit from more accurate results.


**Part of a bigger picture**


My work is part of a project that seeks to address limitations in image reconstruction and denoising. Overcoming these limitations by leveraging diffusion models and Plug-and-Play (PnP) methods could improve diagnoses if they could be applied in hospitals.


PnP methods are iterative approaches for solving inverse problems in imaging, such as reconstruction and denoising. The key idea is to "plug in" a pre-trained denoiser, allowing for flexibility in handling various noise models and constraints without explicitly defining a prior distribution. When used for medical imaging applications like MRI, CT, and ultrasound, they offer faster, more efficient imaging and improved image quality for better diagnoses.


Diffusion models have shown promise in various data modelling tasks, but there are challenges to overcome. The first, which I am working on, is efficiency. Different models often require significant computational resources and time for training, making them less practical for real-time applications. This limitation hinders their adoption in medical imaging, where quick results are essential for patient care.


The second is achieving or working towards a generalized framework. Existing attempts to apply diffusion models to medical imaging reconstruction have fallen short in achieving satisfactory results, necessitating an impractical number of evaluations and extensive customisation to suit specific tasks.


Faster and more precise diffusion models would potentially transform medical imaging techniques, enabling improved diagnosis, enhanced treatment planning and superior patient outcomes across various medical domains. 


**An inspirational visit**


I would like to perfect the model so it is more efficient than a state-of-the-art model such as TransUNet, U-KAN, but can perform the same image processing tasks and return accurate results. In addition, I would like to increase the interpretability.


The Accelerate Programme for Scientific Discovery and Cambridge Centre for Data Driven Discovery (C2D3) funding made my visit to Tsinghua University, one of the top universities in China, possible. It was part of a project funded by the Accelerate-C2D3 call in 2023, working with Dr Angelica Aviles-Rivero on [diffusion models for medical diagnosis](https://science.ai.cam.ac.uk/2024/11/08/better-faster-and-lighter-diffusion-models-for-medical-diagnosis).

\
I was able to attend several seminars on plug and play method, neural operator for PDEs and segmentation and had the opportunity to talk with professors and other researchers and technical experts in various departments about how to build the model and then improve its performance. As I am in the Mathematics Department at Cambridge, it was helpful to access specialist knowledge from the engineering side and machinery that I am less familiar with, and discuss how I might solve technical problems.


Discussing the challenges and possible solutions face-to-face was invaluable and gave me ideas of how to improve my model. For example, how to better fine-tune the hyperparameters to increase model performance, and how to implement the concept. In addition, the in-person discussion further helped me to finalise the idea. 
These helpful discussions helped me prepare and improve the paper I have [just published](https://arxiv.org/pdf/2503.03141). Without them, this work could not have been accomplished in such a short timeframe. The Accelerate Programme played a key role in facilitating this progress, and I am truly thankful for the opportunity. The experience has also opened the door for future collaborative opportunities with researchers at Tsinghua University, potentially involving generative models and their applications to medical imaging. Our current model only applies to medical segmentation, and we hope to extend it to the diffusion model in the future.


**Looking to the future**


While there is work to do before my model can be used in a hospital by specialists, I hope it will help reduce the cost of processing medical images to lessen the financial burden on patients who pay for their own medical care, and that of publicly-funded health services, including the NHS.


In the long term, I hope the model will lower the cost of medical segmentation and increase accuracy by making imaging more affordable so that everyone can benefit from it with the help of machine learning.

*T﻿his project was funded though the 2023 Accelerate-C2D3 funding call for novel applications of AI for research and innovation. You can read more about other funded projects [here.](https://science.ai.cam.ac.uk/news/2023-10-26-pursuing-innovative-applications-of-ai-in-research-and-real-world-contexts-%E2%80%93-announcing-our-2023-projects.html)*