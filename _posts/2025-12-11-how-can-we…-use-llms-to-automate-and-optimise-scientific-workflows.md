---
layout: blog-single
title: How can we… use LLMs to automate and optimise scientific workflows?
excerpt: >-
  Many researchers work in large scientific collaborations where they must
  process, analyse, and interpret vast volumes of data using advanced
  statistical methods, including Machine Learning and AI-based techniques. 


  I am exploring whether it is possible to use Large Language Models (LLMs) to automate and optimise scientific workflows to help make discoveries faster. The goal of this project is to develop a Multi-Agent System that is powered by pre-trained LLMs and designed to automate complex data analysis tasks.
author: Boris Bolliet, Assistant Teaching Professor in the MPhil in Data
  Intensive Science, Department of Physics, Cavendish Astrophysics Group
date: 2025-12-11T22:06:56+00:00
image: /assets/uploads/boris-bolliet-blogpost-photo.png
---
Many researchers work in large scientific collaborations where they must process, analyse, and interpret vast volumes of data using advanced statistical methods, including Machine Learning and AI-based techniques. 

I am exploring whether it is possible to use Large Language Models (LLMs) to automate and optimise scientific workflows to help make discoveries faster. The goal of this project is to develop a Multi-Agent System that is powered by pre-trained LLMs and designed to automate complex data analysis tasks.

**A universe of possibilities**

The project began in cosmology, with a goal of processing data from telescopes to learn about the fundamental properties of the universe. It typically takes PhD students several years to learn to use the software needed to run simulations and confront them with measurements from telescopes. Furthermore, cosmological analyses must be informed by the latest results so that a new model can be considered if needed. In data-driven fields, this is generally how science progresses and new discoveries are made.

We decided to try and automate these research challenges by designing AI agents that can act as expert users capable of using libraries, informing analysis with results from scientific literature and running experiments and simulations.

To achieve this, we built [CMBAGENT](https://docs.ag2.ai/0.8.7/docs/user-stories/2025-04-15-CMBAgent/cmbagent/#overview); an AI system for Autonomous Scientific Discovery, with a focus on our research in Cosmology. The first version allowed us to reproduce a cutting-edge cosmological data analysis in a few minutes compared to a few hours, many times faster than had previously been achieved

In a prototype version, while human feedback was required after every LLM-agent output, we quickly realized that most human feedback could be substituted by adding more agents to the system. So we created more agents and removed the human from the loop to create a fully autonomous multi-agent system. Multi-agent systems like ours work by breaking complex problems into smaller tasks, verify their own outputs, and essentially act as digital research assistants. They are more robust than single AI models because they can plan, review, and cross-check their own work. They allow us to assign a role or even a ‘personality’ to each agent. For example, one agent could be a researcher interpreting results and asking questions and one an engineer writing codes, or one could be an idea generator and one could be a ‘hater’, relentlessly challenging and criticising to make the end product more robust.

By using these sorts of multi-agent systems, AI not only generates scientific research, but can also review and correct scientific literature at scale. Additionally, unlike humans, multi-agent systems are capable of searching across academic fields, from astronomy to oncology, mixing ideas to find the best solutions.

We found that our custom multi-agent systems, based on LLMs such as ChatGPT, Claude and Gemini, could automate the workflow needed to [solve the cosmological parameter inference problem](https://arxiv.org/abs/2507.07257) (for example measuring the age of the universe based on telescope data), where researchers are given data and, based on assumptions on how the universe works (expansion of space, formation of galaxies) extract the most likely values of the model parameters. Just a year ago, this would probably have been impossible and now it is easily done.

**An even bigger picture**

We are now setting our sights on the automation of research in different disciplines, enabling researchers to spend more time on thinking about ideas instead of performing routine tasks. This is the Denario project that I co-lead with Francisco Villaescusa-Navarro at the Flatiron Institute, New York, and Pablo Villanueva-Domingo at Universitat Autònoma de Barcelona (UAB).

DENARIO is an AI multi-agent framework designed to perform end-to-end scientific research that can generate ideas, create research plans, write and execute code, make plots, and write entire scientific paper. It is built as a modular system, so it can perform either very specific tasks, such as generating an idea, or carrying out end-to-end scientific research. The framework has been named after a Roman coin, because money is used for the exchange of goods, and we’re trying to facilitate the exchange of ideas across disciplines and fields.

An example use-case: a user can input data and then launch a conversation between 2 agents that essentially debate the data and create a number of research ideas from it. Eventually, the best idea is written in the form of a scientific paper title with a short description.

For the next part, we have created another subsystem that generates a research methodology, taking the form of a research plan also generated by LLM agents. This methodology is sent to another subsystem of multi-AI agents based on CMBAGENT that can perform calculations and generate quantitative results and conclusions. The output material, which might contain observations, measurements, visualisations and plots is sent to a final subsystem that can write a paper automatically, processing the textual output of the analysis, but also the visualisation. 

We have generated many high-quality scientific papers using this method, from Physics to Biology. One of the papers we generated merges ideas from quantum algorithms and cosmological simulations, fields which are not typically closely associated. This particular paper is highlighted on our [project page](https://astropilot-ai.github.io/DenarioPaperPage/) because it was selected in the first ever [conference for AI-generated papers](<https://openreview.net/group?id=Agents4Science/2025/Conference#tab-accept)>) from more than 250 submissions.

**Momentous milestones**

I would not have been able to start this project without funding from the Accelerate Programme for Scientific Discovery. It gave me access to the resources needed to run top-scoring LLM’s from OpenAI and Gemini. Importantly, the funding enabled me to spend extended periods of time with experts in scientific software and machine learning, including Prof. Antony Lewis in Sussex, and Francisco Vialleascusa-Navarro in New York, which eventually led to our collaboration on Denario.

We have recently published the [paper](https://arxiv.org/abs/2510.26887) outlining [The DENARIO Project](https://astropilot-ai.github.io/DenarioPaperPage/) that includes more than 20 co-authors, including Chi Wang, an expert in LLMs from Google DeepMind and Thomas Meier, a philosopher at the Munich Center for Mathematical Philosophy who has examined ethical implications concerns.

Our contribution has been recognised by Google. We have received a Research Scholar Program Award 2025 and two of my team’s papers on this project were accepted at Machine Learning for Astrophysics, Colocated Workshop at the Forty-Second International Conference on Machine Learning ([ICML 2025](https://ml4astro.github.io/icml2025)).

**Looking ahead**

From September, two PhD students - Tom Borret and Patrick Janulewicz - and one Assistant Research Professor Inigo Zubeldia, are joining our efforts to scale our work. Having generated scientific papers and checked they made sense by hand, we will now develop systems capable of automatically evaluating the automatically-generated results. We hope this approach will steer research towards the most interesting problems and findings, and our longer-term goal is to help accelerate important discoveries.

Projects like CMBAGENT and DENARIO demonstrate that research is no longer something that only humans should conduct independently, and I expect we will continue to increase collaboration with machines to carry out scientific analysis faster and better.

*This project was funded through the 2024 Accelerate-C2D3 funding call for novel applications of AI for research and innovation. You can read more about other funded projects [here.](https://science.ai.cam.ac.uk/news/2024-12-09-exploring-novel-applications-of-ai-for-research-and-innovation-%25E2%2580%2593-announcing-our-2024-funded-projects.html)*