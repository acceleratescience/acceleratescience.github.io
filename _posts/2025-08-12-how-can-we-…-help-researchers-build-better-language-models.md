---
layout: blog-single
title: How can we … help researchers build better language models?
excerpt: >-
  Large Language Models (LLMs), a core AI technology, are sometimes compared to
  black boxes in airplanes because their inner workings are hard to interpret.
  They can reflect unknown biases due to uncurated training datasets, lack
  transparency in their outputs, and are often developed and controlled by a
  small number of key players. 


  Small Language Models (SLMs) offer a promising alternative. They tend to be cheaper to train and easier to adapt to specific use cases, and allow researchers to retain full control over the model’s data and weights. While sometimes seen as less powerful, well-trained SLMs can match or even outperform larger models in certain contexts.
author: Richard Diehl Martinez, PhD student, Department of Computer Science and
  Technology
date: 2025-08-18T17:17:34+01:00
image: /assets/uploads/richard-diehl-martinez-blogpost-photo.png
---
Large Language Models (LLMs), a core AI technology, are sometimes compared to black boxes in airplanes because their inner workings are hard to interpret. They can reflect unknown biases due to uncurated training datasets, lack transparency in their outputs, and are often developed and controlled by a small number of key players. 

Small Language Models (SLMs) offer a promising alternative. They tend to be cheaper to train and easier to adapt to specific use cases, and allow researchers to retain full control over the model’s data and weights. While sometimes seen as less powerful, well-trained SLMs can match or even outperform larger models in certain contexts. 

**Encouraging experimentation** 

I developed [Pico](https://www.picolm.io/) with other Master’s and PhD students from the NLP group, alongside researchers from the Accelerate Programme. Pico is a versatile language modelling framework that helps AI researchers develop small, well-founded, and high-performing models that require fewer computing resources. It’s designed to support training on small, bespoke or confidential datasets. This is useful for researchers and companies because model weights can be stored and managed locally without requiring internet access, ensuring users retrain full control of the model and data. 

Pico allows researchers to use SLMs like scientific laboratories, embedding the research process directly into model development. It creates a space that allows researchers to develop hypotheses, test things out, and then evaluate whether their hypotheses work or not. The framework comprises pico-train, a space to train language models from scratch and experiment, and pico-analyze, which lets users evaluate their experiments, analysing the learning dynamics of the models that they have trained within the platform. Our overall goal in facilitating an iterative approach to building and testing models, is to help people develop and train models more effectively, and ultimately increase transparency in the process. 

**Increasing transparency** 

We built our platform with the aim of demystifying how models learn. Many existing training libraries are highly complex, packed with advanced features, and difficult to use without significant experience. Code bases sometimes have thousands of lines of code, which can make it hard to identify what a model is learning - a little like looking for a needle in a haystack – and it can also be difficult to make changes in existing frameworks.  

To overcome these problems and increase transparency, we have built Pico as simply as possible so that it’s easily understandable by someone coming into the field. Our base models consist of fewer than 500 lines of plain Python, with ample comments to explain what each part of the code does. We’ve intentionally minimized the use of external libraries, only including them when they enhance the code’s clarity or explainability. 

We have open-sourced the code to make training SLMs easy as well as the dataset it was trained on, so there is transparency from the beginning. One of Pico’s USPs is that it is intended to be educational so that beginners can start using it in a couple of minutes.  

There is no standard way of analysing learning dynamics of models, so we developed some metrics that help researchers understand what their models are doing, and they are built into the pico-analyze tool. Currently there are 10 different metrics, including the CKA (Centered Kernel Alignment) metric that enables researchers to measure how quickly their models are converging to their final state. This gives a metric of the speed of learning. This kind of insight can help users iterate more quickly on model architecture and training strategies. Since Pico is open-source, we hope the community will contribute additional metrics over time. 

**Use cases and milestones** 

Training models on proprietary data can be challenging, particularly when cloud-based tools require uploading sensitive information. Pico can be downloaded and used entirely offline, so no data needs to be shared unless the user chooses to do so. Nothing is uploaded or shared that if the user doesn’t want it to be, and the user owns the model. This is particularly helpful and important for researchers. Currently, we are talking to some teams at the University of Cambridge who might want to use Pico, and have a couple of Masters and PhD students who plan on using it to test its capabilities. 

Our biggest milestone so far has been using the Pico framework to train our own models from scratch. We have used funding from the Accelerate Programme for Scientific Discovery for computational costs in training our models and testing their performance, to see whether they are as good as those facilitated by large tech companies. We found they achieve very similar performances to those trained using open-source models trained by Meta and OpenAI, and in around half the time, with very little compute (16 GPUs) in an academic setting. 

**A model for the future** 

We recently posted a [YouTube](https://www.youtube.com/watch?v=llRUKwqMah4) video introducing Pico and its capabilities. It has received over 123,000 views so far, showing there’s strong interest in a simpler, more accessible model-training platform. We’ve already heard from people across academia and industry who are eager to try it out. 

We also plan on releasing more Pico-style model architectures that people can use to develop their own language models. As I approach graduation, I hope Pico continues to grow as an educational and research tool. Our team hopes to see some great collaborations with users at Cambridge and beyond, and are excited to see how people will use Pico. 

One day, it would be incredible to open a research paper and see that someone used Pico to train a model that led to a major scientific breakthrough. I think it’s completely possible.