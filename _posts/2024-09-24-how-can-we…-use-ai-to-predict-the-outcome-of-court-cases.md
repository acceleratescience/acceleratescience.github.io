---
layout: blog-single
title: How can we… use AI to predict the outcome of court cases?
excerpt: >
  The use of Large Language Models (LLMs) offers the possibility of streamlining
  operations and enhancing accuracy in the legal sector, as well as
  democratising access to legal knowledge.


  One of the most promising applications of LLMs in law is automatic information extraction from legal documents, which are rich repositories of knowledge. The benefits of this include cost efficiency - by reducing the need for extensive human labour in sifting through reams of documents - as well as speed, as they can extract useful information from a large volume of cases at a pace unattainable by human counterparts. 
author: Professor Felix Steffek, Faculty of Law and Dr Helena Xie, Centre for
  Business Research
date: October 1, 2024 1:30 PM
image: /assets/uploads/felix-steffek-and-helena-zie-blog-post.png
---
The use of Large Language Models (LLMs) offers the possibility of streamlining operations and enhancing accuracy in the legal sector, as well as democratising access to legal knowledge.


One of the most promising applications of LLMs in law is automatic information extraction from legal documents, which are rich repositories of knowledge. The benefits of this include cost efficiency - by reducing the need for extensive human labour in sifting through reams of documents - as well as speed, as they can extract useful information from a large volume of cases at a pace unattainable by human counterparts. 


As well as proving LLMs can be used to extract data from legal documents, our project funded by the Accelerate C2D3 funding call in 2023 has shown that transformer-based AI and LLMs can be used to predict the outcome of court cases. This use case is beneficial to anyone considering whether they should bring a case to court at considerable cost, as well as to defendants and legal professionals. We think that predicting the outcome of court cases is the most exciting AI application in law because it is not just relevant for those who are going to court. Knowing what a court will decide also helps to settle disputes amicably and draft contracts that work in case of conflict. This is an emerging area of research and it is exciting to contribute to the leading work in the field. 


**Extracting legal knowledge**


We drew upon the Cambridge Law Corpus and chose the United Kingdom Employment Tribunal (UKET) - a manageable dataset with quality data - to test the ability of GPT-4 to automatically extract critical information from a sample of UKET judgments. The UK for centuries has had a number of courts that dealt with special matters, an example of which is the Employment Tribunal which addresses employment-related disputes. The UKET is part of the wider judicial system and one of the three largest tribunals in the greater tribunal system. The UKET dataset that we curated in this project contains more than 52,000 cases, including employment-related cases heard at the UKET between 2011 and 2023. These cases cover a wide range of judicial matters, such as unfair dismissal, unlawful deduction from wages, discrimination etc.  The UKET presents a fertile ground for exploration due to its extensive repository of publicly available judgments, which encapsulate a wide array of legal issues and decisions. 


We tested the ability of GPT-4 to extra eight key aspects that hold significance for both legal specialists and the general public, including the facts of the case, the claims made, references to legal statutes, references to precedents, general case outcomes and corresponding labels, detailed order and remedies and reasons for the decision. 


To facilitate the development of a tool capable of predicting the outcome of employment law disputes, we focused on what lawyers, businesses and citizens would want to know about a judgement, so we next analysed facts, claims and outcomes.


To evaluate the quality of the GPT-4 extractions, we asked a legal expert to manually check the accuracy of the extracted information and the suitability for each case to be used for a downstream prediction application. The manual check process was supervised by a senior legal expert who helped to resolve questions, revised quality check guidance during the process and made additional random checks. The legal expert is qualified at post-graduate level and the senior legal expert is a law professor. Both have previous experience in annotating legal data in a machine-learning context. After examining the accuracy of each extracted factor, we discovered that GPT-4 was really good at extracting information from UKET case transcripts, achieving up to 100% accuracy in the extraction of references to statutes and precedents. The accuracy score of 91% in extracting general outcome labels was the lowest score across all extracted types of information. When we shared these results on LinkedIn, where there is an active community of legal professionals, we saw a lot of interest in our work, probably because it highlights the potential of LLMs to revolutionise the way legal information is processed and utilised, offering significant implications for legal research and practice.


Our findings are important because their impact extends beyond the legal field. Many disciplines would find it beneficial to annotate details to help them analyse data. Currently, many researchers are unsure whether they can rely on GPT-4 and similar models, because they are concerned about hallucinations, but we found that hallucinations are not a problem for our use case. When we published our paper on this work on [SSRN](https://ssrn.com/abstract=4776160), it was on the Top 10 Most Downloaded list for a few weeks, demonstrating how many people are interested in using LLMs as a research tool. We are thrilled that the paper has just been accepted for publication in the ‘Artificial Intelligence and Law’ journal.


**Predicting outcomes**


We next constructed a large-scale CLC-UKET prediction dataset, specifically designed to facilitate a multi-class case outcome prediction task. The dataset consists of 14,582 cases, each supplemented with statements detailing facts, claims and general outcomes of the UKET cases.


We added human performance results on the UKET outcome prediction task using the CLC-UKET prediction dataset to serve as a reference for calibrating prediction models. 


We next used two types of models to predict dispute outcomes in the UKET. First, we drew upon prepared data – the facts, claims and general outcomes extracted by GPT-4 – to fine tune transformer-based models designed for this particular task. Then we tested them on the held-out test data.


We then used another approach, using zero-shot and few-shot large models including GPT-3.5 and GPT–4, to predict dispute outcomes. For the few-shot setting, we further experimented with providing different numbers of examples in the prompt and selecting examples using different strategies (i.e., random selection vs selection using jurisdiction code similarity). Incredibly, GPT-based models achieved comparable results to the transformer models which were specially designed and fine-tuned on our curated data. Incorporating task-related information into few-shot prompts enhanced the performance of LLMs. 


Overall, our results show that there is a gap between machine and human performance, with human expert predictions outperforming all baseline models across evaluation metrics, highlighting the superiority of human judgement in this domain. What is very interesting is that both models and expert annotators demonstrate a high recall and a relatively low precision when predicting “claimant wins” and in contrast a high precision and a relatively low recall when predicting the “claimant loses” label. When it comes to interpreting these results for legal practice, it depends on the specific situation of a potential claimant whether precision or recall provides better guidance. 


The dataset and empirical results obtained with expert annotators and baseline models served as a useful benchmark for the prediction of decisions by the UKET. This work has been published on preprint platforms including [arXiv](https://www.arxiv.org/pdf/2409.08098) and [SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4954617). 


**Use with caution**
There are significant limitations on what we do. For example, we have extracted information from past decisions from a particular set of data divided into neat paragraphs, but in real life, lawyers and parties have different types of information such as emails, contracts, memories of events and sometimes thousands of files.


One issue that we have yet to explore is bias and information leakage. For example, there is the possibility that judges have presented the facts in a way that contains a hint of what they decide, which could influence a model’s prediction about the outcome.


Our work has important implications for the ethics of legal practice. We show that AI is already pretty good in extracting information and predicting court outcomes. At the same time, there are limitations to such tools. As researchers, we are responsible for reporting neutrally on both the benefits and risks of using AI in dispute resolution. At the same time, science has an important role to play as it facilitates an open and informed discourse.


**Looking to the future**


Without funding from the Accelerate Programme, we could not have published the two studies. The grant provided funding for Helena to join our team, as well as for computing costs. Using GPT-4 for automatic annotation, we have created a UKET dataset with detailed legal annotations, which can be used in future research. We are making this dataset freely available for researchers. There is more work to do and we have applied for further grants to use AI to predict other kinds of court decisions, using more sophisticated approaches.


The overarching aim of our work is to increase access to justice and law by using AI to give individuals and businesses better insights into whether they should go to court. Such an inexpensive tool could make it feasible for some people and small businesses that would otherwise be put off going to court and may therefore miss out an outcome in their favour, or a settlement. If all parties have access to this sort of data, it should be possible to solve disputes amicably, without having to go to court.

*T﻿his project was funded though the 2023 Accelerate-C2D3 funding call for novel applications of Ai for research and innovation. You can read more about other funded projects  [here. ](https://science.ai.cam.ac.uk/news/2023-10-26-pursuing-innovative-applications-of-ai-in-research-and-real-world-contexts-%E2%80%93-announcing-our-2023-projects.html)*