const split = (str, delim) => {
  // write code for strings.split
  let heresTheSplit = str.split(delim);

  return heresTheSplit;
};

const pairs = (str) => {
  // write code for strings.pairs
  let arr = [];

  for (let i = 0; i < str.length; i += 2) {
    arr.push(str[i] + str[i + 1]);
  }
  return arr;
};

const reverse = (str) => {
  // write code for strings.reverse
  let splitString = str.split("");

  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
};

module.exports = {
  split,
  pairs,
  reverse,
};
