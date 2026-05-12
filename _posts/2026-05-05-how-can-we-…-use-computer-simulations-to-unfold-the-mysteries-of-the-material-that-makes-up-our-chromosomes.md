---
layout: blog-single
title: "How can we … use computer simulations to unfold the mysteries of the
  material that makes up our chromosomes? "
excerpt: >-
  If the DNA contained within a single human cell were stretched into a straight
  line, it would measure approximately two metres long. To fit this immense
  length into a cell nucleus only a few micrometres in diameter, DNA is
  compacted into a highly structured form known as chromatin. Chromatin is a
  large, intricate polymer composed of protein beads called histones threaded
  onto the DNA string. Although every cell in the body contains the same DNA
  sequence, it is the precise three-dimensional folding of chromatin that
  determines which genes are activated, guiding the development of specific cell
  types. It is chromatin organisation that ensures liver-specific genes are
  expressed in liver cells, while brain-specific genes are active in brain
  cells.


  The organisation of chromatin is essential for numerous biological processes, particularly regulating gene expression—the process by which genetic information is converted into functional molecules like proteins. Disruptions in chromatin organisation can lead to diseases associated with genetic dysregulation. Despite extensive research, many aspects of chromatin structure and their biological implications remain unresolved.
author: Kieran Russell, PhD student, Yusuf Hamied Department of Chemistry
date: 2026-05-12T00:00:13+01:00
image: /assets/uploads/kieran-russell-blogpost-photo.png
---
If the DNA contained within a single human cell were stretched into a straight line, it would measure approximately two metres long. To fit this immense length into a cell nucleus only a few micrometres in diameter, DNA is compacted into a highly structured form known as chromatin. Chromatin is a large, intricate polymer composed of protein beads called histones threaded onto the DNA string. Although every cell in the body contains the same DNA sequence, it is the precise three-dimensional folding of chromatin that determines which genes are activated, guiding the development of specific cell types. It is chromatin organisation that ensures liver-specific genes are expressed in liver cells, while brain-specific genes are active in brain cells.

The organisation of chromatin is essential for numerous biological processes, particularly regulating gene expression—the process by which genetic information is converted into functional molecules like proteins. Disruptions in chromatin organisation can lead to diseases associated with genetic dysregulation. Despite extensive research, many aspects of chromatin structure and their biological implications remain unresolved.

Our research specifically investigates how the physicochemical properties of the chromatin polymer influence its structural organisation. We develop and apply advanced multiscale computational simulation models to explore chromatin structure across multiple resolutions. These simulations reveal the underlying physical and chemical mechanisms that drive chromatin formation and dynamics observed experimentally.

Residue-resolution models, which explicitly represent chemical details by including at least one particle per amino acid or nucleotide, are valuable because they capture chemical heterogeneity and sequence-specific effects. However, computational limitations have typically restricted such models to systems of around a dozen nucleosomes—the basic repeating units of chromatin—at most. To overcome this barrier, we recently developed a GPU-accelerated model capable of simulating several hundred nucleosomes while retaining chemically specific resolution.

**Model** **chromatin behaviour**

Our novel GPU-accelerated, residue-level coarse-grained model is specifically designed to simulate large-scale chromatin systems at chemically specific resolution. By leveraging the GPU-based simulation platform OpenMM, our approach provides substantial computational speed-ups compared to our previous CPU-based model. This enables us to study chromatin behaviour at near-atomistic detail for systems that were previously computationally inaccessible.

Chromatin consists of repeating structural units known as nucleosomes, which are separated by variable lengths of linker DNA. Our initial simulations have revealed how alterations in nucleosome linker length and ionic conditions significantly affect intra- and intermolecular interactions within chromatin condensates, thereby influencing their fluid-like properties. [(](<>)<https://www.biorxiv.org/content/10.1101/2025.11.17.688899v1>)

For example, DNA undergoes one full twist every 10 base pairs. The precise number of twists between nucleosomes influences chromatin fibre structure: linker lengths near multiples of 10 base pairs (10n) produce regularly stacked fibre conformations, whereas those around 10n + 5 base pairs lead to more irregular arrangements with reduced intra-array stacking. Interestingly, these structural differences at the fibre level affect the bulk properties of chromatin condensates. Specifically, strong intra-array contacts in chromatin with linker lengths of 10n base pairs lead to weaker inter-array interactions, resulting in condensates that are less dense and less viscous. Encouragingly, these computational insights align remarkably well with experimental findings obtained from reconstituted chromatin arrays by our collaborators in the Rosen Lab at UTSW. One of the first applications of the new model has been to combine it with electron tomography of condensed chromatin, enhancing the resolution of the images by filling in details that are too small and fast moving to be resolved

**Accelerating research**

I have undertaken the Data Science Residency and the Machine Learning Academy offered by the Accelerate Programme for Scientific Discovery and Cambridge Spark. These courses significantly enhanced my data manipulation and Python programming skills, providing valuable exposure to advanced machine learning techniques and giving me the confidence to incorporate them into my research effectively.

Since the models I work on are implemented as Python packages, my daily work involves extensive coding. There is notable overlap between our research and unsupervised learning methods introduced during the courses. For example, we have used principal component analysis (PCA) and k-means clustering—both unsupervised techniques covered in the course—to explore dimensionality reduction and classify chromatin fibre structures. Specifically, we applied these methods to characterise structural differences between isolated chromatin fibres and those interacting within condensed arrays, enabling us to clearly represent distinct structural distributions.

**Looking to the future**

With our newly validated model demonstrating strong alignment with experimental results, we anticipate its broad applicability in future chromatin simulations. Specifically, we aim to investigate how specific chemical modifications alter chromatin folding, providing critical insights into gene regulation and disease mechanisms. Additionally, we plan to continue combining our simulations with experimental cryo-electron tomography (cryo-ET) data from the Rosen Lab, where we hope to combine information from our simulations with deep learning techniques to improve and automate more of the image analysis.

\---

**R﻿eferences**

1. *Preprint for GPU chromatin model*: <https://www.biorxiv.org/content/10.1101/2025.11.17.688899v1>

2﻿. <https://www.science.org/doi/10.1126/science.adv6588>