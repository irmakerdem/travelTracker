class Destination {
  //   this.id = destinationData.id;
  //   this.destination = destinationData.destination;
  //   this.estimatedLodgingCostPerDay = destinationData.estimatedLodgingCostPerDay;
  //   this.estimatedFlightCostPerPerson = destinationData.estimatedFlightCostPerPerson
  //   this.image = destinationData.image;
  //   this.alt = destinationData.alt;


  constructor(destinationData) {
    this.data = destinationData;
  }

  getDestinations(tripData) {
 //tripData is traveler specific trip data

 //found the id of the destination (destination.id) matched the destionaID (trip.destinationID) of the trip
 //                          42                     42(canada)
    let destinationRelatedTripData = tripData.map((trip) => {
      let matchedDestination = this.data.find(destination => trip.destinationID === destination.id)
      // console.log(matchedDestination)

      let newObj = {
        tripId: trip.id,
        // (trip.id)
        id: matchedDestination.id,
        name: matchedDestination.destination,
        image: matchedDestination.image,
        alt: matchedDestination.alt
      }
      // console.log(newObj)
      return newObj 
    })

    return destinationRelatedTripData;
  }

    //find specific destination for a specific traveler(id)
    //map for each element in tripData to this.data destination info

    // We will map the trip data to the destination data.
}

export default Destination;