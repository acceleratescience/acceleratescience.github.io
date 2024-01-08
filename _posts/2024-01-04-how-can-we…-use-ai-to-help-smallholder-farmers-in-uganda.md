---
layout: blog-single
title: How can we… use AI to help smallholder farmers in Uganda?
excerpt: My team at the Makerere Artificial Intelligence Lab is harnessing AI
  and applying it to problems facing farmers, including crop disease
  surveillance. We take an end-to-end approach that begins by understanding the
  user’s problem and then works on the technical aspects of the project, before
  deploying useful AI systems.
author: Joyce Nakatumba-Nabende, Head of the Makerere Artificial Intelligence
  Lab and Senior Lecturer in the Department of Computer Science at Makerere
  University, Uganda
date: January 8, 2024 9:30 AM
categories:
  - machine-learning
image: /assets/uploads/joyce-nabende-blog-january-2024-1-.jpg
---
Agriculture accounts for over 40% of Uganda’s GDP, employs 80% of the working population and makes up 85% of exports, such as delicious coffee and cocoa beans for chocolate.


Yet, the farmland is primarily rain-fed, making it vulnerable to drought, and Ugandan smallholder farmers are among the most affected by the impacts of climate change, according to [the UN](https://unfccc.int/climate-action/momentum-for-change/ict-solutions/enabling-farmers-to-adapt-to-climate-change).


To help farmers cope with the effects of higher average temperatures and changing rainfall patterns, which result in a reduction in food security and a decline in the quantity and quality of water, there are radio programs that share weather forecasts and other helpful information such as disease hotspots to help them minimise crop loss.


My team at the [Makerere Artificial Intelligence Lab](https://air.ug/) is harnessing AI and applying it to [problems facing farmers](https://air.ug/project/3/details), including crop disease surveillance. We take an end-to-end approach that begins by understanding the user’s problem and then works on the technical aspects of the project, before deploying useful AI systems.


In the Spring of 2023, I travelled to Cambridge with my colleague Andrew Katumba, to connect with other researchers involved in the Accelerate Programme for Scientific Discovery who are using AI in their quest to improve the development of AI systems for use by smallholder farmers in the provision of agricultural services.

**Planting the seed of the project**


Our project began by crowdsourcing information about crop pests and diseases nationwide. We worked with agricultural experts to ask farmers to take geotagged photos of their crops using mobile phones. We built up a map using these crowdsourced images and photos taken which enabled us to see the spread of diseases over months as information kept pouring in.


We thought it would be interesting to overlay this information with speech data about crop blights collected from radio broadcasts that frequently share information or host call-ins for agricultural workers with burning questions. As internet access is unavailable in remote areas, many farmers rely on radio shows for information.

**Growing our dataset**


Before we could build speech recognition models designed to listen to the radio, it was necessary to build language datasets to train the models to understand local languages. We collaborated with Mozilla to use its [Common Voice platform](https://commonvoice.mozilla.org/en), which is a crowdsourcing project that is designed to teach machines how people speak in a bid to make voice recognition software open and accessible to everyone.


Working with linguists, we collected scripts and text for people to read and reached out to experts with links to communities in the Buganda Kingdom in Uganda. In this way, we were able to record voices using Mozilla’s platform and collect agricultural voice data in Luganda using an in-house mobile app called “Yogera”. Luganda is the Bantu language of the Baganda people and is widely used in Uganda, with more than two million speakers.


This process enabled us to get good-quality speech data upon which we could start building our natural language processing (NLP) models. We used the speech recognition models to listen in to radio broadcasts during the COVID-19 and Ebola pandemics in Uganda to understand people’s sentiments around the government interventions to stop their spread.

\
Just like science, agriculture has its own vocabulary. We needed to harness spoken examples of this vocabulary to train our general NLP model to become domain-specific. Luckily, we had access to a treasure trove of examples thanks to smallholder farmers we had previously worked with and were able to add specific agricultural data to our model. We are currently improving the model and plan to roll out an updated version of the system to farmers.

**Weeding out problems**


We collaborated with smallholder farmers to crowdsource images of their crops via our Adsurv surveillance mobile application. This project evolved into a question and answering service where farmers could send a question to an agricultural expert, such as “There is cassava mosaic disease nearby, what can I do and where can I get help?” but it proved so popular the experts became overwhelmed. 


We decided to use the previously collected questions and answers to build an AI model capable of providing agricultural advice. The current system is based on natural language processing (NLP) processes and features models for: language identification, automatic speech recognition in both English and Luganda, question similarity, and topic categorisation. Essentially, the AI model compares the similarity of a question a farmer has asked with the previously asked questions. If the farmer doesn’t like the advice, they can connect with a human expert. While the AI works, we found that not all the farmers were familiar with English, and were more comfortable speaking their local languages, so we have found another application for the speech models we built.

**Helping farmers flourish**


Building automatic speech recognition for the agricultural domain with the intention of helping farmers is at the heart of our work. Our mobile app now offers a voice-enabled question-answering system for smallholder farmers to conversationally access feedback to their inquiries based on expert opinions, using AI. It also enables farmers to upload photos of their crops and receive machine learning-based disease diagnosis and advisory in their local languages.  

**A fertile future**


Having built a community and collected a body of data, we see ways in which we can extend our work. For example, we are partnering with Gudie Leisure Farm - a social enterprise that helps smallholder farmers become eco-entrepreneurs – which we hope will enable us to scale our app and increase the number of young farmers using our advisory system. We also plan to increase its reach by adding multiple Ugandan and African languages. 


Finally, we intend to work with researchers in the [ML@CL group](https://mlatcl.github.io/) at the University of Cambridge building on collaborations from our visit, to build and evaluate an edge computing architecture for deploying the question-answering system in rural areas with Internet connectivity limitations.