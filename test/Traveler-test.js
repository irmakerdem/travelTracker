import { expect } from 'chai';
import tripData from '../test-data/trip-data';
import Traveler from '../src/Traveler';
import travelerData from '../test-data/traveler-data';

describe('Traveler', () => {
  let traveler, traveler1, traveler2, traveler3;
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
    traveler = new Traveler(travelerData);
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

  it('should store all trips for a traveler', () => {
    expect(traveler1.allTrips).to.be.an('array');
    expect(traveler1.allTrips).to.deep.equal([]);
  });

  it('should be able to get traveler\'s first name', function () {
    expect(traveler1.getTravelerFirstName()).to.equal('Natalee');
    expect(traveler2.getTravelerFirstName()).to.equal('Sibby');
    expect(traveler3.getTravelerFirstName()).to.equal('Lurlene');
  });

  it('should be able to get trips for a single traveler', () => {
    let singleTravelersTrips = traveler1.getTravelerSpecificTripData(tripData);

    expect(tripData).to.be.an('array');
    expect(singleTravelersTrips).to.be.an('array');
    expect(singleTravelersTrips).to.deep.equal([
      {
        "date": "2022/07/23",
        "destinationID": 50,
        "duration": 17,
        "id": 10,
        "status": "approved",
        "suggestedActivities": [],
        "travelers": 6,
        "userID": 9,
      },
      {
        "date": "2020/03/05",
        "destinationID": 31,
        "duration": 13,
        "id": 74,
        "status": "approved",
        "suggestedActivities": [],
        "travelers": 5,
        "userID": 9,
      },
      {
        "date": "2020/05/29",
        "destinationID": 16,
        "duration": 16,
        "id": 95,
        "status": "approved",
        "suggestedActivities": [],
        "travelers": 4,
        "userID": 9,
      },
      {
        "date": "2019/08/09",
        "destinationID": 14,
        "duration": 10,
        "id": 105,
        "status": "approved",
        "suggestedActivities": [],
        "travelers": 2,
        "userID": 9,
      },
      {
        "date": "2020/06/08",
        "destinationID": 34,
        "duration": 17,
        "id": 106,
        "status": "approved",
        "suggestedActivities": [],
        "travelers": 5,
        "userID": 9,
      },
      {
        "date": "2021/01/15",
        "destinationID": 45,
        "duration": 5,
        "id": 182,
        "status": "approved",
        "suggestedActivities": [],
        "travelers": 6,
        "userID": 9,
      }
    ]);
  });

  it('should start be able to format the date', () => {
    let day = new Date();

    expect(traveler.formatDate(day)).to.be.a('string');
  });
 
  it('should be able to get past trips', () => { 
    traveler.getPastTrips();

    expect(traveler).to.have.property('pastTrips');
  });

  it('should be able to get upcoming trips', () => { 
    traveler.getUpcomingTrips();

    expect(traveler).to.have.property('upcomingTrips');
  });

  it('should be able to get pending trips', () => { 
    traveler.getPendingTrips();

    expect(traveler).to.have.property('pendingTrips');
  });

  it('should be able to get present trips', () => { 
    traveler.getPresentTrips();

    expect(traveler).to.have.property('presentTrips');
  });

});