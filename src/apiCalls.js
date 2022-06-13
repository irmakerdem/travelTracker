//QUERY SELECTOR
let errorMessage = document.querySelector('.errorMessage');

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