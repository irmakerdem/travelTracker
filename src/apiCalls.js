//QUERY SELECTORS
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


//POST REQUESTS
let apiPostTrip = (tripObjectToPost) => {
  return fetch('http://localhost:3001/api/v1/trips', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tripObjectToPost)
  })
  .then(response => response.json())
  .catch(error => errorMessage.innerText = '🤡 OOOPSIES! 🤨 There was an error. Please try again. 🤡 ');
};

export {allTravelPromises, allTripsPromises, allDestinationsPromises, apiPostTrip}
