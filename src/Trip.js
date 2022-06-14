import Destination from "./Destination";

class Trip {
  constructor(tripData) {
    this.data = tripData;
    this.pastTrips = [];
    this.presentTrips = [];
    this.upcomingTrips = [];
    this.pendingTrips = [];
  }

  getCurrentYear() {
    let today = new Date();
    let yyyy = today.getFullYear();
    return yyyy;
  }

  getTotalSpentThisYear(travelerId, allDestinations) {
    const agentFee = 1.1;
    const currentYear = this.getCurrentYear();

    const travelerSpecificTrips = this.data.filter(trip => trip.userID === travelerId)

    const yearlyExpenses = travelerSpecificTrips.reduce((total, trip) => {
      let getDestinations = allDestinations.find(destination => trip.destinationID === destination.id);

      if(trip.date.includes(currentYear)) {
        let lodgingCost = getDestinations.estimatedLodgingCostPerDay * trip.duration;
        let flightCost = getDestinations.estimatedFlightCostPerPerson * trip.travelers;
        total += lodgingCost;
        total += flightCost;
      }
      return total;
    },0)
    
    return Number((yearlyExpenses * agentFee).toFixed(2));
  }

  getSingleTripCost(destinationData, ourId, ourDuration, ourTravelers) {
    const agentFee = 1.1;

    let singleTripCost = destinationData.reduce((total, dest) => {
      if(dest.id === ourId) {
       let lodgingCost = dest.estimatedLodgingCostPerDay * ourDuration;
       let flightCost = dest.estimatedFlightCostPerPerson * ourTravelers;
        total += lodgingCost;
        total += flightCost;
      }
    return total;
    }, 0);

    return Number((singleTripCost * agentFee).toFixed(2));
  }
}

export default Trip;
