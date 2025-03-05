const getTheTitles = function (bookArg) {
  let bookArray = [];

  bookArg.forEach((element) => {
    bookArray.push(element.title);
  });

  return bookArray;
};

// Do not edit below this line
module.exports = getTheTitles;
