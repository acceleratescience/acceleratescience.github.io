---
layout: blog-single
title: Navigating distribution shifts for early cancer detection
excerpt: >
  Cancer is often diagnosed at advanced stages, leading to poorer outcomes.
  Reducing unnecessary testing is also crucial due to burden on patients and
  healthcare resources. Leveraging rich electronic health records (EHRs)
  prediction models can support referral decisions and personalise screening
  schedules, thus improve early cancer detection.


  Distribution shift, where target data statistical properties diverge from source (training) data, poses a critical deployment challenge. This divergence can stem from demographic changes, evolving clinical practices, or external events like the COVID-19 pandemic. Such shifts compromise a model’s predictive reliability, risking misinformed decisions and exacerbating health disparities. Identifying, understanding and mitigating distribution shifts is essential to ensure that clinical decision support systems remain reliable and equitable.
author: Samantha Ip, Research Fellow, Department of Public Health and Primary Care
date: 2025-05-21T10:00:00+01:00
image: /assets/uploads/sam-ip.jpg
---
Cancer is often diagnosed at advanced stages, leading to poorer outcomes. Reducing unnecessary testing is also crucial due to burden on patients and healthcare resources. Leveraging rich electronic health records (EHRs) prediction models can support referral decisions and personalise screening schedules, thus improve early cancer detection.

Distribution shift, where target data statistical properties diverge from source (training) data, poses a critical deployment challenge. This divergence can stem from demographic changes, evolving clinical practices, or external events like the COVID-19 pandemic. Such shifts compromise a model’s predictive reliability, risking misinformed decisions and exacerbating health disparities. Identifying, understanding and mitigating distribution shifts is essential to ensure that clinical decision support systems remain reliable and equitable.

**Bridging disciplines for reliable and equitable clinical decision support**

Recognising distribution shifts’ impact across diverse fields, from economic forecasting and autonomous systems to health data science, I created a platform to facilitate cross-disciplinary collaboration, supported by the Accelerate Programme for Scientific Discovery-C2D3 funding call in 2023. This culminated in the workshop [“Developing Robust Cancer Early Detection Systems Under Distribution Shifts and Uncertainty”](https://web.archive.org/web/20250113141557/https:/www.c2d3.cam.ac.uk/events/robust-cancer-early-detection-systems-under-distribution-shifts-and-uncertainty-workshop) (24 June 2024, Clare College, University of Cambridge), in partnership with the [British Journal of Cancer.](https://communities.springernature.com/posts/upcoming-workshop-robust-cancer-early-detection-systems-under-distribution-shifts-and-uncertainty) 

This event convened  international experts from leading institutions (Oxford, Cambridge, MIT, the German Center for Neurodegenerative Diseases (DZNE), Max Planck Institute for Intelligent Systems, Google DeepMind) among over 70 participants, who shared innovative ideas, state-of-the-art methodologies, ongoing research, and clinical challenges, aimed at enhancing the relevance, safety, and equity of clinical decision support systems for early cancer detection.

**Clinical integration and human-AI collaboration** 

Clinician and patient adoption of quantitative decision tools (e.g., QCancer) requires trust and integration into current workflows. 

[Julia Hippisley-Cox](https://www.st-annes.ox.ac.uk/cpt_people/hippisley-cox-professor-julia/) (Professor of Clinical Epidemiology and General Practice at the University of Oxford ) discussed empowering GPs in making informed referral decisions using QCancer by providing contextual information needed for interpreting model outputs. [Neil Lawrence](https://science.ai.cam.ac.uk/team/neil-d-lawrence) (DeepMind Professor of Machine Learning at the University of Cambridge) advocated for interfaces facilitating clear, transparent AI-clinician communication, to ensure actionable predictive insights that support referral decisions.

**Incorporating causal learning**

Causal learning identifies cause- effect relationships, providing robust, generalisable insights beyond correlation.
While valuable, mechanistic models based on biological processes do not always make the best prediction models, according to [Sach Mukherjee](https://www.mrc-bsu.cam.ac.uk/staff/sach-mukherjee) (Programme Leader in Biomedical ML theme at the MRC Biostatistics Unit, University of Cambridge & Head of Statistics and Machine Learning at DZNE). A stable predictive marker—an epiphenomenon not directly reflecting disease mechanisms—can yield a stronger predictive signal and be preferable for prediction. He suggested that adaptive models integrating causal and non-causal information can enhance predictive robustness with limited data, and that emerging techniques (e.g., style transfer and multi-modal approaches) offer promising avenues for robust insights. [Michel Besserve](https://michelbesserve.com/) (Research Group leader, Department of Empirical Inference, Max Planck Institute for Intelligent Systems) also addressed the challenge of limited data, specifically interventional and counterfactual data scarcity. He recommended combining simulation with causal generative modelling to generate additional data, including simulated interventions, for modelling distribution shifts.

**Ethical AI in healthcare**

AI models are only as fair as the data they are trained on. 

[Marzyeh Ghassemi ](https://imes.mit.edu/people/ghassemi-marzyeh)(Associate Professor, EECS/IMES at MIT) highlighted cases of disproportionate harm to intersectional identities (e.g., “Black+females”) due to biases from embedded societal proxies in medical data . Removing such attributes may yield intra-distributional fairness but these local fixes may not generalise under distribution shifts. Including group attributes can improve overall accuracy but can also worsen outcomes for specific subgroups. She suggested learning from high-stakes industries (e.g., aviation) for safe, ethical healthcare AI deployment.

Spurious correlations can undermine fairness, even without direct inclusion of sensitive attributes, according to [Jessica Schrouff ](https://www.researchgate.net/profile/Jessica-Schrouff)(Senior Research Scientist at Google DeepMind). She warned fairness may not transfer due to distribution shifts and their interactions with sensitive attributes, exacerbated by the use of proxies. She recommended evaluations beyond accuracy; mitigation strategies informed by the chosen fairness metric and the underlying causal graphs. 

**Building better clinical decision support systems**

The workshop spurred new collaborations and grant proposals. Leveraging international expertise and interdisciplinary innovation positions us to drive translatable improvements in early cancer detection .
My work involves developing prediction models for early cancer detection from routinely-collected EHRs and evaluating their transportability. Insights from this workshop will inform ongoing model development, particularly regarding robustness and equity under distribution shifts.

We continue development of modelling approaches to accommodate distribution shifts and related fail-safe mechanisms within clinical decision systems.

Transportable, reliable clinical decision support systems, robust to distribution shifts and equitable across subpopulations, are fundamental for improving early cancer detection. Such systems have the potential to provide clinicians with data-driven support by synthesising complex patterns in large volumes of routinely-collected EHR data, impractical for manual processing during consultations, for example. Effective clinical integration hinges on clinician and patient trust, necessitating continuous improvement of model and system properties. Trustworthy systems ultimately improve patient outcomes and optimise healthcare resource utilisation.

*This project was funded through the 2023 Accelerate-C2D3 funding call for novel applications of AI for research and innovation. You can read more about other funded projects [here. ](https://science.ai.cam.ac.uk/news/2023-10-26-pursuing-innovative-applications-of-ai-in-research-and-real-world-contexts-%E2%80%93-announcing-our-2023-projects.html)*

*[Samantha Ip ](https://www.phpc.cam.ac.uk/staff/dr-samantha-ip)is a Research Associate at the Department of Public Health and Primary Care.*