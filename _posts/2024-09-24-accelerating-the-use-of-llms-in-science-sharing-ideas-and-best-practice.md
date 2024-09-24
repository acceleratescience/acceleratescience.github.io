---
layout: blog-single
title: "Accelerating the use of LLMs in science: sharing ideas and best practice"
excerpt: >
  The technology and use cases for Large Language Models (LLMs) are advancing at
  a rapid pace, providing new opportunities in research. Understanding how they
  work and how to use this game-changing technology can be daunting. 


  As part of our work to accelerate the use of machine learning in research, the Accelerate Programme for Scientific Discovery has published a suite of resources, based on an initial AI and LLM study group and workshop designed to give researchers the knowledge and tools to use LLMs with confidence
author: Ryan Daniels & Catherine Breslin, Accelerate Programme Machine Learning
  Engineering Team
date: September 24, 2024 11:40 AM
image: /assets/uploads/llm-workshop-photo.jpg
---
The technology and use cases for Large Language Models (LLMs) are advancing at a rapid pace, providing new opportunities in research. Understanding how they work and how to use this game-changing technology can be daunting. 


As part of our work to accelerate the use of machine learning in research, the Accelerate Programme for Scientific Discovery has published a [suite of resources](https://acceleratescience.github.io/resources/ai-and-large-language-models-workshop.html), based on an initial AI and LLM study group and workshop designed to give researchers the knowledge and tools to use LLMs with confidence.


**Getting started**


The first step for researchers who want to use an LLM in their research is to carefully define what they would like it to do, whether that is debugging code or classifying text  . There are plenty to choose from, from well-known LLMs such as ChatGPT and Gemini to smaller, niche models. 


Experimenting with prompting an LLM in different ways is a good way to understand its capabilities and whether it can handle tasks at a high enough standard to be useful for research. Many models are released with model cards, which are a great resource for accessing and understanding the details of specific models . With some iteration, it is possible to produce specific inputs or prompts that give helpful outputs. For example, a researcher might ask a model to summarise a longer document or translate text into another language.

\
Researchers may experiment with several LLMs before finding one that best suits their needs. There is a wide range available and plenty of factors to consider, including:

* Whether to use an open or closed model  . Closed models usually offer limited transparency into data handling processes, whereas open models allow users to probe risks such as bias, allowing outputs to be used with more confidence.
* The size of the model in terms of the number of parameters. Smaller models require less memory and can run faster. A researcher who wants to classify text into positive or negative sentiments, for example, doesn’t need a ChatGPT-sized model but could pick one of the many smaller models that already exist that have been built for this purpose. 
* How the model was trained, and whether any finetuning or instruction tuning was used  , This tells users how the creators of the model envisaged it to be used and hints at whether the model is useful for a particular task.
* Whether the model is quantised or not. Quantisation reduces the size of a model, quantised models require less memory and run faster so which is a consideration for researchers who want to run models locally on their laptops. They will need to consider the balance between performance and compute constraints.
  Prompting vs finetuning.


If  a scientist’s research involves fine-tuning LLMs there are additional challenges to understand, such as how to structure training data to get the most out of the model. 

With a single task and a starting model, researchers can experiment to see how well the model performs. It’s always advisable to start with prompting the model first, or using a Retrieval Augmented Generation (RAG) approach that is designed to improve the efficacy LLMs by leveraging data or documents relevant to a task and providing them as context for the LLM  . These options do not involve training the model, so they are easier to get started with. 

Pre-trained models can be fitted into local machines and bent to do specific tasks, but if these approaches do not provide the performance needed, researchers can finetune a model to perform a specific task. There are resources in our GitHub to help, including prompting examples and tips for finetuning including how to set up data  .

**Evaluating an LLM**

To thoroughly evaluate how well a model is doing, researchers will need to figure out a formal evaluation method. For some tasks, that can be straightforward. For example, if examples have a fixed output format such as with a maths question, they can automatically run a dataset of examples through the model and compute the accuracy of the LLM’s response. However researchers must ensure that none of the data they have used for evaluating the model has been used in the training, or it is a little like seeing the exam questions while revising.

However other tasks, such as translating text from one language to another will have many possible outputs, making it harder to evaluate whether a response is correct or not. In this case, it may be necessary to see how well the LLM output works for some other downstream tasks or to manually judge outputs to ensure a model is not hallucinating.

**Responsible innovation**

Using LLMs responsibly in research and innovation was a hot topic in the workshop. It is important to consider some of the limitations of LLMs, such as their ability to exhibit bias or to hallucinate  . Hallucination, or confabulation, is when a model generates a response that is not based on real world data, for example generating a fictitious journal article title in response to a literature search query. Human oversight in safety critical areas is always necessary, but thoughtful curation of data can help reduce bias . As with all research, it is desirable to involve end users in research and gather diverse perspectives and to think about accountability and human oversight of your work. 


Responsible use of LLMs is linked to good software engineering practices, such as test-driven development. Good code can make research easier to reproduce and give others more confidence in your work. Open-source libraries such as Hugging Face offer LLMs that can be a good base for researchers to build upon, while careful testing ensures they are working as desired. There are resources on good software practices in our GitHub repository.


**Code for progress**
To build upon the workshop and help researchers get started, we have packaged and published some Python code that they can use as a starting point to develop and build their ideas for their projects if they wish. 


The code is distributed under a free-use MIT license, allowing researchers to freely take the code and modify it in any way. Certain components of the code, such as running a training loop in PyTorch are easy to apply to many projects, so users need only swap out your own model. This is relatively simple because the nature of the Hugging Face library makes it very easy to swap out different types of models without changing much of the other code.
 We hope this core material will be useful and they might share their modifications to benefit others beginning to utilise LLMs. The code is available [on GitHub](https://github.com/acceleratescience/large-language-models) for anyone to access and we hope to spread the word so it can be used widely. 


*In addition to the resources available on GitHub, the AI Clinic is available to all researchers at the University of Cambridge and can offer support with approaches, methodology and troubleshooting at all stages of the research pipeline. Get in touch (accelerate-mle@cst.cam.ac.uk) if you would like to speak to one of our experts. You can also sign up to be notified of the next LLMs course [here.](https://www.training.cam.ac.uk/apsci/event/5276932)*