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
  }

  getTripDataById(id) {
    let tripData = this.data.filter(tripInfo => tripInfo.userID === id)
    if (tripData.length === 0) {
      return 'Invalid ID!';
    }
    return tripData;
  }

  getCurrentYear() {
    let today = new Date();
    let yyyy = today.getFullYear();
    return yyyy;
  }

  getTotalSpentThisYear(destinationData) {
    const agentFee = 1.1;
    const currentYear = this.getCurrentYear();

    const yearlyCost = destinationData.reduce((total, dest) => {
      this.data.forEach((trip) => {
        if(dest.id === trip.destinationID && trip.date.includes(currentYear)) {
          let lodgingCost = dest.estimatedLodgingCostPerDay * trip.duration;
          let flightCost = dest.estimatedFlightCostPerPerson * trip.travelers;
          total += lodgingCost;
          total += flightCost;
        }
      });
      return Number((total * agentFee).toFixed(2));
    }, 0);
    return yearlyCost;
  }

    //filter array of trip data to only include trips that have date within last yr
    //find current date
    //create new Date(currentDate - 1yr) 
    //inside filter: return all trips where trip.date(JS date format aka new Date) > 1 yr ago
    //split at dash
    // convert yr from 4 char into 2 char??

  // getTripsWithinLastYear() {
  //   this.data.filter((currentTrip) => {
  //     console.log(currentTrip)
  //     this.data.date = new Date()
  //     if(this.data.date) {
        
  //     }
  //   })
  // }

//   sortAllTrips(travelerData) {
//     //make an empty trips array in traveler?
//     const sortedTrips = travelerData.trips.sort((tripA, tripB) => {
//       return new Date(tripB.date) - new Date(tripA.date)
//     })
//     travelerData.trips = sortedTrips;
// }

  getPastTrips(travellerTrips) {
    const todaysDate = new Date();
    const formatTodaysDate = this.formatDate(todaysDate);

    const pastTrips = travellerTrips.filter(trip => trip.date < formatTodaysDate);

    return pastTrips;
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
  
  formatDate(day) {
    let dd = String(day.getDate()).padStart(2, '0');
    let mm = String(day.getMonth() + 1).padStart(2, '0');
    let yyyy = day.getFullYear();
    let formattedDay = yyyy + '/' + mm + '/' + dd;
    return formattedDay;
  }

  getUpcomingTrips(travellerTrips) {
    const todaysDate = new Date();
    const formatTodaysDate = this.formatDate(todaysDate);

    const upcomingTrips = travellerTrips.filter((trip) => {
      return trip.date > formatTodaysDate;
    })
    return upcomingTrips;
  }

  getPendingTrips(travellerTrips) {
    // return travellerTrips.filter(trip => trip.status === "pending")
  }

  getPresentTrips() {
    //leave to end
  }
}
export default Trip;