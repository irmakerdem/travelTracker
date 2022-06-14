//IMPORTS 
import Traveler from './Traveler';
import Destination from './Destination';
import Trip from './Trip';
import './css/styles.css';
import './images/world-travel-logo.png';
import './images/Cappadocia.jpg';
import {allTravelPromises, allTripsPromises, allDestinationsPromises, apiPostTrip} from './apiCalls';


//GLOBAL VARIABLES
let allTripsData;
let allTravelersData;
let allDestinationsData;
let traveler;
let trip;
let travelerSpecificDestinations;
let vacations;


//QUERY SELECTORS
let pastTripsBox = document.querySelector('.past-trips-container');
let presentTripsBox = document.querySelector('.present-trips-container');
let upcomingTripsBox = document.querySelector('.upcoming-trips-container');
let pendingTripsBox = document.querySelector('.pending-trips-container');

let yearlyExpense = document.querySelector('.yearly-expense');
let travelerName = document.querySelector('.traveler-name');

let formDestinations = document.querySelector('#formDestinations');
let formTravelers = document.querySelector('#formTravelers');
let formDays = document.querySelector('#formDays');
let formDate = document.querySelector('#formDate');

let controlledForm = document.querySelector('.form');
let tripEstimate = document.querySelector('.trip-estimate');
let bookTripBtn = document.querySelector('.book-trip-btn');
let getEstimateBtn = document.querySelector('.get-estimate-btn');




//FUNCTIONS
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

    vacations = new Destination(allDestinationsData);
    travelerSpecificDestinations = vacations.getDestinations(travelerSpecificTripData);

    displayPastTrips(travelerSpecificDestinations);
    displayUpcomingTrips(travelerSpecificDestinations);
    displayPendingTrips(travelerSpecificDestinations);
    displayPresentTrips(travelerSpecificDestinations);
  })
}

const postToTrips = (event) => {
  event.preventDefault();
  // console.log(event)
  const matchedDestinationId = allDestinationsData.find(destination => formDestinations.value === destination.destination);

  let formattedDate = formDate.value;
  formattedDate = formattedDate.split('-');
  formattedDate = formattedDate.join('/');

    const tripObjectToPost = {
      id: Date.now(), 
      userID: traveler.id,
      destinationID: matchedDestinationId.id,
      travelers: Number(formTravelers.value),
      date: formattedDate,
      duration: Number(formDays.value),
      status: 'pending',
      suggestedActivities: []
    }
    // console.log(tripObjectToPost)
    apiPostTrip(tripObjectToPost)
    .then(data => {
      console.log(data)
      trip.pendingTrips.push(data.newTrip)
      traveler.allTrips.push(data.newTrip)
      // destination.getDestinations(traveler.allTrips)
      console.log(travelerSpecificDestinations)
      displayPendingTrips(vacations.getDestinations(traveler.allTrips))
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


const displayTripCostEstimate = (event) => {
  event.preventDefault();
  bookTripBtn.classList.remove('hidden');
  getEstimateBtn.classList.add('hidden');
  tripEstimate.innerHTML = `Trip Request's Estimate is $${'44 million'}*<br>
  <span tabindex="0">*including 10% travel agent fee</span>`;
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
                    <img tabindex="0" alt="${matched.alt}" src="${matched.image}">
                    <p tabindex="0">Destination: ${matched.name}</p>
                    <p tabindex="0">Start Date: ${trip.date}</p>
                    <p tabindex="0">Duration: ${trip.duration}</p>
                    <p tabindex="0">Travelers: ${trip.travelers}</p>
                    <p tabindex="0" id="trip-status">Status: <b>${trip.status}</b></p>
                  </div><br>`
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
                    <img tabindex="0" alt="${matched.alt}" src="${matched.image}">
                    <p tabindex="0">Destination: ${matched.name}</p>
                    <p tabindex="0">Start Date: ${trip.date}</p>
                    <p tabindex="0">Duration: ${trip.duration}</p>
                    <p tabindex="0">Travelers: ${trip.travelers}</p>
                    <p tabindex="0" id="trip-status">Status: <b>${trip.status}</b></p>
                  </div><br>`
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
                    <img tabindex="0" alt="${matched.alt}" src="${matched.image}">
                    <p tabindex="0">Destination: ${matched.name}</p>
                    <p tabindex="0">Start Date: ${trip.date}</p>
                    <p tabindex="0">Duration: ${trip.duration}</p>
                    <p tabindex="0">Travelers: ${trip.travelers}</p>
                    <p tabindex="0" id="trip-status">Status: <b>${trip.status}</b></p>
                  </div><br>`
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
                    <img tabindex="0" alt="${matched.alt}" src="${matched.image}">
                    <p tabindex="0">Destination: ${matched.name}</p>
                    <p tabindex="0">Start Date: ${trip.date}</p>
                    <p tabindex="0">Duration: ${trip.duration}</p>
                    <p tabindex="0">Travelers: ${trip.travelers}</p>
                    <p tabindex="0" id="trip-status">Status: <b>${trip.status}</b></p>
                  </div><br>`
  });
  presentTripsBox.innerHTML = presentHTML;
};



//EVENT LISTENERS
window.addEventListener('load', displayEverything);
// controlledForm.onsubmit = postToTrips;
bookTripBtn.addEventListener('click', function(event) {
  event.preventDefault()
  postToTrips(event)
});
getEstimateBtn.addEventListener('click', displayTripCostEstimate);