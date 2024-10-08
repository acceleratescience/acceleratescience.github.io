---
layout: blog-single
title: How can we use AI to model the bio-production of feedstock chemicals from
  sustainable carbon sources?
excerpt: >-
  Most feedstock chemicals used in the chemical industry - essential components
  required to produce pharmaceuticals, fertilisers, plastics, paints, adhesives,
  coatings, electronics, cleaning products, and toiletries - are sourced from
  fossil feedstocks. In fact, the chemical sector is responsible for
  approximately 6% of global greenhouse gas emissions 


  Fully decarbonising the chemical industry will be difficult, if not impossible, because most chemicals inherently contain carbon atoms essential to the material’s structure. To meet the challenge of reducing the chemical industry’s reliance on fossil resources, alternative carbon sources must be explored, such as carbon dioxide. 
author: Marion Isabelle May Short, NanoDTC PhD student, Yusuf Hamied Department
  of Chemistry
date: September 17, 2024 11:12 AM
categories:
  - accelerate-spark-data-science-residency
image: /assets/uploads/marion-short-mtriculation-pic.jpg
---
Most feedstock chemicals used in the chemical industry - essential components required to produce pharmaceuticals, fertilisers, plastics, paints, adhesives, coatings, electronics, cleaning products, and toiletries - are sourced from fossil feedstocks. In fact, the chemical sector is responsible for approximately 6% of global greenhouse gas emissions 

Fully decarbonising the chemical industry will be difficult, if not impossible, because most chemicals inherently contain carbon atoms essential to the material’s structure. To meet the challenge of reducing the chemical industry’s reliance on fossil resources , alternative carbon sources must be explored, such as carbon dioxide. 

Carbon dioxide is a renewable and abundant carbon source that can be converted into feedstock chemicals such as fatty acids and alcohols via microbial fermentation. I work with acetogenic bacteria, which are capable of converting carbon dioxide and hydrogen into acetate and is used in the chemical industry for the production of polymers and textiles. Specifically, I am developing a bio-hybrid system that combines sustainable solar hydrogen generation with microbial fermentation for the bio-production of acetate from carbon dioxide.

One of my goals is to understand how the different chemicals present in the fermentation medium affect acetate production. To learn how to model this behaviour, I took part in the Accelerate Science -Cambridge Spark – Introducing Data Science for Research Programme. This course equipped me with the necessary knowledge and skills to implement data science in my own research. During this course, I developed a logistic regression model which could predict the concentration of acetate produced during fermentation given the concentration of the chemicals present in the medium at the start of the experiment.

**LLMs for debugging**

As a relative beginner in this area, I sometimes hit roadblocks and wondered whether I could use a large language model (LLM) to help with this specific challenge and more widely whether they could enhance my research. So, when I received an email from the Accelerate Programme about an LLM study group I signed up immediately. Despite learning about ChatGPT and other tools in the news, I initially thought that researchers had to build their own LLM to do a specific task, such as debugging, but the workshop taught me otherwise and I now use ChatGPT to debug code.

Attending the workshop, I learned that there are so many useful LLM tools already out there and researchers don’t have to build things from scratch every time, for every use case. This takeaway alone lowered the barrier of access while gaining a basic understanding of how LLMs work was also useful in helping me develop use cases.

I am now halfway through the Machine Learning Academy run by the Accelerate Programme and Cambridge Spark where I am learning more advanced data science and machine learning techniques. I am learning how to modify my algorithm to make the model more robust, by accounting for unbalanced classes in the dataset, for example. Taking part in the Data Science for Research course and the Machine Learning Academy has allowed me to gain a deeper understanding of these techniques and the best practices for implementation in my research . 

AI has enabled me to gain a deeper understanding of the microbial fermentation system. The logistic regression model I used on the dataset classified each experiment as successful or unsuccessful depending on whether the concentration of acetate produced during the fermentation period was above or below a certain threshold. This model revealed that the presence of glycerol (a common chemical used when storing bacterial samples) in the medium at the start of the experiment hindered acetate production. Setting the threshold for successful/unsuccessful experiments as the concentration of propanoate produced during the experiment revealed that glycerol surprisingly increased propanoate production. Hence, they elucidated a possible glycerol to propanoate metabolism present in the bacteria which contended with acetate production. Such metabolic behaviour has not been reported for this strain of bacteria and is now being investigated further.

Furthermore, I took part in a Hands On Machine Learning Workshop organised by the Accelerate Program in which different researchers from different departments worked together in teams to build machine learning models for online datasets. This workshop was extremely valuable in seeing how different researchers tackled the challenges encountered when trying to build a model and the discussions about when to use certain techniques  were illuminating. For example, we discussed the merits of different test/train/cross-validation splits and why it was necessary to stratify the data in an unbalanced dataset for a classification problem. We also tested different scaling techniques and machine learning models in order to find the best algorithm to cluster classes in the dataset. I have since used these techniques in my own programming project.

**Looking to the future**

I will continue to develop the logistic regression model to predict the concentration of acetate produced during fermentation of carbon dioxide. I need to add more data to the dataset and continue to refine the model to optimise its predictive power. Being able to predict which conditions lead to the highest acetate production would help to make the fermentation process more efficient. Thus, machine learning could help to improve the bio-production of feedstock chemicals from sustainable carbon sources, which could lead to more environmentally-friendly products in time.