class Traveler {
  //travelData is an object
  constructor(travelerData) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.travelerType = travelerData.travelerType;
  }

  getTravelerFirstName() {
    return this.name.split(" ")[0];
  }
}

export default Traveler;