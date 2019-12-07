$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  displayEnergyUse();

  $('#temperature-up').on('click', function() {
    thermostat.Up();
    updateTemperature();
    displayEnergyUse();
  })

  $('#temperature-down').on('click', function() {
    thermostat.Down();
    updateTemperature();
    displayEnergyUse();
  })

  $('#temperature-reset').on('click', function() {
    thermostat.Reset();
    updateTemperature();
    displayEnergyUse();
  })

  $('#powersaving-on').on('click', function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on')
    updateTemperature();
    displayEnergyUse();
  })

  $('#powersaving-off').on('click', function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off')
    updateTemperature();
    displayEnergyUse();
  })

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk-<YOUR-API-KEY>-&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '<YOUR-API-KEY>', function(data) {
      $('#current-temperature').text(data.main.temp);
    })

  })

  function displayEnergyUse() {
    $('#energy-use').text(thermostat.energyUse());
    $('#energy-use').attr('class',thermostat.energyUse());
  };

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class',thermostat.energyUse());
  }
});
