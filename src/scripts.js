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

//QUERY SELECTORS
let pastTripsBox = document.querySelector('.past-trips-container');
let presentTripsBox = document.querySelector('.present-trips-container');
let upcomingTripsBox = document.querySelector('.upcoming-trips-container');
let pendingTripsBox = document.querySelector('.pending-trips-container');

let yearlyExpense = document.querySelector('.yearly-expense');
let travelerName = document.querySelector('.traveler-name');

let allTripsData;
let allTravelersData;
let allDestinationsData;
let traveler;
let trip;



const displayEverything = () => {
  Promise.all(
    [allTravelPromises, allTripsPromises, allDestinationsPromises]
  )
  .then(response => {
    allTravelersData = response[0].travelers
    console.log(allTravelersData)
    allTripsData = response[1].trips

    const sortedTrips = allTripsData.sort((tripA, tripB) => {
      return new Date(tripB.date) - new Date(tripA.date)
    })
    allTripsData = sortedTrips;
    console.log(allTripsData)

    allDestinationsData = response[2].destinations
    //make line below dynamic once Ham is working and I can use all other travelers data
    const travelerData = allTravelersData.find((traveler) => {
        // console.log(traveler.id)
        return traveler.id === 47
      });
    console.log(travelerData);
    traveler = new Traveler(travelerData);
    // console.log(traveler)
    let travelerSpecificData = traveler.getTravelerSpecificTripData(allTripsData);


    trip = new Trip(allTripsData);
    // trip.getPastTrips(traveler.allTrips);
    // trip.getUpcomingTrips(traveler.allTrips);
    // trip.getPendingTrips(traveler.allTrips);
    // trip.getPresentTrips(traveler.allTrips);
    traveler.getPastTrips();
    traveler.getUpcomingTrips();
    traveler.getPendingTrips();
    traveler.getPresentTrips();
    displayTravelerName();
    displayYearlyExpense();

    displayPastTrips();
    displayUpcomingTrips();
    displayPendingTrips();
    displayPresentTrips();
  })
}

/* <img class="trip-card-image" src="${}" alt="${}"></img> */
/* <p>Destination: ${}</p> */


const displayYearlyExpense = () => {
  yearlyExpense.innerHTML = `${trip.getTotalSpentThisYear(traveler.id, allDestinationsData)}`;
}


const displayTravelerName = () => {
  travelerName.innerHTML = `${traveler.getTravelerFirstName()}`;
}




const displayPastTrips = () => {
  console.log(traveler)
  let pastHTML = "";
  traveler.getPastTrips().forEach((trip) => {
    console.log(trip)
    pastHTML += `<div class="traveler-trip-card" id="${trip.id}">
                    
                    
                    <p>Start Date: ${trip.date}</p>
                    <p>Duration: ${trip.duration}</p>
                    <p>Travelers: ${trip.travelers}</p>
                    <p id="trip-status">Status: <b>${trip.status}</b></p>
                  </div>`
  });
  // console.log(pastHTML)
  pastTripsBox.innerHTML = pastHTML;
};

const displayUpcomingTrips = () => {
  console.log("84", traveler)
  let upcomingHTML = "";
  traveler.getUpcomingTrips().forEach((trip) => {
    console.log(trip)
    upcomingHTML += `<div class="traveler-trip-card" id="${trip.id}">
                    
                    
                    <p>Start Date: ${trip.date}</p>
                    <p>Duration: ${trip.duration}</p>
                    <p>Travelers: ${trip.travelers}</p>
                    <p id="trip-status">Status: <b>${trip.status}</b></p>
                  </div>`
  });
  // console.log(upcomingHTML)
  upcomingTripsBox.innerHTML = upcomingHTML;
};

const displayPendingTrips = () => {
  console.log(traveler)
  let pendingHTML = "";
  traveler.getPendingTrips().forEach((trip) => {
    console.log(trip)
    pendingHTML += `<div class="traveler-trip-card" id="${trip.id}">
                    
                    
                    <p>Start Date: ${trip.date}</p>
                    <p>Duration: ${trip.duration}</p>
                    <p>Travelers: ${trip.travelers}</p>
                    <p id="trip-status">Status: <b>${trip.status}</b></p>
                  </div>`
  });
  // console.log(pendingHTML)
  pendingTripsBox.innerHTML = pendingHTML;
};

const displayPresentTrips = () => {
  console.log(traveler)
  let presentHTML = "";
  console.log(traveler.getPresentTrips())
  traveler.getPresentTrips().forEach((trip) => {
    console.log(trip)
    presentHTML += `<div class="traveler-trip-card" id="${trip.id}">
                    
                    
                    <p>Start Date: ${trip.date}</p>
                    <p>Duration: ${trip.duration}</p>
                    <p>Travelers: ${trip.travelers}</p>
                    <p id="trip-status">Status: <b>${trip.status}</b></p>
                  </div>`
  });
  // console.log(presentHTML)
  presentTripsBox.innerHTML = presentHTML;
};






// const getRandomTraveler = () => {
// }








//QUERY SELECTORS

// let tripEstimate = document.querySelector('.trip-estimate');
// let getEstimateBtn = document.querySelector('.get-estimate-btn');

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

