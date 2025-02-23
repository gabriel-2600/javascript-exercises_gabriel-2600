const sumAll = function (...given) {
  let finalSum = 0;

  let sortedGiven = given.sort();
  const firstValue = sortedGiven[0];
  const secondValue = sortedGiven[1];

  if (
    Number.isInteger(firstValue) &&
    Number.isInteger(secondValue) &&
    firstValue > 0 &&
    secondValue > 0
  ) {
    for (let i = firstValue; i <= secondValue; i++) {
      finalSum += i;
    }

    return finalSum;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
