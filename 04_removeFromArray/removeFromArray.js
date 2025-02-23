const removeFromArray = function (givenArray, ...valuesToBeRemoved) {
  return givenArray.filter((i) => !valuesToBeRemoved.includes(i));
};

// Do not edit below this line
module.exports = removeFromArray;
