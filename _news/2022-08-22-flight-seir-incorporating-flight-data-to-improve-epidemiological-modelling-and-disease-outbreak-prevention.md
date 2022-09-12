---
layout: news-single
title: Flight-SEIR Incorporating Flight Data to Improve Epidemiological Modelling and Disease Outbreak Prevention
excerpt: A modified version of the standard SEIR model that incorporates COVID-infected flights in and out of Canada could enable early detection of outbreaks and more
category:
  - understanding-mental-health-with-data-science
featured_image: /assets/uploads/schmidt-futures-donation.png
---
A modified version of the standard SEIR model that incorporates COVID-infected flights in and out of Canada could enable early detection of outbreaks, more accurately estimate the reproduction number of the disease and better evaluate the impact of travel restrictions and the implications of lifting these measures.

Epidemiological modelling of infectious diseases is an essential tool to understand how diseases spread, predict the future course of an outbreak and guide public health action. Many of the COVID-19 modelling efforts have been based on long-established standard compartmental models like the Susceptible-Exposed-Infected-Recovered (SEIR) model and other variations. Yet, the current global pandemic has challenged the standard SEIR modelling approach, which is grounded in the assumption that each population is a closed-loop system where individuals do not travel across regions or countries. This type of modelling fails to consider the existence of asymptomatic and pre-symptomatic transmission, where individuals who are carriers of COVID-19 can travel across borders and lead to new outbreaks (Wei et al. 2020; Vetter et al. 2020).

In reality, RNA viruses like COVID-19 mutate rapidly, and geographic separation often results in genetically distinct variants that are highly transmissible. While new variants continue to emerge, the Delta variant, which first appeared in India in December 2020, remains a global concern. Currently, it accounts for 99% of cases across the United Kingdom and is now the dominant strain in the United States, according to the CDC. In Ontario, Canada, officials declared it to be responsible for 88% of cases in the province.

In a recent study published in Applied Network Science, we show how important it is to take flights into consideration when modelling this global pandemic. We introduce Flight-SEIR, a modified version of the standard SEIR model that accounts for commercial flight travellers to incorporate the dynamic flight network to model COVID-19’s spread across Canada. We show that our proposed model:

Enables earlier detection of outbreaks by considering the demographic dynamics of the population;
Provides a more accurate understanding of the disease, in particular, a better estimation of the population reproduction number;
Simulates the impact of travel restrictions and evaluates the risks and implications of lifting these measures.

We also collected flight data from the Canadian government website of the flights with infected passengers travelling to Canada. We have visualized each infected flight in a video, as shown here:


Introduction to Flight-SEIR

To create Flight-SEIR, we modified the differential equations of a standard SEIR model to include demographics dynamics derived from the flight network. The main difference between Flight-SEIR and standard SEIR is that we consider an open population setting where individuals are free to travel in and out of a given region.

As shown in Figure 2, Si, Ei, Ii and Ri represent the size of susceptible, exposed, infectious and recovered populations in target population i.

In order to study the properties of Flight-SEIR, especially during the early stages of the pandemic, we make four assumptions to simplify the model without compromising its key characteristics. Most importantly, we assume that individuals who are in the infected compartment, I, would be denied boarding flights as such infected individuals would have mild to severe symptoms and therefore be easily identifiable at the airport. See our paper to consult additional assumptions related to the model.


Simulations

In this work, we focus on one target population, Canada, to showcase the capability of Flight-SEIR. We collected historical flight data dating back to January 2020 and incorporated this dynamic flight network into Flight-SEIR. Through various simulations, we demonstrate the benefits and key findings of Flight-SEIR.

Predicting uncontrolled early time epidemic dynamics
In the early stages of an outbreak, the majority of confirmed cases are imported from a different population. The traditional SEIR model assumes a non-zero initial infected compartment which ignores when and how these infected individuals enter a given population. In Flight-SEIR, we used air traffic data prior to the pandemic to simulate early epidemic dynamics in Canada without any travel restrictions. We observe that with the imported infection cases from travel, even an initial reproduction number < 1 can lead to an outbreak (as seen in Figure 7).


Assessing the impact of travel restrictions

To investigate the impact of travel restrictions on the spread of disease, we simulate the effect through reduced air traffic and compare the results to the unrestricted case. We find that travel-related Nonpharmaceutical Interventions (NPIs) have a significant impact on reducing the spread of the disease. The infections can be contained within as little as 0.157% of the total population (as shown in Figure 8).


Estimating the population reproduction number R0i

By incorporating air traffic data, Flight-SEIR can monitor the risk of spreading the disease even before the first confirmed case in a region. In contrast, the traditional SEIR model requires at least one infected case to start. In this simulation, we start Flight-SEIR with 0 infected and exposed cases and compare the Flight-SEIR reproduction number R0CAN with the SEIR reproduction number R0. In Figure 9, we show that because population flow is ignored, the R0 predicted by the standard SEIR model is significantly higher than R0CAN computed by Flight-SEIR.


Simulating the effect of lifting travel restrictions

In this experiment, we simulate the effect of removing travel restrictions by matching air traffic to pre-pandemic levels. We observe that both the number of imported cases and community transmission increase with the scale of reopening and that resuming flights would have different implications for different provinces and territories in Canada. More plots and details can be found in our paper.


Conclusion

We believe that this type of modelling should be prioritized when facing a global pandemic, especially as the world becomes increasingly interconnected through international travel. Although travel restrictions are in place and continue to be subject to change, local COVID-19 variants continue to spread between populations and are cause for major concern.

In this work, we modified the widely used SEIR model to derive inflow and outflow of exposed passengers based on flight information. Our proposed Flight-SEIR is better suited for modelling the spread of the disease in a global pandemic, such as COVID-19, resulting in three main contributions:
.
Study Authors

Xiaoye Ding, MSc Student, Mila, School of Computer Science, McGill University
Shenyang Huang, PhD Student, Mila, and the School of Computer Science, McGill University
Abby Leung, Research Intern at Mila and student, School of Computer Science, McGill University
Reihaneh Rabbany, Mila core academic member and Assistant Professor in the School of Computer Science, McGill University

To read the paper, click here.

To view the Visualization of potential COVID-19 exposure from flights in Canada, click here.