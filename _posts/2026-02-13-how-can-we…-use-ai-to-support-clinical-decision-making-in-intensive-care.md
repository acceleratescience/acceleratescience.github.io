---
layout: blog-single
title: How can we… use AI to support clinical decision-making in intensive care?
excerpt: >-
  Intensive care units (ICUs) treat the sickest patients in the hospital and are
  among the most complex and resource-intensive environments in modern
  healthcare. Teams of specialists must make high-stakes decisions under intense
  time pressure, where even small delays or misjudgements can have major
  consequences for patient survival and recovery. At the same time, ICUs
  generate vast amounts of data, including continuous monitoring, ventilator
  settings, medication infusions, and laboratory tests. 


  In my daily work in intensive care, I see how much valuable information is produced, but how little of it is actually used in clinical decision-making. Much of it remains fragmented across systems and is used only in limited ways at the bedside. As clinicians can process only a fraction of this information, AI-driven methods offer a way to support more informed decisions, with the potential to improve resource use, reduce complications, and save lives.
author: By Villiam V. Kildal, resident doctor in anaesthesia and intensive care,
  postdoctoral researcher at Karolinska Institutet, Stockholm, Sweden, and
  visiting researcher, University of Cambridge, Department of Computer Science
  and Technology
date: 2026-02-24T00:01:00+00:00
image: /assets/uploads/villiam-vejbrink-kildal-blogpost-photo.png
---
Intensive care units (ICUs) treat the sickest patients in the hospital and are among the most complex and resource-intensive environments in modern healthcare. Teams of specialists must make high-stakes decisions under intense time pressure, where even small delays or misjudgements can have major consequences for patient survival and recovery. At the same time, ICUs generate vast amounts of data, including continuous monitoring, ventilator settings, medication infusions, and laboratory tests.

In my daily work in intensive care, I see how much valuable information is produced, but how little of it is actually used in clinical decision-making. Much of it remains fragmented across systems and is used only in limited ways at the bedside. As clinicians can process only a fraction of this information, AI-driven methods offer a way to support more informed decisions, with the potential to improve resource use, reduce complications, and save lives.

Yet despite rapid progress in clinical AI research, very few promising models are tested in routine care or make it into everyday ICU practice. Most remain confined to academic papers and small pilot studies, creating a persistent gap between technical innovation and real clinical impact (Fleuren; Sokol). In fact, only 86 randomised evaluations of machine learning systems in real clinical settings were published worldwide up to 2024 (Han). As a result, we still lack robust evidence that these tools can improve patient outcomes or genuinely help us in our daily work

**From data to decisions: the aICU project**

The aICU project was initiated at Karolinska Institutet to address these challenges by making better use of the vast volumes of data generated in intensive care. Our aim is to support safe, interpretable, and clinically meaningful decision-making, and to establish a standardised pipeline for developing, evaluating, and safely deploying AI in critical care.

In its early stages, the project focused on building the foundations for translational clinical AI research. This included securing broad ethical and institutional approvals, establishing a secure high-performance modelling environment in Stockholm, and curating a large, high-resolution multicentre ICU dataset combining local and open-source data. Current work extends these efforts by linking national health registries for long-term outcome analysis and developing reliable real-time data extraction systems for testing in clinical environments.

As the project has developed, it has grown into a partnership between ICU clinicians at Karolinska Institutet and machine learning researchers at the University of Cambridge, ETH Zurich, and KTH Royal Institute of Technology. This collaboration spans the full research pipeline, from problem formulation and model development to safety assessment, clinical integration, and validation. Support from the Accelerate Programme has been central in this phase, enabling close engagement with the Cambridge AI community and helping to shape the project’s methodological approach, evaluation strategy, and long-term vision.

**Designing AI for clinical practice**

We are developing an accessible data infrastructure to support ICU and AI research, alongside preparing high-quality data for modelling. In parallel, we work closely with ICU staff across Sweden through interviews and observations to ensure that model development is guided by real clinical needs and decision-making contexts.

Led by Diana Robinson (Visiting Researcher ML@CL and Postdoc at Karolinska Institute), this work focuses on early clinical integration and co-design. Through this process, we aim to capture tacit knowledge that recorded data may miss and to understand how models can be developed to fit clinical workflows. In collaboration with the IVIA Lab at ETH Zurich, we explore how domain knowledge and model outputs can be visualised to support clinical reasoning. Models and interfaces are evaluated in advanced hospital simulation rooms before progressing to prospective clinical studies.

**Building sustainable AI systems**

Building on early clinical problem formulation and integration, the project also focuses on how modelling efforts are organised and sustained across clinical use cases. Led by Christian Cabrera-Jojoa (Assistant Research Professor, ML@CL), this work takes a systems approach to developing an ecosystem of models that support clinical decision-making. As the project expands across multiple focus areas, individual models are developed and evaluated as components of larger systems rather than as standalone tools (Cabrera).

This approach supports interpretability, robustness, and practitioner oversight, while addressing practical challenges such as data pipelines, model interactions, maintenance, and monitoring for distributional shift over time. As part of his doctoral research, Radzim Sendyka (Accelerate PhD student and ML Engineer) contributes to these efforts through modelling, methodological, and infrastructure development, working closely with colleagues at KI, Cambridge, and KTH.

**From research to real-world use**

Before deployment in patient care, models must undergo rigorous evaluation of safety and performance. A key initial step is the “silent” clinical trial, in which models run in the background of real healthcare settings without influencing clinical decisions. This allows assessment under real-world conditions while maintaining patient safety.

Building on this, we collaborate with an international group of researchers (McCradden) to develop “translational” trials that assess not only predictive performance, but also how models interact with clinical workflows, decision-making, and the wider sociotechnical context. Through this work, we aim to contribute design and evaluation methods that help determine when and how machine learning models can be safely and meaningfully introduced into clinical practice. These evaluation methods are central to the design of our initial pilot and subsequent clinical studies.

**[](<>)A first test case: extubation decisions**

To demonstrate and refine the proposed research pipeline, we begin with a focused pilot centred on the clinical decision of extubation, the removal of breathing support. Rather than developing a standalone prediction model, this pilot examines how extubation decisions are made, supported, and evaluated in practice.

Extubation is a critical and challenging step in intensive care. Removing ventilatory support too early increases the risk of failure and re-intubation, while unnecessary delays expose patients to avoidable complications. To address this complexity, we combine clinician interviews, retrospective outcome analyses, and simulation studies with and without AI support.

We then develop and evaluate models that integrate continuous physiological signals, ventilator data, laboratory results, and patient characteristics to provide individualised, context-aware risk estimates. These tools are assessed not only for predictive performance, but also for their impact on clinical reasoning in realistic settings.

This pilot serves as a high-impact testbed for the full end-to-end research pipeline and guides the extension of this approach to other critical care decisions.

**Building international collaboration and expertise**

Support from the Accelerate Programme has enabled research visits to Cambridge, facilitating cross-disciplinary collaboration, knowledge exchange, and practical support for machine learning deployment. This has led to a major international programme of work between Karolinska Institutet and Cambridge, developed in close collaboration with Professor Carl Henrik Ek, Professor Neil Lawrence, and their team. In November, the Cambridge group visited South General Hospital in Stockholm to initiate on-site projects and host joint educational activities for clinical and AI researchers. More recently, at the Accelerate Programme’s AI for Science Summit in December 2025, I presented the project’s progress and future plans and established new collaborations.

The fellowship has also been central to strengthening the project’s technical and methodological foundations. Coming from a largely self-taught data science background, and having led the project’s data management and modelling to date, I have benefited greatly from Accelerate’s AI and machine learning training programmes. I now aim to further develop expertise in state-of-the-art model development, evaluation, and deployment, while drawing on the broader team’s experience to advance the project.

**Looking ahead: clinical and scientific impact**

Beginning with a single, high-stakes clinical decision, this project is developing and testing new ways for clinicians and machine learning systems to work together in demanding healthcare environments. What we learn from studying extubation decisions — from bedside reasoning to long-term outcomes — is shaping how future decision support tools are designed, evaluated, and used in practice.

Ultimately, the aim is not to automate critical care, but to strengthen it by supporting clinicians in complex, time-sensitive decisions and by building evidence for when and how AI can genuinely improve patient care. By connecting large volumes of clinical data with clinical reasoning and evaluation in real settings, this work seeks to bridge the gap between methodological innovation and clinical reality. In doing so, it contributes to decision support systems that are technically robust, grounded in practice, and reliable in everyday care.

**References**

1. Fleuren, Lucas M., Patrick Thoral, Duncan Shillan, Ari Ercole, Paul W. G. Elbers, and Right Data Right Now Collaborators. 2020. “Machine Learning in Intensive Care Medicine: Ready for Take-Off?” Intensive Care Medicine 46 (7): 1486–88.
2. Sokol, Kacper, James Fackler, and Julia E. Vogt. 2025. “Artificial Intelligence Should Genuinely Support Clinical Reasoning and Decision Making to Bridge the Translational Gap.” Npj Digital Medicine 8 (1): 345.
3. Han R, Acosta JN, Shakeri Z, Ioannidis JPA, Topol EJ, Rajpurkar P. Randomised controlled trials evaluating artificial intelligence in clinical practice: a scoping review. Lancet Digit Health. 2024 May;6(5):e367-e373.
4. Cabrera, Christian, Paleyes, Andrei, Thodoroff, Pierre,  Lawrence, Neil. 2025. “Machine Learning Systems: A Survey from a Data-Oriented Perspective.” ACM Computing Surveys, 58(5), 1-38.
5. McCradden, Melissa D., Alex John London, Judy Wawira Gichoya, Mark Sendak, Lauren Erdman, Ian Stedman, Lauren Oakden-Rayner, et al. 2025. “CANAIRI: The Collaboration for Translational Artificial Intelligence Trials in Healthcare.” Nature Medicine 31 (1): 9–11.