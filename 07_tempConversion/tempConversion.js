const convertToCelsius = function (temperature) {
  const farenheitToCelsius = ((temperature - 32) * 5) / 9;
  const roundedCelsiusTemp = Math.round(farenheitToCelsius * 10) / 10;
  return roundedCelsiusTemp;
};

const convertToFahrenheit = function (temperature) {
  const celsiusToFarenheit = (temperature * 9) / 5 + 32;
  const roundedFarenheitTemp = Math.round(celsiusToFarenheit * 10) / 10;
  return roundedFarenheitTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
