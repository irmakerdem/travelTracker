# Travel Tracker

## Table of Contents
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Set Up](#set-up)
- [Features](#features)
- [Organizational Resources](#organizational-resources)
- [Future Features](#future-features)
- [Reflection](#reflection)
- [Contributors](#contributors)
- [Project Specifications](#project-specifications)

### Introduction
Travel Tracker ✈️ is an app allowing the traveler/user to sign in and see their trip information 🌍. The traveler can request 🙋‍♀️ for a new trip 🗺 by choosing specifications of their liking and if the 💰 cost is suitable they can book 📚 the trip! 

### Technologies
- JavaScript
- HTML
- CSS
- API fetch/post
- Chai/Mocha testing
- Webpack

### Set Up
1. Clone this [repository](https://github.com/irmakerdem/travelTracker).
2. `cd` into the directory.
3. Run `npm install`.
4. To run tests, run `npm test`.
5. Start the server by running `npm start` and view at http://localhost:8080/.
6. Enter `control + c` to stop the server at any time.

### Features

![Travel Tracker gif](https://media.giphy.com/media/vhA6AzFigFfxUQcfg9/giphy.gif)

- User can log in with a 🪪 username and 🤐 password
<img width="600" alt="login-image" src="https://user-images.githubusercontent.com/90080658/173740603-4651abfd-fce4-4d1a-8cc1-5833fd922bf8.png">

- When user enters invalid info, they are shown an error message ⛔️
- User is welcomed 👋 with their name and how much 💸 they have spent on trips in the current year

<img width="600" alt="trips-image" src="https://user-images.githubusercontent.com/90080658/173740819-433e0fe4-2366-483f-836f-0342a1233279.png">

- User can view their past, present, upcoming, and pending trips which are sorted in descending order ⏳

<img width="600" alt="trip-request-image" src="https://user-images.githubusercontent.com/90080658/173740878-c7021c3b-656c-4410-9490-50ff6b8522b3.png">

- User can request a new trip based on their preferences 💁‍♀️ for when, how many days, how many travelers, and destination
- When user does not enter all fields, they are shown an error message 🙊
- User can view the estimated cost for their trip request which includes a 10% travel agent fee 🏄‍♂️

### Organizational Resources
- [GitHub Projects](https://github.com/irmakerdem/travelTracker/projects/1)
- [Figma](https://www.figma.com/file/W5bjPkQvD4Q6QGw0G72sGT/Travel-Tracker) 

### Future Features
- Update styling by bolding trip information's titles and reducing font size of the agent fee statement
- Update trip information by adding a "total cost" feature
- Display message when there is no trip available for any of the 4 types of trips
- Display message confirming trip is pending after booking
- Add error handling for buttons
- Display error message for when there is a server error (e.g. server is down)
- Add a travel agent login page, dashboard, ability to interact with traveler dashboard, and ability to add new destinations
- Display a countdown for the next trip
- Add error handling to prevent user from posting negative number of days and travelers

### Reflection
- This project taught me a lot about how many native features of HTML exist that allow the page to look modern! Utilizing required attributes made it very easy for error handling instead of creating error messages myself. The form and input elements along with the family font simplified the task for creating a 👸 beautiful UI.
- The coolest part of the project was the tabbability! After experiencing the frustrations in trying to tab through real-world websites, I am very proud of the site I've created because it can be accessed with just tabbing and arrows. Furthermore, the site has a score of 100 on Lighthouse! 🥳
- The toughest 👷‍♀️ part of the project was figuring out the 📩 POST in relation to how/when other functions should run. There are functions which still need refactoring which were not possible due to time constraints.
- The biggest learning experience was regarding TDD. Originally I had created my test files to then pass but once DOM manipulation started, the classes/methods significantly got altered 😥 and I ended up having to redo more than half of it by the end of the project. There were also difficulties in creating my own testing data and I learned that it is easier to use the API data as the sample data set instead of making my own from scratch (which is vulnerable to syntax, spelling, and data errors).

### Contributors
- [Irmak Erdem](https://www.linkedin.com/in/irmakerdem/)

### Project Specifications
- Project specs can be found [here](https://frontend.turing.edu/projects/travel-tracker.html).
