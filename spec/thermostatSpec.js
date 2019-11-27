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

  it('can decrease in temperature', function() {
    thermostat.Down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum temperature of 10 degress', function() {
    for (var i = 0; i < 10; i++) {
      thermostat.Down();
    }
    thermostat.Down();
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('is in power saving mode by default', function() {
    expect(thermostat.powerSavingModeOn()).toEqual("Yes");
  });

  it('can switch off power saving mode', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.powerSavingModeOn()).toEqual("No");
  });

  it('can switch on power saving mode', function() {
    thermostat.switchPowerSavingModeOff();
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.powerSavingModeOn()).toEqual("Yes");
  });

  it('has a maximum temperature of 25 degrees when PSM is on', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.Up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });

});
