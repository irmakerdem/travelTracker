import { expect } from 'chai';
import Destination from '../src/Destination';
import destinationData from '../test-data/destination-data';

describe('Destination', () => {
  let destination;
  let travelerSpecificTrips;

  beforeEach(() => {
    travelerSpecificTrips = [
      {
      "id": 29,
      "userID": 42,
      "destinationID": 25,
      "travelers": 3,
      "date": "2019/08/30",
      "duration": 4,
      "status": "approved",
      "suggestedActivities": []
      },
      {
        "id": 39,
        "userID": 42,
        "destinationID": 25,
        "travelers": 3,
        "date": "2019/10/22",
        "duration": 7,
        "status": "approved",
        "suggestedActivities": []
        },
        {
          "id": 87,
          "userID": 42,
          "destinationID": 40,
          "travelers": 2,
          "date": "2020/03/17",
          "duration": 14,
          "status": "approved",
          "suggestedActivities": []
        }
      ];
    destination = new Destination(destinationData);
  });

  it('should be a function', function () {
    expect(Destination).to.be.a('function');
  });

  it('should be an instance of Destination', () => {
    expect(destination).to.be.an('object');
    expect(destination).to.be.an.instanceof(Destination);
  });

  it('should be able to get present trips', () => { 
    let newlyDesignedDestinationInfo = destination.getDestinations(travelerSpecificTrips);

    expect(newlyDesignedDestinationInfo).to.be.an('array');
    expect(newlyDesignedDestinationInfo).to.deep.equal([
      {
        "alt": "people crossing the street during the day surrounded by tall buildings and advertisements",
        "id": 25,
        "image": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "name": "New York, New York",
        "tripId": 29,
      },
      {
        "alt": "people crossing the street during the day surrounded by tall buildings and advertisements",
        "id": 25,
        "image": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "name": "New York, New York",
        "tripId": 39,
      },
      {
        "alt": "trees near seashore",
        "id": 40,
        "image": "https://images.unsplash.com/photo-1536708880921-03a9306ec47d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1336&q=80",
        "name": "La Isla Tortuga, Costa Rica",
        "tripId": 87,
      }
    ]);
  });
});
