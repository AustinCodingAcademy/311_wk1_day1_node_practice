const split = (str, delim) => {
  return str.split(delim);
}

const pairs = (str) => {
  let arrayOfPairs = [];
  for (let i = 0; i < str.length; i += 2) {
    let firstChar = str[i];
    let secondChar;
    if (str[i + 1]) {
      secondChar = str[i + 1];
    }
    else {
      secondChar = "";
    }
    arrayOfPairs.push(firstChar + secondChar);
  }
  return arrayOfPairs;
}

const reverse = (str) => {
  return str.split('').reverse().join("");
}

module.exports = {
  split,
  pairs,
  reverse
}