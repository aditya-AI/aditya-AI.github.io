---
layout: post
title:  "Realization Procedure of Waste Management System using Internet of Things"
date:   2016-09-27
desc: "Realization Procedure of Waste Management System using Internet of Things"
keywords: "iot, smart city"
categories:
tags: 
icon: icon-html
---

Most of the world's population today lives in cities. By 2030, the population of the cities around the world is expected to grow from 3.3 billion to 5 billion people. With this growth in population every year, resources are becoming limited for the people and in order to serve and improve the standard of living of growing population, there is a need to develop Smart Cities.Smart Cities will bring a change in the society, where everything will be connected to each other making things much more simpler and easily accessible.

Internet of Everything (IoE) for cities which will connect people, data, process and things to improve the live-ability of the people.The main categories that define smart cities include the quality of the environment, energy, water and wastewater, waste management, transportation and traffic, information and communication systems, quality of life, government, economics, human resources, housing and land use, homeland security, and emergency preparedness.The main idea that revolves around this concept of smart city is Waste Management System Using Internet.The prime focus of this paper is on Waste Management System with two more categories that define a smart city is Autonomous Street Light System and Autonomous Irrigation System.Keeping our city clean is the major concern of today’s time and with more environmental issues coming up day by day, it seems there needs to be a change in the way things our going on and if no preventive measures are taken the situation can even become worst.

<div style="text-align:center"><img src="{{ site.img_path }}/3steps/dustbin.png" width="50%"></div><br/>


This picture depicts the condition of the dustbin in one of the city of India. This picture was taken in April,2015 while surveying in one of the city of India and according to the survey reports it was found that most of the dustbins are not cleaned properly and the waste is not picked up the by garbage pickers at proper intervals. Also a survey was conducted in which the drivers reported that sometimes the dustbin is empty when they go to pick the garbage.

The results of the survey points towards designing a system which can help in making the condition of city better and also making people's life much simpler and easier.

**Conceptualised Plan of Waste Management System Using Internet**

<div style="text-align:center"><img src="{{ site.img_path }}/3steps/waste1.png" width="85%"></div><br/>


Arduino UNO Microcontroller is interfaced with Ultrasonic sensor and Ethernet/Wifi Shield, Arduino Uno is programmed such that as the sensor senses the data(Garbage) it is sent to the web server using the WiFi/Ethernet shield.

1.WiFi shield connects the Arduino Uno Microcontroller to the Internet wirelessly in just mere minutes, it uses IEEE 802.11b/g network. It helps in sending the data to the web server by working in a client mode.<br/>
2.Ultrasonic Sensor is a distance ranging sensor which senses the data(solid waste) based on height(cm). The range of this sensor is from 2cm-350cm approximately.<br/>
3.Web Server stores the data which the microcontroller sends in every 10 secs of interval and stores those values in the database, further a graph is plotted using the values stored in the database. The graph is for monitoring purpose.<br/>
4.Android Application receives an alert or notification when the dustbin is 90% filled with the garbage.<br/>

To deal with these situations our prime focus should be Optimum utilisation of resources and keeping in concern with the Network Performance.

**REALIZATION PROCEDURES FOR A CONCEPTUALIZED SYSTEM**
 
<div style="text-align:center"><img src="{{ site.img_path }}/3steps/waste2.png" width="85%"></div><br/>


 

**CONCLUSION**

Waste Management System is a contribution towards making things easier, which will not only manage the waste but also keep in concern about how to benefit the Environment in a positive manner.With the advent of technology, almost everyone has a smartphone nowadays, similarly the drivers will have this application installed in their smartphone which will notify them as to how much percentage of garbage has been filled, so that they could collect it at the right time as and when required.This idea was implemented because it will help in Reducing Time as time is valuable, it will help in Saving Fuel and Reducing Carbon Footprint and if Carbon Footprint will reduce then emission of greenhouse gases will automatically reduce and will keep the environment clean and green.