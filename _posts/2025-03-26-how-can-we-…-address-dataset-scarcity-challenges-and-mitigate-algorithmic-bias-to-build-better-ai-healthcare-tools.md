---
layout: blog-single
title: How can we … address dataset scarcity challenges and mitigate algorithmic
  bias to build better AI healthcare tools?
excerpt: >
  Artificial Intelligence models are only as fair as the data on which they are
  trained. They are vulnerable to biases in training data, often reflecting
  deep-rooted systemic inequalities, human prejudices, and socio-economic
  disparities. This is a serious concern in healthcare, where algorithmic
  decisions can directly affect patient outcomes and can lead to severe, even
  catastrophic, consequences to human health.


  One challenge is ensuring that models that will be used in a healthcare setting are trained using data that represents patients. An important first step in addressing bias from underrepresentation in datasets is to understand why it can be difficult to acquire large and diverse datasets from which to develop AI algorithms.
author: Lekaashree Rambabu, NIHR Academic Clinical Fellow in Anaesthetics,
  Cambridge University Hospitals & University of Cambridge
date: 2025-03-31T17:59:56+01:00
categories:
  - machine-learning
teaser: ""
image: /assets/uploads/lekaa-rambabu-blogpost-photo.jpg
---
Artificial Intelligence models are only as fair as the data they are trained on. They are vulnerable to biases in training data, often reflecting deep-rooted systemic inequalities, human prejudices, and socio-economic disparities. This is a serious concern in healthcare, where algorithmic decisions can directly affect patient outcomes and can lead to severe, even catastrophic, consequences to human health.

One challenge is ensuring that models that will be used in a healthcare setting are trained using data that represents patients. An important first step in addressing bias from underrepresentation in datasets is to understand why it can be difficult to acquire large and diverse datasets from which to develop AI algorithms.

**Geographic imbalance in healthcare datasets**

Currently, there is limited global representation and diversity in healthcare datasets used to train AI models. For example, the largest and most widely used healthcare datasets for development of AI models – such as the UK biobank, MIMIC, OpenSAFELY, Hospital Episodes Statistics, PhysioNet, eICU-CRD – are all predominantly sourced from institutions in the US, UK, and Europe.

Clinical trials evaluating AI models in healthcare have been driven by countries with large digital economies and populations. [One study](https://www.researchgate.net/publication/375533567_Development_Pipeline_and_Geographic_Representation_of_Trials_for_Artificial_IntelligenceMachine_Learning-Enabled_Medical_Devices_2010_to_2023) found that most clinical trials on AI/ML-enabled devices between 2010 and 2023 were conducted in China (1095 trials), followed by the US (196 trials), Japan (162 trials), while a recent [review](https://www.nature.com/articles/s41746-022-00700-y) of AI use in global health identified only ten studies conducted in resource-limited settings where AI was applied to patient triage, screening, diagnostics, care planning or care provision. Of these, 60% had sample sizes of less than 500 subjects, highlighting significant data availability issues in resource-limited settings.

Overall, the concentration of AI research in healthcare in high-income and upper-middle-income countries presents a significant challenge where harm may be inadvertently caused to patients in resource-limited settings  because AI systems are not trained on populations like theirs. This can result in deploying AI models which may overlook distinct clinical patterns of disease presentations unique to certain populations, genetic and phenotypic variations, endemic conditions, resource limitations, and region-specific health outcomes, potentially exacerbating health inequalities globally. Though bias can be present in any medical field, its effects are more ‘visible’ in fields like dermatology, where skin conditions can present differently across different skin tones. For example, though melanoma occurs more frequently in lighter-skinner populations, individuals with darker skin can experience higher mortality rate from this cancer. AI systems trained predominantly on one demographic’s data can perform inconsistently when analysing skin conditions in underrepresented groups, thereby perpetuating healthcare disparities. 

**Exploring solutions through community driven insights and global perspectives**

\
There is an urgent need to rethink the entire AI development lifecycle in healthcare to ensure better representation of underrepresented populations and promote health equity. A crucial first step in addressing bias from underrepresentation in datasets is to identify challenges in acquiring large, diverse, datasets for AI algorithm development. 

To explore this challenge, I discussed with clinicians from Makerere University in Uganda, to understand the barriers to dataset acquisition, analysis, and storage in the country  . Several themes emerged, including cultural and social dynamics, complex ethical approval processes, concerns over data misuse or exploitation, mistrust towards researchers by the public, and limited infrastructure for data sharing and secure storage. 

A publicly available [report](https://doi.org/10.5281/zenodo.14503478) written with collaborators at Makerere University and the University of Cambridge, based on workshops in the UK and Uganda in January and June 2024 revealed additional insights. 

**Mitigating bias**

Working with the Accelerate Programme, I am building an open-source virtual hub of resources with Claire Coffey, PhD in Health Data Science, to improve bias mitigation strategies for healthcare AI deployment from both a clinical and computer science perspective.

This virtual platform will offer educational resources to address algorithmic bias and dataset scarcity in healthcare AI development. There will be a contributor-driven model that enables clinicians, computer scientists, data scientists, engineers, and others who use AI in their research to share bias mitigation strategies in pre-processing, in-processing, and post-processing stages. The platform will also feature concise summaries of key topics, such as existing guidelines for assessing presence of bias in clinical studies, toolkits for reducing algorithmic fairness, and carefully curated resource directories – all designed to equip researchers aiming to use AI on healthcare data to develop more equitable healthcare AI systems.

As the platform evolves, we hope to expand it into a virtual international community by offering membership opportunities and fostering collaboration among researchers with similar interests and complimentary skillsets. 

The overarching goal is to encourage researchers to develop more inclusive and universally applicable AI models in healthcare by considering integration of bias mitigation strategies at different stages from design to deployment of AI model. By adopting these strategies, patients from underrepresented groups – those often absent from training datasets – may still be able to access AI systems for healthcare decisions even when their characteristics differ from the majority groups. This will ensure that in a world with AI-driven healthcare, patients are less likely to be victims of harm caused by exclusion of their data, reducing health inequities and providing more generalisable tools to maintain performance and utility across a full spectrum of patient demographics.