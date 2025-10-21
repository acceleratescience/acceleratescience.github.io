---
layout: blog-single
title: "FTorch: Enabling modern machine learning in large-scale scientific software"
excerpt: Many fields, from climate science to nuclear fusion, make use of
  large-scale scientific modelling codes to conduct research. Recently there has
  been an interest in combining these with new machine learning (ML) techniques
  to create ‘hybrid models’, leveraging new techniques in data-driven science.
  Doing so is not straightforward, however. The process presents technical
  challenges as well as new scientific questions and methods that arise from
  exploring these new frontiers.
date: 2025-10-21T00:00:00+01:00
image: /assets/uploads/joe-wallwork-blogpost-photo.png
---
Many fields, from climate science to nuclear fusion, make use of large-scale scientific modelling codes to conduct research. Recently there has been an interest in combining these with new machine learning (ML) techniques to create ‘hybrid models’, leveraging new techniques in data-driven science. Doing so is not straightforward, however. The process presents technical challenges as well as new scientific questions and methods that arise from exploring these new frontiers.

Accelerate-C2D3 funded [FTorch](https://github.com/Cambridge-ICCS/FTorch), software developed by [Research Software Engineers](https://society-rse.org/) in the [Institute of Computing for Climate Science (ICCS)](https://iccs.cam.ac.uk/) at the University of Cambridge, that provides a technical solution to the challenges of coupling PyTorch ML codes to computational models written in Fortran. Since its initial development in 2022 FTorch ([Atkinson et al., (2025)](https://joss.theoj.org/papers/10.21105/joss.07602)) has come to be used globally in research projects including by researchers working with the Community Earth System Model, ICON (the German weather forecasting model), and in nuclear fusion at UKAEA. All of these groups and more are looking to transform their existing models to be hybrid with ML capabilities.

The funding from Accelerate-C2D3 allowed us to secure time to focus on developing new features of FTorch, but was primarily used to facilitate visits to collaborators and a large scientific workshop of the wider challenges facing hybrid modelling, bringing together leaders in the field.

**M﻿L coupling workshop**

![Fig 1: Participants at the September Workshop ](/assets/uploads/workshop-photo.jpeg "Fig 1: Participants at the September Workshop ")

*Fig 1.* Participants at the September Workshop

In September 2025 we brought 40 researchers, scientists, and software engineers from across Europe to gather in Cambridge for a [workshop on coupling ML technologies into large-scale scientific models](https://cambridge-iccs.github.io/ml-coupling-workshop/). The event was hosted at the Maxwell Centre over the course of two days, with college accommodation provided for 30 attendees. The first day of the workshop featured [eight talks by invited speakers from key universities](https://cambridge-iccs.github.io/ml-coupling-workshop/programme.html#talks), research institutes, and operational centres, a panel session in which attendees could hear the speakers’ perspectives on their ideas and concerns, and a poster session in the evening.

![Fig 2: Word-cloud generated from questions submitted to the panel discussion. Highlighting areas of interest from participants’ questions and popular topics at the workshop.](/assets/uploads/joewallwork_wordcloud.png "Fig 2: Word-cloud generated from questions submitted to the panel discussion. Highlighting areas of interest from participants’ questions and popular topics at the workshop.")

*Fig 2.* Word-cloud generated from questions submitted to the panel discussion. Highlighting areas of interest from participants’ questions and popular topics at the workshop.

The second day of the workshop consisted of break-out sessions, where attendees were given the opportunity to share their thoughts and ideas on the key challenges and opportunities for hybrid modelling going forward. Collaborative note-taking tools were used during the break-out sessions to distill discussions into a format that will be used to inform another technical blog post on the details of the workshop content.

Whilst a number of topics were discussed there was particular interest in:

* *Differentiable models and online training*, exciting new approaches to hybrid modelling,
* Accelerating *research to operations* and how we can make it easier to bring the latest developments into operation and industry,
* Adapting and preparing for future changes and directions of *computer hardware*.

**F﻿uture work**

By expanding contribution and development of FTorch beyond ICCS, and by attracting more organisational users, FTorch can evolve to meet diverse research needs and ensure long-term sustainability.

We plan to build on the success of the ML coupling workshop by hosting an FTorch user workshop in 2026, featuring more talks, posters, and community discussions, as well as a “hackathon” day where attendees will tackle small tasks to help improve the codebase. We are also planning to give seminars and provide training sessions to organisations who could benefit from integrating FTorch into their workflows. By increasing the number of external contributors and organisational users, we hope that we can achieve a broader reach and greater impact for FTorch, and ensure its longevity on the timescales required by its users.

**R﻿eferences**

Atkinson et al., (2025). FTorch: a library for coupling PyTorch models to Fortran. Journal of Open Source Software, 10(107), 7602, <https://doi.org/10.21105/joss.07602>