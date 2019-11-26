'use strict';

function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.Up = function() {
  this.temperature += 1;
};
