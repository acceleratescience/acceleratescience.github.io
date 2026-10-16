---
layout: blog-single
title: How can we… use AI to better understand the societal impact of heatwaves?
excerpt: >-
  Climate change is escalating the frequency and intensity of extreme heat
  events, which pose a significant threat to public health. The correlation
  between heat and adverse outcomes is established, but the underlying social
  behavioural drivers remain poorly understood.


  I’m working on a project with a group of PhD students based at Cambridge, US and Hong Kong that was born out of a research challenge with a predefined topic to investigate the impact of heatwaves. Being awarded funding in the 2025 Accelerate-C2D3 funding call enabled us to take this research further and implement an agent-based model simulation. 
author: Yuanfei Liu, PhD student, Department of Psychiatry
date: 2026-10-16T09:52:48+01:00
categories:
  - machine-learning
image: /assets/uploads/yuanfei-liu-blogpost-photo.jpg
---
Climate change is escalating the frequency and intensity of extreme heat events, which pose a significant threat to public health. The correlation between heat and adverse outcomes is established, but the underlying social behavioural drivers remain poorly understood.

I’m working on a project with a group of PhD students based at Cambridge, US and Hong Kong that was born out of a research challenge with a predefined topic to investigate the impact of heatwaves. Being awarded funding in the 2025 Accelerate-C2D3 funding call enabled us to take this research further and implement an agent-based model simulation. 

**Simulating a heatwave** 


Traditional statistical methods often fail to capture the dynamic, non-linear interactions that shape human adaptation during environmental crises, so we set out to explore whether a society of LLM-driven agents could reproduce the social mechanisms of heatwave vulnerability and how individuals behave and interact in a society.

Our [study](https://arxiv.org/pdf/2605.15918) is grounded in established, cross-level behavioural theories, with agent needs based on Maslow’s Hierarchy and Complex Contagion Theory used to investigate emergent interactive behaviours. While Maslow’s Hierarchy models how individual motivation evolves from basic survival to social fulfilment, Complex Contagion Theory explains how behaviours spread across a group when reinforced by multiple social contacts. We were particularly interested in how individuals with different levels of vulnerability emotionally and behaviourally respond to a prolonged heatwave, and what social network structures shape the diffusion of risk information and adaptive behaviours such as staying indoors or seeking cooler places.

To investigate this, we used a Large Language Model–enhanced agent-based model to simulate a ‘high dimensional’ virtual society’s response to a prolonged heatwave, utilising Agent Society’s large scale simulation platform designed specifically for LLM-driven generative social science. The simulation involved 100 heterogeneous agents endowed with rich psychological and social profiles derived from real-world data. Their cognitive functions were enabled by the use of the Qwen LLM. 

To quantify individual susceptibility, we constructed a Heat Vulnerability Index (HVI) based on literature-defined risk factors, including age, socioeconomic status, race, and residential characteristics. Agents were classified into four vulnerability levels: low, moderate, high, and extreme.

The simulation unfolded over 13 days, divided into three phases: a three-day baseline, a five-day heatwave with temperatures reaching 40°C, and a five-day recovery period. Throughout the simulation, we collected time-stamped data on agents' emotional states, behaviours, satisfaction of physiological and social needs, and interpersonal communications, to understand how they interacted and adapted to the situation.

**Shedding light on a hot topic**


Our preliminary results show that the psychological impacts of heatwaves are distributed inequitably. For example, highly vulnerable agents exhibited steeper declines in perceived safety and social connection than low-vulnerability peers. Vulnerability also shaped the agents’ capacity to adapt. Resilient agents sustained routine self-care such as staying hydrated and seeking cooler environments, whereas more vulnerable agents took fewer actions to protect themselves against the extreme heat described in the digital scenario.

The study also showed on how risk-information spread, with adoptions of helpful measures driven by social reinforcement in cohesive networks rather than broad exposure to warnings or messages. Helpful actions were more likely to be adopted when people received reinforcement from several close connections, such as friends, family members, or neighbours, rather than simply being exposed to a larger number of warnings or messages. This suggests that real-world heatwave interventions could benefit from working through trusted community networks alongside mass alerts.

Methodologically, our work demonstrates that LLM-based simulations can reproduce and add nuance to classic findings from computational social science. For instance, our analysis of agent communication networks not only confirms the importance of social contagion (people’s behaviours and responses can spread through their social connections) but also supports the role of cohesive, reinforcing ties; complex contagion and provides an explanation for why some public health messages succeed while others fail.

Empirically, our findings highlight that the primary threat of a heatwave - in a society with stable access to food and shelter - may be psychosocial, especially for the vulnerable. They provide a simulated, mechanistic basis for prioritising community-level interventions that strengthen social ties as a core component of climate resilience strategy. 

Members of our team had a poster presentation at the Population Association of America 2026 Annual Meeting, thanks to funding from the Accelerate Programme. With a background in Public Health rather than computer science, I also used some of the Accelerate-C2D3 funding to further develop my machine learning skills. This has helped me explore new ways of using machine learning methods to better understand complex relationships in population health data, and opened up new directions for my research in social and environmental factors of health.

**Going further**


Despite promising results, the model has to be validated using real-world data, which is a big challenge. In order to do this, we need to focus on a specific population, for example we are interested in exploring the impact of heatwaves on pregnant women. We would require a rule-based biological model of pregnancy, plus environmental data and birth outcomes, to better understand how heatwaves impact pregnant women. This would be a longer-term project requiring the involvement of a clinician. 

We are preparing our results for publication for the benefit of the wider community and, have made our model and data sources available on [GitHub](https://github.com/Xander-run/AgentSociety/tree/experiment-1.3.7/examples/heatwave) so that others in the field can use and/or build upon them. 

As extreme heat becomes more frequent and intense, understanding how people respond to heatwaves and how communities can help people adapt will become increasingly important. We hope this work contributes to that growing body of research and helps inform more effective ways of protecting people during future heatwaves.

*This project was funded though the 2025 Accelerate-C2D3 funding call for novel applications of AI for research and innovation. You can read more about other funded projects [here.](https://science.ai.cam.ac.uk/news/2025-11-26-ai-for-tomorrows-breakthroughs-15-new-projects-funded-to-transform-research)*