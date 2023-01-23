---
layout: blog-single
title: Acclerating Progress in Biomechanical Modelling and its Applications with AI
excerpt: >-
  Motion capture and musculoskeletal modelling


  Over centuries, observing human movements and seeking to comprehend the underlying structure has appealed to both artists and scientists. Despite centuries of study, because of the complexity of the human musculoskeletal (MSK) system, a detailed description of how each segment moves in space is yet to be accurately produced. In most applications, a simplified biomechanical model is usually adopted instead of a detailed representation of the complex human MSK system.  
author: Dr Vikranth H. Nagaraja, Department of Engineering Science, Institute of
  Biomedical Engineering, University of Oxford
date: January 30, 2023 10:00 AM
image: /assets/uploads/vikranth-harthikote-nagaraja.jpg
---
**Motion capture and musculoskeletal modelling**

Over centuries, observing human movements and seeking to comprehend the underlying structure has appealed to both artists and scientists. Despite centuries of study, because of the complexity of the human musculoskeletal (MSK) system, a detailed description of how each segment moves in space is yet to be accurately produced. In most applications, a simplified biomechanical model is usually adopted instead of a detailed representation of the complex human MSK system.  



Motion capture is the method of recording the movement of people or objects; this technology was originally used for gait analysis in the life sciences but is now used widely in the military, entertainment (VFX studios), sports, and medical applications, among others. Motion analysis has been used for clinical gait analysis and has aided researchers and clinicians in distinguishing pathological from non-disabled gait and evaluating how patients respond to therapeutic interventions, e.g., surgery, physiotherapy, and orthotics. Numerous research and commercial motion detection and tracking systems are available to perform motion analysis accurately and repeatably based on well-established protocols for numerically describing joint and segmental movements.



Computational MSK models have played a vital role in helping estimate the functioning of parts of the MSK system that cannot be directly observed or measured. Most clinical applications of MSK modelling software involve inverse dynamics analysis of input motion capture data using standard anatomical (or cadaver-based) models with scaling based on an individual’s body dimensions. In recent decades, movement analysis and physics-based MSK modelling have been used widely in research and across various industries for non-invasive estimation of in vivo joint and muscle loading, personalised modelling, and performing ‘what-if’ analyses (e.g., to help design better prosthetics, exoskeletons, etc.). However, MSK models can be computationally expensive and typically require extensive input motion capture data. In addition, current MSK models can be laborious and too time-consuming to create, scale, and set up for individual subjects and trials. Furthermore, licenses for commercial MSK modelling software can be highly expensive, and some opensource packages might be restrictive in terms of applications and/or features. These barriers to use often mean MSK modelling is not routinely deployed in clinical settings, restricting its use mainly to research environments. There is a growing need to take objective MSK model-based analysis from “lab to field” for improving outcomes assessment and treatment planning. Leveraging the strengths of AI/ML could make biomechanical modelling accessible, user-friendly, and affordable, especially in low-resource settings.



**Combining AI/ML methods with biomechanical modelling**




Human movement and the underlying sensorimotor control mechanisms are complex, dynamic, multi-dimensional, redundant, and highly non-linear—AI/ML approaches enable us to deal with this complexity elegantly, making use of diverse new data sources and algorithmic approaches. The current surge of data presents new challenges and opportunities that are shifting the data analytics landscape in many biomedical fields. Notably, AI/ML adoption in biomechanics has been accelerated by the possibility of collecting and analysing large amounts of data, e.g., via full-body wireless wearable sensors and markerless motion capture, that have become ubiquitous and provide continuous, real-time and real-world monitoring. A recent review reports that MSK models are increasingly well approximated by ML methods, especially in the last decade, with studies focusing on – (i) classifying symptomatic movement, (ii) predicting the risk of developing a disease, (iii) quantifying the effect of an intervention, or (iv) automatically recognising activities to facilitate out-of-clinic patient monitoring. However, it was also noted that most of these research studies have built and evaluated models inconsistently. Notably, ML methods help provide population-level insights (e.g., for product design or ergonomics) versus methods based on independent trials. Further, ML models’ efficiency also facilitates their use in real-time applications, predominantly where accuracy and efficiency are a priority, e.g., in clinical or outdoor situations.



Large datasets generated by wearable sensors have led to tremendous strides in estimating biomechanical variables that typically require expensive, lab-based equipment (e.g., optical motion capture systems and force plates). Using wearable sensors in conjunction with ML techniques helps estimate kinematic and kinetic information associated with a movement pattern in a user-friendly and cost-effective manner outside a lab setting. For instance, our recent collaboration with [Challenger Mishra](https://acceleratescience.github.io/team/challenger-mishra.html), Departmental Early Career Academic Fellow, Accelerate Programme ([Article 1](https://doi.org/10.1109/JSEN.2022.3197461) and [Article 2](https://doi.org/10.48550/arXiv.2209.14456)) has exploited the powerful and versatile Artificial Neural Networks as universal function approximators in mapping experimental motion capture data (features) to upper-extremity MSK model estimates (labels), as illustrated in Figure 1. 

![Figure 1: Machine learning pipeline for musculoskeletal modelling of upper extremity; Image reproduced from Sharma et al. 2022. IEEE Sens. J. 22(19); pp. 18684--18697.](/assets/uploads/musculoskeletal-modelling.png "Figure 1: Machine learning pipeline for musculoskeletal modelling of upper extremity; Image reproduced from Sharma et al. 2022. IEEE Sens. J. 22(19); pp. 18684--18697.")

Figure 1: Machine learning pipeline for musculoskeletal modelling of upper extremity; Image reproduced from Sharma et al. 2022. IEEE Sens. J. 22(19); pp. 18684--18697.

Verification & validation of MSK models remains a critical topic of ongoing research. For training and testing the ML model, the ground truth was obtained using the MSK model. Thus, underlying MSK modelling assumptions and inaccuracies limit the ML model’s prediction accuracy. Further improvements to MSK model verification & validation could lead to more accurate kinematic and kinetic estimates and thereby help make better ML model-based predictions. Furthermore, leveraging the strengths of ML in this arena could make biomechanical modelling viable as an accessible, user-friendly, and affordable solution, especially in resource-constrained settings, for taking motion analysis and MSK modelling beyond the lab.

**Looking ahead**

Although these studies show promising results, interpreting the underlying biomechanical mechanisms of the predicted variable can be difficult, which could limit their application, particularly in clinical settings. Extensive use of personalised biomechanical modelling has been limited in clinical settings for want of a technology that is user-friendly, robust, fast, and accessible.  It was noted that current ML methods complement traditional physics-based, deterministic MSK models in a variety of ways – 


(i) MSK modelling can help overcome inherent limitations associated with ML by creating data reflecting physical and physiological mechanisms; and 
(ii) Conversely, ML can help physics-based modelling by decreasing computational demands in data processing, building models, and executing analysis or by reducing the need to acquire new experimental data. 



Several clinical fields can be revolutionised by packaging ML techniques and wearable sensor data corresponding to an application of interest for user-friendly, real-time and real-world estimation of internal loading on the human skeleton.



A combination of advancements in wearable sensors, improved healthcare delivery, and ML improvements, along with an increased need for monitoring patients remotely, has accelerated the impact of digital health across most medical disciplines. Consequently, non-invasive, on-body wearable sensors will play an instrumental role by providing continuous, cost-effective measurement, and interpretation of biomechanical data relevant to patient status and disease trajectory inside and outside traditional hospital settings. This could improve health outcomes, reduce costs, and address the needs of the most vulnerable populations in resource-constrained and remote areas. This also helps with remote monitoring, personalisation of care, and providing data-driven metrics for improved decision-making. With these advancements, evaluations from a controlled, cross-sectional, research, and lab-based setting can be transitioned to a real-world scenario integrated into an individual’s everyday life.



Even though AI/ML techniques do not offer novel tools to study human motion, they have evolved and transformed how we examine it. Based on the wealth of data and ML tools, researchers are empowered to tackle new and complex biomechanical problems to advance MSK modelling as well as make their applications pervasive.



Dr Vikranth H. Nagaraja, Department of Engineering Science, Institute of Biomedical
Engineering, University of Oxford (January 2023)