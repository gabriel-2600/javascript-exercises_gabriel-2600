const add = function (numOne, numTwo) {
  return Number(numOne) + Number(numTwo);
};

const subtract = function (numOne, numTwo) {
  return Number(numOne) - Number(numTwo);
};

const sum = function (numArray) {
  if (numArray.length === 0) {
    return 0;
  }
  return numArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
};

const multiply = function (numArray) {
  return numArray.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );
};

const power = function (numOne, numTwo) {
  return Math.pow(numOne, numTwo);
};

const factorial = function (num) {
  if (num === 0) return 1;

  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
