import { expect } from 'chai';
import Trip from '../src/Trip';
import tripData from '../test-data/trip-data';
import destinationData from '../test-data/destination-data';

describe('Trip', () => {
  let trip1;
  let testDestination1Data;

  beforeEach(() => {
    trip1 = new Trip(tripData);
    testDestination1Data = destinationData;
  });

  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  });

  it('should be an instance of Trip', () => {
    expect(trip1).to.be.an.instanceof(Trip);
  });

  it('should be able to take in trip data', () => {
    expect(trip1.data).to.be.an('array');
    expect(trip1.data).to.deep.equal(tripData);

  });

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

  it('should be able to calculate total amount spent on trips this year', () => {
    trip1.getCurrentYear();
    trip1.getTotalSpentThisYear(testDestination1Data);
    let miniDestinationData = testDestination1Data.filter((desty, index) => index < 5)

    expect(testDestination1Data).to.be.an('array');
    expect(trip1.getTotalSpentThisYear(miniDestinationData)).to.be.an('number');
    expect(trip1.getTotalSpentThisYear(miniDestinationData)).to.equal(8292.97);
  });

});