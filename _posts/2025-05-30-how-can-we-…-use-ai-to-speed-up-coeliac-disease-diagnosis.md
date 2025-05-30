---
layout: blog-single
title: How can we … use AI to speed up coeliac disease diagnosis?
excerpt: >
  Around one in 100 people has coeliac disease , an autoimmune disease triggered
  by consuming gluten. Its symptoms are unpleasant and if left untreated, can in
  rare cases lead to cancer . Symptoms vary between individuals, from stomach
  cramps to fatigue and anaemia, which means patients can struggle to receive an
  accurate diagnosis.


  The gold standard for diagnosing coeliac disease is via a biopsy of the duodenum (part of the small intestine ). Pathologists will then analyse the sample under a microscope or on a computer to look for damage to the villi, tiny hair-like projections that line the inside of the small intestine. But interpreting biopsies is subjective, with discordance between pathologists regarding diagnosis occurring in one in five cases.
author: Florian Jaeckle, Visiting Research Associate, Department of Pathology,
  Research Fellow, Hughes Hall, University of Cambridge
date: 2025-05-30T10:50:33+01:00
image: /assets/uploads/florian-jaeckle-blogpost-photo-2-.jpg
---
Around one in 100 people has coeliac disease, an autoimmune disease triggered by consuming gluten. Its symptoms are unpleasant and if left untreated, can in rare cases lead to cancer . Symptoms vary between individuals, from stomach cramps to fatigue and anaemia, which means patients can struggle to receive an accurate diagnosis.

The gold standard for diagnosing coeliac disease is via a biopsy of the duodenum (part of the small intestine ). Pathologists will then analyse the sample under a microscope or on a computer to look for damage to the villi, tiny hair-like projections that line the inside of the small intestine. But interpreting biopsies is subjective, with discordance between pathologists regarding diagnosis occurring in [one in five cases.](https://bmjopengastro.bmj.com/content/11/1/e001252.abstract)

Furthermore, with a shortage of diagnostic pathologists causing delays and intense pressure on healthcare systems in the UK and beyond, it can take years for patients to receive an accurate diagnosis, enabling them to manage their often-debilitating symptoms. 

Thanks to the digitisation of pathologists’ glass microscope slides gathering pace, AI has the potential to speed up this process, allowing automation of diagnosis that could reduce the pressure on the NHS. 

Working with Professor Elizabeth Soilleux from the Department of Pathology and Churchill College, University of Cambridge, my goal is to produce and gain regulatory approval for the world’s first AI-mediated software that can fully automate biopsy diagnosis, to increase accuracy, reproducibility and speed of diagnosis of duodenal biopsies. Funding from the Accelerate Programme for Scientific Discovery and Cambridge Centre for Data Driven Discovery (C2D3) enabled me to work in the lab - primarily on the development of the AI algorithm - and helped secure follow-on funding from the National Institute for Health and Care Research.

**Taking a closer look**

Innovate UK funding is encouraging the digitisation of glass slides in UK pathology laboratories, which is providing us and other researchers with the opportunity to automate diagnosis with machine learning approaches. Duodenal biopsies represent an excellent, comparatively low-risk and relatively simple starting point for developing AI algorithms, with relatively uniform specimens, because fewer than 1% of biopsies contain cancer and around 86% of samples show one of two diagnoses (normal or coeliac disease). 

We have developed a machine learning algorithm to classify biopsy image data. It’s a ResNet18 model - a comparability light weight model to improve efficiency - that we trained using the multiple-instance-learning paradigm. 

The algorithm was trained and tested on a large-scale, diverse dataset consisting of over 4,000 images obtained from five different hospitals using five different scanners from four different companies. We obtained data from various hospitals because while humans are good at generalisation to slightly unseen environments (e.g. a pathologist who is good at their job in Cambridge, will be more or less equally as good if they were to move to Manchester even though the scanners make the image look slightly different) AI sometimes has problems with generalisation and can perform inconsistently. 

Images coming from different labs can very considerably, with some looking pinker and others more purple, so we use a mathematical technique called stain-normalisation as a pre-processing step to ensure that our model performs equally well on data from different hospitals.

The scanned biopsy images are very large. If printed at the highest resolution, they would be the size of a squash court. As the AI can’t process the entire image in one go, we divide each large image into thousands of smaller sub images, and run the AI on each individual sub image. The model bases its final diagnosis on the outcome of all the sub images.

We tested our algorithm on an independent data set of almost 650 images from a previously unseen source. Based on comparisons with the original pathologists’ diagnoses, we showed that the model was correct in its diagnosis in more than 97 cases out of 100. 

The model had a sensitivity of over 95%, meaning that it correctly identified more than 95 cases out of 100 individuals who had coeliac disease. It also had a specificity of almost 98% - meaning that it correctly identified in nearly 98 cases out of 100 individuals who did not have coeliac disease.

We asked four pathologists to review 30 slides and found that a pathologist was as likely to agree with the AI model as they were with a second pathologist. This is the first time AI has been shown to diagnose as accurately as an experienced pathologist whether an individual has coeliac or not.

We trained the algorithm on datasets generated under several different conditions, so we know that it should be able to work in a wide range of settings, where biopsies are processed and imaged differently. However, to gain acceptance by the medical profession and patients, an automated diagnostic approach must be explainable and trustworthy, as well as able to fit into existing workflow, which requires the development of a prototype to test in a clinical setting.

We have worked with patient groups, including through Coeliac UK, to share our approach and have found patients to be generally very receptive to the use of AI for diagnosing coeliac disease. In fact, 67% of 192 patients surveyed, said they would strongly trust an AI diagnosis, with just 5% having a weak level of trust. The results of the survey may reflect their experiences of the difficulties and delays in receiving a diagnosis. 

**Looking to the future**

One issue that comes up frequently with both patients and clinicians is the issue of explainability; being able to understand and explain how AI reaches its diagnosis, which is something we will continue to think about. This project has laid the foundation for further work developing a more interpretable segmentation algorithm that can segment cellular features that are key for an explainable diagnosis of coeliac disease.

I am the CTO of a spinout company, Lyzeum Ltd, which was founded by Professor Soilleux and entrepreneur Graham Snudden in 2019. The company was established to develop medical software intended for diagnostic use in hospitals. Our next step is to test the algorithm on a larger clinical dataset, putting us in a position to share this device with the regulator, moving us closer to NHS deployment. We hope to begin this regulatory process early next year.

*This project was funded though the 2022 Accelerate-C2D3 funding call for novel applications of AI for research and innovation. You can read more about other funded projects [here. ](https://science.ai.cam.ac.uk/news/2022-11-16-successfully-funded-projects-to-pursue-innovative-applications-of-ai-in-research-and-real-world-contexts)*

*You can read more about the project in the paper about the research below and in the [Guardian article](https://www.theguardian.com/science/2025/mar/27/coeliac-disease-diagnosis-ai-tool) and University of Cambridge [news story](https://www.cam.ac.uk/stories/AI-and-coeliac-disease) about the results.* 

Jaeckle, F., Denholm, J., Schreiber, B., Evans, S.C., Wicks, M.N., Chan, J.Y., Bateman, A.C., Natu, S., Arends, M.J. and Soilleux, E., 2025. Machine Learning Achieves Pathologist-Level Celiac Disease Diagnosis. *NEJM AI*, 2(4), p.AIoa2400738.

https://ai.nejm.org/doi/10.1056/AIoa2400738