//IMPORTS 
import Traveler from './Traveler';
import Destination from './Destination';
import Trip from './Trip';
import './css/styles.css';
import './images/world-travel-logo.png';
import './images/Cappadocia.jpg';
import {allTravelPromises, allTripsPromises, allDestinationsPromises} from './apiCalls';


//GLOBAL VARIABLES
let allTripsData;
let allTravelersData;
let allDestinationsData;
let traveler;
let trip;


//QUERY SELECTORS
let pastTripsBox = document.querySelector('.past-trips-container');
let presentTripsBox = document.querySelector('.present-trips-container');
let upcomingTripsBox = document.querySelector('.upcoming-trips-container');
let pendingTripsBox = document.querySelector('.pending-trips-container');

let yearlyExpense = document.querySelector('.yearly-expense');
let travelerName = document.querySelector('.traveler-name');
let formDestinations = document.querySelector('#formDestinations');

// let tripEstimate = document.querySelector('.trip-estimate');
// let getEstimateBtn = document.querySelector('.get-estimate-btn');



const displayEverything = () => {
  Promise.all(
    [allTravelPromises, allTripsPromises, allDestinationsPromises]
  )
  .then(response => {
    allTravelersData = response[0].travelers
    // console.log(allTravelersData)
    allTripsData = response[1].trips
    const sortedTrips = allTripsData.sort((tripA, tripB) => {
      return new Date(tripB.date) - new Date(tripA.date)
    })
    allTripsData = sortedTrips;
    // console.log(allTripsData)
    allDestinationsData = response[2].destinations
    populateDestinationDropDown(allDestinationsData);
    

    const travelerData = allTravelersData.find((traveler) => {
        // console.log(traveler.id)
        return traveler.id === Math.ceil(Math.random() *50)
        // Math.ceil(Math.random()* 49)
      });
    // console.log(travelerData);

    traveler = new Traveler(travelerData);
    let travelerSpecificTripData = traveler.getTravelerSpecificTripData(allTripsData);
    trip = new Trip(allTripsData);

    traveler.getPastTrips();
    traveler.getUpcomingTrips();
    traveler.getPendingTrips();
    traveler.getPresentTrips();
    displayTravelerName();
    displayYearlyExpense();

    let vacations = new Destination(allDestinationsData);
    let travelerSpecificDestinations = vacations.getDestinations(travelerSpecificTripData);

    displayPastTrips(travelerSpecificDestinations);
    displayUpcomingTrips(travelerSpecificDestinations);
    displayPendingTrips(travelerSpecificDestinations);
    displayPresentTrips(travelerSpecificDestinations);
  })
}


const populateDestinationDropDown = (destData) => {
  let uniqueDestinations = destData.reduce((acc, cur) => {
    if(!acc.includes(cur.destination)) {
      acc.push(cur.destination)
    }
    return acc;
  },[])
  displayUniqueDestinations(uniqueDestinations.sort());
}

const displayUniqueDestinations = (uniqueDestinations) => {
  formDestinations.innerHTML = `<option value="choose">Choose A Destination:</option>`;
  uniqueDestinations.forEach((dest) => {
    formDestinations.innerHTML += `<option value="${dest}">${dest}</option>`
  })
}



const displayYearlyExpense = () => {
  yearlyExpense.innerHTML = `${trip.getTotalSpentThisYear(traveler.id, allDestinationsData)}`;
}

const displayTravelerName = () => {
  travelerName.innerHTML = `${traveler.getTravelerFirstName()}`;
}

const displayPastTrips = (matchingDestinations) => {
  // console.log(traveler)
  let pastHTML = "";
  traveler.getPastTrips().forEach((trip) => {
    // console.log(trip)
   let matched = matchingDestinations.find(destination => trip.id === destination.tripId);
   pastHTML += `<div class="traveler-trip-card" id="${trip.id}">
                    <img alt="${matched.alt}" src="${matched.image}">
                    <p>Destination: ${matched.name}</p>
                    <p>Start Date: ${trip.date}</p>
                    <p>Duration: ${trip.duration}</p>
                    <p>Travelers: ${trip.travelers}</p>
                    <p id="trip-status">Status: <b>${trip.status}</b></p>
                  </div>`
  });
  pastTripsBox.innerHTML = pastHTML;
};

const displayUpcomingTrips = (matchingDestinations) => {
  // console.log("84", traveler)
  let upcomingHTML = "";
  traveler.getUpcomingTrips().forEach((trip) => {
    // console.log(trip)
    let matched = matchingDestinations.find(destination => trip.id === destination.tripId);
    upcomingHTML += `<div class="traveler-trip-card" id="${trip.id}">
                    <img alt="${matched.alt}" src="${matched.image}">
                    <p>Destination: ${matched.name}</p>
                    <p>Start Date: ${trip.date}</p>
                    <p>Duration: ${trip.duration}</p>
                    <p>Travelers: ${trip.travelers}</p>
                    <p id="trip-status">Status: <b>${trip.status}</b></p>
                  </div>`
  });
  upcomingTripsBox.innerHTML = upcomingHTML;
};

const displayPendingTrips = (matchingDestinations) => {
  // console.log(traveler)
  let pendingHTML = "";
  traveler.getPendingTrips().forEach((trip) => {
    // console.log(trip)
    let matched = matchingDestinations.find(destination => trip.id === destination.tripId);
    pendingHTML += `<div class="traveler-trip-card" id="${trip.id}">
                    <img alt="${matched.alt}" src="${matched.image}">
                    <p>Destination: ${matched.name}</p>
                    <p>Start Date: ${trip.date}</p>
                    <p>Duration: ${trip.duration}</p>
                    <p>Travelers: ${trip.travelers}</p>
                    <p id="trip-status">Status: <b>${trip.status}</b></p>
                  </div>`
  });
  pendingTripsBox.innerHTML = pendingHTML;
};

const displayPresentTrips = (matchingDestinations) => {
  // console.log(traveler)
  let presentHTML = "";
  // console.log(traveler.getPresentTrips())
  traveler.getPresentTrips().forEach((trip) => {
    // console.log(trip)
    let matched = matchingDestinations.find(destination => trip.id === destination.tripId);
    presentHTML += `<div class="traveler-trip-card" id="${trip.id}">
                    <img alt="${matched.alt}" src="${matched.image}">
                    <p>Destination: ${matched.name}</p>
                    <p>Start Date: ${trip.date}</p>
                    <p>Duration: ${trip.duration}</p>
                    <p>Travelers: ${trip.travelers}</p>
                    <p id="trip-status">Status: <b>${trip.status}</b></p>
                  </div>`
  });
  presentTripsBox.innerHTML = presentHTML;
};


//EVENT LISTENERS
window.addEventListener('load', displayEverything);
//getEstimateBtn.addEventListener('click', );









//API FETCH FUNCTIONS

// const postToTrips = () => {


//   // let date = dateInput.value;
//   // date = date.split('-');
//   // date = date.join('/');
//   // roomNumber = findIdHelper(id);
//   // roomNumber = Number(roomNumber);
//   let obj = { "userID": currentUser.id, "date": date, "roomNumber": roomNumber };



// const tripObjectToPost = {
//   id: Date.now(), 
//   userID: traveler.id, 
//   destinationID: ,
//   travelers: ,
//   date: ,
//   duration: ,
//   status: <string 'approved' or 'pending'>,
//   suggestedActivities: array of strings
// }


// const obtainFormDestinationId = () =>{

// }



//FUNCTIONS

// const clearForm = () => {
//   somethingggg.innerHTML = '';
// }
// clearForm();




// const displayTripCostEstimate = () => {
//   let tripCost = globalTrip.getSingleTripCost()
//   tripEstimate.innerHTML = `Trip Request's Estimate is $${tripCost}*`;
// }
// displayTripCostEstimate();







//API POST FUNCTIONS

