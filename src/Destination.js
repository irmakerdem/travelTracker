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

  getDestinationDataById(id) {
    // let sleepData = this.data.filter((snooze) => {
    //   return snooze.userID === id;
    // });
    // if (sleepData.length === 0) {
    //   return 'Invalid ID!';
    // }
    // return sleepData;
  }
}

export default Destination;