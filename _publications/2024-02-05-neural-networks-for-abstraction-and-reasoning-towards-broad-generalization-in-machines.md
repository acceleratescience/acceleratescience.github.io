---
layout: publication-single
title: "Neural networks for abstraction and reasoning: Towards broad
  generalization in machines"
abstract: >-
  For half a century, artificial intelligence research has attempted to
  reproduce the human qualities of abstraction and reasoning - creating computer
  systems that can learn new concepts from a minimal set of examples, in
  settings where humans find this easy. While specific neural networks are able
  to solve an impressive range of problems, broad generalisation to situations
  outside their training data has proved [this http
  URL](http://elusive.in/) this work, we look at several novel approaches for
  solving the Abstraction & Reasoning Corpus (ARC), a dataset of abstract visual
  reasoning tasks introduced to test algorithms on broad generalization. Despite
  three international competitions with $100,000 in prizes, the best algorithms
  still fail to solve a majority of ARC tasks and rely on complex hand-crafted
  rules, without using machine learning at all. We revisit whether recent
  advances in neural networks allow progress on this task.


  \

  First, we adapt the DreamCoder neurosymbolic reasoning solver to ARC. DreamCoder automatically writes programs in a bespoke domain-specific language to perform reasoning, using a neural network to mimic human intuition. We present the Perceptual Abstraction and Reasoning Language (PeARL) language, which allows DreamCoder to solve ARC tasks, and propose a new recognition model that allows us to significantly improve on the previous best implementation.We also propose a new encoding and augmentation scheme that allows large language models (LLMs) to solve ARC tasks, and find that the largest models can solve some ARC tasks. LLMs are able to solve a different group of problems to state-of-the-art solvers, and provide an interesting way to complement other approaches. We perform an ensemble analysis, combining models to achieve better results than any system alone. Finally, we publish the arckit Python library to make future research on ARC easier.
published: 2024-02-05
authors:
  internal_authors:
    - Soumya Banerjee
  external_authors:
    - family: Bober-Irizar
      given: M
details:
  journal: arXiv
  website: https://arxiv.org/abs/2402.03507
  arxiv: "2402.03507 "
  doi: 10.48550/arXiv.2402.03507
---
