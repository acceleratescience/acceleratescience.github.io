---
layout: blog-single
title: "Engineering a model to help learn more about Schizophrenia "
excerpt: Our netts software has been successful in representing transcribed
  speech as networks and capturing speech abnormalities in patients with
  schizophrenia. To make this system accessible to clinicians and other users,
  we need to make it simple to install. The Accelerate Programme’s Machine
  Learning Engineering Clinic (MLE Clinic) gave me the opportunity to work
  together with Accelerate’s Senior Machine Learning Engineer Ahmad Abu-Khazneh
  and Machine Learning Engineer Ryan Daniels   to troubleshoot technicalities
  and streamline what I hope will be an impactful new tool for other researchers
  and one day, clinicians.
author: " Dr Caroline Nettekoven, Postdoctoral Researcher, University of Cambridge  "
date: April 30, 2023 10:00 AM
image: /assets/uploads/pipeline-figure-netts.png
---
Our *netts* software has been successful in representing transcribed speech as networks and capturing speech abnormalities in patients with schizophrenia. To make this system accessible to clinicians and other users, we need to make it simple to install. The Accelerate Programme’s [Machine Learning Engineering Clinic](https://acceleratescience.github.io/machine-learning-clinic) (MLE Clinic) gave me the opportunity to work together with Accelerate’s Senior Machine Learning Engineer [Ahmad Abu-Khazneh](https://acceleratescience.github.io/team/ahmad-abu-khazneh.html) and Machine Learning Engineer [Ryan Daniels](https://acceleratescience.github.io/team/ryan-daniels.html)  to troubleshoot technicalities and streamline what I hope will be an impactful new tool for other researchers and one day, clinicians.

**Building the *netts* tool**

The idea for the *netts* tool stems from my work with [Sarah Morgan](https://acceleratescience.github.io/team/sarah-morgan.html). Sarah is a Departmental Early Career Academic Fellow with the Accelerate Programme and her research focuses on applying AI and data science approaches to better understand development, cognition and mental health. In our joint research, we used natural  language processing (NLP) techniques to capture the semantic content of speech as a network, including speech abnormalities in patients with schizophrenia. We found some differences between the resulting semantic speech networks from healthy control subjects and psychosis patients, and then have dipped into existing NLP toolboxes and combined NLP with graph theory to come up with netts that is able to represent transcribed speech as networks. One possible application of the tool is using measures such as speech to try and predict or monitor when a patient with schizophrenia is beginning to relapse and notify a clinician who can help. We have explained  the research in more detail here. \[ADD LINK TO OTHER BLOG]

![Netts pipeline](/assets/uploads/pipeline-figure-netts.png "Netts pipeline")

> ***Netts* pipeline**

\
**Simplicity is never simple**

We would like *netts* to be utilised more widely including in clinics, so making it easily accessible and simple to install for clinicians without a coding background is essential. We first partnered with the Alan Turing Institute to package *netts* in an intuitive way, as well as write documentation for it.  Their work was successful, but after about a year, the location of some of the language models changed, which caused installation problems for users.

**Professional troubleshooting**

I received emails from fellow researchers who were eager to try *netts*, flagging installation issues and developed a workaround and sent them instructions so they could use it. However, the approach was obviously not a sustainable long-term solution for me, or desirable for users who might find additional installation processes off-putting and give up . So, I worked with Ahmad and Ryan through the MLE Clinic to troubleshoot the problem and improve the tool.

After careful investigation, Ryan pinpointed a bug in one of the underlying libraries  used by the tool and the team was able to accommodate the changes to the library to get the installation process working smoothly once more. He also fixed an issue with the model not appropriately parsing certain sentences when users tried to feed it a transcript, which caused *netts* to grind to a halt and deliver unhelpful error messages. 

The clinic provided me with guidance on how to make the tool more user friendly, by decluttering and reducing the amount of noise in the tool’s user interface and making the error messages more informative to the end-user. They also helped make the tool easier to maintain and extend in the future by updating the tool's unit tests and polishing its documentation. I was really thankful to have the support of the clinic team. The time they have saved me fixing small details and improving the tool is immeasurable and allowed me the time to focus on the underlying research. 

![Semantic speech networks created by netts from 6 speech transcripts](/assets/uploads/raster-plots-x-6-netts.png "Semantic speech networks created by netts from 6 speech transcripts")

> **Semantic speech networks created by *netts* from 6 speech transcripts**

**A technically sound future**

Doing this technical work behind the scenes is invaluable in helping adoption of the tool going forward. For example, it gives it longevity. Before the MLE Clinic became involved, updating netts was almost like an out-of-hours job. Research moves quickly, and there is an expectancy that a tool will work long after your paper is published, but maintaining it is not compensated and may detract from future work. Giving it life beyond the end of a specific project is wonderful. We see netts as a long-term project and hope it will expand and be adopted more widely. The application for this technology is huge and the framework is information-rich, so netts has an incredible number of features which we haven’t even investigated yet. We would like to add more features so it’s good to know that its technical foundations are sound and this should make it easier to enhance our offering while ensuring backwards compatibility.

The improvements the MLE Clinic team made to *netts* tap into a broader trend within the machine learning community. The overarching aim should not only be to develop a tool that generates a particular insight, but to artefacts  that can be applied to different problems and help create novel, unforeseen solutions. *Netts* is now an artefact and could make a big impact elsewhere, from diagnosing and monitoring neurodegenerative conditions to helping us understand the neural basis of language. What is certain, is researchers will be able to use the tool more easily and with confidence.

[Dr Caroline Nettekoven](https://www.caroline-nettekoven.com/) is a postdoctoral researcher, previously based at the University of Cambridge and currently based at Western University, Canada.*

*Netts is available as an open Python package [here](https://alan-turing-institute.github.io/netts/). Further information is available on Caroline Nettekoven’s [website.](https://www.caroline-nettekoven.com/post/netts/)*

*The Accelerate Programme’s Machine Learning Engineering Clinic supports Cambridge University researchers using AI in their research, by helping resolve engineering issues they might encounter when implementing machine learning methods. Find out more about the clinic’s work and how to log your issue for support [here](https://acceleratescience.github.io/machine-learning-clinic).*