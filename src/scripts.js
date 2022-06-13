//IMPORTS 
import Traveler from './Traveler';
import Destination from './Destination';
import Trip from './Trip';
import './css/styles.css';
import './images/world-travel-logo.png'
import './images/Cappadocia.jpg'
import {allTravelPromises, allTripsPromises, allDestinationsPromises} from './apiCalls';



//GLOBAL VARIABLES
// let globalTraveler;
// let globalTrip;
// let globalDestination;
// let allTravelPromises;
// let allTripsPromises;
// let allDestinationsPromises;


let allTrips;
let allTravelers;
let allDestinations;


const displayEverything = () => {
  Promise.all(
    [allTravelPromises, allTripsPromises, allDestinationsPromises]
  )
  .then(response => {
    allTravelers = response[0].travelers
    allTrips = response[1].trips
    allDestinations = response[2].destinations
    console.log(allTravelers)
    console.log(allTrips)
    console.log(allDestinations)
  })
}


//QUERY SELECTORS
// let yearlyExpense = document.querySelector('.yearlyExpense');
// let tripEstimate = document.querySelector('.tripEstimate');
// let getEstimateBtn = document.querySelector('.getEstimateBtn');

//EVENT LISTENERS
window.addEventListener('load', displayEverything);
//getEstimateBtn.addEventListener('click', );


//API FETCH FUNCTIONS
// function getAllUserData(data) {
//   globalUserData = data;
//   globalUserRepository = new UserRepository(data);
// }

// function getAllHydrationData(data) {
//   globalHydrationData = data;
//   globalHydration = new Hydration(data);
// }

// function getAllSleepData(data) {
//   globalSleepData = data;
//   globalSleep = new Sleep(data);
//   getUserName();
// }

// function getAllActivityData(data) {
//   globalActivityData = data;
//   globalActivity = new Activity(data, globalUserData);
// }

// function displayResolvedData() {
//   fetchAllData()
//   .then((allData) => {
//     getAllUserData(allData[0].userData);
//     getAllHydrationData(allData[1].hydrationData);
//     getAllActivityData(allData[2].activityData);
//     getAllSleepData(allData[3].sleepData);
//   })
// }




//FUNCTIONS
// function show(element) {
//   element.classList.remove('hidden');
// };

// function hide(element) {
//   element.classList.add('hidden');
// };




// const displayYearlyExpense = () => {
//   let travelerSpecificTrips = globalTrip.getTripDataById(globalTraveler.id);
//   let yearlyCost = globalTrip.getTotalSpentThisYear(travelerSpecificTrips);
//   yearlyExpense.innerHTML = `🤑 You've spent $${yearlyCost} this year 🤑`;
// }
// displayYearlyExpense();




// const clearForm = () => {
//   somethingggg.innerHTML = '';
// }
// clearForm();





// const displayTripCostEstimate = () => {
//   let tripCost = globalTrip.getSingleTripCost()
//   tripEstimate.innerHTML = `Trip Request's Estimate is $${tripCost}*`;
// }
// displayTripCostEstimate();





// const allData = Promise.all(endpoints).then((value) => {
//   return value;
// });






//API POST FUNCTIONS

