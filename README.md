## Advanced-Software-Engineering at University of Sussex - Group 1 TEAM project
The purpose of this software is to collaborate with team members and classmates from an Advanced-Software-Enginnering module at the University of Sussex.

Task 1. Each group should set up a Github or Bitbucket account to be used for the project. See here for details. Deadline: Monday, 21 October 2019, at 16:00.
Task 2. Produce a simple Android and/or iPhone or cross-platform app. See here for details. Deadline: Friday, 25 October 2019, at 16:00.
Task 3. Produce a simple server providing services for app from Task 2. See here for details. Deadline: Monday, 4 November 2019, at 16:00.
Task 4. Produce a visualisation for UK house price data. See here for details. Deadline: Wednesday, 4 December 2019, at 16:00.

# Advanced-Computer-Science
Advanced Software Engineering Project

This project is developed for course which encourage students to agile development and simulate real industry problems.

## Getting Started

You can clone the repo and see one by one our milestones of our project.
```
git clone https://github.com/Hsgngr/Advanced-Computer-Science
cd Project-v3  //Example
npm start
```

### Prerequisites

* If you run this project on an android emulator, You should install Android Studio and set up a virtual device.

* If you run on your own device, you need to install expo app to your physical device.

```
npm install expo-cli
```

### Installing
The folders that you can run "npm start" in:
  1)minimumDelivarable
  2)Project-v3
  3)task4

```
cd minimumDelivrable
npm start
```
To run the task4 there are more things you should do, since it needs a local server and ngrok also. You need 3 different cmd prompt

```
cd track-server
npm run dev
```
For every 8 hours you should change the url in Advanced-Computer-Science\task4\src\api\tracker.js
BaseURL: '<yourURl>'
  
```
ngrok http 3000
```
By running npm start in repository will open a localhost in your browser where you can scan the qr code with your device or connect virtual devices 

```
npm start
```

## Running the tests

 * Postman for testing post requests of custom api
 * Nodemon: for Automation Restarts of server
 * JSONWEBTOKEN for privacy of authentication (To protect user data from malacious reasons)


## Built With

* [React Native](https://facebook.github.io/react-native/) -  Cross-Platform framework for mobile application
* [Express Api](https://expressjs.com/en/api.html) - Building a REST API: Express, Node.js web application framework
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Global cloud database service deploy with Google Cloud Platform
* [Ngrok](https://ngrok.com) - Public URLs for exposing your local web server.


## Authors

* **Ege Hoşgüngör** - *Full stack developer /Team Leader* - [Hsgngr](https://github.com/Hsgngr)
* **Alhabal, Khalil** - *Full stack developer /Team Leader*
* **Smith, Isaraporn** - *Testing/Backend developer*
* **Seeley, Tiffany** - *Full stack developer*
* **Li, Bolan Eve** - *Front end developer*
* **Shao, Nian** - *Front end developer*

See also the list of [contributers](https://github.com/your/project/contributors) who participated in this project.


## Acknowledgments

Mostly inspired from Udemy courses and stackoverflow

Our Trello Account:
https://trello.com/b/OcuCUrDH/software-project

Our Google Docs:
https://docs.google.com/document/d/1Frkdjs8Y-WWoasVZkAv5nXN7yNbtiETGtaL7AlvJCm8/edit

Our Project Plan:
https://docs.google.com/document/d/15UwbPw09sZm3PpbBOhXMPql8ygIRWEpavoZHbAj75j8/edit?usp=sharing

