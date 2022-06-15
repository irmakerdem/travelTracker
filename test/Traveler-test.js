import { expect } from 'chai';
import Traveler from '../src/Traveler';

describe('Traveler', () => {
  let traveler1, traveler2, traveler3;
  let testTraveler1Data, testTraveler2Data, testTraveler3Data;

  beforeEach(() => {
    testTraveler1Data = {
      "id": 9,
      "name": "Natalee Deegin",
      "travelerType": "relaxer"
    };
    testTraveler2Data = {
      "id": 3,
      "name": "Sibby Dawidowitsch",
      "travelerType": "shopper"
    };
    testTraveler3Data = {
      "id": 48,
      "name": "Lurlene Raisbeck",
      "travelerType": "photographer"
    };
    traveler1 = new Traveler(testTraveler1Data);
    traveler2 = new Traveler(testTraveler2Data);
    traveler3 = new Traveler(testTraveler3Data);
  });

  it('should be a function', function () {
    expect(Traveler).to.be.a('function');
  });

  it('should be an instance of Traveler', () => {
    expect(testTraveler1Data).to.be.an('object');
    expect(traveler1).to.be.an.instanceof(Traveler);
    expect(traveler2).to.be.an.instanceof(Traveler);
    expect(traveler3).to.be.an.instanceof(Traveler);
  });

  it('should be able to get traveler\'s first name', function () {
    expect(traveler1.getTravelerFirstName()).to.equal('Natalee');
    expect(traveler2.getTravelerFirstName()).to.equal('Sibby');
    expect(traveler3.getTravelerFirstName()).to.equal('Lurlene');
  });

  it('should be able to store traveler\'s id', () => {
    expect(traveler1.id).to.be.a('number');
    expect(traveler1.id).to.equal(9);

    expect(traveler2.id).to.be.a('number');
    expect(traveler2.id).to.equal(3);

    expect(traveler3.id).to.be.a('number');
    expect(traveler3.id).to.equal(48);
  });

  it('should be able to store traveler\'s name', () => {
    expect(traveler1.name).to.be.a('string');
    expect(traveler1.name).to.equal('Natalee Deegin');

    expect(traveler2.name).to.be.a('string');
    expect(traveler2.name).to.equal('Sibby Dawidowitsch');

    expect(traveler3.name).to.be.a('string');
    expect(traveler3.name).to.equal('Lurlene Raisbeck');
  });

  it('should be able to store traveler\'s type', () => {
    expect(traveler1.travelerType).to.be.a('string');
    expect(traveler1.travelerType).to.equal('relaxer');

    expect(traveler2.travelerType).to.be.a('string');
    expect(traveler2.travelerType).to.equal('shopper');

    expect(traveler3.travelerType).to.be.a('string');
    expect(traveler3.travelerType).to.equal('photographer');
  });




 let miniDestinationData = testDestination1Data.filter((desty, index) => index < 20);
  
 it('should be able to test whether the traveler id is valid and also return a message if it\'s not valid', () => {
   expect(trip1.getTripDataById(500)).to.equal('Invalid ID!');
 });

 it('should be able to acquire trip data based on traveler\'s id', () => {
   expect(trip1.getTripDataById(17)).to.be.an('array');
   expect(trip1.getTripDataById(17)).to.deep.equal([
     {
       "id": 60,
       "userID": 17,
       "destinationID": 45,
       "travelers": 2,
       "date": "2020/06/23",
       "duration": 17,
       "status": "approved",
       "suggestedActivities": []
     },
     {
       "id": 66,
       "userID": 17,
       "destinationID": 31,
       "travelers": 6,
       "date": "2020/12/19",
       "duration": 10,
       "status": "approved",
       "suggestedActivities": []
     },
     {
       "id": 73,
       "userID": 17,
       "destinationID": 14,
       "travelers": 2,
       "date": "2020/04/26",
       "duration": 18,
       "status": "approved",
       "suggestedActivities": []
     },
     {
       "id": 172,
       "userID": 17,
       "destinationID": 38,
       "travelers": 5,
       "date": "2020/06/17",
       "duration": 13,
       "status": "approved",
       "suggestedActivities": []
     },
     {
       "id": 184,
       "userID": 17,
       "destinationID": 11,
       "travelers": 1,
       "date": "2019/12/27",
       "duration": 7,
       "status": "approved",
       "suggestedActivities": []
     },
   ]);
 });

 it('should be able to take in destination data', () => {
   expect(testDestination1Data).to.be.an('array');
 });

 it('should be able to get past trips', () => {
   let miniTripData = tripData.filter((tripy, index) => index < 7);

   trip1.getTotalSpentThisYear(miniTripData);
   
   expect(trip1.pastTrips).to.be.an('array');
   expect(trip1.pastTrips).to.deep.equal([
     {
       "date": "2022/05/22",
       "destinationID": 22,
       "duration": 17,
       "id": 3,
       "status": "approved",
       "suggestedActivities": [],
       "travelers": 4,
       "userID": 3,
     },
     {
       "date": "2022/02/25",
       "destinationID": 14,
       "duration": 10,
       "id": 4,
       "status": "approved",
       "suggestedActivities": [],
       "travelers": 2,
       "userID": 43,
     },
     {
       "date": "2022/04/30",
       "destinationID": 29,
       "duration": 18,
       "id": 5,
       "status": "approved",
       "suggestedActivities": [],
       "travelers": 3,
       "userID": 42,
     },
     {
       "date": "2022/05/28",
       "destinationID": 17,
       "duration": 20,
       "id": 7,
       "status": "approved",
       "suggestedActivities": [],
       "travelers": 5,
       "userID": 37,
     }
   ]);
 });

 it('should be able to get upcoming trips', () => {
   let miniTripData = tripData.filter((tripy, index) => index < 10);

   expect(trip1.getUpcomingTrips(miniTripData)).to.be.an('array');
   expect(trip1.getUpcomingTrips(miniTripData)).to.deep.equal([
     {
       "date": "2022/09/16",
       "destinationID": 49,
       "duration": 8,
       "id": 1,
       "status": "approved",
       "suggestedActivities": [],
       "travelers": 1,
       "userID": 44,
     },
     {
       "date": "2022/10/04",
       "destinationID": 25,
       "duration": 18,
       "id": 2,
       "status": "approved",
       "suggestedActivities": [],
       "travelers": 5,
       "userID": 35,
     },
     {
       "date": "2022/06/29",
       "destinationID": 35,
       "duration": 9,
       "id": 6,
       "status": "approved",
       "suggestedActivities": [],
       "travelers": 3,
       "userID": 29,
     },
     {
       "date": "2022/12/19",
       "destinationID": 19,
       "duration": 19,
       "id": 9,
       "status": "approved",
       "suggestedActivities": [],
       "travelers": 5,
       "userID": 24,
     },
     {
       "date": "2022/07/23",
       "destinationID": 50,
       "duration": 17,
       "id": 10,
       "status": "approved",
       "suggestedActivities": [],
       "travelers": 6,
       "userID": 9,
     }
   ]);
 });

 it('should be able to get trip data based on traveler\'s id', () => {
   let travelerData = trip1.getTripDataById(1);

   expect(travelerData).to.be.an('array');
   expect(travelerData).to.deep.equal([
     {
       "id": 117,
       "userID": 1,
       "destinationID": 28,
       "travelers": 3,
       "date": "2021/01/09",
       "duration": 15,
       "status": "approved",
       "suggestedActivities": []
       },
   ]);
 });

 it('should be able to get pending trips', () => {
   let userTrips = trip1.getTripDataById(45);

   expect(trip1.getPendingTrips(userTrips)).to.be.an('array');
   expect(trip1.getPendingTrips(userTrips)).to.deep.equal([
     {
       "date": "2020/05/17",
       "destinationID": 39,
       "duration": 6,
       "id": 199,
       "status": "pending",
       "suggestedActivities": [],
       "travelers": 6,
       "userID": 45,
     }
   ]);
 });

 it('should be able to get present trips', () => {
   let miniTripData = tripData.filter((tripy, index) => index < 20);

   expect(trip1.getPresentTrips(miniTripData)).to.be.an('array');
   expect(trip1.getPresentTrips(miniTripData)).to.deep.equal([
     {
       "id": 15,
       "userID": 50,
       "destinationID": 13,
       "travelers": 3,
       "date": "2022/06/12",
       "duration": 6,
       "status": "approved",
       "suggestedActivities": []
     },
   ]);
   
 });

});