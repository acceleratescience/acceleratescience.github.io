---
layout: blog-single
title: Better, faster and lighter diffusion models for medical diagnosis
excerpt: >-
  Imaging is a key tool in medical diagnosis but images can be ‘noisy’, making
  their analysis challenging. 


  Our project addresses the limitations in the fields of image reconstruction and denoising by leveraging diffusion models and plug-and play methods. We are focusing on their theoretical foundations and practical applications, particularly in the medical domain. 


  Our project, called “From Theory to Treatment: Advancing Diffusion Models for Medical Diagnosis,” it is one of 11 projects funded through the 2023 Accelerate Programme and Cambridge Centre for Data Driven Discovery (C2D3) funding call. 
author: Angelica Aviles-Rivero, Senior Research Associate, Department of Applied
  Mathematics & Theoretical Physics
date: November 8, 2024 12:50 PM
image: /assets/uploads/group_summer_2024.jpg
---
Imaging is a key tool in medical diagnosis but images can be ‘noisy’, making their analysis challenging. 

Our project addresses the limitations in the fields of image reconstruction and denoising by leveraging diffusion models and plug-and play methods. We are focusing on their theoretical foundations and practical applications, particularly in the medical domain. 

Our project, called [“From Theory to Treatment: Advancing Diffusion Models for Medical Diagnosis,”](https://math-ml-x.github.io/Diff4Med/) is one of 11 projects funded through the 2023 Accelerate Programme and Cambridge Centre for Data Driven Discovery (C2D3) [funding call. ](https://acceleratescience.github.io/news/2023-10-26-pursuing-innovative-applications-of-ai-in-research-and-real-world-contexts-%E2%80%93-announcing-our-2023-projects.html)

**Developing cutting-edge diffusion models for medicine**

The problem of improving diffusion models for medical data specifically is a current major undertaking in the field. Although the literature has shown outstanding results, a significant limitation remains in terms of computational resources and generalisation for image reconstruction across various modalities, including MRI and CT. The problem at hand centres on the critical challenges encountered in medical image reconstruction and denoising, with technical and clinical implications that we plan to enhance.


Specifically, we aim to develop cutting-edge diffusion models tailored specifically for medical image reconstruction and denoising. We hope these models will revolutionise the field by substantially reducing computational demands, rendering diffusion models practical for diagnosis using any medical modality including PET, MRI, and CT, leading to faster diagnoses and better patient care.


Diffusion probabilistic models - a critical tool in generative modelling - yield record-breaking performance in tasks such as image synthesis, video generation, and molecule design. Still, their efficiency remains challenging, especially in the reverse denoising process due to slow convergence rates and high computational costs.

We investigated sampling and conditioning strategies. Our team developed an approach that leverages continuous dynamical systems to design a [novel denoising network](https://arxiv.org/pdf/2310.20092v2) for diffusion models. It is more parameter-efficient, exhibits faster convergence, and demonstrates increased noise robustness. It’s faster in inference than the baseline models when measured in equal conditions while converging to better quality solutions.

In our [latest paper](https://openreview.net/pdf?id=Y4YWzBiTEV), we provide a mathematical intuition as to why our proposed reverse process is faster as well as a mathematical discussion of the empirical trade-offs in the denoising downstream task. The number of reverse time steps, depends on the undersampling rate of the reconstruction tasks, leading to fewer reverse time steps required. We also make the case that our method is compatible with existing performance enhancement techniques, and when these are used together, they could enable further improvements in efficiency, quality, and speed. Mathematical intuition is crucial as it provides a deeper theoretical foundation for understanding the efficiency gains of our approach, enabling us to identify new opportunities for further refinement and ensuring the model’s performance is not only empirically validated but also theoretically sound.


Secondly, we proposed an innovative approach to image reconstruction using diffusion models as generative deep priors within a Plug-and-Play (PnP) framework. 

Plug-and-Play methods are increasingly used to solve inverse problems and have a wide range of applications from image reconstruction to signal processing. Experts often use PnP methods as a framework within machine learning to solve deep inverse problems. The Plug-and-Play framework essentially allows for the seamless insertion of denoisers into iterative algorithms, enhancing their ability to recover high-quality signals or images from corrupted observations. Although PnP methods have demonstrated outstanding results across a wide range of inverse problems, they tend to rely on being trained on substantial datasets to develop robust denoising models. This requirement can be problematic when data availability is limited or the diversity of data is not sufficiently representative. Moreover, PnP methods typically necessitate retraining or fine-tuning to adapt effectively to varying distributions and signal characteristics. 

To address these challenges, we developed Single-Shot PnP methods so that inverse problems can be solved with minimal data. First, we integrated Single-Shot proximal denoisers into iterative methods, enabling training with single instances. Second, we proposed implicit neural priors based on a novel function that preserves relevant frequencies to capture fine details while avoiding the issue of vanishing gradients. We then demonstrated, through extensive numerical and visual experiments, that our method leads to better approximations.

Our approach differs from existing methods by using a novel mathematical formulation that models how information is restored during the reverse process. Instead of the usual techniques that focus on step-by-step denoising, we have rethought this process from the ground up. Most methods use a U-Net architecture — a type of neural network that breaks down and reconstructs images step-by-step. However, these networks often face limitations due to their rigid structure.


To overcome these constraints, we developed a new family of models that employ an advanced version of the U-Net, which enables faster and more efficient image reconstruction. This approach allows us to achieve higher performance while reducing computational requirements, making it more feasible for use in real-world medical applications.


Going beyond the common approach of using standard denoising methods will allow us to create a more versatile framework for image reconstruction across various imaging modalities, such as MRI and CT scans.


**The next step**

We know at a technical level that we have solved one of the big complexities in diffusion models in principle – the acceleration process – so now we are exploring how we can scale it to address large-scale problems in practice in a medical setting. This is a work in progress, but the preliminary results look quite good and we hope to publish our outcomes in the coming months.

Throughout our work we have focused on our end-goal of making diffusion models more practical for real-world applications, especially medical imaging diagnosis. One way we have done this is by building a multidisciplinary team. 

The funding from Accelerate and C2D3 gave us the opportunity to organise meetings with collaborators that allowed us to bring together clinicians and technical specialists to give feedback on our plans. The experience enabled us to target developing useful tools that could be used in a wide range of hospitals. This is particularly important as often within the medical domain, models are customised for individual hospitals, which requires additional work.

That’s why I believe you need multidisciplinary discussion to gather insights beyond mathematics and machine learning and come up with more generalisable and robust techniques that are useful in the real-world. Funding from the programme also allowed us to hire a research assistant, which has helped to accelerate the research and generate a more impactful outcome in a short period of time. 



**The future**

We hope to put forward another paper for publication before the project is finished drawing upon large-scale datasets in the medical domain, but we believe that the faster and more accurate diffusion models resulting from this research will empower healthcare professionals to access high-quality medical images swiftly. This should expedite the diagnostic process, enabling timely and precise diagnoses, ultimately leading to better patient care.