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
    let miniDestinationData = testDestination1Data.filter((desty, index) => index < 5);

    expect(testDestination1Data).to.be.an('array');
    expect(trip1.getTotalSpentThisYear(miniDestinationData)).to.be.a('number');
    expect(trip1.getTotalSpentThisYear(miniDestinationData)).to.equal(8292.97);
  });

  it('should be able to get past trips', () => {
    let miniTripData = tripData.filter((tripy, index) => index < 7);

    expect(trip1.getPastTrips(miniTripData)).to.be.an('array');
    expect(trip1.getPastTrips(miniTripData)).to.deep.equal([
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

  // it('should be able to get pending trips', () => {
  //   // let miniTripData = tripData.filter((tripy, index) => index < 75);

  //   expect(trip1.getPendingTrips()).to.be.an('array');
  //   expect(trip1.getPendingTrips()).to.deep.equal([
  //     {
  //       "date": "2020/05/26",
  //       "destinationID": 28,
  //       "duration": 11,
  //       "id": 71,
  //       "status": "pending",
  //       "suggestedActivities": [],
  //       "travelers": 1,
  //       "userID": 38,
  //     },
  //     {
  //       "date": "2020/05/06",
  //       "destinationID": 26,
  //       "duration": 11,
  //       "id": 83,
  //       "status": "pending",
  //       "suggestedActivities": [],
  //       "travelers": 1,
  //       "userID": 47,
  //     },
  //     {
  //       "date": "2020/11/23",
  //       "destinationID": 1,
  //       "duration": 19,
  //       "id": 84,
  //       "status": "pending",
  //       "suggestedActivities": [],
  //       "travelers": 1,
  //       "userID": 7,
  //     },
  //     {
  //       "date": "2020/10/6",
  //       "destinationID": 12,
  //       "duration": 16,
  //       "id": 98,
  //       "status": "pending",
  //       "suggestedActivities": [],
  //       "travelers": 6,
  //       "userID": 7,
  //     },
  //     {
  //       "date": "2020/09/07",
  //       "destinationID": 30,
  //       "duration": 5,
  //       "id": 132,
  //       "status": "pending",
  //       "suggestedActivities": [],
  //       "travelers": 5,
  //       "userID": 42,
  //     },
  //     {
  //       "date": "2020/10/29",
  //       "destinationID": 22,
  //       "duration": 18,
  //       "id": 138,
  //       "status": "pending",
  //       "suggestedActivities": [],
  //       "travelers": 3,
  //       "userID": 25,
  //     },
  //     {
  //       "date": "2020/12/27",
  //       "destinationID": 43,
  //       "duration": 18,
  //       "id": 171,
  //       "status": "pending",
  //       "suggestedActivities": [],
  //       "travelers": 1,
  //       "userID": 2,
  //     },
  //     {
  //       "date": "2020/09/06",
  //       "destinationID": 14,
  //       "duration": 12,
  //       "id": 180,
  //       "status": "pending",
  //       "suggestedActivities": [],
  //       "travelers": 1,
  //       "userID": 48,
  //     },
  //     {
  //       "date": "2020/05/17",
  //       "destinationID": 39,
  //       "duration": 6,
  //       "id": 199,
  //       "status": "pending",
  //       "suggestedActivities": [],
  //       "travelers": 6,
  //       "userID": 45,
  //     }
  //   ]);
  // });

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

  it('should be able to calculate total cost of a single trip', () => {
    expect(testDestination1Data).to.be.an('array');
    expect(trip1.getSingleTripCost(testDestination1Data, 20, 3, 2)).to.be.a('number');
    expect(trip1.getSingleTripCost(testDestination1Data, 20, 3, 2)).to.equal(1126.40);
  });

});