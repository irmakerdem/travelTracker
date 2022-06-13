//QUERY SELECTOR
let errorMessage = document.querySelector('.error-message');

//FETCH REQUESTS
const getPromise = (url) => {
  return fetch(url)
  .then(response => response.json())
  .catch(error => errorMessage.innerText = '🤡 OOOPSIES! 🤨 There was an error. Please try again. 🤡 ');
}

const allTravelPromises = getPromise('http://localhost:3001/api/v1/travelers');
const allTripsPromises = getPromise('http://localhost:3001/api/v1/trips');
const allDestinationsPromises = getPromise('http://localhost:3001/api/v1/destinations');

export {allTravelPromises, allTripsPromises, allDestinationsPromises}




//POST REQUESTS


let postTrip = (tripObjectToPost) => {
  return fetch('http://localhost:3001/api/v1/trips', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tripObjectToPost)
  })
};

let postDestination = (destinationObjectToPost) => {
  return fetch('http://localhost:3001/api/v1/destinations', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(destinationObjectToPost)
  })
};
