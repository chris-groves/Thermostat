'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_POWER_SAVE_TEMPERATURE = 25;
  this.powerSavingMode = true;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.Up = function() {
  if (this.temperature === this.MAXIMUM_POWER_SAVE_TEMPERATURE) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.Down = function() {
  if (this.temperature === this.MINIMUM_TEMPERATURE) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.powerSavingModeOn = function() {
  if (this.powerSavingMode === true) {
    return "Yes";
  }
    return "No";
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
};
