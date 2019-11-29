'use strict';

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_POWER_SAVE_TEMPERATURE = 25;
  this.MAXIMUM_NON_POWER_SAVE_TEMPERATURE = 32;
  this.powerSavingMode = true;
  this.MEDIUM_USAGE_LIMIT = 18;
  this.HIGH_USAGE_LIMIT = 26;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.Up = function() {
  if (this.temperature === this.MAXIMUM_POWER_SAVE_TEMPERATURE && this.powerSavingMode === true) {
    return;
  } else if (this.temperature === this.MAXIMUM_NON_POWER_SAVE_TEMPERATURE) {
    return;
  } else {
  this.temperature += 1;
  }
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

Thermostat.prototype.Reset = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUse = function() {
  if (this.temperature < this.MEDIUM_USAGE_LIMIT) {
    return 'low';
  } else if (this.temperature > this.MEDIUM_USAGE_LIMIT && this.temperature < this.HIGH_USAGE_LIMIT) {
    return 'medium';
  } else {
    return 'high'
  }
};
