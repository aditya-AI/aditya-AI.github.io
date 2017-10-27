---
layout: post
title:  "Waste Management System using Internet of Things"
date:   2016-09-27
desc: "Waste Management System using Internet of Things"
keywords: "word2vec,deep learning, tensorflow"
categories: [Deep Learning]
tags: [word2vec,tensorflow]
icon: icon-html
---

This is in continuation to my last blog, this blog will give you more of a practical implementation about how this project was done. 

A patent was filed on this work by Head of my Institution in my college under the name of Amity CRN no.1420, but unfortunately it did not get accepted as this technology was already patented somewhere else.

You can watch the video of this project on https://www.youtube.com/watch?v=3n5pk-NcFvk .

Below are some of the mails I received by students after they watched the video of this project, I was contacted through email as well as facebook and helped them to best of my knowledge. I am also planning to open source this project with all the codes so that students can work on this and take this work to new heights. 

project-mail

project-mail-2

**Future Scope**: I plan to combine this technology with Machine Learning/Artificial Intelligence so that the dustbin can take decision on its own without training it again and again and it can predict the values based on its use.

## **LITERATURE SURVEY**

The waste management system being described above has a great potential to be popular among various municipal departments, and organizations that handle waste materials, like the Municipal Corporation Department. The application will also make it easier for the drivers to clean garbage in an easier manner than it is being done today.

Keeping our city clean is the major concern of today’s time and with more environmental issues coming up day by day, it seems there needs to be a change in the way things are going on and if no preventive measures are taken the situation can even become worst.

To deal with these situations our prime focus should be Optimum utilisation of resources and keeping in mind the Network Performance. Waste Management System is a contribution towards making things easier, which will not only manage the waste but also keep in concern about how to benefit the Environment in a positive manner.

With the advent of technology, almost everyone has a smart phone nowadays; similarly the drivers will have this application installed in their smart phone which will notify them as to how much percentage of garbage has been filled, so that they could collect it at the right time as and when required. Now, researching about the various services to be used in this project, PHP which will provide an API to my android application, android application will continuously send push notification to the web server and when the required parameter is achieved server sends the required data to the android app which in turn will generate the alert. This research was done by dividing it into 3 units, First of all is the micro controller part which has all the controller programming interfaced with the Ultrasonic Sensor which is sensing the garbage in the dustbin and generating values at every 10 seconds.Secondly, the web server part which will have all the back end and front end codes, which will also have a graph.Finally, android application which generate an alert or notification when the dustbin is filled.

Deciding on the programming language to use to develop this application was another major hassle. For the Android application, the only possible option is to use the Eclipse IDE with Java and XML. Java is used to do the back end coding, whereas XML is used for the layout design of the application. Now, for the web interface, I would require a database, a front-end interface and a back end interface that connects the database to the front-end. For the front end, the best choice was to use HTML, along with CSS and JavaScript or j Query. For the database, I decided to use the MySQL database, as its service can be installed on the Digital Ocean droplet with ease, and is free of cost. For the back end, I had an option to use various languages like PHP, Java, Python. I am not very versed with any of these languages, so I decided to start learning more about the pros and cons of each of these languages. After going through everything, I decided to opt for PHP and Python, as it can be very easily combined with HTML in the front end, and provide seamless connectivity with the database.


## **IMPLEMENTATION**

To achieve the final results the implementation initially started by connecting the real world with the virtual world. The micro controller was interfaced with the ultrasonic sensor and further the micro controller output was then taken as an input into the Python library to further modify the input values of the micro controller and output them based on the desired results.

**Real World Scenario**:

In this ultrasonic sensor and LCD are interfaced with microcontroller. The ultrasonic sensor senses the object placed in front of it and displays the distance on the serial monitor of IDE as well as on the LCD in centimetres.

Note: IDE is open source software used to program the Micro controller. The distance displayed on the serial monitor and on the LCD depicts the Real world.

ultrasonic                                                Fig.1. Ultrasonic Sensor Flow Chart

**Virtual World Scenario**:

For displaying the distance in the virtual world I have used Visual Python which imports the serial monitors output into the Python Program and then using the python programming language, I have designed a Rod which depicts the distance from the ultrasonic sensor and this rod is variable.

“A box which depicts an object in front of the ultrasonic sensor which moves as the distance from the sensor varies.”

python

                                 Fig.2. Sensor Values Input to Python Flowchart

**Database Design**

The databases required for this project were simplistic in nature, and posed no design issues when designing it. I have used one database table in a single database. The table is:

    Value – It stores the sensor’s information, which includes sensors value’s in centimeters, time at which the value is inserted into the table, date at which value is inserted in table for proper records which helps in making a graph.

The Entity Relationship diagrams for both these tables are as shown below.

database

                     Fig.3. Entity Relationship Diagram for value table

Finally after getting the above results which will be shown in the Results section was able to get the final results by combining both the techniques. In the next part of my paper I will be showing certain flowcharts that depict the processing of micro controller with the actual component i.e. Ethernet shield for sending the data onto the server including the database flowcharts for storing the value and plotting them on the graph with an alert on the android application. It will also show the authentication done on the webpage.

database-1db

Fig.4. Sending Data to web server        Fig.5. Database Connection with the Server

picture1

                      Fig.6. User Authentication Flow Chart

This authentication tool was designed keeping in consideration that the waste will be monitored by say a senior person so to avoid any discrepancy, this authentication will help in avoiding that as the person who knows the username and password will be able to access it.

android.jpg

          Fig.7. Android Application Flow Chart
## **RESULTS**

A proper research was carried out in which it was found that there is an urgent requirement for this kind of tool which will really help a lot in managing the waste as it was found that the Dustbin are always filled more than its capacity. Moreover, the waste was found on the roads as well when there was no empty dustbin as there in no proper bin management.

On the contrary results were carried out based on the above research done and successfully received following results which are shown below through few pictures consisting of a prototype of a Dustbin interfaced with a Micro controller, Ethernet Shield, Ultrasonic Sensor, jumping wires to connect everything together, graph and web page.

final-4  Fig.8. User Authentication Page

final-3Fig.8. Graph and Database

finalFig.9. Complete picture displaying the whole procedure

## **CONCLUSION**

The Waste Monitoring on the Webpage using a graph has been successfully done as well as when the garbage is filled up to 90% and above the Android Application gets a notification. This idea was implemented because it will help in Reducing Time as time is valuable, it will also save fuel, will help in reducing Carbon Footprint which in turn will help in reducing the emission of greenhouse gases, it will also help in keeping the environment clean and green.

## **FUTURE SCOPE**

GPS system installed on dustbins which will help the drivers reach by best possible route or by shortest distance, it can even help in situations where the driver going from a nearby dustbin(which is full) can get a notification, so that a driver who is far off from that bin need not go.Physical security and surveillance. For example, a smart garbage can will be able to know if it has an explosive device hidden inside of it.

Use of Solar Power Lanterns which will help in saving energy, during day time the micro controller will work through solar cell and will charge the standby battery and during dark micro controller will get power through the standby battery. It has a vast scope in Commercial Market which will surely boom the telecom sector.

