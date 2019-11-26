'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.Up = function() {
  this.temperature += 1;
};

Thermostat.prototype.Down = function() {
  if (this.temperature === this.MINIMUM_TEMPERATURE) {
    return;
  }
  this.temperature -= 1;
};
