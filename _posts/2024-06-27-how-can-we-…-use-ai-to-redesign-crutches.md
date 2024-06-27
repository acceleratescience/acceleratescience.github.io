---
layout: blog-single
title: How can we … use AI to redesign crutches?
excerpt: By 2050, more than one billion people will have used a mobility aid
  including crutches, which tend to be uncomfortable and can even cause
  secondary injuries from joint and muscle pain to skin irritation and carpal
  tunnel syndrome. We set out to redesign crutches used by the NHS to address
  problems of instability, effort and pain, using machine learning to discover
  more optimal geometry that can be personalised for patients.
author: "Dr Riccardo Conci &  Riccardo Ali, M.Phil in Advanced Computer Science,
  Department of Computer Science and Technology "
date: June 27, 2024 12:56 PM
image: /assets/uploads/how-can-we-use-ai-to-redesign-crutches.png
---
By 2050, more than one billion people will have used a mobility aid including crutches, which tend to be uncomfortable and can even cause secondary injuries from joint and muscle pain to skin irritation and carpal tunnel syndrome. We set out to redesign crutches used by the NHS to address problems of instability, effort and pain, using machine learning to discover more optimal geometry that can be personalised for patients.


**Setting our course**


Our research to explore the use of machine learning to redesign crutches formed our final project for the [ML and the Physical World](https://mlatcl.github.io/teaching/) module, taught by Neil Lawrence and Carl Henrik Ek. This course, which is part of the  MPhil in Advanced Computer Science, encouraged us to apply probabilistic machine learning, specifically Gaussian Processes, to real-world problems. Crutches were a natural choice because not only did they give us a technical challenge that would test what we learned on the course, but I (Dr Conci) had previously been involved with the Andrew Simpson Sport Enabling Trust, which aims to redesign crutches in memory of Engineering student Andrew Simpson who was diagnosed with an aggressive bone cancer, which led to an upper knee amputation.


Continuing the work of the Engineering Design Team at Cambridge in creating prototype crutches, we set out to investigate whether we could use Gaussian Processes and Bayesian Optimisation to generate hypotheses about novel crutch geometries.


**Starting point/ You can’t improve what you can’t measure**


Creating a personalised crutch geometry is essentially a search optimisation problem. Out of all the possible geometries we needed to rapidly discover which one fits ‘best’. So first, we set out to define what ‘best’ means, and then we needed to iterate efficiently to find it. We defined the quality of a crutch geometry by combining subjective and objective measures of effort, instability and pain after a 90-step crutching bout. The objective metrics were derived by the accelerometer data of a H10 heart rate monitor. These combined subjective and objective metrics defined our ‘loss metric’ that we aimed to minimise. 


When it comes to optimising this metric, mathematically deriving a model to capture such complexity is intractable. Moreover, there is a scarcity of large datasets, which limits the application of conventional data-hungry machine learning methods. Gaussian Processes and their integration with Bayesian Optimisation became our key solution. We collaborated with Dr Christof Schwiening at the Physiology, Development and Neuroscience Department at the University of Cambridge to design and manufacture a flexible crutch. By adjusting three parameters this flexible crutch can effectively turn into any crutch potentially useful geometry. We then asked participants to test the standard NHS (Lofstrand) elbow crutch and the Smart Crutch, which is currently on the market as a replacement to the standard NHS.


Once we had a loss metric for these standard crutches, we fed them to our Bayesian optimiser with the crutch parameters, enabling the model to suggest the next set of crutch parameters to test. We then fed the suggested new parameters into a simulator to assess whether the AI’s crutch geometry was possible, and if it was, set up our flexible crutch to match. We could then run the suggested physical experiment, collecting qualitative and quantitative data to generate a new person- and geometry-specific loss, which could be analysed by the model again. Each new experiment, therefore, provides new information that brings us closer to finding the optimal crutch geometry for that participant. 


**Results**


With as few as five crutching bouts, our Bayesian optimiser managed to identify a novel geometry that was 35% better on instability, effort and pain compared to the standard crutch for our participant.  The new geometry brought the user’s elbow back and the handle downwards, creating a shape that is very different to the NHS offering, and yet substantially better. 


How can we explain this novel design? Firstly, with a wrist angle about 30 degrees wider than the NHS’ right-angled design, the geometry offers a much stronger and more comfortable wrist position. Second, due to its geometry, there is a large forward moment which helps you move forward with minimal effort. This needs to be carefully managed so the crutch doesn’t throw you forward but rather aids in stability. 


When you look at the model’s design, it’s not a geometry that immediately comes to mind. That’s a big advantage of using an AI process for design. After defining our loss metric and specific algorithm, we can let it find the optimal geometry without further bias of what it ‘should’ look like. This can provide some excellent, unexpected, and sometimes ‘creative’ results reminiscent of AlphaGo’s move 37. 


**Next steps**	


We won an award for our use of machine learning to revolutionise crutch design  and would like to take the project further, meeting the challenges of tailoring geometries to meet individual needs and enabling our personalised crutch to be manufactured for the same cost as the NHS one, which is approximately £10. 
The most exciting aspect of this work is the potential to scale across people. As more data is gathered among individuals with similar characteristics to previous users, it will become easier to discover their personal crutch geometry. 


We plan to conduct a clinical trial with unencumbered participants initially, allowing us to iterate and improve our designs. Ultimately, we want to validate our designs with patients at Addenbrookes Fracture Clinic through a prospective clinical trial, so that one day, anyone who needs to use crutches, can recover without further pain and harm.