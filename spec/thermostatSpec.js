'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('can increase in temperature', function() {
    thermostat.Up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

});
