const fibonacci = function (num) {
  const convertedNum = Number(num);
  if (convertedNum < 0) {
    return "OOPS";
  } else if (convertedNum === 0) {
    return 0;
  }

  let firstPrev = 1;
  let secondPrev = 0;

  for (let i = 2; i <= convertedNum; i++) {
    let current = firstPrev + secondPrev;
    secondPrev = firstPrev;
    firstPrev = current;
  }

  return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
