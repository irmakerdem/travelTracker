class Destination {
  constructor(destinationData) {
    this.data = destinationData;
  }

  getDestinations(tripData) {
    let destinationRelatedTripData = tripData.map((trip) => {
      let matchedDestination = this.data.find(destination => trip.destinationID === destination.id);

      let newObj = {
        tripId: trip.id,
        id: matchedDestination.id,
        name: matchedDestination.destination,
        image: matchedDestination.image,
        alt: matchedDestination.alt
      }

      return newObj; 
    })

    return destinationRelatedTripData;
  }
}

export default Destination;