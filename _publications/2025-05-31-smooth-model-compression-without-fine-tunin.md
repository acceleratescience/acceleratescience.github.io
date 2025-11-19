---
layout: publication-single
title: Smooth Model Compression without Fine-Tunin
abstract: Compressing and pruning large machine learning models has become a
  critical step towards their deployment in real-world applications. Standard
  pruning and compression techniques are typically designed without taking the
  structure of the network’s weights into account, limiting their effectiveness.
  We explore the impact of smooth regularization on neural network training and
  model compression. By applying nuclear norm, first- and second-order
  derivative penalties of the weights during training, we encourage structured
  smoothness while preserving predictive performance on par with non-smooth
  models. We find that standard pruning methods often perform better when
  applied to these smooth models. Building on this observation, we apply a
  Singular-Value-Decomposition-based compression method that exploits the
  underlying smooth structure and approximates the model’s weight tensors by
  smaller low-rank tensors. Our approach enables state-of-the-art compression
  without any fine-tuning– reaching up to 91% accuracy on a smooth ResNet-18 on
  CIFAR-10 with 70% fewer parameters.
published: 2025-05-31
authors:
  internal_authors:
    - Ander Biguri
    - Carola-Bibiane Schönlieb
  external_authors:
    - family: Runkel
      given: " Christina "
    - family: Kuete Meli
      given: "Natacha "
    - family: Lukasik
      given: "Jovita "
    - family: Moeller
      given: " Michael "
details:
  pdf: https://arxiv.org/pdf/2505.24469
  html: https://arxiv.org/abs/2505.24469
---
