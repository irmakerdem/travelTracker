//IMPORTS 
import Traveler from './Traveler';
import Destination from './Destination';
import Trip from './Trip';
import './css/styles.css';
import './images/world-travel-logo.png'
import './images/Cappadocia.jpg'
// import {fetchAllData, addUserSleepData, addUserActivityData, addUserHydrationData, getSleepData, getHydrationData, getActivityData} from './apiCalls';



//GLOBAL VARIABLES
let globalTraveler;
let globalTrip;
let globalDestination;



//QUERY SELECTORS
let yearlyExpense = document.querySelector('.yearlyExpense');



//EVENT LISTENERS
// window.addEventListener('load', displayEverything);



//API FETCH FUNCTIONS


//FUNCTIONS
const displayYearlyExpense = () => {
  let travelerSpecificTrips = globalTrip.getTripDataById(globalTraveler.id);
  let yearlyCost = globalTrip.getTotalSpentThisYear(travelerSpecificTrips);
  yearlyExpense.innerHTML = `🤑 You've spent $${yearlyCost} this year 🤑`;
}

displayYearlyExpense();

// const displayEverything = () => {
//   displayYearlyExpense();
// }



//API POST FUNCTIONS

