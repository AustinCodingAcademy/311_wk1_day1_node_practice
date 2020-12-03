const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim);
}

const pairs = (str) => {
  // write code for strings.pairs
  let u = str.match(/(..?)/g)
  return u
}

const reverse = (str) => {
  // write code for strings.reverse
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray
}

module.exports = {
  split,
  pairs,
  reverse
}