---
layout: blog-single
title: Towards broad generalization in machines
excerpt: "AI today powers everything from your phone's autocorrect to your
  YouTube feed. However, all these models have one thing in common: they're very
  good at doing things in their training dataset, and are very bad at things
  outside it. A particular example of this is self-driving cars, which were
  \"nearly there\" 6 years ago and have made surprisingly little progress since.
  The difficulty is that AI systems underperform when met with unexpected
  situations outside their training data (like a tree fallen on a road). To
  build more robust, safe and versatile AI systems, we need to build models that
  are more intelligent, and can perform reasoning to solve novel situations in
  the way that me and you effortlessly do every day. But building such
  intelligence is a daunting task (even defining intelligence is hard!), so
  where do we start? Dr Soumya Banerjee, Senior Research Associate in the
  Accelerate Programme worked with MPhil student Mikel Bober-Irizar as part of
  the Unconventional Approaches to AI course on the MPhil in Advanced Computer
  Science. This work explored new ways machine learning systems can tackle
  abstraction and reasoning tasks. "
author: By Soumya Banerjee, Senior Research Associate, Accelerate Programme for
  Scientific Discovery and Mikel Bober-Irizar, MPhil student in Advanced
  Computer Science
date: April 22, 2024 10:00 AM
image: /assets/uploads/soumya-and-mikel-blog-post.png
---
AI today powers everything from your phone's autocorrect to your YouTube feed. However, all these models have one thing in common: they're very good at doing things in their training dataset, and are very bad at things outside it. A particular example of this is self-driving cars, which were "nearly there" 6 years ago \[1] and have made surprisingly little progress since. The difficulty is that AI systems underperform when met with unexpected situations outside their training data (like a tree fallen on a road). To build more robust, safe and versatile AI systems, we need to build models that are more intelligent, and can perform reasoning to solve novel situations in the way that me and you effortlessly do every day. But building such intelligence is a daunting task (even defining intelligence is hard!), so where do we start? Dr Soumya Banerjee, Senior Research Associate in the Accelerate Programme worked with MPhil student Mikel Bober-Irizar as part of the Unconventional Approaches to AI course on the MPhil in Advanced Computer Science. This work explored new ways machine learning systems can tackle abstraction and reasoning tasks. 


**A long journey to intelligence**


In 1967, long before the advent of AI like we know it today, Mikhail Bongard published Pattern Recognition, noting how scientists such as Alan Turing have long posited the concept of a thinking machine; but while machines can be built to solve specific tasks (such as solving quadratic equations or playing chess), no progress had been made to imitate or even understand the ability of us humans to adapt to new situations. Bongard suggests that pattern recognition, the ability to decompose situations into objects and concepts, is central to the abilities of human intelligence.

Bongard introduced a set of logic puzzles (known now as the Bongard Problems) which were designed to test whether a (hypothetical future) machine can perform the sort of logical reasoning that we take for granted each day. Each problem has 12 images, split into two groups. The goal of each problem is to answer the question: "What sets apart these two sets of images?" Can you solve these [Bongard problems](https://github.com/neelsoumya/arc_paper_blog/blob/main/Picture_1.png)\[﻿2]?

Over 50 years later, a machine that can solve these types of problems has yet to surface. It turns out that modern machine learning algorithms are exceptionally good at learning patterns in large training data, but struggle to generalise to unseen situations that never appeared during training.

In 2019, Francois Chollet called this ability broad generalisation, and introduced a new more rigorous benchmark, the Abstraction & Reasoning Corpus (ARC), against which computer systems can be tested. Similarly to the Bongard Problems, ARC problems ask people (or computers!) to solve logic puzzles involving colourful grids, where each problem involves learning a transformation from 3-5 examples and applying it to a test input to produce an output grid that must be pixel-perfect as in [these examples.](https://github.com/neelsoumya/arc_paper_blog/blob/main/Picture_2.png)

There have been three international competitions on ARC with over $100,000 in prizes, but we've yet to see a machine-learning-based solution that can solve a significant portion of ARC problems: the best solutions (while impressive) instead rely on hand-crafted rules and heuristics. From an ML perspective, we've got as little as 3 training examples and 10300 possible outputs.

**A new approach** 


In my Masters project, I looked at two new ways that a machine-learning system could be used to solve ARC tasks.

The first is a system called [DreamCoder ](https://royalsocietypublishing.org/doi/10.1098/rsta.2022.0050)(originally built by MIT), which uses neural networks to write computer programs that represent transformations, which we adapted to work on ARC tasks. By defining a programming language of potentially useful primitives (like rotation, filling in), DreamCoder is able to compose these into complex transformations. A neural network trained on "dreamed" problems looks at a task and suggests which transformations to try next, massively reducing the exponential search space. Our language, PeARL (Perceptual Abstration and Reasoning Language), allows DreamCoder to use higher-order functions and lists in its solutions.

Here's an example of a task solved by DreamCoder. It first constructs a function that says "set the background to orange", and then applies this function individually to each object in the grid, before overlaying them on their original positions. This program gives the correct output for the test example! Details of this example can be seen here.

**What's next?**


Imparting abstraction and reasoning abilities into our machine learning models remains an unsolved and elusive touchstone problem, and is likely to remain so for some time. However, we see two very different avenues can both make progress: a complex symbolic reasoning system harnessing neural networks (like DreamCoder), as well as relying on the emergent reasoning capabilities of extremely large foundation models  (we note that there is a very lively debate on whether foundation models have reasoning capabilities). When we crack this problem, it will be fascinating to see on which side we end up.

If you want to learn more about this work, please read [our paper.](https://arxiv.org/abs/2402.03507)

Bober-Irizar, M. and Banerjee, S., 2024. *Neural networks for abstraction and reasoning: Towards broad generalization in machines.* arXiv preprint arXiv:2402.03507.

\[1] [https://www.theverge.com/2018/7/3/17530232/self-driving-ai-winter-full-autonomy-waymo-tesla-uber ](https://www.theverge.com/2018/7/3/17530232/self-driving-ai-winter-full-autonomy-waymo-tesla-uber)

\[2] If you're interested in learning more about Bongard Problems, or the solutions, check out Harry Foundalis' diligent collection: <http://www.foundalis.com/res/bps/bpidx.htm>