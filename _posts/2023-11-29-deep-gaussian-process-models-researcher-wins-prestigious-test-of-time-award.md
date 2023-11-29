---
layout: blog-single
title: Deep Gaussian process models researcher wins prestigious Test of Time award
author: Andreas Damianou, a Senior Scientist at Spotify
date: November 29, 2023 11:30 AM
image: /assets/uploads/andreas___damaianou-headshot.jpg
---
Neil Lawrence and I presented our paper on Deep Gaussian process models at the AISTATS conference ten years ago. The paper was not included in the conference’s notable papers (which are presented in special oral sessions), but it did put out a big idea that was appreciated by the community. At the time, Neil and I were at the University of Sheffield. Now Neil is a DeepMind Professor of Machine Learning at the University of Cambridge and a Visiting Professor at the University of Sheffield, while I am a Senior Scientist at Spotify. 


A decade later, we have been awarded the AISTATS 2023 Test of Time Award, which recognises that our paper has had a prominent impact in the field. Indeed, it was time that proved the paper’s influence. The original paper did not necessarily demonstrate groundbreaking experimental results. The focus was more on describing a new way of thinking about deep learning and influencing parts of the research community to follow this direction, which is what happened. Other researchers - often in collaboration with us - explored the idea in new contexts and built amazing applications. The role of those researchers who built software for Deep Gaussian Processes was particularly instrumental in the idea picking up momentum. 


**What was the idea?**


A classical aim for a machine learning model is to learn relationships in the data as a way of abstracting pattern recognition. For example, given historical weather data, a model can learn a relationship between the time of the day and the average temperature at a particular location. This is a form of function learning; the model learns the functional relationship between inputs, such as time and outputs such as average temperature. Machine learning scientists strive to build models that learn complicated functions as well as possible. 


Deep Gaussian Process models, or Deep GP models as they have become known, combine the advantages of Gaussian process models - which are able to learn functions from data while quantifying their uncertainty - with the idea of depth, which became very popular in around 2010 when I was starting my PhD. On the one hand, uncertainty is important because it quantifies what the model “does not know” and makes it a better learner. On the other hand, depth is a notion in modelling that makes it possible to learn hierarchically. It facilitates learning complicated relationships because the model doesn’t have to learn everything at once but, instead, can decompose the learning process in various layers of abstraction. We decided to combine the best of both approaches - extending the notion of deep learning to propagate uncertainty alongside function values - to come up with Deep GPs. 


Essentially, a Deep GP is a model where you have observational outputs – and possibly inputs – and you learn functions, but you do so in a hierarchical way. So, instead of learning one incredibly complicated function, you tell the model that it can model a number of functions and use them efficiently. This approach gives flexibility to the model to learn and compose functions. Unlike Deep Neural Networks which focus their learning on parameters of functions hardcoded by the human modeller, Deep GPs focus their learning on the behaviour of entire functions, which means they model the actual distribution of possible functions. This is the second key difference between Deep GPs and Deep Neural Networks.


Deep neural networks are typically applied to relatively large data sets using stochastic gradient descent for optimisation. In contrast, the Bayesian nature of Deep GPs allows them to be used even when data is scarce. This is interesting to think about in the era of Large Language Models (LLMs) like ChatGPT, which are trained on vast amounts of web data. However, there will always exist numerous important applications where data scarcity is real, like engineering or medical applications.


**How are they being used?** 


There are three key ways that Deep GPs are being used. The first is that computer scientists are improving the technology itself in various ways, such as by developing faster, more scalable or otherwise better training of deep GPs, or developing better software that runs the model.


Secondly, researchers are using the insights of the Deep GP work to drive theoretical research in other areas of Machine Learning such as Bayesian neural networks - a type of neural network that considers uncertainty. This is an indirect way by which our research work can contribute to incrementally building up knowledge in Machine Learning. 


Thirdly, Deep GPs have benefitted certain groups of applications directly, including AI-driven engineering simulations and disease diagnosis. While these two areas may not sound like they have a lot in common, they both work from limited datasets. For example, generating data in a lab is time-consuming and expensive, while modelling vehicle designs in a wind tunnel to finetune their aerodynamics is similarly costly. You wouldn’t repeat either experiment many times so you would have relatively low data. Deep GPs are sometimes used because of their ability to quantify uncertainty and make the most out of limited data. Of course, with recent model developments and software, the model is applicable even when big datasets are available. They might be useful in the development of a self-driving car, for example, where it is beneficial for the car to quantify the risk of certain manoeuvres such as swerving in the event of an emergency. 


**Next steps**


AI has made great strides since we published our paper and I have moved on in my area of research, so when I was asked to talk about Deep GPs and my paper at the award ceremony it was not without some trepidation. But I have been keeping up to speed with new developments in the area and talked to amazing researchers currently working on Deep GPs, including Neil, of course. So, while I was preparing for the talk it all came back to me - I was in the zone - and the reception by the audience was great! While I’m now working in machine learning and information retrieval, leading efforts around graph-based recommendations at Spotify, I’m certain I will always be part of the Deep GP community.



O﻿riginal paper: Damianou, A. and Lawrence, N.D., 2013, April. Deep gaussian processes. In *Artificial intelligence and statistics* (pp. 207-215). PMLR. Available at: [https://proceedings.mlr.press/v31/damianou13a ](https://proceedings.mlr.press/v31/damianou13a)