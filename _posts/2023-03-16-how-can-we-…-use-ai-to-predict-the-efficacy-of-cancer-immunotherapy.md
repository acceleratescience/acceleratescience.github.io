---
layout: blog-single
title: How can we … use AI to predict the efficacy of cancer immunotherapy?
excerpt: >-
  Immune checkpoint inhibitors, a form of anti-cancer immunotherapy, already
  help to extend and improve the lives of many cancer patients.


  However, at present it is almost impossible to predict who will benefit, and who will unfortunately be harmed by these treatments. I’m using artificial intelligence (AI) and studying patient gut microbiome datasets to hopefully get one step closer to solving this problem. 
author: Dr Ashray Gunjur, PhD student and Honorary Clinical Fellow, University
  of Cambridge
date: March 20, 2023 10:00 AM
categories:
  - accelerate-spark-data-science-residency
image: /assets/uploads/ashray-gunjur.jpg
---
Immune checkpoint inhibitors, a form of anti-cancer immunotherapy, already help to extend and improve the lives of many cancer patients.

However, at present it is almost impossible to predict who will benefit, and who will unfortunately be harmed by these treatments. I’m using artificial intelligence (AI) and studying patient gut microbiome datasets to hopefully get one step closer to solving this problem. 

**An uncertain prognosis**

Immune checkpoint inhibitors are the most common type of immunotherapy used for solid-organ cancers . They block so-called ‘immune checkpoints’, proteins that tolerise and thus prevent the immune system from attacking cancer cells, now widely used to treat a wide variety of cancer types with truly remarkable results. For example, when I started medical school, the vast majority of cases of advanced melanoma (a type of skin cancer that spreads to other places in the body) were unfortunately incurable, but with the introduction of cancer immunotherapy, long-term survival seems possible for approximately half of patients.

While that is undoubtedly brilliant progress, it is still inadequate and leaves a great deal of uncertainty for patients and their families. Hypothetically, two patients can come into your clinic with cancers that look the same under a microscope. The disease has spread to the same organs and both patients are being treated with immune checkpoint inhibitors , but the treatment can have an amazing response in one patient while the other won’t respond, or worse still, will endure debilitating side effects with no positive outcome. Currently, patients only find out whether the treatment will work weeks or months into starting it, so being able to predict who will benefit and who will be harmed before treatment starts would be immensely valuable. 

**Going with the gut**

As an oncology research community, we now have large, clinically-annotated datasets including patient outcomes, such as whether their tumours shrink, and how long they live for. I’m using AI to try and find connections and what might predict those outcomes. I’m focusing my efforts on the gut microbiome – the large, complicated biomass of gut microbes (predominantly bacteria) that live within us – that is relevant to cancer immunotherapy.
Next generation sequencing allows us to take a stool sample from patients before they embark on immunotherapy and extract the DNA, purify, sequence it, then process the data using bioinformatic tools. This converts the gigabytes of raw sequencing data gathered into a count table that estimates the amounts of specific bacteria in a sample as a relative proportion for each patient.

Next, we can use unsupervised machine learning approaches to look for clusters of bacteria in patients’ gut microbiomes and find interesting patterns that can be annotated with known variables to see what variables (such as geography or cancer type) seem to be shaping (or are shaped) by the high-dimensional gut microbiome composition.

We then use supervised machine learning to see if we can use patients' baseline microbiome compositions to predict whether or not they will respond to treatment, using skills I developed on Accelerate Programme’s [Data Science Residency](https://acceleratescience.github.io/resources/introducing-data-science-for-science.html) including Python. To do this, we split patients into training and test groups , for example by study cohort or region, and then see if predictors of response from one are generalisable to another. We’re starting to see that we can to an extent, which is quite amazing seeing as we are not studying a tumour, but a separate part of the body. Finally, we can focus on important features and particular bugs to investigate further. So, for example, we can start to hypothesize which bugs may be ‘good’ or ‘bad’ for treatment response, and why, by looking closely and interrogating what potential functions they have based on their genomes.

![]()

**Hope for the future**

Cancer immunotherapy holds the potential to become more precise, more effective, and more personalised than it is as present.  If we could offer a patient the opportunity to do a stool test and be able to better understand whether they will benefit from this therapy, that would be incredibly useful in tailoring a treatment for them.
But I think the most exciting thing about the gut microbiome is that, unlike the tumour or our own genetics, it is inherently modifiable. This could be as simple as, for example, changing one’s diets, or done more precisely, such as through live biotherapeutic products  . There is the tantalising possibility that if we understand more about whether there are specific bacteria that affect the body’s response to immune checkpoint inhibitors, we could manipulate the gut microbiomes of cancer patients to increase their chance of responding positively to the treatment. 

We are still far away from this being standard-of-care. There are studies that show associations  between the gut microbiome and cancer response, but we do not yet fully understand the mechanism and fundamental biology underlying this. However, I think that in time, with more research, we will hopefully be able to harness the power of the gut microbiome to personalise individual patient’s treatments, with far more than just a ‘gut feeling’.

*Dr Ashray Gunjur, PhD student, Wellcome Sanger Institute*

*Honorary Clinical Fellow, Department of Oncology, Cambridge University Hospitals NHS Foundation Trust*

*Clinical Research Training Fellow, Cancer Research UK Cambridge Centre*

*Ashray took part in our Data Science Residency, you can find details about the course [here](https://acceleratescience.github.io/resources/introducing-data-science-for-science.html). Please get in touch by emailing accelerate-science@cst.cam.ac.uk if you are interested in attending a future Residency.*