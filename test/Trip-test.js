import { expect } from 'chai';
import Trip from '../src/Trip';

describe('Trip', () => {
  let trip1;
  // trip2, trip3;
  let testTrip1Data;
  // testTrip2Data, testTrip3Data;
  let testDestination1Data;
  // testDestination2Data, testDestination3Data;

  beforeEach(() => {
    testTrip1Data = [
      {
        "id": 60,
        "userID": 17,
        "destinationID": 45,
        "travelers": 2,
        "date": "2022/06/23",
        "duration": 17,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 73,
        "userID": 17,
        "destinationID": 14,
        "travelers": 2,
        "date": "2022/04/26",
        "duration": 18,
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
    ];
    // testTrip2Data = [
    //   {
    //     "id": 34,
    //     "userID": 32,
    //     "destinationID": 14,
    //     "travelers": 5,
    //     "date": "2019/08/02",
    //     "duration": 5,
    //     "status": "approved",
    //     "suggestedActivities": []
    //   },
    // ];
    // testTrip3Data = [
    //   {
    //     "id": 183,
    //     "userID": 44,
    //     "destinationID": 10,
    //     "travelers": 4,
    //     "date": "2020/07/22",
    //     "duration": 11,
    //     "status": "approved",
    //     "suggestedActivities": []
    //   },
    //   {
    //     "id": 201,
    //     "userID": 44,
    //     "destinationID": 20,
    //     "travelers": 3,
    //     "date": "2021/08/08",
    //     "duration": 7,
    //     "status": "approved",
    //     "suggestedActivities": []
    //   },
    //   {
    //     "id": 202,
    //     "userID": 44,
    //     "destinationID": 15,
    //     "travelers": 3,
    //     "date": "2022/08/08",
    //     "duration": 7,
    //     "status": "approved",
    //     "suggestedActivities": []
    //   },
    //   {
    //     "id": 46,
    //     "userID": 44,
    //     "destinationID": 33,
    //     "travelers": 2,
    //     "date": "2020/08/24",
    //     "duration": 11,
    //     "status": "approved",
    //     "suggestedActivities": []
    //   },
    //   {
    //     "id": 68,
    //     "userID": 44,
    //     "destinationID": 41,
    //     "travelers": 6,
    //     "date": "2020/09/19",
    //     "duration": 14,
    //     "status": "approved",
    //     "suggestedActivities": []
    //   },
    // ];
    testDestination1Data = [
      {
        "id": 45,
        "destination": "Calgary, Canada",
        "estimatedLodgingCostPerDay": 200,
        "estimatedFlightCostPerPerson": 125,
        "image": "https://images.unsplash.com/photo-1523167508699-c34c50472b01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
        "alt": "city buildings reflection on body of water"
      },
    ];
    // testDestination2Data = [
    //   {
    //     "id": 14,
    //     "destination": "Marrakesh, Morocco",
    //     "estimatedLodgingCostPerDay": 70,
    //     "estimatedFlightCostPerPerson": 830,
    //     "image": "https://images.unsplash.com/photo-1517821362941-f7f753200fef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80",
    //     "alt": "people buying oranges and other fruit from a street vendor"
    //   },
    // ];
    // testDestination3Data = [
    //   {
    //     "id": 33,
    //     "destination": "Brussels, Belgium",
    //     "estimatedLodgingCostPerDay": 1000,
    //     "estimatedFlightCostPerPerson": 110,
    //     "image": "https://images.unsplash.com/photo-1559113202-c916b8e44373?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    //     "alt": "brown concrete gate"
    //   },
    // ];
    trip1 = new Trip(testTrip1Data);
    // trip2 = new Trip(testTrip2Data);
    // trip3 = new Trip(testTrip3Data);
  });

  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  });

  it('should be an instance of Trip', () => {
    expect(trip1).to.be.an.instanceof(Trip);
    // expect(trip2).to.be.an.instanceof(Trip);
    // expect(trip3).to.be.an.instanceof(Trip);
  });

  it('should be able to take in trip data', () => {
    expect(trip1.data).to.be.an('array');
    // expect(trip2.data).to.be.an('array');
    // expect(trip3.data).to.be.an('array');
    expect(trip1.data).to.deep.equal(testTrip1Data);
    // expect(trip2.data).to.deep.equal(testTrip2Data);
    // expect(trip3.data).to.deep.equal(testTrip3Data);
  });

  it('should be able to test whether the traveler id is valid and also return a message if it\'s not valid', () => {
    let tripDataX = trip1.getTripDataById(1);
    expect(trip1.getTripDataById(1)).to.equal('Invalid ID!')
  });

  it('should be able to acquire trip data based on traveler\'s id', () => {
    expect(trip1.getTripDataById(17)).to.be.an('array');
    expect(trip1.getTripDataById(17)).to.deep.equal([
      {
        "id": 60,
        "userID": 17,
        "destinationID": 45,
        "travelers": 2,
        "date": "2022/06/23",
        "duration": 17,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 73,
        "userID": 17,
        "destinationID": 14,
        "travelers": 2,
        "date": "2022/04/26",
        "duration": 18,
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

    // expect(trip2.getTripDataById(32)).to.be.an('array');
    // expect(trip2.getTripDataById(32)).to.deep.equal([
    //   {
    //     "id": 34,
    //     "userID": 32,
    //     "destinationID": 14,
    //     "travelers": 5,
    //     "date": "2019/08/02",
    //     "duration": 5,
    //     "status": "approved",
    //     "suggestedActivities": []
    //   },
    // ]);
    // expect(trip3.getTripDataById(44)).to.be.an('array');
    // expect(trip3.getTripDataById(44)).to.deep.equal([
    //   {
    //     "id": 183,
    //     "userID": 44,
    //     "destinationID": 10,
    //     "travelers": 4,
    //     "date": "2020/07/22",
    //     "duration": 11,
    //     "status": "approved",
    //     "suggestedActivities": []
    //   },
    //   {
    //     "id": 201,
    //     "userID": 44,
    //     "destinationID": 20,
    //     "travelers": 3,
    //     "date": "2021/08/08",
    //     "duration": 7,
    //     "status": "approved",
    //     "suggestedActivities": []
    //   },
    //   {
    //     "id": 202,
    //     "userID": 44,
    //     "destinationID": 15,
    //     "travelers": 3,
    //     "date": "2022/08/08",
    //     "duration": 7,
    //     "status": "approved",
    //     "suggestedActivities": []
    //   },
    //   {
    //     "id": 46,
    //     "userID": 44,
    //     "destinationID": 33,
    //     "travelers": 2,
    //     "date": "2020/08/24",
    //     "duration": 11,
    //     "status": "approved",
    //     "suggestedActivities": []
    //   },
    //   {
    //     "id": 68,
    //     "userID": 44,
    //     "destinationID": 41,
    //     "travelers": 6,
    //     "date": "2020/09/19",
    //     "duration": 14,
    //     "status": "approved",
    //     "suggestedActivities": []
    //   },
    // ]);
  });

  it('should be able to take in destination data', () => {
    expect(testDestination1Data).to.be.an('array');
    // expect(testDestination2Data).to.be.an('array');
    // expect(testDestination3Data).to.be.an('array');
  });

  it('should be able to take in get total amount spent', () => {
    trip1.getCurrentYear();
    var getMoney = trip1.getTotalSpentThisYear(testDestination1Data);
    
    expect(testDestination1Data).to.be.an('array');
    expect(getMoney).to.be.a('number');
  });

});