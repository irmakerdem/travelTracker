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

  it('should start without any trips', () => {
    expect(trip1.pastTrips).to.be.an('array');
    expect(trip1.presentTrips).to.be.an('array');
    expect(trip1.upcomingTrips).to.be.an('array');
    expect(trip1.pendingTrips).to.be.an('array');

    expect(trip1.pastTrips).to.deep.equal([]);
    expect(trip1.presentTrips).to.deep.equal([]);
    expect(trip1.upcomingTrips).to.deep.equal([]);
    expect(trip1.pendingTrips).to.deep.equal([]);
  });

  it('should start be able to get current year', () => {
    expect(trip1.getCurrentYear()).to.be.a('number');
  });

  it('should be able to calculate total amount spent on trips this year', () => {
    let singleTravelersYearlyExpense = trip1.getTotalSpentThisYear(47, testDestination1Data);

    expect(testDestination1Data).to.be.an('array');
    expect(singleTravelersYearlyExpense).to.be.a('number');
    expect(singleTravelersYearlyExpense).to.equal(6534);
  });

  it('should be able to calculate the cost of a single trip', () => {
    let singleTrip = trip1.getSingleTripCost(testDestination1Data, 4, 7, 2);

    expect(testDestination1Data).to.be.an('array');
    expect(singleTrip).to.be.a('number');
    expect(singleTrip).to.equal(1270.5);
  });

});