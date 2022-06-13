class Traveler {
  //travelData is an object
  constructor(travelerData) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.travelerType = travelerData.travelerType;
    this.allTrips = [];
  }

  getTravelerFirstName() {
    return this.name.split(" ")[0];
  }

  getTravelerSpecificTripData(tripData) {
    let getTripData = tripData.filter(tripInfo => tripInfo.userID === this.id);
    if (tripData.length === 0) {
      return 'Invalid ID!';
    }
    this.allTrips = getTripData;
  }

  formatDate(day) {
    let dd = String(day.getDate()).padStart(2, '0');
    let mm = String(day.getMonth() + 1).padStart(2, '0');
    let yyyy = day.getFullYear();
    let formattedDay = yyyy + '/' + mm + '/' + dd;
    return formattedDay;
  }

  getPastTrips() {
    const todaysDate = new Date();
    const formatTodaysDate = this.formatDate(todaysDate);

    const pastTrips = this.allTrips.filter(trip => trip.date < formatTodaysDate);

    this.pastTrips = pastTrips;
    console.log("this.pastTrips", this.pastTrips);
    return this.pastTrips;
  }

  getUpcomingTrips() {
    const todaysDate = new Date();
    const formatTodaysDate = this.formatDate(todaysDate);

    const upcomingTrips = this.allTrips.filter(trip => trip.date > formatTodaysDate);
  
    this.upcomingTrips = upcomingTrips;
    console.log("this.upcomingTrips", this.upcomingTrips);
    return this.upcomingTrips;
  }

  getPendingTrips() {
    const pendingTrips = this.allTrips.filter(trip => trip.status === "pending");

    this.pendingTrips = pendingTrips;
    console.log("this.pendingTrips", this.pendingTrips);
    return this.pendingTrips;
  }

  getPresentTrips() {
    const todaysDate = new Date();
    const formatTodaysDate = this.formatDate(todaysDate);

    const presentTrips = this.allTrips.filter((trip) => {
      console.log(typeof trip.date)
      console.log(typeof formatTodaysDate)
      console.log(trip.date === formatTodaysDate)
      return trip.date === formatTodaysDate
    })
 
    this.presentTrips = presentTrips;
    console.log("this.presentTrips", this.presentTrips);
    return this.presentTrips;
  }

}

export default Traveler;