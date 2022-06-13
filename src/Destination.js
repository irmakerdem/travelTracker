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
    let getDestinationData = this.data.filter(destInfo => destInfo.id === id);
    if (this.data.length === 0) {
      return 'Invalid ID!';
    }
    return getDestinationData;
  }
}

export default Destination;