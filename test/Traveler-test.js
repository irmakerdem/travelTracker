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

});