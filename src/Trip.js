import Destination from "./Destination";

class Trip {
  //tripData is an object

  //   this.id = tripData.id;
  //   this.userID = tripData.userID;
  //   this.destinationID = tripData.destinationID;
  //   this.travelers = tripData.travelers;
  //   this.date = tripData.date;
  //   this.duration = tripData.duration;
  //   this.status = tripData.status;
  //   this.suggestedActivities = tripData.suggestedActivities;

  constructor(tripData) {
    this.data = tripData;
    this.pastTrips = [];
    this.presentTrips = [];
    this.upcomingTrips = [];
    this.pendingTrips = [];
  }

  // getTripDataById(id) {
  //   let tripData = this.data.filter(tripInfo => tripInfo.userID === id);
  //   if (tripData.length === 0) {
  //     return 'Invalid ID!';
  //   }
  //   return tripData;
  // }

  getCurrentYear() {
    let today = new Date();
    let yyyy = today.getFullYear();
    return yyyy;
  }

  getTotalSpentThisYear(travelerId, allDestinations) {
    // console.log(allDestinations)
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


  // formatDatesList(daylist) {
  //   let formattedDaylist = daylist.map(day => {
  //     let dd = String(day.getDate()).padStart(2, '0');
  //     let mm = String(day.getMonth() + 1).padStart(2, '0');
  //     let yyyy = day.getFullYear();
  //     return day = yyyy + '/' + mm + '/' + dd;
  //   })
  //     return formattedDaylist;
  // }

export default Trip;
