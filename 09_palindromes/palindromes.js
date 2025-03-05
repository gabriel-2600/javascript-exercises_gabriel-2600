const palindromes = function (word) {
  const punctuation = /[\.,?!]/g;
  const noPunctuation = word.replace(punctuation, "");
  const noSpaceAndLowerCase = noPunctuation.split(" ").join("").toLowerCase();

  const charArray = noSpaceAndLowerCase.split("");
  const reversedCharArray = charArray.toReversed();

  for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] !== reversedCharArray[i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
