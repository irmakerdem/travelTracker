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
  
  formatDate(day) {
    let dd = String(day.getDate()).padStart(2, '0');
    let mm = String(day.getMonth() + 1).padStart(2, '0');
    let yyyy = day.getFullYear();
    let formattedDay = yyyy + '/' + mm + '/' + dd;
    return formattedDay;
  }

  getPastTrips(travellerTrips) {
    const todaysDate = new Date();
    const formatTodaysDate = this.formatDate(todaysDate);

    const pastTrips = travellerTrips.filter(trip => trip.date < formatTodaysDate);

    this.pastTrips = pastTrips;
    console.log("this.pastTrips", this.pastTrips);
  }

  getUpcomingTrips(travellerTrips) {
    const todaysDate = new Date();
    const formatTodaysDate = this.formatDate(todaysDate);

    const upcomingTrips = travellerTrips.filter(trip => trip.date > formatTodaysDate);
  
    this.upcomingTrips = upcomingTrips;
    console.log("this.upcomingTrips", this.upcomingTrips);
  }

  getPendingTrips(travellerTrips) {
    const pendingTrips = travellerTrips.filter(trip => trip.status === "pending");

    this.pendingTrips = pendingTrips;
    console.log("this.pendingTrips", this.pendingTrips);
  }

  getPresentTrips(travellerTrips) {
    const todaysDate = new Date();
    const formatTodaysDate = this.formatDate(todaysDate);

    const presentTrips = travellerTrips.filter(trip => trip.date === formatTodaysDate);
 
    this.presentTrips = presentTrips;
    console.log("this.presentTrips", this.presentTrips);
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
